import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [task, setTask] = useState("");
  function handleChange(e) {
    setTask(e.target.value);
  }

  function handleSave() {
    onAdd(task);
    setTask("");
  }
  return (
    <div className="flex  items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        value={task}
        onChange={handleChange}
      />
      <button
        className="text-stone-700 hover:text-stone-900"
        onClick={handleSave}
      >
        Add Task
      </button>
    </div>
  );
}
