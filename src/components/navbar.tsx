"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  GraduationCap,
  Users,
  ClipboardList,
  FileText,
  Heart,
  BookOpen,
} from "lucide-react";

const navLinks = [
  { href: "/", label: "Beranda", icon: GraduationCap },
  { href: "/data-siswa", label: "Data Siswa", icon: Users },
  { href: "/absensi", label: "Absensi", icon: ClipboardList },
  { href: "/daftar-nilai", label: "Daftar Nilai", icon: FileText },
  { href: "/gerakan-7kaih", label: "7 KAIH", icon: Heart },
  { href: "/tata-tertib", label: "Tata Tertib", icon: BookOpen },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-primary"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm transition-colors ${
                scrolled
                  ? "bg-primary text-white"
                  : "bg-white/20 text-white"
              }`}
            >
              SP
            </div>
            <div>
              <span
                className={`font-bold text-base tracking-tight transition-colors ${
                  scrolled ? "text-primary" : "text-white"
                }`}
              >
                SIPANDA
              </span>
              <span
                className={`hidden sm:block text-[10px] leading-tight transition-colors ${
                  scrolled ? "text-text-secondary" : "text-white/70"
                }`}
              >
                SDN Kedundung 2
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? scrolled
                        ? "bg-primary text-white"
                        : "bg-white/20 text-white"
                      : scrolled
                      ? "text-text-secondary hover:text-primary hover:bg-surface-alt"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Icon size={16} />
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? "text-primary hover:bg-surface-alt"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-white border-t border-border shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-primary text-white"
                      : "text-text-secondary hover:bg-surface-alt hover:text-primary"
                  }`}
                >
                  <Icon size={18} />
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
