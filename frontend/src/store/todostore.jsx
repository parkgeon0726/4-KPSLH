import {create} from 'zustand'
import { useState } from 'react'

export const useTodoStore = create(set => ({
  todos: [],               // 일정 목록
  toggleDone: id =>
    set(state => ({
      todos: state.todos.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    })),
  addTodo: todo =>
    set(state => ({ todos: [...state.todos, todo] }))
}))