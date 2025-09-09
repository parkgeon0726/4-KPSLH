import { useState } from 'react'
import { useTodoStore } from '../store/todostore'

export default function Home() {
  const { todos, addTodo, toggleDone } = useTodoStore()
  // UI 렌더 및 이벤트 바인딩...
  return (
    <div className="flex h-screen">
      <aside className="w-1/2 p-4 bg-gray-100">
        {/* 달력/할일 생성 영역 */}

      </aside>
      <main className="w-1/2 p-4">
        {/* 할일 체크 영역 */}
      </main>
    </div>
  )
}
export { Home };