import Counter from './components/Counter'

// App은 화면 전체의 레이아웃과 컴포넌트 조합(composition)만 담당합니다.
// 구체적인 동작은 각 컴포넌트가 책임집니다.
function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <h1 className="text-4xl font-bold tracking-tight">
        React + Tailwind 준비 완료 🎉
      </h1>
      <p className="text-gray-500 dark:text-gray-400">
        <code className="rounded bg-gray-200 px-1.5 py-0.5 dark:bg-gray-800">
          src/App.tsx
        </code>{' '}
        를 수정해 보세요.
      </p>
      <Counter />
    </main>
  )
}

export default App
