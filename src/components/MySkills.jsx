export default function MySkills() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>

      <div className="flex flex-wrap gap-4 text-zinc-300">
        {[
          "React",
          "JavaScript (ES6+)",
          "HTML",
          "CSS",
          "Tailwind CSS",
          "REST APIs",
          "Chakra UI",
          "GitHub",
        ].map(skill => (
          <span
            key={skill}
            className="px-4 py-2 bg-zinc-900 rounded-lg border border-zinc-800"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
