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
          <aside className="w-full shrink-0 rounded-2xl border border-zinc-200 bg-white px-6 py-7 text-base shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70 sm:px-7 sm:py-8 lg:sticky lg:top-10 lg:h-fit lg:w-96">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col items-start gap-4">
                <div className="flex items-center gap-4">
                  <div className="h-28 w-28 overflow-hidden rounded-full border border-zinc-200 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800">
                    <Image
                      src="/profile.png"
                      alt="프로필 사진"
                      width={112}
                      height={112}
                      className="h-full w-full object-cover"
                      priority
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
                      Profile
                    </p>
                    <h1 className="mt-1 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                      손준호
                    </h1>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      (Junoshon)
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-3 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <p className="font-medium">Email</p>
                <p className="break-words text-zinc-600 dark:text-zinc-300">
                  sanolx30@gmail.com
                </p>
                <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
                  언제든지 자유롭게 연락해 주세요.
                </p>
              </div>

              <div className="mt-4 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <p className="font-medium">Links</p>
                <ul className="mt-3 flex gap-3 text-sm">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/%EC%A4%80%ED%98%B8-%EC%86%90-6992432b3/"
                      target="_blank"
                      rel="noopener noreferrer"
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
                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
                  Skill Keywords
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5 text-xs">
                  <span className="rounded-full bg-zinc-100 px-2 py-1 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                    AWS
                  </span>
                  <span className="rounded-full bg-zinc-100 px-2 py-1 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                    Kubernetes
                  </span>
                  <span className="rounded-full bg-zinc-100 px-2 py-1 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                    Docker
                  </span>
                  <span className="rounded-full bg-zinc-100 px-2 py-1 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                    Terraform
                  </span>
                  <span className="rounded-full bg-zinc-100 px-2 py-1 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                    Linux
                  </span>
                </div>
              </div>
            </div>
          </aside>

          {/* 오른쪽 메인 콘텐츠 */}
          <section className="flex-1 space-y-10 text-base leading-relaxed text-zinc-800 dark:text-zinc-200">
            {/* INTRODUCE */}
            <section className="space-y-3">
              <h2 className="text-lg font-semibold uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">
                INTRODUCE
              </h2>
              <p className="text-base leading-relaxed text-zinc-800 dark:text-zinc-200">
                온프레미스 및 클라우드 인프라 관리자로서, 안정적이고 확장 가능한 인프라 구축과
                운영에 관심이 많습니다. AWS, Kubernetes, Docker 등을 활용해 서비스의 가용성과
                성능을 최적화하고, Infrastructure as Code를 통해 효율적인 인프라 관리 방식을
                추구합니다.
              </p>
              <p className="text-base leading-relaxed text-zinc-800 dark:text-zinc-200">
                모니터링, 자동화, 보안 등 인프라 운영의 전반적인 영역을 다루며, 장애 대응과
                성능 튜닝을 통해 서비스의 안정성을 높이는 것을 목표로 합니다. 새로운 클라우드
                기술과 DevOps 도구를 학습하고 실무에 적용하는 것을 좋아합니다.
              </p>
              <p className="text-base leading-relaxed text-zinc-800 dark:text-zinc-200">
                이 페이지는 기술 블로그가 아니라, 제가 어떤 인프라 관리자인지 한눈에 볼 수 있는
                온라인 이력서를 목표로 합니다. 사용자는 복잡하게 클릭하지 않고, 스크롤만
                천천히 내려도 제 경험과 기술 스택을 자연스럽게 읽을 수 있습니다.
              </p>
            </section>

            {/* EXPERIENCE */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">
                EXPERIENCE
              </h2>

              <article className="space-y-1 rounded-xl border border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900/60 sm:px-5 sm:py-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                      회사 / 팀 이름
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Infrastructure / Cloud Administrator
                    </p>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    20XX.XX – 현재
                  </p>
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300 sm:text-base">
                  <li>
                    온프레미스 및 클라우드 인프라 설계, 구축, 운영을 담당했습니다.
                  </li>
                  <li>
                    Kubernetes 클러스터 관리, 컨테이너 오케스트레이션, CI/CD 파이프라인 구축 및 운영.
                  </li>
                  <li>
                    Terraform, Ansible 등을 활용한 Infrastructure as Code 구현 및 자동화.
                  </li>
                </ul>
              </article>

              <article className="space-y-1 rounded-xl border border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900/60 sm:px-5 sm:py-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                      다른 경험 / 활동
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      Intern / Personal Project 등
                    </p>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    20XX.XX – 20XX.XX
                  </p>
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300 sm:text-base">
                  <li>인프라 관련 스터디, 세미나, 커뮤니티 활동 등을 정리해 주세요.</li>
                  <li>
                    어떤 역할을 맡았고, 무엇을 배웠는지 한 줄씩 써 주면 이력서 느낌이 잘 납니다.
                  </li>
                </ul>
              </article>
            </section>

            {/* PROJECT */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">
                Side Team
              </h2>

              <article className="space-y-1 rounded-xl border border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900/60 sm:px-5 sm:py-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                      <a
                        href="https://nangman.cloud/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        낭만 인프라
                      </a>
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      국립한밭대학교 인프라 엔지니어링 팀
                    </p>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    2025 – 진행 중
                  </p>
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300 sm:text-base">
                  <li>온프레미스 및 클라우드 인프라 설계, 구축, 운영을 담당하는 팀 프로젝트.</li>
                  <li>Kubernetes, Docker, AWS 등을 활용한 인프라 관리 및 자동화.</li>
                  <li>모니터링, 로깅, CI/CD 파이프라인 구축 및 운영.</li>
                </ul>
              </article>

            </section>

            {/* SKILL */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">
                SKILLLLLLLL
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/60">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                    Cloud / Infrastructure
                  </p>
                  <ul className="mt-1 space-y-1 text-sm text-zinc-700 dark:text-zinc-300 sm:text-base">
                    <li>AWS / Azure / GCP</li>
                    <li>Kubernetes / Docker</li>
                    <li>Linux / Shell Scripting</li>
                  </ul>
                </div>

                <div className="space-y-2 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/60">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                    DevOps / Tools
                  </p>
                  <ul className="mt-1 space-y-1 text-sm text-zinc-700 dark:text-zinc-300 sm:text-base">
                    <li>Terraform / Ansible</li>
                    <li>CI/CD (Jenkins / GitLab CI)</li>
                    <li>Monitoring (Prometheus / Grafana)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* CERTIFIED */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">
                CERTIFIED
              </h2>

              <article className="space-y-1 rounded-xl border border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900/60 sm:px-5 sm:py-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                      자격증 이름
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      발급 기관
                    </p>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    20XX.XX
                  </p>
                </div>
              </article>
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
