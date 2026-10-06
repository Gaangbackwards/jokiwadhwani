import React from 'react';
import { Sparkles } from 'lucide-react';
import { StatisticItem } from '../types';

export const Statistics: React.FC = () => {
  const stats: StatisticItem[] = [
    {
      value: '50+',
      label: 'Pesanan Demo',
      description: 'Simulasi pemesanan tugas',
    },
    {
      value: '10+',
      label: 'Jenis Bantuan',
      description: 'Modul materi & format tugas',
    },
    {
      value: '24/7',
      label: 'Siap Menerima Pesanan',
      description: 'Dapat diakses kapan saja',
    },
    {
      value: '100%',
      label: 'Data Demo',
      description: 'Kebutuhan simulasi & portofolio',
    },
  ];

  return (
    <section className="py-14 bg-gradient-to-r from-blue-900 via-slate-900 to-indigo-950 text-white relative overflow-hidden">
      {/* Background glow dots */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center divide-y-2 md:divide-y-0 md:divide-x divide-slate-800">
          {stats.map((item, idx) => (
            <div key={idx} className={`pt-4 md:pt-0 ${idx > 0 ? 'md:pl-6' : ''}`}>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight tabular-nums mb-1 font-heading">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-amber-300">
                  {item.value}
                </span>
              </div>
              <p className="text-sm sm:text-base font-semibold text-slate-200">
                {item.label}
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Small Disclaimer */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 text-center">
          <p className="text-xs text-slate-400 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>* Seluruh angka di atas merupakan data fiktif untuk kebutuhan demo prototipe.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
