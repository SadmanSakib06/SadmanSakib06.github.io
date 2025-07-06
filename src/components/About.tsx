import React from 'react';
import { Download, Heart, Code, Palette } from 'lucide-react';

const About = () => {
  const handleDownloadResume = () => {
    // In a real application, this would link to an actual resume file
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You would replace this with actual resume file path
    link.download = 'Sadman_Sakib_Resume.pdf';
    link.click();
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">SS</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">
                Hello! I'm Sadman Sakib, a UX Designer & React Developer
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                With 2 years of experience in UX design and frontend development, I specialize in creating 
                intuitive, user-centered digital experiences. My passion lies in bridging the gap between 
                beautiful design and functional code.
              </p>

              <p className="text-gray-600 leading-relaxed">
                I'm proficient in Figma for design and React for development, allowing me to take projects 
                from concept to completion. I believe in the power of good design to solve real problems 
                and create meaningful connections between users and technology.
              </p>

              <div className="grid grid-cols-2 gap-4 my-8">
                <div className="flex items-center space-x-3">
                  <Heart className="text-pink-400" size={24} />
                  <span className="text-gray-700">User-Centered Design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Code className="text-blue-400" size={24} />
                  <span className="text-gray-700">React Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Palette className="text-purple-400" size={24} />
                  <span className="text-gray-700">Visual Design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Download className="text-teal-400" size={24} />
                  <span className="text-gray-700">Prototyping</span>
                </div>
              </div>

              <button
                onClick={handleDownloadResume}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;