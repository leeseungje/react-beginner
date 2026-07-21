import { useState } from 'react'
import Button from './Button'

// 자신의 상태(count)를 가진 기능 컴포넌트.
// 상태는 그 상태를 사용하는 컴포넌트 가까이에 두는 것이 좋습니다.
function Counter() {
  const [count, setCount] = useState(0)

  return (
    <Button onClick={() => setCount((c) => c + 1)}>count is {count}</Button>
  )
}

export default Counter
