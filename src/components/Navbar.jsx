import React from 'react'
import { useState, useEffect } from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Menu, X} from "lucide-react";
import { SiLeetcode } from "react-icons/si";
    const Navbar = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [isScrolled, setIsScrolled] = useState(false);

      useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      const navLinks = [
        { name: "About Me", id: "about" },
        { name: "Gallery", id: "achievements" },
        { name: "Projects", id: "projects" },
        { name: "Tech Stack", id: "tech" },
      ];

      const socialLinks = [
        { icon: FaGithub, href: "https://github.com/Coders330" },
        { icon: FaLinkedin, href: 'https://www.linkedin.com/in/pranshu-kumar-117870289/' },
        { icon: SiLeetcode, href: 'https://leetcode.com/u/Pranshu_Kumar24/' },
      ];
 
      const handleScrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };

      
      return (
        <nav
          className={`fixed w-full top-0 z-50 transition-all duration-300 ${
            isScrolled
              ? "bg-white/20 backdrop-blur-md shadow-lg"
              : "bg-white/10 backdrop-blur-sm"
          } `}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="text-2xl font-bold text-white">Pranshu Kumar</div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      handleScrollToSection(link.id);
                      setIsOpen(false); // close menu after click
                    }}
                    className="block text-white hover:text-white"
                  >
                    {link.name}
                  </button>
                ))}
              </div>

              {/* Social Icons */}
              <div className="hidden md:flex space-x-4">
                {socialLinks.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={i}
                      href={social.href}
                      className="text-white hover:text-blue-500 transition-transform duration-300 hover:scale-110"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-white focus:outline-none transition-transform duration-300 hover:scale-110"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
              <div className="md:hidden pb-4 space-y-3">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      handleScrollToSection(link.id);
                      setIsOpen(false); // close menu after click
                    }}
                    className="block text-white hover:text-white"
                  >
                    {link.name}
                  </button>
                ))}
                <div className="flex space-x-4 pt-2">
                  {socialLinks.map((social, i) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={i}
                        href={social.href}
                        className="text-white hover:text-white transition-transform duration-300 hover:scale-110"
                      >
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </nav>
      );
    };
   

 

export default Navbar;




