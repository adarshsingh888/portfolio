import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-10 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
        
        {/* Intro Section */}
        <p className="text-lg text-gray-600 mb-4">
          Hi, I'm <span className="font-bold text-blue-500">Adarsh Singh</span>, a passionate full-stack web developer and an NCC cadet. 
          I specialize in building secure and scalable applications using the MERN stack and strive to create user-friendly digital experiences.
        </p>
        
        {/* Skills Section */}
        <div className="text-left my-6">
          <h3 className="text-xl font-bold text-gray-700 mb-2">Skills & Expertise</h3>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Frontend: React.js, HTML, CSS, JavaScript, Bootstrap, Tailwind CSS</li>
            <li>Backend: Node.js, Express.js</li>
            <li>Database: MongoDB, Mongoose</li>
            <li>Tools: Git, VS Code, Postman</li>
          </ul>
        </div>
        
        {/* Education Section */}
        <div className="text-left my-6">
          <h3 className="text-xl font-bold text-gray-700 mb-2">Education</h3>
          <ul className="list-disc pl-6 text-gray-600">
            <li>B.Tech in Information Technology – Final Year (2025)</li>
            <li>Diploma in Mechanical Engineering – Passed in 2022</li>
            <li>Intermediate – Passed in (2019)</li>
          </ul>
        </div>
        
        {/* Experience and Achievements */}
        <div className="text-left my-6">
          <h3 className="text-xl font-bold text-gray-700 mb-2">Experience & Achievements</h3>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Developed a Spotify front-end clone using Node.js, HTML, CSS, and JavaScript</li>
            <li>Active NCC cadet with strong leadership and teamwork skills</li>
            <li>Worked on building secure RESTful APIs for scalable applications</li>
          </ul>
        </div>
        
        {/* Hobbies */}
        <div className="text-left my-6">
          <h3 className="text-xl font-bold text-gray-700 mb-2">Hobbies & Interests</h3>
          <p className="text-gray-600">
            Outside of development, I enjoy learning about emerging technologies, staying updated with industry trends, 
            and exploring innovative solutions that can make a real-world impact.
          </p>
        </div>
        
        {/* Call to Action */}
        <p className="text-lg text-gray-600 mt-4">
          I’m always excited to connect with like-minded professionals and take on new challenges. 
          <span className="font-bold text-blue-500"> Let’s build something amazing together!</span>
        </p>
      </div>
    </section>
  );
};

export default About;
