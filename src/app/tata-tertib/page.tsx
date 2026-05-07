"use client";

import { useState } from "react";
import { BookOpen, ChevronDown } from "lucide-react";
import tataTertibData from "@/data/tataTertib.json";

export default function TataTertibPage() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <div className="pt-20 pb-16 min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
            <BookOpen size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-primary">
              Tata Tertib Sekolah
            </h1>
            <p className="text-text-secondary text-sm">
              Peraturan SDN Kedundung 2
            </p>
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-6 text-white mb-8">
          <p className="text-white/90 text-sm leading-relaxed">
            Tata tertib sekolah dibuat untuk menciptakan lingkungan belajar yang
            aman, nyaman, dan kondusif bagi seluruh peserta didik SDN Kedundung
            2. Setiap siswa wajib mematuhi peraturan yang telah ditetapkan.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {tataTertibData.categories.map((cat) => {
            const isOpen = openId === cat.id;
            return (
              <div
                key={cat.id}
                className="bg-white rounded-2xl border border-border overflow-hidden transition-shadow hover:shadow-md"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : cat.id)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{cat.icon}</span>
                    <h3 className="text-lg font-bold text-primary">
                      {cat.title}
                    </h3>
                    <span className="bg-primary/10 text-primary text-xs font-semibold px-2 py-0.5 rounded-full">
                      {cat.items.length} poin
                    </span>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-text-muted transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "max-h-[600px] opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="px-5 pb-5">
                    <div className="border-t border-border-light pt-4">
                      <ol className="space-y-3">
                        {cat.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="mt-0.5 w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                              {i + 1}
                            </span>
                            <span className="text-text-secondary text-sm leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
