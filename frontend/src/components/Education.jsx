const educationData = [
  {
    degree: "BSc in Software Engineering",
    institution: "Your University Name",
    duration: "2023 – Present",
    description:
      "Focused on software development, data structures, databases, and building scalable applications using modern technologies.",
  },
  {
    degree: "Advanced Level (A/L)",
    institution: "Your School Name",
    duration: "2020 – 2022",
    description:
      "Studied mathematics, science, and technology-related subjects, building a strong foundation for engineering studies.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="bg-white dark:bg-gray-900 py-16 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
          Education
        </h2>

        {/* Education Cards */}
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {edu.degree}
                </h3>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {edu.duration}
                </span>
              </div>

              <p className="text-gray-800 dark:text-gray-300 font-medium">
                {edu.institution}
              </p>

              <p className="text-gray-700 dark:text-gray-400 mt-2 text-sm leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
