import Image from "next/image";
import TextLogo from "../components/TextLogo";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        {/* Logo Section */}
        <div className="mb-6">
          <Image
          src="/profile.jpg"
          alt="Priyanshu Sabaar"
          width={120}
          height={120}
          className="inline-flex mr-10 rounded-full mb-4 border-4 border-blue-500"
        />
          <TextLogo size="large" className="justify-center" />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Hi, I'm a Web Developer</h1>
        <p className="text-xl text-gray-700 mb-6">
          Web Developer | Next.js & Tailwind CSS Enthusiast
        </p>
        <a
          href="mailto:random.priyanshu@gmail.com"
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Contact Me
        </a>
      </div>
      <div className="mt-10 flex flex-col items-center">
        <div className="flex gap-4">
          <a
            href="https://github.com/heysbr"
            target="_blank"
            className="text-gray-600 hover:text-gray-900"
          >
            <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.45.11-3.02 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99.01 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.57.23 2.73.11 3.02.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.8 1.08.8 2.18v3.23c0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/priyanshu-sabaar/"
            target="_blank"
            className="text-gray-600 hover:text-gray-900"
          >
            <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.32-.03-3-1.83-3-1.83 0-2.11 1.43-2.11 2.91v5.59h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z"/>
            </svg>
          </a>
        </div>
      </div>
    </main>
  )
}
