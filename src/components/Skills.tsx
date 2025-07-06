import React, { useState, useEffect, useRef } from 'react';
import { Code, Palette, Smartphone, Globe, Database, Settings } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      name: "Figma",
      level: 95,
      icon: <Palette className="text-purple-500" size={24} />,
      color: "from-purple-400 to-purple-500"
    },
    {
      name: "React",
      level: 90,
      icon: <Code className="text-blue-500" size={24} />,
      color: "from-blue-400 to-blue-500"
    },
    {
      name: "UX Design",
      level: 88,
      icon: <Smartphone className="text-pink-500" size={24} />,
      color: "from-pink-400 to-pink-500"
    },
    {
      name: "TypeScript",
      level: 85,
      icon: <Code className="text-blue-500" size={24} />,
      color: "from-blue-400 to-blue-500"
    },
    {
      name: "Tailwind CSS",
      level: 92,
      icon: <Globe className="text-teal-500" size={24} />,
      color: "from-teal-400 to-teal-500"
    },
    {
      name: "Adobe XD",
      level: 80,
      icon: <Settings className="text-purple-500" size={24} />,
      color: "from-purple-400 to-purple-500"
    }
  ];

  const tools = [
    "Figma", "Adobe XD", "Sketch", "React", "TypeScript", "JavaScript",
    "Tailwind CSS", "HTML5", "CSS3", "Git", "GitHub", "Framer Motion",
    "Adobe Photoshop", "Adobe Illustrator", "Prototyping", "User Research"
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Skills & Tools
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              I specialize in modern design and development tools to create exceptional user experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Skills with Progress Bars */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Technical Skills</h3>
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {skill.icon}
                      <span className="font-semibold text-gray-800">{skill.name}</span>
                    </div>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 200}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tools Grid */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Tools & Technologies</h3>
              <div className="grid grid-cols-2 gap-3">
                {tools.map((tool, index) => (
                  <div
                    key={tool}
                    className={`bg-gradient-to-r from-purple-50 to-pink-50 px-4 py-3 rounded-xl text-center font-medium text-gray-700 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{
                      transitionDelay: `${index * 100}ms`
                    }}
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;