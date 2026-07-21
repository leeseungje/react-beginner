import { NavLink, useRoutes } from 'react-router'
import { routes } from './routes'

// NavLink는 현재 경로와 일치하면 isActive를 true로 넘겨줍니다.
const navClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-md px-3 py-1.5 text-sm font-medium transition ${
    isActive
      ? 'bg-indigo-600 text-white'
      : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
  }`

// App은 레이아웃과 내비게이션만 담당합니다.
// 실제 라우트 정의는 routes.tsx에 분리되어 있고, useRoutes가 현재 경로에 맞는 페이지를 그려줍니다.
function App() {
  const element = useRoutes(routes)

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <header className="border-b border-gray-200 dark:border-gray-800">
        <nav className="mx-auto flex max-w-3xl gap-2 p-4">
          <NavLink to="/" className={navClass}>
            홈
          </NavLink>
          <NavLink to="/tabs" className={navClass}>
            탭
          </NavLink>
        </nav>
      </header>

      <main className="mx-auto max-w-3xl p-6">{element}</main>
    </div>
  )
}

export default App
