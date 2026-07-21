import type { RouteObject } from 'react-router'
import Home from './pages/Home'
import TabsPage from './pages/TabsPage'

// 라우트를 이렇게 배열(데이터)로 따로 관리하면,
// 페이지가 늘어나도 이 파일만 수정하면 됩니다.
export const routes: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/tabs', element: <TabsPage /> },
]
