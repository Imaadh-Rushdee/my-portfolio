import React from "react";

const skills = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
];


export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-gray-100 dark:bg-gray-900 py-20 transition-colors duration-500"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-gray-100">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 flex flex-col items-center transition transform hover:scale-105"
            >
              <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-4" />
              <span className="text-gray-900 dark:text-gray-100 font-semibold text-lg">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
