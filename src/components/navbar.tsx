"use client";

import { useEffect, useState } from "react";
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
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/88 backdrop-blur-xl shadow-lg shadow-slate-900/5 border-b border-white/70" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 pt-3 sm:px-6 lg:px-8">
        <div
          className={`flex h-16 items-center justify-between rounded-2xl px-4 transition-all duration-300 sm:px-5 ${
            scrolled
              ? "bg-white/75"
              : "border border-white/10 bg-primary/82 shadow-lg shadow-primary-dark/20 backdrop-blur-md"
          }`}
        >
          <Link href="/" className="flex items-center gap-2.5 group">
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold transition-colors ${
                scrolled ? "bg-primary text-white" : "bg-white/20 text-white"
              }`}
            >
              SP
            </div>
            <div>
              <span
                className={`block text-base font-bold tracking-tight transition-colors ${
                  scrolled ? "text-primary" : "text-white"
                }`}
              >
                SIPANDA
              </span>
              <span
                className={`hidden text-[10px] leading-tight transition-colors sm:block ${
                  scrolled ? "text-text-secondary" : "text-white/70"
                }`}
              >
                SDN Kedundung 2
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? scrolled
                        ? "bg-primary text-white shadow-md shadow-primary/20"
                        : "bg-white/20 text-white"
                      : scrolled
                        ? "text-text-secondary hover:bg-surface-alt hover:text-primary"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon size={16} />
                  {link.label}
                </Link>
              );
            })}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`rounded-lg p-2 transition-colors lg:hidden ${
              scrolled ? "text-primary hover:bg-surface-alt" : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="mx-4 mt-2 rounded-2xl border border-border bg-white shadow-xl sm:mx-6 lg:mx-8">
          <div className="space-y-1 px-4 py-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
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
