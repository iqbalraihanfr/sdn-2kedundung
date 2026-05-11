import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { homeFeatures } from "@/data";

export function FeaturesSection() {
  return (
    <section id="features" className="bg-transparent pt-20 pb-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block rounded-full bg-secondary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary">
            Fitur Utama
          </span>
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            Kelola Data Dengan Mudah
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-text-secondary">
            Akses semua informasi pendidikan SDN Kedundung 2 dalam satu
            platform yang terintegrasi
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {homeFeatures.map((feature, i) => {
            const Icon = feature.icon;

            return (
              <Link
                key={feature.href}
                href={feature.href}
                className={`group relative rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl ${
                  i === homeFeatures.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} transition-transform duration-200 group-hover:scale-110`}
                >
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="mb-1.5 text-lg font-bold text-primary">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-secondary">{feature.desc}</p>
                <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Buka
                  <ArrowRight size={14} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
