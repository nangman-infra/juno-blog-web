import Image from "next/image";

/**
 * 메인 페이지 구조 (의사코드) - https://resume.dataportal.kr/ 레이아웃 참고
 *
 * <div 전체 배경>
 *   <main 중앙 정렬, 양옆 여백 있는 컨테이너>
 *     <div 2컬럼 레이아웃>
 *       <aside 왼쪽 사이드바 (고정 폭)>
 *         - 이름 / 짧은 닉네임
 *         - 한 줄 소개
 *         - 이메일 / GitHub / LinkedIn 등 연락 수단
 *         - 간단한 기술 키워드 (태그 형태)
 *       </aside>
 *
 *       <section 오른쪽 메인 영역 (스크롤되는 콘텐츠)>
 *         - INTRODUCE 섹션
 *           - 여러 문단의 자기소개 (향후 실제 텍스트로 교체)
 *         - EXPERIENCE 섹션
 *           - 기간, 회사, 역할, bullet 리스트로 업무/성과 정리
 *         - PROJECT 섹션
 *           - 프로젝트 이름, 기간, 설명, 역할 등을 bullet 로 나열
 *         - SKILL 섹션
 *           - 카테고리별(Frontend / Backend / Infra 등) 스킬과 레벨/태그
 *         - ETC 섹션
 *           - 멘토링/발표 등 기타 활동 요약
 *       </section>
 *     </div>
 *   </main>
 * </div>
 *
 * 사용자는 왼쪽에서 기본 정보(이름, 연락처)를 항상 볼 수 있고,
 * 오른쪽 컬럼을 위에서 아래로 스크롤하면서 INTRODUCE -> EXPERIENCE -> PROJECT -> SKILL -> ETC 순서대로 읽게 됩니다.
 * 별도의 클릭 없이도 전체 스토리를 자연스럽게 파악할 수 있는 구조입니다.
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-50">
      <main className="mx-auto flex min-h-screen max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="flex w-full flex-col gap-8 lg:flex-row lg:gap-10">
          {/* 왼쪽 프로필 사이드바 */}
          <aside className="w-full shrink-0 rounded-2xl border border-zinc-200 bg-white px-5 py-6 text-sm shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70 sm:px-6 sm:py-7 lg:sticky lg:top-10 lg:h-fit lg:w-80">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col items-start gap-4">
                <div className="flex items-center gap-4">
                  <div className="h-24 w-24 overflow-hidden rounded-full border border-zinc-200 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800">
                    <Image
                      src="/profile-placeholder.svg"
                      alt="프로필 사진"
                      width={96}
                      height={96}
                      className="h-full w-full object-cover"
                      priority
                    />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
                      Profile
                    </p>
                    <h1 className="mt-1 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                      손준호
                    </h1>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      (준호님의 닉네임이나 한 줄 별명을 넣어도 좋아요)
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-3 space-y-1 text-xs text-zinc-700 dark:text-zinc-300">
                <p className="font-medium">Email</p>
                <p className="break-words text-zinc-600 dark:text-zinc-300">
                  your.email@example.com
                </p>
                <p className="mt-3 text-[11px] text-zinc-500 dark:text-zinc-400">
                  휴대전화나 메신저 대신, 이메일로 연락을 받는다고 안내 문구를 넣을 수 있어요.
                </p>
              </div>

              <div className="mt-4 space-y-1 text-xs text-zinc-700 dark:text-zinc-300">
                <p className="font-medium">Links</p>
                <ul className="mt-3 flex gap-3 text-xs">
                  <li>
                    <a
                      href="#"
                      aria-label="LinkedIn"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-[11px] font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
                    >
                      <Image
                        src="/linkedin-logo.svg"
                        alt="LinkedIn"
                        width={20}
                        height={20}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      aria-label="Blog"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-[11px] font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
                    >
                      <Image
                        src="/blog-logo.svg"
                        alt="Blog"
                        width={20}
                        height={20}
                      />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-4">
                <p className="text-xs font-medium text-zinc-700 dark:text-zinc-200">
                  Skill Keywords
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5 text-[11px]">
                  <span className="rounded-full bg-zinc-100 px-2 py-1 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                    JavaScript
                  </span>
                  <span className="rounded-full bg-zinc-100 px-2 py-1 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                    TypeScript
                  </span>
                  <span className="rounded-full bg-zinc-100 px-2 py-1 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                    React
                  </span>
                  <span className="rounded-full bg-zinc-100 px-2 py-1 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                    Next.js
                  </span>
                  <span className="rounded-full bg-zinc-100 px-2 py-1 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                    Tailwind CSS
                  </span>
                </div>
              </div>
            </div>
          </aside>

          {/* 오른쪽 메인 콘텐츠 */}
          <section className="flex-1 space-y-10 text-sm leading-relaxed text-zinc-800 dark:text-zinc-200">
            {/* INTRODUCE */}
            <section className="space-y-3">
              <h2 className="text-base font-semibold uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">
                INTRODUCE
              </h2>
              <p className="text-sm leading-relaxed text-zinc-800 dark:text-zinc-200">
                웹/앱 서비스 프론트엔드 개발자로서, 사용자가 편하게 정보를 얻을 수 있는
                인터페이스를 만드는 것에 관심이 많습니다. React, Next.js, TypeScript 등을
                사용해 실제로 배포 가능한 서비스를 만들고, 유지보수하기 쉬운 UI 구조와
                패턴을 고민합니다.
              </p>
              <p className="text-sm leading-relaxed text-zinc-800 dark:text-zinc-200">
                사이드 프로젝트나 학습용 프로젝트를 통해 새로운 라이브러리와 아키텍처를
                실험해 보는 것을 좋아합니다. 배운 내용을 정리해서 공유하거나, 다른 개발자와
                함께 코드 리뷰를 하면서 성장하는 과정도 중요하게 생각합니다.
              </p>
              <p className="text-sm leading-relaxed text-zinc-800 dark:text-zinc-200">
                이 페이지는 기술 블로그가 아니라, 제가 어떤 개발자인지 한눈에 볼 수 있는
                온라인 이력서를 목표로 합니다. 사용자는 복잡하게 클릭하지 않고, 스크롤만
                천천히 내려도 제 경험과 기술 스택을 자연스럽게 읽을 수 있습니다.
              </p>
            </section>

            {/* EXPERIENCE */}
            <section className="space-y-4">
              <h2 className="text-base font-semibold uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">
                EXPERIENCE
              </h2>

              <article className="space-y-1 rounded-xl border border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900/60 sm:px-5 sm:py-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                      회사 / 팀 이름
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      Frontend Developer
                    </p>
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    20XX.XX – 현재
                  </p>
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-zinc-700 dark:text-zinc-300 sm:text-sm">
                  <li>
                    어떤 서비스(또는 제품)의 프론트엔드 개발을 담당했는지 간단히 적어주세요.
                  </li>
                  <li>
                    구체적으로 개선한 지표나, 담당한 핵심 기능이 있다면 bullet 로 정리하면 좋습니다.
                  </li>
                  <li>
                    사용한 주요 기술 스택(React, Next.js, TypeScript 등)을 함께 적어두면
                    읽는 사람이 역할을 더 잘 이해할 수 있습니다.
                  </li>
                </ul>
              </article>

              <article className="space-y-1 rounded-xl border border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900/60 sm:px-5 sm:py-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                      다른 경험 / 활동
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      Intern / Personal Project 등
                    </p>
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    20XX.XX – 20XX.XX
                  </p>
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-zinc-700 dark:text-zinc-300 sm:text-sm">
                  <li>스터디, 동아리, 인턴, 해커톤 등 개발 관련 경험을 정리해 주세요.</li>
                  <li>
                    어떤 역할을 맡았고, 무엇을 배웠는지 한 줄씩 써 주면 이력서 느낌이 잘 납니다.
                  </li>
                </ul>
              </article>
            </section>

            {/* PROJECT */}
            <section className="space-y-4">
              <h2 className="text-base font-semibold uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">
                PROJECT
              </h2>

              <article className="space-y-1 rounded-xl border border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900/60 sm:px-5 sm:py-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                      juno-blog-web
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      개인 기술 블로그 & 이력서 웹
                    </p>
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    2025 – 진행 중
                  </p>
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-zinc-700 dark:text-zinc-300 sm:text-sm">
                  <li>Next.js 16, React 19, TypeScript, Tailwind CSS 기반으로 개발.</li>
                  <li>스크롤만으로 전체 이력을 읽을 수 있는 단일 페이지 레이아웃 설계.</li>
                  <li>프로젝트와 경험을 정리해 온라인 포트폴리오로 활용하는 것을 목표로 함.</li>
                </ul>
              </article>
            </section>

            {/* SKILL */}
            <section className="space-y-4">
              <h2 className="text-base font-semibold uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">
                SKILL
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/60">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                    Front-end
                  </p>
                  <ul className="mt-1 space-y-1 text-xs text-zinc-700 dark:text-zinc-300 sm:text-sm">
                    <li>React / Next.js</li>
                    <li>TypeScript</li>
                    <li>HTML / CSS / Tailwind CSS</li>
                  </ul>
                </div>

                <div className="space-y-2 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/60">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                    Tools
                  </p>
                  <ul className="mt-1 space-y-1 text-xs text-zinc-700 dark:text-zinc-300 sm:text-sm">
                    <li>Git / GitHub</li>
                    <li>pnpm</li>
                    <li>ESLint / Prettier</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* ETC */}
            <section className="space-y-4 pb-6">
              <h2 className="text-base font-semibold uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">
                ETC
              </h2>
              <p className="text-sm leading-relaxed text-zinc-800 dark:text-zinc-200">
                발표, 멘토링, 커뮤니티 활동, 해커톤 등 개발과 관련된 기타 활동을 이 섹션에
                정리하면 좋습니다. 간단한 목록 형태로 언제, 어디에서, 어떤 역할을 했는지를
                적어 두면 이력서의 깊이가 더 풍부해집니다.
              </p>
            </section>
          </section>
        </div>
      </main>
    </div>
  );
}
