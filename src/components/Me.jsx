export default function Me() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl md:text-6xl font-bold">
        Hi, I'm Peter
      </h1>

      <p className="text-2xl text-zinc-500 mt-4">
        Frontend / React Developer
      </p>

      <p className="max-w-xl text-xl text-zinc-500 mt-3">
        I build interactive web applications using React, CSS frameworks,
        and modern JavaScript.
      </p>

      <div className="flex gap-30 mt-20">
        <a
          href="#projects"
          className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:opacity-70"
        >
          View Projects
        </a>

        <a
          href="#aboutme"
          className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:opacity-70"
        >
          About Me
        </a>


        <a
          href="#contact"
          className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:opacity-70"
        >
          Contact Me
        </a>
      </div>

      <div className="mt-30">
        <a
          href="https://github.com/PeterSingh12"
          target="_blank"
          className="px-6 py-3 border border-blue-500 rounded-lg hover:bg-blue-500"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
