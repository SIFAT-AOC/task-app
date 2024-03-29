import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from './TaskList';
export default function TaskBoard() {
  const defaultTasks = [{
    'id': crypto.randomUUID(),
    'title':'Learn React',
    'description':'Learn React and build a react app',
    "tags": ["react", "javascript", "webdev"],
    "priority": "high",
    "isFavorite": true,
  }
  ];
  const [tasks, setTasks] = useState(defaultTasks);
  console.log(tasks)
  return (
    <>
      <section className="mb-20" id="tasks">
        <div className="container">
          <div className="p-2 flex justify-end">
            <SearchTask />
          </div>
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
           <TaskActions />
           <TaskList tasks = {tasks}/>
          </div>
        </div>
      </section>
    </>
  );
}
