## juno-blog-web

Next.js 기반 블로그 웹 프로젝트입니다.

### 기술 스택 및 버전

- **런타임**
  - Node.js: **22.x** (권장)
- **프레임워크**
  - Next.js: **16.0.6**
- **언어 / 타입 시스템**
  - TypeScript: **^5**
- **UI**
  - React: **19.2.0**
  - React DOM: **19.2.0**
- **스타일링**
  - Tailwind CSS: **^4**
- **품질 도구**
  - ESLint: **^9**
  - eslint-config-next: **16.0.6**
- **패키지 매니저**
  - pnpm

### 설치

프로젝트 루트 디렉터리(`/Users/junoshon/Developments/juno-blog-web`)에서 다음 명령을 실행합니다.

```bash
cd /Users/junoshon/Developments/juno-blog-web
pnpm install
```

> 주의: 이 프로젝트는 **pnpm** 사용을 기본으로 합니다.

### 로컬 개발 서버 실행

```bash
cd /Users/junoshon/Developments/juno-blog-web
pnpm dev
```

브라우저에서 `http://localhost:3000` 으로 접속하면 화면을 확인할 수 있습니다.  
초기 페이지 코드는 `src/app/page.tsx` 를 수정하여 변경할 수 있으며, 저장 시 자동으로 반영됩니다.

### 빌드 & 프로덕션 서버 실행

프로덕션 빌드 생성:

```bash
cd /Users/junoshon/Developments/juno-blog-web
pnpm build
```

빌드된 결과를 사용하는 프로덕션 서버 실행:

```bash
cd /Users/junoshon/Developments/juno-blog-web
pnpm start
```

### 린트 검사

ESLint 규칙에 따라 코드를 검사하려면 다음 명령을 실행합니다.

```bash
cd /Users/junoshon/Developments/juno-blog-web
pnpm lint
```

### 참고 문서

- Next.js 공식 문서: https://nextjs.org/docs
- ESLint 공식 문서: https://eslint.org/docs/latest/
- Tailwind CSS 공식 문서: https://tailwindcss.com/docs
