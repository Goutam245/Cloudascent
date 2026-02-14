import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Solutions", path: "/solutions" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b transition-shadow duration-300 ${
          scrolled ? "shadow-card" : "border-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <img src={logo} alt="IT Partner" className="h-11 w-auto rounded-lg" />
              <span className="text-lg font-bold text-foreground hidden sm:block">
                IT Partner
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative text-[15px] font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path || (item.path !== "/" && location.pathname.startsWith(item.path))
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <span className="absolute -bottom-2 left-0 right-0 h-0.5 gradient-primary rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="px-6 py-2.5 gradient-primary text-primary-foreground font-semibold text-sm rounded-lg hover:shadow-brand hover:scale-105 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>

            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-background shadow-2xl p-6 animate-fade-up">
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 p-2"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>

            <img src={logo} alt="IT Partner" className="h-10 rounded-lg mb-10" />

            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="px-4 py-4 text-lg font-medium text-foreground hover:bg-accent hover:text-primary rounded-lg transition-all"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-8 flex flex-col gap-3">
              <Link
                to="/contact"
                className="px-6 py-3 text-center gradient-primary text-primary-foreground font-semibold rounded-lg"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
