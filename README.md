# React Beginner

퍼블리셔의 UI 구현 경험을 기반으로, **React를 사용하는 프론트엔드 개발자**로 성장하기 위한 학습 저장소입니다.

단순히 강의를 따라 작성하는 데서 끝내지 않고, 각 단계마다 직접 구현하고 테스트하며 결과를 기록합니다.

## 학습 목표

- JavaScript와 TypeScript로 동작을 설명할 수 있다.
- React의 렌더링과 상태 흐름을 이해하고 컴포넌트를 설계할 수 있다.
- API의 로딩·성공·빈 상태·실패를 구분해 처리할 수 있다.
- 접근성, 테스트, 성능을 기능 개발의 일부로 다룬다.
- 구현 이유와 검증 방법을 README와 커밋으로 설명할 수 있다.

## 학습 원칙

1. 예제를 복사하기 전에 예상 동작을 먼저 적는다.
2. 한 실습에서는 한 가지 개념만 검증한다.
3. 성공 화면뿐 아니라 빈 상태와 오류도 구현한다.
4. 새 동작은 가능한 한 테스트와 함께 작성한다.
5. 완료한 실습에는 배운 점과 개선할 점을 기록한다.

## Roadmap

### 1. JavaScript 실행 원리

- [ ] 실행 컨텍스트, 스코프, 클로저
- [ ] Event Loop, Task Queue, Microtask Queue
- [ ] Promise와 `async/await`
- [ ] 불변성과 참조 타입
- [ ] ESM과 CommonJS의 차이

**완료 결과:** debounce, throttle, Promise 실행 순서 예제를 직접 구현하고 테스트한다.

### 2. TypeScript 기본기

- [ ] `strict` 모드와 타입 추론
- [ ] union, narrowing, generic
- [ ] `unknown`과 `any`의 차이
- [ ] utility type
- [ ] API 응답의 런타임 검증

**완료 결과:** 외부 데이터를 `unknown`으로 받고 안전하게 검증하는 함수를 작성한다.

### 3. React 컴포넌트

- [ ] 컴포넌트와 JSX
- [ ] Props와 단방향 데이터 흐름
- [ ] 조건부 렌더링과 목록 렌더링
- [ ] 컴포넌트 합성과 재사용
- [ ] 안정적인 `key` 사용

**완료 결과:** 재사용 가능한 사용자 목록과 상태별 UI를 구현한다.

### 4. State와 이벤트

- [ ] `useState`와 이벤트 처리
- [ ] 상태 끌어올리기
- [ ] controlled component
- [ ] `useReducer`가 필요한 시점
- [ ] 상태 중복과 파생 상태 제거

**완료 결과:** 추가, 수정, 삭제, 필터링이 가능한 할 일 관리 기능을 구현한다.

### 5. Effect와 생명주기

- [ ] 렌더링과 Effect의 차이
- [ ] dependency 관리
- [ ] cleanup과 메모리 누수 방지
- [ ] Effect가 필요 없는 경우
- [ ] Custom Hook으로 동작 분리

**완료 결과:** 검색어 변경과 요청 취소를 지원하는 검색 기능을 구현한다.

### 6. API와 서버 상태

- [ ] REST API와 HTTP 상태 코드
- [ ] loading, success, empty, error 상태
- [ ] 재시도와 오류 복구
- [ ] TanStack Query의 query와 mutation
- [ ] optimistic update

**완료 결과:** 사용자 검색과 즐겨찾기 기능을 API 기반으로 구현한다.

### 7. Form과 접근성

- [ ] semantic HTML
- [ ] label, 설명, 오류 메시지 연결
- [ ] 키보드 탐색과 focus 관리
- [ ] Dialog와 Form 접근성
- [ ] 스크린 리더 기준 점검

**완료 결과:** 키보드만으로 완료할 수 있는 회원가입 Form을 구현한다.

### 8. 테스트

- [ ] Vitest 단위 테스트
- [ ] Testing Library 컴포넌트 테스트
- [ ] 사용자 행동 중심 테스트
- [ ] API mocking과 실패 시나리오
- [ ] Playwright E2E 테스트

**완료 결과:** 핵심 사용자 흐름을 테스트하고 실패 원인을 설명할 수 있게 한다.

### 9. 성능과 품질

- [ ] React DevTools Profiler
- [ ] 불필요한 렌더링 측정
- [ ] code splitting과 lazy loading
- [ ] 이미지와 폰트 최적화
- [ ] LCP, INP, CLS 측정

**완료 결과:** 개선 전후 수치를 기록한 성능 보고서를 작성한다.

### 10. 종합 프로젝트

- [ ] 요구사항과 사용자 시나리오 작성
- [ ] 컴포넌트와 상태 구조 설계
- [ ] 인증과 권한 처리
- [ ] 테스트와 CI 구성
- [ ] 배포와 오류 모니터링

**완료 결과:** 요구사항, 이슈, PR, 테스트, 배포 과정이 남아 있는 실서비스형 React 프로젝트를 완성한다.

## 진행 기록

| 단계 | 주제 | 상태 | 회고 |
| --- | --- | --- | --- |
| 1 | JavaScript 실행 원리 | 예정 | - |
| 2 | TypeScript 기본기 | 예정 | - |
| 3 | React 컴포넌트 | 예정 | - |
| 4 | State와 이벤트 | 예정 | - |
| 5 | Effect와 생명주기 | 예정 | - |
| 6 | API와 서버 상태 | 예정 | - |
| 7 | Form과 접근성 | 예정 | - |
| 8 | 테스트 | 예정 | - |
| 9 | 성능과 품질 | 예정 | - |
| 10 | 종합 프로젝트 | 예정 | - |

## 참고 자료

- [MDN JavaScript Guide](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)
- [React Learn](https://react.dev/learn)
- [Testing Library](https://testing-library.com/docs/)
- [web.dev Performance](https://web.dev/learn/performance/)

## Commit Convention

```text
docs: 학습 계획과 회고 정리
feat: 새로운 실습 기능 추가
test: 테스트 추가 또는 수정
refactor: 동작 변경 없는 구조 개선
fix: 잘못된 동작 수정
```
