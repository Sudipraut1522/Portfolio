import Image from "next/image";
import { Download, Code, Palette, Zap } from "lucide-react";
import profile from "../../../../public/Images/profile.jpeg";
const About = () => {
  return (
    <section
      id="about"
      className="w-full py-16 px-4 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center mb-12">
          <p className="uppercase text-purple-600 text-sm font-semibold tracking-widest mb-2">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Who I Am
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Zap className="text-purple-600" size={24} />
                I'm Not Your Average Developer
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate full-stack developer who believes in creating
                digital experiences that not only look stunning but also solve
                real-world problems. With a keen eye for design and a love for
                clean, efficient code, I bridge the gap between creativity and
                functionality.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Code
                  className="text-purple-600 mt-1 flex-shrink-0"
                  size={20}
                />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Technical Excellence
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Crafting scalable solutions with modern technologies and
                    best practices.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Palette
                  className="text-purple-600 mt-1 flex-shrink-0"
                  size={20}
                />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Design Thinking
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Creating intuitive user experiences that delight and engage
                    users.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community. I believe in continuous learning and
              staying ahead of the curve in this ever-evolving tech landscape.
            </p>

            <div className="pt-4">
              <a
                href="/assets/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-4 rounded-2xl shadow-xl">
                <Image
                  width={400}
                  height={400}
                  src={profile}
                  alt="Profile picture"
                  className="rounded-xl hover:scale-105 transition-transform duration-300 object-cover w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-purple-600">50+</div>
            <div className="text-gray-600 text-sm uppercase tracking-wide">
              Projects
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-purple-600">3+</div>
            <div className="text-gray-600 text-sm uppercase tracking-wide">
              Years Experience
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-purple-600">100+</div>
            <div className="text-gray-600 text-sm uppercase tracking-wide">
              Happy Clients
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-purple-600">24/7</div>
            <div className="text-gray-600 text-sm uppercase tracking-wide">
              Support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
