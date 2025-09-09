import create from "zustand";

let idCounter = 1;
const useTodoStore = create((set) => ({
  todos: [],
  addTodo: ({ text, date }) =>
    set((state) => ({
      todos: [...state.todos, { id: idCounter++, text, date, done: false }],
    })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    })),
}));

export default useTodoStore;
