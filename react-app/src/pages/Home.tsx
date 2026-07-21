import Counter from '../components/Counter'

// '/' 경로에서 보이는 페이지.
function Home() {
  return (
    <section className="flex flex-col items-center gap-6 py-12 text-center">
      <h1 className="text-4xl font-bold tracking-tight">
        React + Tailwind 준비 완료 🎉
      </h1>
      <p className="text-gray-500 dark:text-gray-400">
        위 메뉴의{' '}
        <code className="rounded bg-gray-200 px-1.5 py-0.5 dark:bg-gray-800">
          탭
        </code>{' '}
        을 눌러 라우팅을 확인해 보세요.
      </p>
      <Counter />
    </section>
  )
}

export default Home
