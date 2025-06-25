import {
  Code2,
  Palette,
  Database,
  Server,
  Smartphone,
  Globe,
  Zap,
  Layers,
  GitBranch,
  Cloud,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        { name: "HTML5", level: 95, color: "from-orange-500 to-red-500" },
        { name: "CSS3", level: 90, color: "from-blue-500 to-cyan-500" },
        {
          name: "JavaScript",
          level: 88,
          color: "from-yellow-400 to-orange-500",
        },
        { name: "TypeScript", level: 85, color: "from-blue-600 to-blue-800" },
        { name: "React", level: 92, color: "from-cyan-400 to-blue-500" },
        { name: "Next.js", level: 87, color: "from-gray-800 to-black" },
      ],
    },
    {
      title: "Styling",
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: "Tailwind CSS", level: 93, color: "from-teal-400 to-blue-500" },

        {
          name: "Material-UI",
          level: 78,
          color: "from-blue-600 to-indigo-600",
        },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "Node.js", level: 20, color: "from-green-500 to-green-700" },
        { name: "Express.js", level: 20, color: "from-gray-600 to-gray-800" },
      ],
    },
    {
      title: "Database & Tools",
      icon: <Database className="w-6 h-6" />,
      skills: [{ name: "Git", level: 90, color: "from-orange-500 to-red-500" }],
    },
  ];

  return (
    <section
      id="skills"
      className="w-full py-16 px-4 bg-gradient-to-br from-gray-50 via-white to-purple-50"
    >
      <div className="max-w-[1240px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="uppercase text-purple-600 text-sm font-semibold tracking-widest mb-2">
            Technical Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What I Can Do
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I specialize in modern web technologies and frameworks, creating
            scalable and performant applications with clean, maintainable code.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:scale-105`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className=" rounded-2xl shadow-xl p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Additional Technologies & Tools
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "REST APIs", icon: <Globe className="w-5 h-5" /> },
              { name: "GitHub", icon: <GitBranch className="w-5 h-5" /> },
            ].map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300 group"
              >
                <div className="text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <span className="text-sm font-medium text-gray-700 text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Always learning and exploring new technologies to stay ahead of the
            curve
          </p>
          <div className="flex justify-center gap-4">
            <div className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full text-sm font-medium">
              🚀 Constantly Evolving
            </div>
            <div className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full text-sm font-medium">
              💡 Problem Solver
            </div>
            <div className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-medium">
              ⚡ Performance Focused
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
