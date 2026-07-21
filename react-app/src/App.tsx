import { NavLink, Route, Routes } from 'react-router'
import Home from './pages/Home'
import TabsPage from './pages/TabsPage'

// NavLink는 현재 경로와 일치하면 isActive를 true로 넘겨줍니다.
const navClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-md px-3 py-1.5 text-sm font-medium transition ${
    isActive
      ? 'bg-indigo-600 text-white'
      : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
  }`

// App은 전체 레이아웃과 라우팅(어떤 경로에 어떤 페이지를 보여줄지)만 담당합니다.
function App() {
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

      <main className="mx-auto max-w-3xl p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tabs" element={<TabsPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
