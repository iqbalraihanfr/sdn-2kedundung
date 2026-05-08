import { ChevronDown } from "lucide-react";

import { tataTertibData } from "@/data";

type TataTertibAccordionProps = {
  openId: number | null;
  onOpenChange: (id: number | null) => void;
};

export function TataTertibAccordion({
  openId,
  onOpenChange,
}: TataTertibAccordionProps) {
  return (
    <div className="space-y-4">
      {tataTertibData.categories.map((cat) => {
        const isOpen = openId === cat.id;

        return (
          <div
            key={cat.id}
            className="section-card overflow-hidden transition-shadow hover:shadow-md"
          >
            <button
              onClick={() => onOpenChange(isOpen ? null : cat.id)}
              className="flex w-full items-center justify-between p-5 text-left"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-lg font-bold text-primary">{cat.title}</h3>
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
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
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-5 pb-5">
                <div className="border-t border-border-light pt-4">
                  <ol className="space-y-3">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                          {i + 1}
                        </span>
                        <span className="text-sm leading-relaxed text-text-secondary">
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
  );
}
