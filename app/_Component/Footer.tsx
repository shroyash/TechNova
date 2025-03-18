import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-black via-blue-900 to-purple-900 text-gray-300">
      <div className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.7)_70%,rgba(147,51,234,0.2)_20%,rgba(59,130,246,0.1)_10%)] pointer-events-none"></div>
        <div className="container mx-auto px-4 py-12 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <i className="ri-code-line text-purple-400 text-2xl"></i>
                <span className="font-semibold text-xl text-white">TechNova</span>
              </Link>
              <p className="text-sm">
                Empowering the next generation of tech leaders in Nepal through world-class programming education.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-purple-400 transition-colors">
                  <i className="ri-facebook-fill text-lg"></i>
                </a>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  <i className="ri-twitter-x-fill text-lg"></i>
                </a>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  <i className="ri-linkedin-fill text-lg"></i>
                </a>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  <i className="ri-instagram-line text-lg"></i>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Programs</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/courses" className="hover:text-purple-400 transition-colors">
                    Full Stack Development
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="hover:text-purple-400 transition-colors">
                    Data Science
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="hover:text-purple-400 transition-colors">
                    Mobile Development
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="hover:text-purple-400 transition-colors">
                    Cloud Computing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="hover:text-purple-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/tutorials" className="hover:text-purple-400 transition-colors">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="hover:text-purple-400 transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-purple-400 transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>Kathmandu, Nepal</li>
                <li>contact@technova.edu.np</li>
                <li>+977 1-4XXXXXX</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-purple-500/20 mt-12 pt-8 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} TechNova Programming Academy. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
