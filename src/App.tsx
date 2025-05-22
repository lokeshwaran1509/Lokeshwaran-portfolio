import React from 'react';
import BackgroundElement from './components/BackgroundElement';
import Navbar from './components/Navbar';
import { ThemeProvider } from './contexts/ThemeContext';
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
        <BackgroundElement />
        <Navbar />
        
        <main>
          {/* Hero/About Section */}
          <section id="about" className="pt-32 pb-20">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2">
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" 
                    alt="Professional headshot" 
                    className="rounded-2xl shadow-xl w-full max-w-md mx-auto"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                    Hi, I'm Lokeshwaran
                  </h1>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    As an aspiring Mechatronics Engineer, I have cultivated a strong interest in electronics and CAD, 
                    which are foundational to my expertise in robotic systems and system design.                  
                  </p>
                  <a 
                    href="#contact" 
                    className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium px-8 py-3 rounded-lg transition-colors"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                Featured Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Plant Health Monitoring using GAN",
                    description: "A real time disease and weed detection AI model along with real time monitoring using IOT",
                    image: "https://img.freepik.com/premium-photo/tech-meets-nature-vibrant-small-plant-thriving-motherboard-powered-by-generative-ai_561855-12451.jpg",
                    link: "https://github.com/lokeshwaran1509/Plant-Health-Monitoring-using-GAN"
                  },
                  {
                    title: "Gesture Controlled Virtual-Teleprescence Robot using ROS",
                    description: "A virtual telepresence Robot with gesture control built using ROS intended for military surveillance",
                    image: "https://ncs.support/wp-content/uploads/2024/02/ai-in-robotics-for-enhanced-productivity-dgz.jpg",
                    link: "https://github.com/lokeshwaran1509/Virtual_Telepresence-with-gesture-control"
                  },
                  {
                    title: "Hand Gesture Recognition in MATLAB",
                    description: "A MATLAB-AI model for Hand Gesture Recognition",
                    image: "https://static.vecteezy.com/system/resources/previews/008/176/220/non_2x/augmented-reality-technology-background-free-vector.jpg",
                    link: "#"
                  }
                ].map((project, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {project.description}
                      </p>
                      <a 
                        href={project.link}
                        className="text-primary-600 dark:text-primary-400 hover:underline"
                      >
                        View Project →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                Technical Skills
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {[
                  "Python",
                  "Java",
                  "C/C++",
                  "HTML/CSS",
                  "Tensorflow/Pytorch",
                  "Embedded systems",
                  "ROS",
                  "Docker",
                  "Git",
                  "MATLAB",
                  "React.js ",
                  "Flask"
                ].map((skill, index) => (
                  <div 
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow"
                  >
                    <p className="text-gray-900 dark:text-white font-medium">
                      {skill}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                Get in Touch
              </h2>
              <div className="max-w-xl mx-auto text-center">
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  I'm always open to new opportunities and collaborations.
                  Feel free to reach out through any of these platforms:
                </p>
                <div className="flex justify-center space-x-6">
                  <a 
                    href="https://github.com/lokeshwaran1509" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    <Github size={32} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/lokeshwaran1509/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    <Linkedin size={32} />
                  </a>
                  <a 
                    href="https://x.com/Lokeshwarans12" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    <Twitter size={32} />
                  </a>
                  <a 
                    href="https://www.instagram.com/lokeshwaran_1509/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    <Instagram size={32} />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;