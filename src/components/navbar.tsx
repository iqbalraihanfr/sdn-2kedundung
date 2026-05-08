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
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${scrolled
        ? "border-b border-border/50 bg-white/90 shadow-sm backdrop-blur-xl"
        : "border-b border-white/10 bg-primary/90 backdrop-blur-md"
        }`}
    >
      <div className="w-full px-6 sm:px-8 lg:px-14 xl:px-24">
        <div className="flex h-20 items-center justify-between transition-all duration-300">
          <Link href="/" className="group flex items-center gap-3">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold transition-colors ${scrolled ? "bg-primary text-white" : "bg-white/20 !text-white"
                }`}
            >
              SP
            </div>
            <div>
              <span
                className={`block text-lg font-bold tracking-tight transition-colors ${scrolled ? "text-primary" : "!text-white"
                  }`}
              >
                SIPANDA
              </span>
              <span
                className={`hidden text-xs leading-tight transition-colors sm:block ${scrolled ? "text-text-secondary" : "!text-white"
                  }`}
              >
                SDN Kedundung 2
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-2 lg:flex xl:gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              let linkClass = "group relative flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-[15px] font-semibold transition-all duration-300";

              if (isActive) {
                linkClass += scrolled
                  ? " bg-primary !text-white shadow-md shadow-primary/20"
                  : " bg-white/20 !text-white shadow-sm";
              } else {
                linkClass += scrolled
                  ? " text-text-secondary hover:bg-primary/5 hover:text-primary"
                  : " !text-white hover:bg-white/20";
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={linkClass}
                >
                  <Icon
                    size={20}
                    className={`transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"
                      }`}
                  />
                  {link.label}
                </Link>
              );
            })}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`rounded-lg p-2 transition-colors lg:hidden ${scrolled ? "text-primary hover:bg-surface-alt" : "!text-white hover:bg-white/10"
              }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${isOpen ? "max-h-96" : "max-h-0"
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
                  className={`flex items-center gap-3 rounded-xl px-5 py-3.5 text-base font-semibold transition-all ${isActive
                    ? "bg-primary !text-white"
                    : "text-text-secondary hover:bg-primary/5 hover:text-primary"
                    }`}
                >
                  <Icon size={20} />
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
