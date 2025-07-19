import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { useToast } from "../ToastContext";
import { supabase } from "../supabaseClient";

export default function Tasks() {
  const [userXP, setUserXP] = useState(0);
  const [userDbId, setUserDbId] = useState(null);
  const [questions, setQuestions] = useState({
    earth: [],
    moon: [],
    space: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState({});
  const { user } = useAuth();
  const { toast } = useToast();

  // Fetch tasks from database
  useEffect(() => {
    const fetchTasks = async () => {
      if (!user || !userDbId) return;

      try {
        setLoading(true);

        // First get all tasks
        const { data: allTasks, error: tasksError } = await supabase
          .from("tasks")
          .select("*")
          .order("id");

        if (tasksError) throw tasksError;

        // Then get completed tasks for this user
        const { data: completedTasks, error: completedError } = await supabase
          .from("finishedtasks")
          .select("taskId")
          .eq("userId", userDbId);

        if (completedError) throw completedError;

        // Create a set of completed task IDs for efficient lookup
        const completedTaskIds = new Set(
          completedTasks.map((task) => task.taskId)
        );

        // Filter out completed tasks
        const availableTasks = allTasks.filter(
          (task) => !completedTaskIds.has(task.id)
        );

        // Group tasks by type
        const groupedTasks = {
          earth: [],
          moon: [],
          space: [],
        };

        availableTasks.forEach((task) => {
          // Get the correct answer from the answerr column
          let correctAnswer = "A"; // Default
          if (task.answerr) {
            const correctValue = task.answerr.toLowerCase();
            if (correctValue === "answera") correctAnswer = "A";
            else if (correctValue === "answerb") correctAnswer = "B";
            else if (correctValue === "answerc") correctAnswer = "C";
          }

          const formattedTask = {
            id: task.id,
            name: task.name,
            question: task.description,
            options: [
              `A) ${task.answera}`,
              `B) ${task.answerb}`,
              `C) ${task.answerc}`,
            ],
            correct: correctAnswer,
            xp: task.xp,
          };

          if (task.type === "earth") {
            groupedTasks.earth.push(formattedTask);
          } else if (task.type === "moon") {
            groupedTasks.moon.push(formattedTask);
          } else if (task.type === "space") {
            groupedTasks.space.push(formattedTask);
          }
        });

        setQuestions(groupedTasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
        setError("Failed to load tasks");
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [user, userDbId]);

  useEffect(() => {
    const fetchUserXP = async () => {
      if (!user) return;

      try {
        const { data, error } = await supabase
          .from("users")
          .select("id, xp")
          .eq("email", user.email)
          .single();

        if (error) throw error;
        setUserXP(data?.xp || 0);
        setUserDbId(data?.id);
      } catch (error) {
        console.error("Error fetching user XP:", error);
      }
    };

    fetchUserXP();
  }, [user]);

  const updateUserXP = async (xpToAdd) => {
    if (!user || !userDbId) return;

    try {
      const newXP = userXP + xpToAdd;
      const { error } = await supabase
        .from("users")
        .update({ xp: newXP })
        .eq("id", userDbId);

      if (error) throw error;
      setUserXP(newXP);
    } catch (error) {
      console.error("Error updating user XP:", error);
    }
  };

  const markTaskAsCompleted = async (taskId) => {
    if (!user || !userDbId) return;

    try {
      const { error } = await supabase.from("finishedtasks").insert([
        {
          taskId: taskId,
          userId: userDbId,
        },
      ]);

      if (error) throw error;
    } catch (error) {
      console.error("Error marking task as completed:", error);
    }
  };

  const handleAnswerSelect = (questionId, answer) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleSubmitAnswer = async (question) => {
    const selectedAnswer = selectedAnswers[question.id];
    if (!selectedAnswer) return;

    const isCorrect = selectedAnswer === question.correct;

    if (isCorrect) {
      // Show correct answer toast
      toast.correctAnswer();

      // Show XP gain toast
      toast.xp(question.xp);

      await updateUserXP(question.xp);
      await markTaskAsCompleted(question.id);
    } else {
      // Show incorrect answer toast
      toast.wrongAnswer();
    }

    setShowResults((prev) => ({
      ...prev,
      [question.id]: {
        isCorrect,
        show: true,
      },
    }));

    setTimeout(() => {
      if (isCorrect) {
        // Refresh tasks to hide completed ones
        const fetchTasks = async () => {
          if (!user || !userDbId) return;

          try {
            const { data: allTasks, error: tasksError } = await supabase
              .from("tasks")
              .select("*")
              .order("id");

            if (tasksError) throw tasksError;

            const { data: completedTasks, error: completedError } =
              await supabase
                .from("finishedtasks")
                .select("taskId")
                .eq("userId", userDbId);

            if (completedError) throw completedError;

            const completedTaskIds = new Set(
              completedTasks.map((task) => task.taskId)
            );

            const availableTasks = allTasks.filter(
              (task) => !completedTaskIds.has(task.id)
            );

            const groupedTasks = {
              earth: [],
              moon: [],
              space: [],
            };

            availableTasks.forEach((task) => {
              let correctAnswer = "A";
              if (task.answerr) {
                const correctValue = task.answerr.toLowerCase();
                if (correctValue === "answera") correctAnswer = "A";
                else if (correctValue === "answerb") correctAnswer = "B";
                else if (correctValue === "answerc") correctAnswer = "C";
              }

              const formattedTask = {
                id: task.id,
                name: task.name,
                question: task.description,
                options: [
                  `A) ${task.answera}`,
                  `B) ${task.answerb}`,
                  `C) ${task.answerc}`,
                ],
                correct: correctAnswer,
                xp: task.xp,
              };

              if (task.type === "earth") {
                groupedTasks.earth.push(formattedTask);
              } else if (task.type === "moon") {
                groupedTasks.moon.push(formattedTask);
              } else if (task.type === "space") {
                groupedTasks.space.push(formattedTask);
              }
            });

            setQuestions(groupedTasks);
          } catch (error) {
            console.error("Error fetching tasks:", error);
          }
        };

        fetchTasks();
      } else {
        // Hide result after some time for wrong answers
        setTimeout(() => {
          setShowResults((prev) => ({
            ...prev,
            [question.id]: { ...prev[question.id], show: false },
          }));
        }, 2000);
      }
    }, 2000);
  };

  const getCategoryInfo = (category) => {
    switch (category) {
      case "earth":
        return {
          name: "Earth Tasks",
          emoji: "🌍",
          color: "from-green-600 to-green-800",
          description: "Easy questions perfect for beginners",
        };
      case "moon":
        return {
          name: "Moon Tasks",
          emoji: "🌙",
          color: "from-blue-600 to-blue-800",
          description: "Medium questions for growing learners",
        };
      case "space":
        return {
          name: "Space Tasks",
          emoji: "🚀",
          color: "from-purple-600 to-purple-800",
          description: "Hard questions for expert adventurers",
        };
      default:
        return {
          name: "Unknown Tasks",
          emoji: "❓",
          color: "from-gray-600 to-gray-800",
          description: "Unknown difficulty",
        };
    }
  };

  const renderCategory = (category, categoryQuestions) => {
    const categoryInfo = getCategoryInfo(category);

    return (
      <div
        key={category}
        className="bg-gradient-to-br from-zinc-900/90 to-zinc-800/80 rounded-3xl shadow-2xl border border-zinc-700 backdrop-blur-md p-8 mb-8"
      >
        <div className="text-center mb-6">
          <div className="flex items-center justify-center mb-4">
            <div className="text-4xl mr-3">{categoryInfo.emoji}</div>
            <h3 className="text-3xl font-bold text-white">
              {categoryInfo.name}
            </h3>
          </div>
          <p className="text-zinc-300 mb-4">{categoryInfo.description}</p>
          <p className="text-zinc-400">
            {categoryQuestions.length} question
            {categoryQuestions.length !== 1 ? "s" : ""} available
          </p>
        </div>

        {categoryQuestions.length > 0 ? (
          <div className="space-y-6">
            {categoryQuestions.map((question) => {
              const questionResult = showResults[question.id];
              const selectedAnswer = selectedAnswers[question.id];

              return (
                <div
                  key={question.id}
                  className="bg-zinc-800/60 rounded-2xl p-6 border border-zinc-700"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-white font-semibold text-lg flex-1">
                      {question.name}
                    </h4>
                    <span className="text-zinc-400 text-sm ml-4">
                      {question.xp} XP
                    </span>
                  </div>

                  <p className="text-zinc-300 text-base mb-6">
                    {question.question}
                  </p>

                  {!questionResult?.show ? (
                    <div>
                      <div className="space-y-3 mb-6">
                        {question.options.map((option, index) => (
                          <button
                            key={index}
                            onClick={() =>
                              handleAnswerSelect(
                                question.id,
                                option.split(")")[0]
                              )
                            }
                            className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                              selectedAnswer === option.split(")")[0]
                                ? "border-indigo-400 bg-indigo-900/40"
                                : "border-zinc-700 bg-zinc-800/60 hover:border-zinc-600"
                            }`}
                          >
                            <span className="text-white font-medium">
                              {option}
                            </span>
                          </button>
                        ))}
                      </div>

                      <div className="text-center">
                        <button
                          onClick={() => handleSubmitAnswer(question)}
                          disabled={!selectedAnswer}
                          className="px-6 py-3 bg-gradient-to-r from-indigo-700 to-indigo-900 hover:from-indigo-600 hover:to-indigo-800 text-white font-bold rounded-full shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Submit Answer
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-4">
                      <div className="text-4xl mb-3">
                        {questionResult.isCorrect ? "✅" : "❌"}
                      </div>
                      <h5 className="text-xl font-bold text-white mb-2">
                        {questionResult.isCorrect ? "Correct!" : "Wrong!"}
                      </h5>
                      <p className="text-zinc-300">
                        {questionResult.isCorrect
                          ? `You earned ${question.xp} XP!`
                          : `The correct answer was ${question.correct}`}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center text-zinc-400 py-8">
            <p>No questions available for this category yet.</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-black via-zinc-900 to-zinc-800 overflow-hidden relative">
      {/* Decorative Stars */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-10"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: "blur(0.5px)",
              animation: `twinkle 2s infinite ${Math.random()}s alternate`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="w-full px-10 py-6 z-20 relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-700 text-zinc-200 hover:bg-zinc-800 hover:text-white transition font-semibold shadow backdrop-blur"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </Link>
            <h1 className="text-3xl font-extrabold text-white tracking-wide">
              Cosmic Tasks
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-zinc-800 px-4 py-2 rounded-full border border-zinc-700">
              <span className="text-zinc-300 text-sm">Your XP: </span>
              <span className="text-white font-bold">{userXP}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-10 py-8 z-20">
        {loading ? (
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-400 mx-auto mb-4"></div>
            <p className="text-white text-xl">Loading cosmic tasks...</p>
          </div>
        ) : error ? (
          <div className="text-center">
            <p className="text-red-400 text-xl mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-indigo-700 hover:bg-indigo-600 text-white font-semibold rounded-full transition"
            >
              Try Again
            </button>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white mb-4">
                Choose Your Adventure
              </h2>
              <p className="text-zinc-300 text-lg">
                Explore different categories of cosmic tasks and earn XP!
              </p>
            </div>

            {/* Categories */}
            {Object.entries(questions).map(([category, categoryQuestions]) =>
              renderCategory(category, categoryQuestions)
            )}
          </div>
        )}
      </div>

      <style>
        {`
          @keyframes twinkle {
            0% { opacity: 0.1; }
            100% { opacity: 0.4; }
          }
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}
      </style>
    </div>
  );
}
