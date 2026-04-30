const projects = [
  {
    id: "05",
    title: "All about F1 (Formula 1) Tyres",
    category: "Cash Cow Video Editing",
    tools: "Premiere Pro, After Effects",
    vimeoId: "1187670526",
  },
  {
    id: "06",
    title: "Formula 1 Lewis Hamilton Vs Cristiano Ronaldo - Car Wars",
    category: "Cash Cow Video Editing",
    tools: "Premiere Pro, After Effects",
    vimeoId: "1187672378",
  },
  {
    id: "07",
    title: "How you can market yourself",
    category: "Cash Cow Video Editing",
    tools: "Premiere Pro, After Effects",
    vimeoId: "1187673354",
  },
];

export default function CashcowSection() {
  return (
    <section
      className="px-6 md:px-10 py-16 border-t border-gray-800"
      id="portfolio"
    >
      <h3 className="text-3xl font-bold mb-10">Cash Cow Edits</h3>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        {/* Scroll Container */}
        <div className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar">
          {projects.map((project) => (
            <div
              key={project.id}
              className="min-w-[300px] md:min-w-[400px] bg-gray-900 rounded-2xl overflow-hidden flex-shrink-0"
            >
              {/* Video */}
              <div className="relative w-full h-[220px] overflow-hidden">
                <iframe
                  src={`https://player.vimeo.com/video/${project.vimeoId}`}
                  className="absolute top-1/2 left-1/2 w-[130%] h-[130%] -translate-x-1/2 -translate-y-1/2"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Info */}
              <div className="p-4">
                <h4 className="font-bold text-lg">{project.title}</h4>
                <p className="text-sm text-gray-400 mt-1">{project.category}</p>
                <p className="text-xs text-gray-500 mt-2">{project.tools}</p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT GRADIENT FADE */}
        <div className="pointer-events-none absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-black to-transparent"></div>
      </div>
    </section>
  );
}
