import React from "react";

export default function Bio() {
  return (
    <section
      id="about"
      className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-20 transition-colors duration-500"
    >
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 text-center md:text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Hi! I’m D.K, a passionate software engineering student who loves creating sleek web applications.
          I enjoy learning new technologies and building projects that are both functional and visually appealing.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Outside of coding, I have a strong interest in cars and automotive technology.
          I love combining my technical skills with my creativity to solve real-world problems.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          My goal is to continuously improve as a developer and deliver projects that make an impact.
        </p>
      </div>
    </section>
  );
}
