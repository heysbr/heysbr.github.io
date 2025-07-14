import Image from "next/image";
// import profile from "@/app/profile.webp";
// import githubIcon from "@/app/github.svg";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-2xl">
        {/* <Image
          className="rounded-full mb-4"
          src={profile}
          alt="Profile picture"
          width={120}
          height={120}
          priority
        /> */}
        <h1 className="text-3xl font-bold mb-2 text-center sm:text-left">
          Hi, I'm Priyanshu Sabaar
        </h1>
        <p className="text-lg text-gray-400 text-center sm:text-left mb-6">
          I'm a passionate web developer building modern, performant web apps.
          My tech stack includes <span className="font-semibold">React</span>,{" "}
          <span className="font-semibold">Next.js</span>,{" "}
          <span className="font-semibold">Zustand</span>, and{" "}
          <span className="font-semibold">Tailwind CSS</span>. I love learning
          new things every day and pushing the boundaries of what's possible on
          the web.
        </p>
        <div className="flex gap-4 flex-wrap justify-center sm:justify-start mb-8">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-mono">
            React
          </span>
          <span className="bg-gray-100 text-gray-800  px-3 py-1 rounded-full text-sm font-mono">
            Next.js
          </span>
          <span className="bg-green-100 text-green-800  px-3 py-1 rounded-full text-sm font-mono">
            Zustand
          </span>
          <span className="bg-cyan-100 text-cyan-800  px-3 py-1 rounded-full text-sm font-mono">
            Tailwind
          </span>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838]  font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://github.com/priyanshu-sabaar"
            target="_blank"
          >
            {/* <Image src={githubIcon} alt="GitHub" width={20} height={20} /> */}
            GitHub
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href=""
          >
            Contact Me
          </a>
        </div>
      </main>
    </div>
  );
}
