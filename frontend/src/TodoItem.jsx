import React from "react";

export default function TodoItem({ todo, onToggle }) {
  return (
    <div className="todo-item flex items-center justify-between p-4 bg-[#f7f2fa] rounded shadow">
      <label className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
          className="w-5 h-5"
        />
        <span className={todo.done ? "line-through text-gray-400" : ""}>
          {todo.text}
        </span>
      </label>
      <span className="text-sm text-gray-500">{todo.date.toLocaleTimeString()}</span>
    </div>
  );
}

