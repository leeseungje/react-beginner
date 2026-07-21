# react-app — React 실습 환경

현재 React 프로젝트에서 자주 사용하는 구성을 경험하기 위한 실습 환경입니다. React·TypeScript·Vite를 기반으로 pnpm, Tailwind CSS, Oxlint를 선택해 구성했습니다.

## 기술 스택

| 항목 | 내용 |
| --- | --- |
| UI 라이브러리 | React 19 |
| 언어 | TypeScript |
| 빌드 도구 | Vite |
| 스타일 | Tailwind CSS v4 (`@tailwindcss/vite`) |
| 린터 | Oxlint |
| 패키지 매니저 | pnpm |

> React 프로젝트에 반드시 필요한 표준 구성은 아닙니다. 학습과 실습을 위해 선택한 하나의 현대적인 구성 예시입니다.

- **React + TypeScript + Vite** — 현재 많이 사용하는 기본 조합
- **pnpm** — npm·yarn 대신 선택할 수 있는 패키지 매니저
- **Tailwind CSS** — 여러 스타일링 방법 중 하나
- **Oxlint** — ESLint 대신 선택한 비교적 최신 린터

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
| `pnpm lint` | Oxlint로 코드 검사 |

## 폴더 구조

```text
react-app/
├── public/              # 그대로 배포되는 정적 파일
│   ├── favicon.svg
│   └── icons.svg
├── src/                 # 애플리케이션 소스
│   ├── main.tsx         # 진입점 — App을 #root에 렌더링
│   ├── App.tsx          # 루트 컴포넌트 — 레이아웃과 조합 담당
│   ├── components/      # 재사용·기능 컴포넌트
│   │   ├── Button.tsx   # 재사용 버튼 (Props·children)
│   │   └── Counter.tsx  # 카운트 상태를 가진 기능 컴포넌트
│   ├── index.css        # Tailwind 불러오기(@import "tailwindcss")
│   └── assets/          # 컴포넌트에서 import 하는 이미지 등
├── index.html           # HTML 진입 문서 (#root 포함)
├── vite.config.ts       # Vite 설정 (React·Tailwind 플러그인, 포트)
├── tsconfig*.json        # TypeScript 설정
├── .oxlintrc.json       # Oxlint 규칙
└── package.json         # 의존성과 스크립트
```

### 실행 흐름

1. 브라우저가 [index.html](index.html)을 열고 `<div id="root">`을 준비합니다.
2. [src/main.tsx](src/main.tsx)가 [src/App.tsx](src/App.tsx)를 `#root`에 렌더링합니다.
3. [src/index.css](src/index.css)의 `@import "tailwindcss"`로 Tailwind 유틸리티가 로드됩니다.

## Tailwind CSS 사용법

별도 설정 파일 없이 JSX의 `className`에 유틸리티 클래스를 바로 작성하면 됩니다.

```tsx
<button className="rounded-lg bg-indigo-600 px-5 py-2.5 text-white hover:bg-indigo-500">
  버튼
</button>
```

- Tailwind v4는 `tailwind.config.js`와 PostCSS 설정이 **필요 없습니다.**
- 설정을 커스터마이즈하려면 [src/index.css](src/index.css)에서 `@theme` 등으로 확장합니다.

## 실습 시작하기

[src/App.tsx](src/App.tsx)를 수정하며 시작합니다. 저장하면 즉시 화면에 반영됩니다. 학습 단계별 로드맵과 방법은 저장소 루트의 [README.md](../README.md)를 참고하세요.
