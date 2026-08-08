"use client";

import { useEffect, useState } from "react";
import { Calendar, X } from "lucide-react";

// Helper to consistently format Indonesian dates on client & server (prevents hydration warnings)
function formatDate(dateStr: Date | string, includeTime = false) {
  const date = new Date(dateStr);
  const day = date.getDate();
  const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  
  if (includeTime) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day} ${month} ${year} pukul ${hours}.${minutes}`;
  }
  return `${day} ${month} ${year}`;
}

// Helper to convert plain text URLs into clickable links with broader patterns
function renderContentWithLinks(text: string) {
  // Matches http, https, ftp, mailto, www., or generic domains like bit.ly/ without prefix
  const urlPattern = /((?:https?:\/\/|ftp:\/\/|mailto:|www\.|[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\/)[^\s]+)/gi;
  const parts = text.split(urlPattern);

  return (
    <>
      {parts.map((part, i) => {
        // Test part locally without global /g flag to avoid RegExp lastIndex state bugs
        const isUrl = /^(https?:\/\/|ftp:\/\/|mailto:|www\.|[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\/)/i.test(part);
        if (isUrl) {
          const href = part.startsWith("www.") 
            ? `https://${part}` 
            : !/^https?:\/\//i.test(part) && !part.startsWith("mailto:")
              ? `https://${part}`
              : part;
          return (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="announcement-link"
            >
              {part}
            </a>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

interface Profile {
  id: string;
  name: string;
}

interface Announcement {
  id: string;
  title: string;
  content: string;
  createdAt: Date | string;
  status: string;
  thumbnail?: string | null;
  author?: Profile;
}

export function AnnouncementList({ announcements }: { announcements: Announcement[] }) {
  const [selected, setSelected] = useState<Announcement | null>(null);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {announcements.map((item) => {
          const isLong = item.content.length > 150;
          const displayContent = isLong
            ? item.content.replace(/\s+/g, " ").slice(0, 150).trim() + "..."
            : item.content;

          return (
            <div
              key={item.id}
              onClick={() => isLong && setSelected(item)}
              className={`group flex flex-col justify-between rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 ${
                isLong
                  ? "hover:-translate-y-1 hover:border-primary/10 hover:shadow-lg cursor-pointer"
                  : "cursor-default"
              }`}
            >
              <div>
                <div className="mb-4 flex items-center text-sm text-text-secondary">
                  <Calendar className="mr-2 h-4 w-4 text-primary" />
                  {formatDate(item.createdAt)}
                </div>
                <h3 className="mb-3 text-xl font-bold text-primary group-hover:text-primary-light transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {renderContentWithLinks(displayContent)}
                </p>
              </div>

              {isLong && (
                <div className="mt-5 flex items-center text-sm font-bold text-secondary transition-colors group-hover:text-secondary-light">
                  Baca Selengkapnya
                  <span className="ml-1 transition-transform duration-200 group-hover:translate-x-0.5">
                    &rarr;
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Detail Modal Overlay */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-border p-6 sm:p-8 flex flex-col max-h-[85vh] animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 p-2 text-text-secondary hover:text-primary hover:bg-surface-alt rounded-xl transition-colors cursor-pointer"
              aria-label="Tutup"
            >
              <X size={24} />
            </button>

            {/* Modal Header */}
            <div className="border-b border-border pb-5">
              <div className="mb-3 flex items-center text-xs font-semibold uppercase tracking-wider text-secondary">
                <Calendar className="mr-2 h-4.5 w-4.5 text-secondary" />
                {formatDate(selected.createdAt, true)}
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-primary tracking-tight leading-snug pr-8">
                {selected.title}
              </h2>
            </div>

            {/* Modal Scrollable Content */}
            <div className="overflow-y-auto mt-6 pr-2 text-text-secondary leading-relaxed whitespace-pre-wrap text-base sm:text-lg">
              {renderContentWithLinks(selected.content)}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
