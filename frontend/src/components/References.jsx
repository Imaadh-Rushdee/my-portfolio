const references = [
  {
    name: "Jane Doe",
    role: "Mentor",
    feedback:
      "DK is a highly motivated developer. His projects demonstrate great understanding of React, state management, and clean design.",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    name: "John Smith",
    role: "Team Lead",
    feedback:
      "DK consistently delivers polished and functional web apps. His portfolio reflects both creativity and technical skill.",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "Alice Johnson",
    role: "Professor",
    feedback:
      "DK has a strong grasp of software engineering fundamentals and consistently produces high-quality work.",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
];

export default function References() {
  return (
    <section
      id="references"
      className="bg-gray-50 dark:bg-gray-900 py-16 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
          References
        </h2>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {references.map((ref, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:scale-105 transition-transform duration-300"
            >
              {/* Avatar */}
              <div className="flex items-center mb-4">
                <img
                  src={ref.avatar}
                  alt={ref.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {ref.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {ref.role}
                  </p>
                </div>
              </div>

              {/* Feedback */}
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                "{ref.feedback}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
