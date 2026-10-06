import React from 'react';
import { Check, Flame, Clock, Sparkles } from 'lucide-react';
import { pricingData } from '../data/pricing';
import { PricingPackage } from '../types';

interface PricingProps {
  onSelectPackage: (packageId: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPackage }) => {
  return (
    <section id="harga" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100/70 text-amber-800 text-xs font-semibold">
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            <span>Transparan & Fleksibel</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pilih Paket Sesuai Kondisi 😭
          </h2>

          {/* Humor Text */}
          <div className="pt-1">
            <p className="inline-block px-4 py-2 bg-white/90 border border-slate-200 text-slate-700 text-sm font-medium rounded-xl shadow-xs">
              "Kalau deadline masih besok: santai. Kalau deadline 30 menit lagi: jangan panik. 😭"
            </p>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {pricingData.map((pkg: PricingPackage) => {
            const isPopular = pkg.isPopular;

            return (
              <div
                key={pkg.id}
                className={`relative bg-white rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'border-2 border-blue-600 shadow-xl shadow-blue-500/10 md:-translate-y-2'
                    : 'border border-slate-200/90 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Popular badge */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3.5 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[11px] font-bold rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1 whitespace-nowrap">
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-slate-900 tracking-wide uppercase">
                      {pkg.name}
                    </h3>
                    {pkg.description && (
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {pkg.description}
                      </p>
                    )}
                  </div>

                  {/* Price */}
                  <div className="py-4 border-y border-slate-100 mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-slate-900 tracking-tight tabular-nums">
                        {pkg.price}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">/ paket tugas</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3.5 mb-8">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Fasilitas yang didapat:
                    </span>
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            isPopular
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Button */}
                <button
                  onClick={() => onSelectPackage(pkg.id)}
                  className={`w-full py-3.5 px-4 rounded-xl text-sm font-semibold transition-all shadow-xs cursor-pointer ${
                    isPopular
                      ? 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white shadow-md shadow-blue-500/20'
                      : 'bg-slate-900 hover:bg-blue-600 text-white'
                  }`}
                >
                  Pilih Paket
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
