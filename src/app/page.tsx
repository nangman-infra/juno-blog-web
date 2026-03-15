import Image from "next/image";

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
                      클라우드 시스템 엔지니어
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-3 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <p className="font-medium">Contact</p>
                <p className="break-words text-zinc-600 dark:text-zinc-300">
                  sanolx30@gmail.com
                </p>
                <p className="break-words text-zinc-600 dark:text-zinc-300">
                  (+82) 10-6787-0231
                </p>
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                  대한민국 서울
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
                      href="https://se-juno.tistory.com/"
                      target="_blank"
                      rel="noopener noreferrer"
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
                  {["AWS", "Linux", "Cisco", "Networking", "IaC", "Ansible"].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-zinc-100 px-2 py-1 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
                    >
                      {skill}
                    </span>
                  ))}
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
                안녕하세요. 데이터센터(Co-location) 현장 엔지니어링 경험과 AWS 클라우드 전문성을
                겸비한 엔지니어입니다. L1/L2 네트워크의 물리적 구축부터 Infrastructure as
                Code(IaC)를 활용한 서버 자동화 관리까지 인프라 전반의 라이프사이클을 경험했습니다.
              </p>
              <p className="text-base leading-relaxed text-zinc-800 dark:text-zinc-200">
                단순한 운영을 넘어, SLA 기반의 고객 서비스 품질 유지와 Networking 역량을 바탕으로
                온프레미스와 클라우드를 잇는 안정적인 하이브리드 환경 구축을 지향합니다.
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
                      에퀴닉스 코리아
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      고객 서버 운영 엔지니어 · Level III · 서울 상암
                    </p>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    2025.09 – 현재
                  </p>
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300 sm:text-base">
                  <li>Co-location 데이터센터 고객 서버 운영 엔지니어</li>
                  <li>SLA 기반 고객 장비 설치/철거 작업 지원</li>
                  <li>Subject Matter Expert : IT Infra(Office Network), Pop-up sites 관리</li>
                  <li>글로벌 CSP 3사의 전용회선 서비스 L1 연결성 구축</li>
                  <li>데이터 센터 ↔ Pop-up sites 간 Dark Fiber 관리</li>
                  <li>Cisco Meraki AP, Juniper EX SW, Palo Alto F/W 등 IT 자산 관리</li>
                  <li>NVR/ACS 서버 운영</li>
                </ul>
              </article>

              <article className="space-y-1 rounded-xl border border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900/60 sm:px-5 sm:py-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                      (주)링네트
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      네트워크 필드 엔지니어 · 사원 · 서울 구로
                    </p>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    2025.01 – 2025.09
                  </p>
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300 sm:text-base">
                  <li>L2 / L3 네트워크 필드 엔지니어</li>
                  <li>서울교통공사 지하철 4호선 차량기지 네트워크 신규 구축</li>
                  <li>VLAN, HSRP, LACP 기반의 이중화 구성</li>
                  <li>4호선 역사 간 SC-SC Jumper 케이블 포설 및 OTDR 구간 테스트 수행</li>
                </ul>
              </article>
            </section>

            {/* SIDE PROJECT */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">
                SIDE PROJECT
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
                      국립한밭대학교 인프라 운영 팀
                    </p>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    2025.12 – 현재
                  </p>
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300 sm:text-base">
                  <li>Zabbix & Grafana 기반 운영 서버 모니터링 대시보드 구축</li>
                  <li>클라우드 ↔ 온프레미스, 온프레미스 ↔ 온프레미스 IPsec VPN 구성</li>
                  <li>AWS VPC와 방화벽 어플라이언스 간 Site-to-site VPN 구성</li>
                  <li>Ansible-AWX 기반 IaC 서버 자동화 관리</li>
                  <li>리눅스 기반의 약 50대 서버 Ansible 자동화 관리</li>
                </ul>
              </article>
            </section>

            {/* SKILL */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">
                SKILL
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/60">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                    Server
                  </p>
                  <ul className="mt-1 space-y-1 text-sm text-zinc-700 dark:text-zinc-300 sm:text-base">
                    <li>Rocky, RHEL 등 RedHat 계열 Linux</li>
                    <li>기초 구성 및 자동화, 권한 관리</li>
                  </ul>
                </div>

                <div className="space-y-2 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/60">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                    Network
                  </p>
                  <ul className="mt-1 space-y-1 text-sm text-zinc-700 dark:text-zinc-300 sm:text-base">
                    <li>TCP/IP 기반 트러블슈팅</li>
                    <li>DNS, SSH, HTTP, DHCP, SSL/TLS</li>
                    <li>IP, ARP, IPsec, TCP, UDP</li>
                    <li>802.3f, 802.11, 802.1Q</li>
                  </ul>
                </div>

                <div className="space-y-2 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/60">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                    Cloud
                  </p>
                  <ul className="mt-1 space-y-1 text-sm text-zinc-700 dark:text-zinc-300 sm:text-base">
                    <li>AWS 기반 3-Tier 아키텍처</li>
                    <li>Site-to-site VPN, VPC 구성</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* CERTIFIED */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">
                CERTIFIED
              </h2>

              {[
                {
                  name: "Advanced Networking Specialty",
                  issuer: "Amazon Web Services",
                  date: "2025.12",
                },
                {
                  name: "Solution Architect Associate",
                  issuer: "Amazon Web Services",
                  date: "2024.11",
                },
                {
                  name: "Cisco Certified Network Associate",
                  issuer: "Cisco Systems",
                  date: "2024.10",
                },
              ].map((cert) => (
                <article
                  key={cert.name}
                  className="space-y-1 rounded-xl border border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900/60 sm:px-5 sm:py-4"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                        {cert.name}
                      </h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">{cert.issuer}</p>
                    </div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{cert.date}</p>
                  </div>
                </article>
              ))}
            </section>

            {/* EDUCATION */}
            <section className="space-y-4 pb-6">
              <h2 className="text-lg font-semibold uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">
                EDUCATION
              </h2>

              <article className="space-y-1 rounded-xl border border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900/60 sm:px-5 sm:py-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                      국립한밭대학교
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      정보통신공학과 학사 · 대전 유성구
                    </p>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">2019.03 – 2024.08</p>
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300 sm:text-base">
                  <li>무선통신 소프트웨어 연구실 WiSoft 학부연구생</li>
                  <li>UNIX 시스템, 컴퓨터 네트워크, 운영체제 등 CS 과목 이수</li>
                </ul>
              </article>
            </section>
          </section>
        </div>
      </main>
    </div>
  );
}
