import { useState, useEffect } from 'react'
import { ChevronDown, Mail, Phone, MapPin, Github, Code, Server, Database, GitBranch, Cat, Globe} from 'lucide-react'

export default function CV() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section)
  }

  const skills = [
    { name: 'JavaScript', icon: Code },
    { name: 'C++', icon: Code },
    { name: 'C#', icon: Code },
    { name: 'Java', icon: Code },
    { name: 'React', icon: Globe },
    { name: 'Node.js', icon: Server },
    { name: 'Python', icon: Code },
    { name: 'MongoDB', icon: Database },
    { name: 'Git', icon: GitBranch },
    { name: 'Cat caretaker', icon: Cat },
  ]

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div 
        className={`max-w-4xl mx-auto bg-gray-800 shadow-xl rounded-lg overflow-hidden transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <header className="bg-gradient-to-r from-purple-900 to-pink-600 text-white p-8">
          <h1 className="text-4xl font-bold mb-2 animate-fadeIn">Phùng Tuấn</h1>
          <h2 className="text-xl animate-fadeIn animation-delay-200">Uni student</h2>
          <div className="mt-4 flex flex-wrap gap-4 animate-fadeIn animation-delay-400">
            <a href="mailto:contact.phungtuan@gmail.com" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
              <Mail size={18} />
              contact.phungtuan@gmail.com
            </a>
            <a href="tel:+84339194829" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
              <Phone size={18} />
              (+84) 339 194 829
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={18} />
              Hà Đông, Hà Nội
            </span>
          </div>
          <div className="mt-4 flex gap-4 animate-fadeIn animation-delay-600">
            <a href="https://github.com/tuanphung2005" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-colors">
              <Github size={24} />
            </a>
          </div>
        </header>

        <main className="p-8 text-gray-300">
          <Section title="About Me" isActive={activeSection === 'about'} toggleSection={() => toggleSection('about')}>
            <p>
              Software engineer with a passion for creating efficient, scalable, and innovative solutions. 
              Skilled in cyber security, back-end development.
            </p>
          </Section>

          <Section title="Work Experience" isActive={activeSection === 'experience'} toggleSection={() => toggleSection('experience')}>
            <div className="space-y-6">
              <ExperienceItem 
                title="Junior Software Engineer"
                company="Unemployed Inc."
                period="2018 - Present"
                responsibilities={[
                  "eat, sleep, code, repeat",
                ]}
              />
            </div>
          </Section>

          <Section title="Education" isActive={activeSection === 'education'} toggleSection={() => toggleSection('education')}>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Bachelor of Information Technology</h3>
              <p>Posts and Telecommunications Institute of Technology  | 2023 - ...</p>
            </div>
          </Section>

          <Section title="Skills" isActive={activeSection === 'skills'} toggleSection={() => toggleSection('skills')}>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={skill.name}
                  className={`flex items-center gap-2 bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 animate-fadeIn`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <skill.icon size={16} />
                  {skill.name}
                </span>
              ))}
            </div>
          </Section>
        </main>
      </div>
    </div>
  )
}

function Section({ title, children, isActive, toggleSection }: { title: string; children: React.ReactNode; isActive: boolean; toggleSection: () => void }) {
  return (
    <div className="mb-8">
      <button 
        onClick={toggleSection}
        className="flex justify-between items-center w-full text-left text-xl font-semibold mb-4 focus:outline-none"
      >
        {title}
        <ChevronDown className={`transform transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {children}
      </div>
    </div>
  )
}

function ExperienceItem({ title, company, period, responsibilities }: { title: string; company: string; period: string; responsibilities: string[] }) {
  return (
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-400">{company} | {period}</p>
      <ul className="list-disc list-inside mt-2">
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  )
}