import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors appointment",
      day: "Feb 5th at 2:30PM",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at school",
      day: "Feb 6th at 1:30PM",
      reminder: true,
    },
    {
      id: 3,
      text: "Food shopping",
      day: "Feb 7th at 2:30PM",
      reminder: false,
    },
    {
      id: 4,
      text: "Assignment deadline",
      day: "Feb 7th at 10:30AM",
      reminder: false,
    },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id != id));
  };

  return (
    <div
      className="App"
      style={{
        border: "2px black solid",
        margin: "25px 15px",
        borderRadius: "5px",
        padding: "20px",
      }}
    >
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        "No tasks to show"
      )}
    </div>
  );
}

export default App;
