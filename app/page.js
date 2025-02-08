"use client"
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(true);

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const toggleFinished = () => {
    setShowFinished(prevState => !prevState);
  };

  const handleEdit = (e, id) => {
    let t = todos.filter((i) => i.id === id);
    setTodo(t[0].text);
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
  };

  const handleDelete = (e, id) => {
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
  };

  const handleAdd = () => {
    if (todo.trim() !== "") {
      setTodos([...todos, { id: uuidv4(), text: todo, isCompleted: false }]);
      setTodo(""); // Clear input field
    } else {
      alert("Please enter a todo item.");
    }
  };

  const handleChange = (e) => {
    setTodo(e.target.value); // Set todo as a string
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    });
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-850 to-gray-900 relative overflow-hidden pt-10">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgbnVtT2N0YXZlcz0iMyIgYmFzZUZyZXF1ZW5jeT0iLjg1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIwLjA2Ii8+PC9zdmc+')] opacity-10"></div>
      
      <div className="relative z-10 max-w-2xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-16 text-center space-y-3">
          <h1 className="text-5xl font-bold inline-block bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
            Task Flow
          </h1>
          <p className="text-gray-400 text-lg font-light">Your productivity companion</p>
        </div>

        {/* Add Task Card */}
        <div className="group relative mb-12 transition-all duration-300 hover:transform hover:-translate-y-1">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-2xl filter blur-xl opacity-0 group-hover:opacity-40 transition-opacity"></div>
          <div className="relative bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-gray-700/50">
            <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
              <input
                onChange={handleChange}
                value={todo}
                type="text"
                className="flex-1 px-6 py-4 bg-gray-700/40 rounded-xl border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-gray-400 text-lg transition-all"
                placeholder="What needs to be done?"
              />
              <button
                onClick={handleAdd}
                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-semibold rounded-xl transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-teal-500/10 hover:shadow-teal-500/20"
              >
                <span className="bg-gradient-to-r from-white/90 to-white bg-clip-text text-transparent">
                  Add Task
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Progress & Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-3">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                onChange={toggleFinished}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-700 rounded-full peer-checked:bg-cyan-500/80 peer-focus:ring-2 peer-focus:ring-cyan-500/50 transition-colors">
                <div className="absolute top-[2px] left-[2px] w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
              </div>
              <span className="ml-3 text-gray-300 font-medium">Show Completed</span>
            </label>
          </div>
          <div className="text-sm text-cyan-400 font-medium">
            {todos.filter(todo => todo.isCompleted).length} of {todos.length} tasks done
          </div>
        </div>

        {/* Todo List */}
        <div className="space-y-4">
          {todos.length === 0 ? (
            <div className="py-16 text-center">
              <div className="inline-block mb-6 opacity-60">
                <svg className="w-24 h-24 text-cyan-500/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
              </div>
              <p className="text-gray-500 text-lg">No tasks found. Time to relax! 🌴</p>
            </div>
          ) : (
            todos.map((item) => (
              (showFinished || !item.isCompleted) && (
                <div
                  key={item.id}
                  className="group relative bg-gray-800/80 backdrop-blur-lg rounded-xl p-5 transition-all border border-gray-700/50 hover:border-cyan-500/30 hover:bg-gray-700/60 shadow-lg hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 flex-1 min-w-0">
                      <label className="relative flex items-center space-x-3 cursor-pointer">
                        <input
                          name={item.id}
                          onChange={handleCheckbox}
                          type="checkbox"
                          checked={item.isCompleted}
                          className="absolute opacity-0 w-0 h-0"
                        />
                        <div className="w-6 h-6 flex items-center justify-center border-2 border-gray-500 rounded-lg transition-all group-hover:border-cyan-400 peer-checked:border-cyan-500 peer-checked:bg-cyan-500">
                          <svg 
                            className="w-4 h-4 text-white opacity-0 transition-opacity peer-checked:opacity-100" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                      </label>
                      <span
                        className={`text-xl truncate transition-all ${
                          item.isCompleted
                            ? "line-through text-gray-500/60"
                            : "text-gray-200"
                        }`}
                      >
                        {item.text}
                      </span>
                    </div>
                    
                    <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity ml-4">
                      <button
                        onClick={(e) => handleEdit(e, item.id)}
                        className="p-2 bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-400 rounded-lg transition-colors"
                        title="Edit"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                        </svg>
                      </button>
                      <button
                        onClick={(e) => handleDelete(e, item.id)}
                        className="p-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              )
            ))
          )}
        </div>
      </div>
    </div>
  </>
  );
}

export default App;
