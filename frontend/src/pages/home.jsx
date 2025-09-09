import React from "react";
import { useState } from "react";
import TodoItem from "../TodoItem";
import useTodoStore from "../store/todostore";

export default function Home() {
  const { todos, addTodo, toggleTodo } = useTodoStore();
  const [newText, setNewText] = useState("");

  const handleAdd = () => {
    if (!newText.trim()) return;
    addTodo({ text: newText, date: new Date() });
    setNewText("");
  };

  return (
    <div className="home-page space-y-6">
      {/* 할일 추가 버튼/모달 트리거 */}
      <button onClick={handleAdd} className="btn-add px-4 py-2 bg-[#ece4eb] rounded">
        할일추가
      </button>

      {/* 오늘 투두리스트 */}
      <div className="todo-list space-y-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} />
        ))}
      </div>
    </div>
  );
}
