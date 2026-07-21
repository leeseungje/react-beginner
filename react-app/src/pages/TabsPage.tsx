import { useState } from 'react'

// 탭 데이터를 배열로 관리하면, map으로 반복 렌더링할 수 있습니다.
// 새 탭을 추가하고 싶으면 이 배열에 항목만 추가하면 됩니다.
const tabs = [
  {
    id: 'html',
    label: 'HTML',
    content: '문서의 구조를 담당합니다. 시맨틱 태그로 콘텐츠의 의미를 표현합니다.',
  },
  {
    id: 'css',
    label: 'CSS',
    content: '화면의 스타일과 레이아웃을 담당합니다.',
  },
  {
    id: 'js',
    label: 'JavaScript',
    content: '사용자 동작에 반응하는 상호작용을 담당합니다.',
  },
]

// '/tabs' 경로에서 보이는 페이지. 배열 + map + 상태로 탭을 구현합니다.
function TabsPage() {
  // 현재 선택된 탭의 id를 상태로 관리합니다. (처음에는 첫 번째 탭)
  const [activeId, setActiveId] = useState(tabs[0].id)

  // 선택된 id에 해당하는 탭 데이터를 찾습니다.
  const activeTab = tabs.find((tab) => tab.id === activeId)

  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold">탭 예제</h1>

      {/* 탭 버튼: 배열을 map으로 돌려 렌더링. key에는 고유한 id를 사용합니다. */}
      <div
        role="tablist"
        className="flex gap-2 border-b border-gray-200 dark:border-gray-800"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={tab.id === activeId}
            onClick={() => setActiveId(tab.id)}
            className={`-mb-px border-b-2 px-4 py-2 text-sm font-medium transition ${
              tab.id === activeId
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                : 'border-transparent text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 선택된 탭의 내용만 보여줍니다. */}
      <p className="text-gray-700 dark:text-gray-300">{activeTab?.content}</p>
    </section>
  )
}

export default TabsPage
