# React Beginner

> **현재 학습 단계: 초급(Beginner)**
>
> 현재는 JavaScript·TypeScript 기초와 React의 컴포넌트·Props·State·Effect를 익히는 단계입니다.

퍼블리셔의 UI 구현 경험을 기반으로, **React 초급부터 차근차근 프론트엔드 개발자로 성장하기 위한 학습 저장소**입니다.

단순히 강의를 따라 작성하는 데서 끝내지 않고, 각 단계마다 직접 구현하고 테스트하며 결과를 기록합니다.

## 현재 초급 과정의 범위

- 현재 집중할 범위는 Roadmap **1~5단계**입니다.
- 6~10단계는 초급 과정을 마친 뒤 진행할 다음 과정의 미리보기입니다.
- 초급 단계에서는 복잡한 라이브러리보다 JavaScript와 React의 기본 동작을 이해하는 데 집중합니다.

## React를 시작하기 전에 알아야 할 것

React는 **JavaScript 위에서 실행되는 UI 라이브러리**입니다. TypeScript는 JavaScript에 타입 검사를 추가하고, 실행 전 JavaScript로 변환됩니다. 따라서 React 코드를 이해하려면 JavaScript의 동작을 먼저 알아야 하고, TypeScript로 작성된 React 프로젝트에서는 기본적인 타입 표현도 읽고 작성할 수 있어야 합니다.

두 언어를 완벽하게 공부한 뒤 React를 시작할 필요는 없습니다. 아래 항목을 보고 **작은 기능을 직접 작성할 수 있는 정도**면 React 초급을 시작하고, 부족한 부분은 React와 함께 학습해도 됩니다.

### 필요한 JavaScript 수준

- [ ] `const`와 `let`, 원시 값과 참조 값의 차이를 설명할 수 있다.
- [ ] 함수 선언, 화살표 함수, callback을 읽고 작성할 수 있다.
- [ ] 객체와 배열에서 구조 분해 할당과 spread 문법을 사용할 수 있다.
- [ ] `map`, `filter`, `find`를 사용해 목록 데이터를 변환할 수 있다.
- [ ] 조건문, 삼항 연산자, `&&`, `??`의 차이를 알고 사용할 수 있다.
- [ ] `import`와 `export`로 코드를 파일 단위로 나눌 수 있다.
- [ ] Promise와 `async/await`로 비동기 결과를 처리할 수 있다.
- [ ] 이벤트가 발생했을 때 함수가 실행되고 값이 변경되는 흐름을 이해한다.

### 필요한 TypeScript 수준

- [ ] `string`, `number`, `boolean`, 배열과 객체 타입을 작성할 수 있다.
- [ ] `type` 또는 `interface`로 데이터 형태를 표현할 수 있다.
- [ ] 선택 속성(`?`)과 union 타입을 읽고 작성할 수 있다.
- [ ] 타입 추론과 명시적 타입 선언의 차이를 이해한다.
- [ ] `any` 대신 `unknown`을 사용해야 하는 이유를 알고 있다.
- [ ] React 컴포넌트의 Props와 이벤트 타입을 작성할 수 있다.
- [ ] 타입 오류 메시지를 읽고 문제가 발생한 위치를 찾을 수 있다.

### 시작 가능 여부 확인

다음 기능을 검색 없이 완벽하게 만들 필요는 없습니다. 문서를 참고하면서 아래 흐름을 구현할 수 있다면 React 학습을 시작하기에 충분합니다.

1. 문자열을 입력받는다.
2. 버튼을 누르면 입력값을 배열에 추가한다.
3. 배열을 순회해 목록으로 출력한다.
4. 특정 항목을 삭제한다.
5. 입력값과 목록 데이터에 TypeScript 타입을 지정한다.

이 과정이 어렵다면 React Hook을 먼저 외우기보다 JavaScript의 함수, 배열, 객체와 TypeScript의 기본 타입부터 복습합니다.

### 초급 과정 완료 기준

- Props와 State의 차이를 설명할 수 있다.
- 사용자 입력에 따라 화면이 변경되는 컴포넌트를 만들 수 있다.
- 목록의 추가·수정·삭제·필터링을 구현할 수 있다.
- Effect가 필요한 경우와 필요하지 않은 경우를 구분할 수 있다.
- TypeScript로 Props와 State의 타입을 안전하게 작성할 수 있다.

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

### 초급 과정 — 현재 진행 범위

#### 1. JavaScript 실행 원리

