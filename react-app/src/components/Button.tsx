import type { ReactNode } from 'react'

// 재사용 가능한 버튼 컴포넌트.
// Props로 내용(children)과 클릭 동작(onClick)을 받습니다.
type ButtonProps = {
  children: ReactNode
  onClick?: () => void
}

function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-lg bg-indigo-600 px-5 py-2.5 font-medium text-white transition hover:bg-indigo-500 active:scale-95"
    >
      {children}
    </button>
  )
}

export default Button
