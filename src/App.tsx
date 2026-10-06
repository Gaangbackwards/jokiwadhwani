import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { HowItWorks } from './components/HowItWorks';
import { Statistics } from './components/Statistics';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { FloatingActions } from './components/FloatingActions';
import { Toast, ToastMessage } from './components/Toast';

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [selectedPackageId, setSelectedPackageId] = useState<string | undefined>(undefined);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (title: string, description?: string, type: 'success' | 'info' = 'info') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    setToasts((prev) => [...prev, { id, title, description, type }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleOpenGeneralOrder = () => {
    setSelectedServiceId(undefined);
    setSelectedPackageId(undefined);
    setIsOrderModalOpen(true);
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setSelectedPackageId(undefined);
    setIsOrderModalOpen(true);
  };

  const handleSelectPackage = (packageId: string) => {
    setSelectedPackageId(packageId);
    setSelectedServiceId(undefined);
    setIsOrderModalOpen(true);
  };

  const handleCopyPhoneSuccess = () => {
    addToast('Nomor WhatsApp Berhasil Disalin!', '0812-2263-4834 telah disalin ke clipboard.', 'success');
  };

  const handleInstagramClick = () => {
    addToast('Info Demo Instagram', 'Kanal Instagram @jokiwadhwani adalah bagian dari demo mockup ini.', 'info');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 selection:bg-blue-100 selection:text-blue-900">
      {/* Top Demo Notice Bar */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white text-[11px] sm:text-xs font-medium py-1.5 px-4 text-center tracking-wide flex items-center justify-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
        <span>
          <strong>Proyek Demo:</strong> Jasa Bantuan Tugas Wadhwani — Semua form terintegrasi langsung ke WhatsApp Admin (6281222634834)
        </span>
      </div>

      {/* Main Sticky Navbar */}
      <Navbar onOpenOrderModal={handleOpenGeneralOrder} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenOrderModal={handleOpenGeneralOrder} />

        {/* Section: Layanan */}
        <Services onSelectService={handleSelectService} />

        {/* Section: Harga */}
        <Pricing onSelectPackage={handleSelectPackage} />

        {/* Section: Cara Kerja */}
        <HowItWorks />

        {/* Section: Statistik */}
        <Statistics />

        {/* Section: Testimoni */}
        <Testimonials />

        {/* Section: FAQ */}
        <FAQ />

        {/* Section: Kontak */}
        <Contact
          onCopyPhoneSuccess={handleCopyPhoneSuccess}
          onInstagramClick={handleInstagramClick}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Order Modal Form */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        initialServiceId={selectedServiceId}
        initialPackageId={selectedPackageId}
        onSuccessToast={(msg) => addToast('Pemesanan Diproses', msg, 'success')}
      />

      {/* Floating Actions: Back to Top & Quick Chat */}
      <FloatingActions />

      {/* Interactive Toast Notifications */}
      <Toast toasts={toasts} onDismiss={removeToast} />
    </div>
  );
}