- [ ] 실행 컨텍스트, 스코프, 클로저
- [ ] Event Loop, Task Queue, Microtask Queue
- [ ] Promise와 `async/await`
- [ ] 불변성과 참조 타입
- [ ] ESM과 CommonJS의 차이

**완료 결과:** debounce, throttle, Promise 실행 순서 예제를 직접 구현하고 테스트한다.

#### 2. TypeScript 기본기

- [ ] `strict` 모드와 타입 추론
- [ ] union, narrowing, generic
- [ ] `unknown`과 `any`의 차이
- [ ] utility type
- [ ] API 응답의 런타임 검증

**완료 결과:** 외부 데이터를 `unknown`으로 받고 안전하게 검증하는 함수를 작성한다.

#### 3. React 컴포넌트

- [ ] 컴포넌트와 JSX
- [ ] Props와 단방향 데이터 흐름
- [ ] 조건부 렌더링과 목록 렌더링
- [ ] 컴포넌트 합성과 재사용
- [ ] 안정적인 `key` 사용

**완료 결과:** 재사용 가능한 사용자 목록과 상태별 UI를 구현한다.

#### 4. State와 이벤트

- [ ] `useState`와 이벤트 처리
- [ ] 상태 끌어올리기
- [ ] controlled component
- [ ] `useReducer`가 필요한 시점
- [ ] 상태 중복과 파생 상태 제거

**완료 결과:** 추가, 수정, 삭제, 필터링이 가능한 할 일 관리 기능을 구현한다.

#### 5. Effect와 생명주기

- [ ] 렌더링과 Effect의 차이
- [ ] dependency 관리
- [ ] cleanup과 메모리 누수 방지
- [ ] Effect가 필요 없는 경우
- [ ] Custom Hook으로 동작 분리

**완료 결과:** 검색어 변경과 요청 취소를 지원하는 검색 기능을 구현한다.

### 다음 과정 미리보기 — 초급 완료 후 진행

#### 6. API와 서버 상태

- [ ] REST API와 HTTP 상태 코드
- [ ] loading, success, empty, error 상태
- [ ] 재시도와 오류 복구
- [ ] TanStack Query의 query와 mutation
- [ ] optimistic update

**완료 결과:** 사용자 검색과 즐겨찾기 기능을 API 기반으로 구현한다.

#### 7. Form과 접근성

- [ ] semantic HTML
- [ ] label, 설명, 오류 메시지 연결
- [ ] 키보드 탐색과 focus 관리
- [ ] Dialog와 Form 접근성
- [ ] 스크린 리더 기준 점검

**완료 결과:** 키보드만으로 완료할 수 있는 회원가입 Form을 구현한다.

#### 8. 테스트

- [ ] Vitest 단위 테스트
- [ ] Testing Library 컴포넌트 테스트
- [ ] 사용자 행동 중심 테스트
- [ ] API mocking과 실패 시나리오
- [ ] Playwright E2E 테스트

**완료 결과:** 핵심 사용자 흐름을 테스트하고 실패 원인을 설명할 수 있게 한다.

#### 9. 성능과 품질

- [ ] React DevTools Profiler
- [ ] 불필요한 렌더링 측정
- [ ] code splitting과 lazy loading
- [ ] 이미지와 폰트 최적화
- [ ] LCP, INP, CLS 측정

**완료 결과:** 개선 전후 수치를 기록한 성능 보고서를 작성한다.

#### 10. 종합 프로젝트

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
| 6 | API와 서버 상태 | 초급 완료 후 | - |
| 7 | Form과 접근성 | 초급 완료 후 | - |
| 8 | 테스트 | 초급 완료 후 | - |
| 9 | 성능과 품질 | 초급 완료 후 | - |
| 10 | 종합 프로젝트 | 초급 완료 후 | - |

## 참고 자료

### 한국어로 먼저 보기

- [MDN JavaScript 안내서 — 한국어](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide)
- [모던 JavaScript 튜토리얼 — 한국어](https://ko.javascript.info/)
- [React 공식 학습 문서 — 한국어](https://ko.react.dev/learn)
- [TypeScript Handbook — 한국어 번역](https://typescript-kr.github.io/)

TypeScript 한국어 자료는 커뮤니티 번역이므로 최신 문법이나 설정이 다를 수 있습니다. 이해가 되지 않거나 내용이 충돌할 때는 아래 공식 영문 문서를 기준으로 확인합니다.

### 공식 원문과 다음 단계 자료

- [TypeScript 공식 Handbook](https://www.typescriptlang.org/docs/handbook/)
- [React 공식 영문 문서](https://react.dev/learn)
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
