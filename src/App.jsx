import { useState, useEffect } from "react";
import "./portfolio-theme.css";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  Code2,
  Database,
  Layout,
  Server,
  Phone,
  Globe,
  Menu,
  X,
  TestTube,
  Zap,
  Shield,
  Activity,
  Briefcase,
  Award,
} from "lucide-react";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="portfolio-root bg-slate-900 text-slate-50 font-sans">
      {/* NAVIGATION */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-800/98 backdrop-blur-md shadow-lg border-b border-slate-700"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          <h1 className="text-base sm:text-lg font-bold bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]">
            OS
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-5 items-center">
            <a
              href="#about"
              className="text-sm text-slate-200 hover:text-cyan-400 transition-colors duration-200 font-medium"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-sm text-slate-200 hover:text-cyan-400 transition-colors duration-200 font-medium"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="text-sm text-slate-200 hover:text-cyan-400 transition-colors duration-200 font-medium"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm rounded-md hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 shadow-md font-medium primary-btn"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-slate-700 rounded-md transition-colors duration-200"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-slate-200" />
            ) : (
              <Menu className="w-5 h-5 text-slate-200" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-300 shadow-lg">
            <div className="flex justify-around px-4 py-2">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-black hover:text-cyan-500 transition-colors duration-200 font-medium"
              >
                About
              </a>
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-black hover:text-cyan-500 transition-colors duration-200 font-medium"
              >
                Projects
              </a>
              <a
                href="#experience"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-black hover:text-cyan-500 transition-colors duration-200 font-medium"
              >
                Experience
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-blue-600 px-3 py-1 bg-cyan-500 text-white text-sm rounded-md hover:bg-cyan-600 transition-colors duration-200 font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-16 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-slate-900"></div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
          <div
            className="absolute top-40 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b1a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b1a_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]"></div>

        <div className="relative z-30 max-w-4xl w-full flex flex-col items-center">
          {/* Profile Picture Frame */}
          <div className="mb-6 flex justify-center">
            <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-full bg-cyan-500 p-[30px]">
              <img
                src="osama.jpg"
                alt=""
                className="w-full h-full rounded-full object-cover scale-60 translate-y-3"
              />
            </div>
          </div>

          <div className="inline-block mb-4 px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full text-xs font-medium">
            Available for Full-Time Opportunities
          </div>

          <h1
            className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3 
bg-gradient-to-r from-white via-slate-100 to-white 
bg-clip-text text-transparent leading-tight"
          >
            Osama Saeed
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-4 font-normal">
            Software Engineer • SQA Engineer • Backend Development • Project Manager
          </h2>

          <p className="text-sm sm:text-base text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Dedicated SQA Engineer & Backend Developer with expertise in
            building scalable systems using{" "}
            <span className="font-semibold text-cyan-400">Node.js</span>,
            combined with rigorous quality assurance. Passionate about bridging
            the gap between development and deployment.
          </p>

          {/* Buttons Container */}
          <div className="flex gap-3 justify-center flex-wrap mb-12 relative z-40">
            <a
              href="https://github.com/osamasaeed0"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center gap-2 text-sm font-medium primary-btn"
            >
              <Github className="w-4 h-4 text-white" />
              <span className="text-white font-medium">GitHub</span>
              <ExternalLink className="w-3 h-3 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/osama-saeed-b79b2429a/"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-4 py-2 bg-blue-600 border border-blue-500 text-white rounded-md hover:bg-blue-700 transition-all duration-200 flex items-center gap-2 text-sm font-medium"
            >
              <Linkedin className="w-4 h-4 text-white" />
              <span className="text-white font-medium">LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </a>

            {/* Contact Me */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=osamasaeed033640@gmail.com"
              className="group px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center gap-2 text-sm font-medium primary-btn"
            >
              <Mail className="w-4 h-4" />
              <span className="font-medium">Contact Me</span>
            </a>
          </div>

          {/* Downward Arrow */}
          <a
            href="#about"
            className="animate-bounce cursor-pointer hover:text-cyan-400 transition-colors duration-200 relative z-40"
            aria-label="Scroll to About section"
          >
            <ChevronDown className="w-6 h-6 text-slate-500 hover:text-cyan-400 transition-colors duration-200" />
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                About Me
              </h2>
              <p className="text-slate-300 leading-relaxed mb-3 text-sm sm:text-base">
                I'm a dedicated Software Engineer specializing in Quality
                Assurance and Backend Development. Currently based in{" "}
                <span className="font-semibold text-cyan-400">
                  Riyadh, Saudi Arabia
                </span>
                , I bring expertise in building scalable systems and
                implementing robust testing workflows.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                With a BS in Software Engineering from Islamia College
                University Peshawar and hands-on experience at Workbox SMC, I'm
                passionate about delivering high-impact, user-centric software
                solutions that bridge development and quality assurance.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <StatCard icon={Briefcase} label="Years Experience" value="3+" />
              <StatCard icon={Code2} label="Projects" value="10+" />
              <StatCard icon={TestTube} label="Tests Automated" value="500+" />
              <StatCard icon={Award} label="Certifications" value="4" />
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-center text-white">
            Tech Stack & Tools
          </h2>
          <p className="text-slate-300 text-center mb-8 text-sm sm:text-base max-w-2xl mx-auto">
            Technologies and tools I work with to build and test modern
            applications
          </p>

          <div className="space-y-6">
            {/* Automation & Testing */}
            <div>
              <h3 className="text-base font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                <TestTube className="w-4 h-4" />
                Automation & Testing
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
                <SkillCard
                  name="Playwright"
                  icon={<PlaywrightIcon />}
                  color="from-green-400 to-emerald-500"
                />
                <SkillCard
                  name="Cypress"
                  icon={<CypressIcon />}
                  color="from-slate-500 to-slate-600"
                />
                <SkillCard
                  name="JMeter"
                  icon={<Activity className="w-4 h-4" />}
                  color="from-red-500 to-orange-500"
                />
                <SkillCard
                  name="Postman"
                  icon={<PostmanIcon />}
                  color="from-orange-500 to-red-500"
                />
                <SkillCard
                  name="Jest"
                  icon={<JestIcon />}
                  color="from-red-600 to-pink-600"
                />
                <SkillCard
                  name="Selenium"
                  icon={<SeleniumIcon />}
                  color="from-green-500 to-teal-500"
                />
              </div>
            </div>

            {/* Backend & Databases */}
            <div>
              <h3 className="text-base font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                <Server className="w-4 h-4" />
                Backend & Databases
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
                <SkillCard
                  name="Node.js"
                  icon={<NodeIcon />}
                  color="from-green-500 to-green-600"
                />
                <SkillCard
                  name="Express"
                  icon={<Server className="w-4 h-4" />}
                  color="from-slate-500 to-slate-600"
                />
                <SkillCard
                  name="MongoDB"
                  icon={<MongoIcon />}
                  color="from-green-600 to-green-700"
                />
                <SkillCard
                  name="SQL"
                  icon={<Database className="w-4 h-4" />}
                  color="from-blue-500 to-indigo-500"
                />
                <SkillCard
                  name="REST API"
                  icon={<Globe className="w-4 h-4" />}
                  color="from-cyan-500 to-blue-600"
                />
                <SkillCard
                  name="Cloudinary"
                  icon={<CloudinaryIcon />}
                  color="from-blue-400 to-indigo-500"
                />
              </div>
            </div>

            {/* Frontend & Languages */}
            <div>
              <h3 className="text-base font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                Frontend & Languages
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
                <SkillCard
                  name="JavaScript"
                  icon={<JsIcon />}
                  color="from-yellow-400 to-yellow-500"
                />
                <SkillCard
                  name="TypeScript"
                  icon={<TsIcon />}
                  color="from-blue-500 to-blue-600"
                />
                <SkillCard
                  name="HTML5"
                  icon={<HtmlIcon />}
                  color="from-orange-500 to-red-500"
                />
                <SkillCard
                  name="CSS3"
                  icon={<CssIcon />}
                  color="from-blue-400 to-blue-500"
                />
                <SkillCard
                  name="Bootstrap"
                  icon={<BootstrapIcon />}
                  color="from-purple-500 to-purple-600"
                />
                <SkillCard
                  name="Git"
                  icon={<GitIcon />}
                  color="from-orange-500 to-red-500"
                />
              </div>
            </div>

            {/* Project Management */}
            <div>
              <h3 className="text-base font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                <Layout className="w-4 h-4" />
                Project Management & Tools
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
                <SkillCard
                  name="Jira"
                  icon={<JiraIcon />}
                  color="from-blue-500 to-blue-600"
                />
                <SkillCard
                  name="Slack"
                  icon={<SlackIcon />}
                  color="from-purple-500 to-pink-500"
                />
                <SkillCard
                  name="Trello"
                  icon={<TrelloIcon />}
                  color="from-blue-400 to-blue-500"
                />
                <SkillCard
                  name="Confluence"
                  icon={<ConfluenceIcon />}
                  color="from-blue-500 to-indigo-600"
                />
                <SkillCard
                  name="Notion"
                  icon={<NotionIcon />}
                  color="from-slate-600 to-slate-700"
                />
                <SkillCard
                  name="Linear"
                  icon={<LinearIcon />}
                  color="from-slate-500 to-slate-600"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-800"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-center text-white">
            Featured Projects
          </h2>
          <p className="text-slate-300 text-center mb-8 text-sm sm:text-base">
            Key projects demonstrating my expertise in QA and backend
            development
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <ProjectCard
              title="Mental Health AI Assistant"
              desc="Architected scalable RESTful API using Node.js, Express.js, and MongoDB. Integrated real-time Facial Expression Recognition and mood detection algorithms. Implemented JWT authentication and Bcrypt encryption for secure data handling."
              tech={["Node.js", "Express.js", "MongoDB", "AI Integration"]}
              role="SQA Engineer & Backend Developer"
              gradient="from-purple-500 to-pink-500"
            />

            <ProjectCard
              title="Egg Hatchery Manager"
              desc="Performed comprehensive manual testing covering user management, inventory tracking, and reporting modules. Designed and executed detailed test cases ensuring data consistency and system behavior validation across various scenarios."
              tech={["Manual Testing", "Test Cases", "QA"]}
              role="QA Engineer"
              gradient="from-cyan-500 to-blue-500"
            />

            <ProjectCard
              title="Auto Parts Hub E-Commerce"
              desc="Conducted API and regression testing for all platform features. Implemented Playwright for automation testing and JMeter for performance testing. Collaborated in Agile sprint reviews ensuring quality releases."
              tech={["Playwright", "JMeter", "API Testing", "Regression"]}
              role="QA Engineer"
              gradient="from-green-500 to-emerald-500"
            />
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-900"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-white">
            Professional Experience
          </h2>

          <div className="relative border-l-2 border-cyan-500/30 pl-6 sm:pl-8 space-y-6">
            <ExperienceCard
              role="QA Engineer"
              company="Workbox SMC Pvt. Ltd"
              location="Peshawar, Pakistan"
              period="2022 – 2025"
              color="bg-cyan-500"
              achievements={[
                "Conducted functional, manual, and regression testing to ensure high-quality software delivery",
                "Performed API testing and validated system performance using Postman and JMeter",
                "Executed database testing to ensure data integrity and consistency across applications",
                "Identified and documented bugs in detailed reports, collaborating with developers for timely resolution",
              ]}
            />
          </div>
        </div>
      </section>

      {/* EDUCATION & CERTIFICATIONS */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-white">
            Education & Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Education */}
            <div>
              <h3 className="text-base font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                <Layout className="w-4 h-4" />
                Education
              </h3>
              <div className="space-y-3">
                <div className="bg-slate-700 border border-slate-600 rounded-lg p-4 hover:border-cyan-500/50 transition-all duration-200">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/30">
                      <Layout className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-bold text-white mb-1">
                        B.S. in Software Engineering
                      </h4>
                      <p className="text-slate-300 text-sm mb-1">
                        Islamia College University Peshawar, Pakistan
                      </p>
                      <p className="text-cyan-400 text-sm font-medium">
                        2020 – 2024
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-700 border border-slate-600 rounded-lg p-4 hover:border-cyan-500/50 transition-all duration-200">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/30">
                      <Layout className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-bold text-white mb-1">
                        Intermediate
                      </h4>
                      <p className="text-slate-300 text-sm mb-1">
                        Govt. College Peshawar, Pakistan
                      </p>
                      <p className="text-cyan-400 text-sm font-medium">
                        2018 – 2020
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-base font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                <Award className="w-4 h-4" />
                Certifications
              </h3>
              <div className="space-y-2">
                <CertCard
                  title="Manual Testing, LambdaTest Product Certified"
                  year="2025"
                />
                <CertCard
                  title="Google Project Management Professional Certificate"
                  year="2025"
                  platform="Coursera"
                />
                <CertCard
                  title="Get Started with Jira"
                  year="2025"
                  platform="Coursera"
                />
                <CertCard
                  title="Automate Tasks and Processes with Jira"
                  year="2025"
                  platform="Coursera"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden"
      >
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Let's Build Quality Software Together
          </h2>
          <p className="text-slate-300 mb-6 text-sm sm:text-base px-4">
            Currently seeking full-time opportunities in Software Engineering
            and QA. Based in Riyadh, Saudi Arabia. Let's connect!
          </p>
          <div className="flex gap-3 justify-center flex-wrap mb-6 px-4">
            {/* Email Button */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=osamasaeed033640@gmail.com"
              className="group px-4 sm:px-6 py-2.5 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition flex items-center gap-2 shadow-lg font-semibold text-sm border border-white/20"
            >
              <Mail className="w-4 h-4 text-white" />
              <span className="hidden sm:inline">Email</span>
              <span className="inline sm:hidden">Email Me</span>
            </a>

            {/* Phone Button */}
            <a
              href="tel:+966558421579"
              className="group flex items-center gap-2 px-4 sm:px-6 py-2.5 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-md shadow-lg font-semibold text-sm border border-white/20 transition hover:from-blue-600 hover:to-blue-800"
            >
              <span className="flex items-center justify-center">
                <Phone size={20} stroke="#fff" />
              </span>
              <span>Call Me</span>
            </a>
          </div>

          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/osamasaeed0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-cyan-400 transition"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/osama-saeed-b79b2429a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-cyan-400 transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 px-4 sm:px-6 bg-slate-950 text-slate-400 text-center text-xs sm:text-sm border-t border-slate-800">
        <p>© 2025 Osama Saeed. Built with React & Tailwind CSS.</p>
        <p className="mt-1 text-slate-500">Riyadh, Saudi Arabia</p>
      </footer>
    </div>
  );
}

// COMPONENTS
function StatCard({ icon: Icon, label, value }) {
  return (
    <div className="bg-slate-700 border border-slate-600 p-4 rounded-lg hover:shadow-lg hover:border-cyan-500/50 transition-all duration-200">
      <Icon className="w-6 h-6 text-cyan-400 mb-2" />
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="text-xs text-slate-300">{label}</p>
    </div>
  );
}

function SkillCard({ name, icon, color }) {
  return (
    <div className="group bg-slate-700 border border-slate-600 p-2.5 rounded-lg shadow-sm hover:shadow-md hover:border-cyan-500/50 transition-all">
      <div
        className={`bg-gradient-to-r ${color} p-2 rounded-md inline-block mb-1.5 text-white group-hover:scale-105 transition-transform`}
      >
        {icon}
      </div>
      <h3 className="font-semibold text-white text-xs">{name}</h3>
    </div>
  );
}

function ProjectCard({ title, desc, tech, role, gradient }) {
  return (
    <div className="bg-slate-700 border border-slate-600 rounded-lg shadow-lg hover:shadow-xl hover:border-cyan-500/50 transition-all overflow-hidden flex flex-col">
      <div className={`h-1.5 bg-gradient-to-r ${gradient}`}></div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="mb-2">
          <span className="text-xs font-semibold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/30">
            {role}
          </span>
        </div>
        <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
        <p className="text-slate-300 mb-3 leading-relaxed flex-1 text-sm">
          {desc}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 bg-slate-600 border border-slate-500 text-slate-200 text-xs font-medium rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ExperienceCard({
  role,
  company,
  location,
  period,
  color,
  achievements,
}) {
  return (
    <div className="relative">
      <div
        className={`absolute -left-[1.65rem] sm:-left-[2.15rem] w-4 h-4 ${color} rounded-full border-3 border-slate-900`}
      ></div>
      <div className="bg-slate-700 border border-slate-600 p-4 sm:p-5 rounded-lg shadow-md hover:shadow-lg hover:border-cyan-500/50 transition-all">
        <h3 className="text-lg font-bold text-white">{role}</h3>
        <p className="text-cyan-400 font-medium mb-1 text-sm">{company}</p>
        <p className="text-slate-300 text-xs mb-0.5">{location}</p>
        <p className="text-slate-400 text-xs mb-3">{period}</p>
        <ul className="space-y-1.5">
          {achievements.map((achievement, idx) => (
            <li
              key={idx}
              className="text-slate-300 text-xs sm:text-sm flex items-start gap-2"
            >
              <span className="text-cyan-400 mt-0.5">•</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function CertCard({ title, year, platform }) {
  return (
    <div className="bg-slate-700 border border-slate-600 rounded-lg p-3.5 hover:border-cyan-500/50 hover:shadow-md transition-all duration-200">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <h4 className="text-sm font-semibold text-white mb-0.5">{title}</h4>
          {platform && <p className="text-xs text-slate-300">{platform}</p>}
        </div>
        <span className="text-xs font-medium text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/30 whitespace-nowrap">
          {year}
        </span>
      </div>
    </div>
  );
}

// SVG ICONS
function NodeIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.998 0c-.35 0-.701.1-.998.297L2.637 5.533c-.595.394-.998 1.093-.998 1.808v9.318c0 .715.403 1.414.998 1.808l8.363 5.236c.297.197.648.297.998.297s.701-.1.998-.297l8.363-5.236c.595-.394.998-1.093.998-1.808V7.34c0-.715-.403-1.414-.998-1.808L12.996.297C12.699.1 12.348 0 11.998 0zm0 2.001c.134 0 .269.038.38.115l7.244 4.532-3.238 2.023-4.386-2.741-4.386 2.741-3.238-2.023 7.244-4.532c.111-.077.246-.115.38-.115zm-7.624 7.164l3.628 2.268v4.536l-3.628-2.268V9.165zm6.628 2.268l3.628 2.268v4.536l-3.628-2.268v-4.536z" />
    </svg>
  );
}

function MongoIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296 4.814-3.567 4.48-9.685-.002-.027-.013-.052-.016-.078-.024-.15-.03-.3-.03-.45-.007-.21-.018-.42-.05-.63z" />
    </svg>
  );
}

function GitIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
    </svg>
  );
}

function JsIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
    </svg>
  );
}

function TsIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 12v12h24V0H0zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.967a.88.88 0 0 0 .102.45c.16.331.458.53 1.39.934 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.172-1.878-.648-2.442-1.273-.221-.244-.651-.88-.625-.925.011-.016.11-.077.22-.141.108-.061.511-.294.892-.515l.69-.4.145.214c.202.308.643.731.91.872.766.404 1.817.347 2.335-.118a.883.883 0 0 0 .313-.72c0-.278-.035-.4-.18-.61-.186-.266-.567-.49-1.649-.96-1.238-.533-1.771-.864-2.259-1.39a3.165 3.165 0 0 1-.659-1.2c-.091-.339-.114-1.189-.042-1.531.255-1.197 1.158-2.03 2.461-2.278.423-.08 1.406-.05 1.821.053zm-5.634 1.002l.008.983H10.59v8.876H8.38v-8.876H5.258v-.964c0-.534.011-.98.026-.993.012-.016 1.913-.024 4.217-.02l4.195.012z" />
    </svg>
  );
}

function HtmlIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
    </svg>
  );
}

function CssIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
    </svg>
  );
}

function BootstrapIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z" />
    </svg>
  );
}

function PlaywrightIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.252.004a11.78 11.78 0 0 0-8.45 3.57 12.942 12.942 0 0 0-3.782 9.267 12.85 12.85 0 0 0 3.782 9.263 11.78 11.78 0 0 0 8.45 3.57c.332 0 .663-.014.992-.041a12.935 12.935 0 0 1-3.851-9.234c0-3.43 1.338-6.658 3.762-9.096a11.736 11.736 0 0 0-.903-7.299zM23.28 4.44a11.79 11.79 0 0 0-8.787-3.705 11.773 11.773 0 0 0-8.483 3.569 12.943 12.943 0 0 0-3.677 9.16 12.85 12.85 0 0 0 3.782 9.263 11.78 11.78 0 0 0 8.45 3.57c.456 0 .91-.021 1.361-.062a12.942 12.942 0 0 1-3.622-9.031c0-3.388 1.288-6.575 3.628-8.977a11.704 11.704 0 0 1 6.958-3.475c.13-.39.264-.778.39-1.167z" />
    </svg>
  );
}

function CypressIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.998 0C5.366 0 0 5.367 0 12a11.992 11.992 0 0 0 12 12c6.633 0 12-5.367 12-12-.001-6.633-5.412-12-12.002-12zM6.37 14.575c.392.523.916.742 1.657.742.35 0 .699-.044 1.004-.175.306-.13.655-.306 1.09-.567l1.223 1.745c-1.003.83-2.138 1.222-3.447 1.222-1.048 0-1.92-.218-2.705-.654a4.393 4.393 0 0 1-1.746-1.92c-.392-.83-.611-1.79-.611-2.925 0-1.09.219-2.094.61-2.923a4.623 4.623 0 0 1 1.748-2.007c.741-.48 1.657-.698 2.661-.698.699 0 1.353.087 1.877.305a5.64 5.64 0 0 1 1.614.96l-1.222 1.658A4.786 4.786 0 0 0 9.12 8.77c-.305-.13-.698-.174-1.048-.174-1.483 0-2.225 1.134-2.225 3.446-.043 1.18.175 2.008.524 2.532h-.001zm12.583 2.26c-.614.431-1.353.783-2.18 1.047-.88.306-1.658.437-2.356.437-1.048 0-1.92-.218-2.705-.654a4.393 4.393 0 0 1-1.746-1.92c-.392-.83-.524-1.79-.524-2.925 0-1.09.218-2.094.61-2.923.393-.83.96-1.483 1.748-2.007.741-.48 1.657-.698 2.661-.698.699 0 1.353.087 1.877.305a5.64 5.64 0 0 1 1.614.96l-1.222 1.658a4.786 4.786 0 0 0-2.007-.567c-.305-.13-.698-.174-1.048-.174-1.483 0-2.225 1.134-2.225 3.446 0 1.178.174 2.007.523 2.531.35.524.873.742 1.658.742.349 0 .698-.043 1.003-.174.306-.131.655-.306 1.09-.567l1.223 1.745z" />
    </svg>
  );
}

function PostmanIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zM18.855 6.05a.143.143 0 0 0-.053.157.416.416 0 0 1-.053.45.14.14 0 0 0 .023.197.141.141 0 0 0 .084.03.14.14 0 0 0 .106-.05.691.691 0 0 0 .087-.751.138.138 0 0 0-.194-.033z" />
    </svg>
  );
}

function JestIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.251 11.82a3.117 3.117 0 0 0-2.328-3.01L22.911 0H8.104L11.092 8.81a3.116 3.116 0 0 0-2.244 2.988c0 1.245.733 2.32 1.791 2.82a19.094 19.094 0 0 0-6.166 6.025l-.17-.002a2.387 2.387 0 0 0-2.387 2.387v.01a2.387 2.387 0 0 0 2.387 2.388h14.441a2.387 2.387 0 0 0 2.387-2.388v-.01a2.387 2.387 0 0 0-2.387-2.387l-.17.002a19.093 19.093 0 0 0-6.166-6.025 3.113 3.113 0 0 0 1.791-2.82c0-.66-.206-1.269-.558-1.772a.997.997 0 0 0 .171-.315L17.67 13.92a.997.997 0 0 0 .171.315 3.117 3.117 0 0 0 4.41-2.416zM4.896 3.485l.433 1.024.68-.001.41-.974h4.282l.476 1.134.68-.001.433-1.026.012-.029H16.3l-2.807 6.644-.014.032a1.125 1.125 0 0 1-2.077 0l-.013-.032-2.807-6.644H4.896zm9.195 14.11a17.097 17.097 0 0 1 4.545 5.256 12.21 12.21 0 0 0-9.272 0 17.095 17.095 0 0 1 4.545-5.256 1.125 1.125 0 0 0 .182 0z" />
    </svg>
  );
}

function SeleniumIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.952 12.145l-7.71 7.71c-1.45 1.45-3.805 1.45-5.255 0-1.45-1.45-1.45-3.805 0-5.255l7.71-7.71c.214-.214.214-.562 0-.776L6.276 3.693a.551.551 0 0 0-.776 0l-2.42 2.42c-1.45 1.45-3.805 1.45-5.255 0-1.45-1.45-1.45-3.805 0-5.255l2.42-2.42c.214-.214.214-.562 0-.776L-2.177-4.76a.551.551 0 0 0-.776 0l-7.71 7.71c-1.45 1.45-1.45 3.805 0 5.255 1.45 1.45 3.805 1.45 5.255 0l7.71-7.71c.214-.214.562-.214.776 0l2.421 2.421c.214.214.214.562 0 .776l-2.42 2.42c-1.45 1.45-1.45 3.805 0 5.255 1.45 1.45 3.805 1.45 5.255 0l2.42-2.42c.214-.214.562-.214.776 0l2.421 2.421c.214.214.214.562 0 .776z" />
    </svg>
  );
}

function JiraIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005zm5.723-5.756H5.736a5.215 5.215 0 0 0 5.215 5.214h2.129v2.058a5.218 5.218 0 0 0 5.215 5.214V6.758a1.001 1.001 0 0 0-1.001-1.001zM23.013 0H11.455a5.215 5.215 0 0 0 5.215 5.215h2.129v2.057A5.215 5.215 0 0 0 24 12.483V1.005A1.001 1.001 0 0 0 23.013 0Z" />
    </svg>
  );
}

function SlackIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
    </svg>
  );
}

function TrelloIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 0H3C1.343 0 0 1.343 0 3v18c0 1.656 1.343 3 3 3h18c1.656 0 3-1.344 3-3V3c0-1.657-1.344-3-3-3zM10.44 18.18c0 .795-.645 1.44-1.44 1.44H4.56c-.795 0-1.44-.646-1.44-1.44V4.56c0-.795.645-1.44 1.44-1.44H9c.795 0 1.44.645 1.44 1.44v13.62zm10.44-6c0 .794-.645 1.44-1.44 1.44H15c-.795 0-1.44-.646-1.44-1.44V4.56c0-.795.646-1.44 1.44-1.44h4.44c.795 0 1.44.645 1.44 1.44v7.62z" />
    </svg>
  );
}

function ConfluenceIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M.87 18.257s2.834-4.797 6.16-4.797c2.005 0 2.888 1.513 4.09 3.887.524 1.04 1.167 2.244 1.915 3.61.413.753 1.383 1.043 2.174.647l3.734-1.882c.791-.396 1.12-1.365.734-2.165-.747-1.553-1.474-3.035-2.287-4.609C15.067 9.02 12.793 5.73 7.8 5.73c-4.622 0-8.71 6.166-8.71 6.166a1.514 1.514 0 0 0 .424 2.042l2.843 2.095c.673.496 1.622.355 2.119-.315zm22.261-12.514s-2.834 4.797-6.16 4.797c-2.005 0-2.888-1.513-4.09-3.887-.524-1.04-1.167-2.244-1.915-3.61-.413-.753-1.383-1.043-2.174-.647L4.858 4.278c-.791.396-1.12 1.365-.734 2.165.747 1.553 1.474 3.035 2.287 4.609C8.733 14.98 11.007 18.27 16 18.27c4.622 0 8.71-6.166 8.71-6.166a1.514 1.514 0 0 0-.424-2.042l-2.843-2.095c-.673-.496-1.622-.355-2.119.315z" />
    </svg>
  );
}

function NotionIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" />
    </svg>
  );
}

function LinearIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="m12 12-9.192 9.192a9 9 0 0 1 0-12.728L12 12Zm10.392-1.608L13.608 1.608a9 9 0 0 1 8.784 8.784ZM12 12l9.192-9.192a9 9 0 0 1 0 12.728L12 12Zm-1.608 1.608 8.784 8.784a9 9 0 0 1-8.784-8.784Z" />
    </svg>
  );
}

function CloudinaryIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.51 10.55c-.392-.37-.925-.586-1.476-.6a2.023 2.023 0 0 0-1.518.56 2.042 2.042 0 0 0-.635 1.484c.015.549.26 1.067.68 1.436.42.369.971.564 1.528.54a2.02 2.02 0 0 0 1.478-.668 2.052 2.052 0 0 0 .58-1.5 2.05 2.05 0 0 0-.637-1.452zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.5 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0z" />
    </svg>
  );
}
