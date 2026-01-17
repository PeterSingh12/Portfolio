export default function MyProjects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <a
          href="https://crypto-dashboard-git-main-peter-singhs-projects.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="block border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 hover:scale-[1.02] transition"
        >
          <h3 className="text-xl font-semibold">Live Crypto Dashboard</h3>
          <p className="text-zinc-400 mt-3">
            Real-time MOBILE-RESPONSIVE cryptocurrency dashboard built using React and live APIs
            with interactive charts and INR price tracking.
          </p>
          <p className="text-sm text-zinc-500 mt-3">
            React · JavaScript · Chakra UI · REST API
          </p>
        </a>

        <a
          href="https://mac-landing-page-dusky.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="block border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 hover:scale-[1.02] transition"
        >
          <h3 className="text-xl font-semibold">3D MacBook Landing Page</h3>
          <p className="text-zinc-400 mt-3">
            Interactive 3D landing page using React Three Fiber with smooth
            animations and Apple-style UI.
          </p>
          <p className="text-sm text-zinc-500 mt-3">
            React · Three.js · JavaScript · Tailwind CSS
          </p>
        </a>
      </div>
    </section>
  );
}
