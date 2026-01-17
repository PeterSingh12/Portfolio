export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <p className="text-zinc-400 mb-8">
        Feel free to reach out for opportunities, collaborations, or just to say
        hi.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="mailto:peteratonlybusiness@gmail.com"
          className="px-6 py-3 border border-zinc-700 rounded-lg hover:bg-zinc-900"
        >
          Email Me
        </a>

        <a
          href="https://github.com/PeterSingh12"
          target="_blank"
          className="px-6 py-3 border border-zinc-700 rounded-lg hover:bg-zinc-900"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/peter-singh-433037307/"
          target="_blank"
          className="px-6 py-3 border border-zinc-700 rounded-lg hover:bg-zinc-900"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
