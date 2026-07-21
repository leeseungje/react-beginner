# react-app — React 실습 환경

현재 React 프로젝트에서 자주 사용하는 구성을 경험하기 위한 실습 환경입니다. React·TypeScript·Vite를 기반으로 pnpm, Tailwind CSS, ESLint를 선택해 구성했습니다.

## 기술 스택

| 항목 | 내용 | 설명 |
| --- | --- | --- |
| UI 라이브러리 | React 19 | 화면을 컴포넌트 단위로 만들고, 데이터가 바뀌면 화면을 자동으로 다시 그려주는 UI 라이브러리 |
| 언어 | TypeScript | JavaScript에 타입을 더한 언어. 실행 전에 오류를 잡아주고 자동완성이 정확해짐 |
| 빌드 도구 | Vite | 개발 서버와 빌드를 담당. 매우 빠른 실행과 즉시 반영(HMR)을 제공 |
| 라우팅 | React Router | URL 경로에 따라 다른 페이지를 보여주는 라이브러리 |
| 스타일 | Tailwind CSS v4 (`@tailwindcss/vite`) | 미리 정의된 클래스를 조합해 스타일을 입히는 CSS 프레임워크 (아래 [사용법](#tailwind-css-사용법) 참고) |
| 린터 | ESLint | 코드의 잠재적 문제와 실수를 자동으로 찾아주는 도구. 사실상 업계 표준 |
| 패키지 매니저 | pnpm | 라이브러리를 설치·관리하는 도구. npm·yarn과 같은 역할이며 더 빠르고 디스크 효율적 |

> React 프로젝트에 반드시 필요한 표준 구성은 아닙니다. 학습과 실습을 위해 선택한 하나의 현대적인 구성 예시입니다.

- **React + TypeScript + Vite** — 현재 많이 사용하는 기본 조합
- **pnpm** — npm·yarn 대신 선택할 수 있는 패키지 매니저
- **Tailwind CSS** — 여러 스타일링 방법 중 하나
- **ESLint** — 가장 널리 쓰이는 표준 린터 (Flat Config 방식)

## 사전 준비

- **Node.js** 22.12 이상 (LTS 권장)
- **pnpm** — 없다면 아래 명령으로 설치합니다.

```bash
npm install -g pnpm
```

## 실행 방법

```bash
# 1. 이 폴더로 이동
cd react-app

# 2. 의존성 설치 (최초 1회, 또는 package.json 변경 시)
pnpm install

# 3. 개발 서버 실행
pnpm dev
```

실행 후 브라우저에서 **http://localhost:3000** 에 접속합니다. (포트는 [vite.config.ts](vite.config.ts)에서 지정)

파일을 저장하면 HMR(Hot Module Replacement)로 화면이 즉시 갱신됩니다.

## 스크립트

| 명령 | 설명 |
| --- | --- |
| `pnpm dev` | 개발 서버 실행 (http://localhost:3000) |
| `pnpm build` | 타입 검사(`tsc -b`) 후 `dist/`에 프로덕션 빌드 생성 |
| `pnpm preview` | 빌드 결과물을 로컬에서 미리보기 |
| `pnpm lint` | ESLint로 코드 검사 |

## 폴더 구조

```text
react-app/
├── public/              # 그대로 배포되는 정적 파일
│   ├── favicon.svg
│   └── icons.svg
├── src/                 # 애플리케이션 소스
│   ├── main.tsx         # 진입점 — BrowserRouter로 App을 감싸 렌더링
│   ├── App.tsx          # 레이아웃 + 내비게이션 + 라우트 정의
│   ├── pages/           # 경로(URL)별 페이지
│   │   ├── Home.tsx     # '/' 경로
│   │   └── TabsPage.tsx # '/tabs' 경로 — 배열+map으로 탭 구현
│   ├── components/      # 재사용·기능 컴포넌트
│   │   ├── Button.tsx   # 재사용 버튼 (Props·children)
│   │   └── Counter.tsx  # 카운트 상태를 가진 기능 컴포넌트
│   ├── index.css        # Tailwind 불러오기(@import "tailwindcss")
│   └── assets/          # 컴포넌트에서 import 하는 이미지 등
├── index.html           # HTML 진입 문서 (#root 포함)
├── vite.config.ts       # Vite 설정 (React·Tailwind 플러그인, 포트)
├── tsconfig*.json        # TypeScript 설정
├── eslint.config.js     # ESLint 규칙 (Flat Config)
└── package.json         # 의존성과 스크립트
```

### 실행 흐름

1. 브라우저가 [index.html](index.html)을 열고 `<div id="root">`을 준비합니다.
2. [src/main.tsx](src/main.tsx)가 `BrowserRouter`로 감싼 [src/App.tsx](src/App.tsx)를 `#root`에 렌더링합니다.
3. [src/App.tsx](src/App.tsx)가 현재 URL에 맞는 `pages/`의 페이지를 보여줍니다.
4. [src/index.css](src/index.css)의 `@import "tailwindcss"`로 Tailwind 유틸리티가 로드됩니다.

### 라우팅과 탭 페이지

- **라우팅**은 [React Router](https://reactrouter.com/)로 처리합니다. `App.tsx`의 `<Routes>`에 경로(`path`)와 페이지(`element`)를 연결하고, `<NavLink>`로 메뉴를 만듭니다.
- **탭 페이지**([src/pages/TabsPage.tsx](src/pages/TabsPage.tsx))는 탭 데이터를 배열로 두고 `map`으로 버튼을 반복 렌더링합니다. 선택된 탭은 `useState`로 관리하며, 새 탭은 배열에 항목만 추가하면 됩니다.

## Tailwind CSS 사용법

### Tailwind이 처음이라면

Tailwind CSS는 **유틸리티 퍼스트(utility-first)** CSS 프레임워크입니다. `.btn` 같은 클래스를 만들어 CSS 파일에 스타일을 작성하는 대신, **CSS 속성 하나에 대응하는 작은 클래스**를 HTML(JSX)에 바로 조합합니다.

퍼블리셔에게 익숙한 CSS로 비유하면, 이미 아는 속성을 클래스 이름으로 바꿔 쓰는 것에 가깝습니다.

**기존 방식** — CSS 파일에 클래스 정의:

```css
.btn {
  padding: 0.625rem 1.25rem;
  border-radius: 0.5rem;
  background: #4f46e5;
  color: #fff;
}
```

**Tailwind 방식** — 별도 CSS 없이 클래스 조합:

```tsx
<button className="px-5 py-2.5 rounded-lg bg-indigo-600 text-white">버튼</button>
```

자주 쓰는 클래스는 이미 아는 CSS와 이렇게 대응합니다.

| CSS | Tailwind | 의미 |
| --- | --- | --- |
| `padding: 1.25rem` | `p-5` | 안쪽 여백 |
| `margin-top: 1rem` | `mt-4` | 위쪽 바깥 여백 |
| `display: flex` | `flex` | 플렉스 레이아웃 |
| `gap: 1.5rem` | `gap-6` | 자식 간격 |
| `background: ...` | `bg-indigo-600` | 배경색 |
| `border-radius` | `rounded-lg` | 모서리 둥글기 |
| `:hover { ... }` | `hover:bg-indigo-500` | 마우스 오버 상태 |
| 다크 모드 | `dark:bg-gray-950` | 다크 테마일 때 |

- **장점:** CSS 파일과 클래스명을 오갈 필요 없이 빠르게 작성하고, 미리 정의된 값으로 디자인이 일관됩니다.
- **주의:** `bg-${color}`처럼 문자열을 조합해 만든 클래스는 인식되지 않습니다. 클래스명은 항상 완전한 형태로 작성합니다.

### 이 프로젝트에서

별도 설정 파일 없이 JSX의 `className`에 유틸리티 클래스를 바로 작성하면 됩니다.

```tsx
<button className="rounded-lg bg-indigo-600 px-5 py-2.5 text-white hover:bg-indigo-500">
  버튼
</button>
```

- Tailwind v4는 `tailwind.config.js`와 PostCSS 설정이 **필요 없습니다.**
- 설정을 커스터마이즈하려면 [src/index.css](src/index.css)에서 `@theme` 등으로 확장합니다.

### 더 알아보기

- [Tailwind CSS 기본 개념과 기초 가이드 (velog)](https://velog.io/@rimmz/Tailwind-CSS-%EA%B8%B0%EB%B3%B8-%EA%B0%9C%EB%85%90%EA%B3%BC-%EA%B8%B0%EC%B4%88-%EA%B0%80%EC%9D%B4%EB%93%9C) — 유틸리티 퍼스트 개념과 기초 사용법을 한국어로 정리
- [Tailwind CSS 공식 문서](https://tailwindcss.com/docs) — 클래스 이름을 검색해 사용법 확인

## 실습 시작하기

[src/App.tsx](src/App.tsx)를 수정하며 시작합니다. 저장하면 즉시 화면에 반영됩니다. 학습 단계별 로드맵과 방법은 저장소 루트의 [README.md](../README.md)를 참고하세요.
