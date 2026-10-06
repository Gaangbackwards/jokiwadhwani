import React, { useState, useEffect } from 'react';
import {
  X,
  Send,
  Upload,
  FileCheck,
  Calendar,
  AlertCircle,
  Loader2,
  Clock,
  HelpCircle,
  Check,
} from 'lucide-react';
import { OrderFormData } from '../types';
import { servicesData } from '../data/services';
import { pricingData } from '../data/pricing';
import { createOrderWhatsAppUrl, openWhatsApp } from '../utils/whatsapp';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  initialPackageId?: string;
  onSuccessToast?: (msg: string) => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
  initialPackageId,
  onSuccessToast,
}) => {
  const [formData, setFormData] = useState<OrderFormData>({
    name: '',
    whatsapp: '',
    email: '',
    service: '',
    packageName: 'PAKET SANTAI',
    deadline: '',
    taskDetails: '',
    notes: '',
    fileName: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mockFileName, setMockFileName] = useState<string>('');

  // Sync initial selection
  useEffect(() => {
    if (isOpen) {
      const targetService = servicesData.find((s) => s.id === initialServiceId);
      const targetPackage = pricingData.find((p) => p.id === initialPackageId);

      setFormData((prev) => ({
        ...prev,
        service: targetService ? targetService.title : prev.service || servicesData[0].title,
        packageName: targetPackage ? targetPackage.name : prev.packageName || pricingData[0].name,
      }));
      setErrors({});
      setIsSubmitting(false);
    }
  }, [isOpen, initialServiceId, initialPackageId]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scroll when modal open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nama lengkap wajib diisi.';
    }
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'Nomor WhatsApp aktif wajib diisi.';
    } else if (formData.whatsapp.replace(/\D/g, '').length < 8) {
      newErrors.whatsapp = 'Format nomor WhatsApp terlalu pendek.';
    }

    if (!formData.service.trim()) {
      newErrors.service = 'Pilih salah satu jenis layanan.';
    }

    if (!formData.deadline.trim()) {
      newErrors.deadline = 'Waktu deadline tugas wajib diisi.';
    }

    if (!formData.taskDetails.trim()) {
      newErrors.taskDetails = 'Detail instruksi tugas wajib dicantumkan.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const submissionData = {
      ...formData,
      fileName: mockFileName || undefined,
    };

    const targetUrl = createOrderWhatsAppUrl(submissionData);

    // Simulate quick feedback then redirect
    setTimeout(() => {
      setIsSubmitting(false);
      openWhatsApp(targetUrl);
      if (onSuccessToast) {
        onSuccessToast('Mengarahkan ke WhatsApp admin dengan template pesanan...');
      }
      onClose();
    }, 600);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setMockFileName(`${file.name} (${(file.size / 1024).toFixed(1)} KB)`);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-100 transform transition-all my-8">
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-blue-50/70 via-white to-amber-50/50">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <h2
                id="order-modal-title"
                className="text-xl font-bold text-slate-900 tracking-tight"
              >
                Pesan Jasa
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Isi formulir berikut, data pesanan otomatis terangkai ke WhatsApp admin.
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup formulir pemesanan"
            className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body / Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          {/* Section: Identitas Pemesan */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="order-name"
                className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1"
              >
                Nama Lengkap <span className="text-red-500">*</span>
              </label>
              <input
                id="order-name"
                type="text"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: '' });
                }}
                placeholder="Contoh: Budi Pratama"
                className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none transition-colors ${
                  errors.name
                    ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-400'
                    : 'border-slate-200 hover:border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
                }`}
              />
              {errors.name && (
                <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="order-wa"
                className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1"
              >
                Nomor WhatsApp <span className="text-red-500">*</span>
              </label>
              <input
                id="order-wa"
                type="tel"
                value={formData.whatsapp}
                onChange={(e) => {
                  setFormData({ ...formData, whatsapp: e.target.value });
                  if (errors.whatsapp) setErrors({ ...errors, whatsapp: '' });
                }}
                placeholder="0812xxxx / 62812xxxx"
                className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none transition-colors ${
                  errors.whatsapp
                    ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-400'
                    : 'border-slate-200 hover:border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
                }`}
              />
              {errors.whatsapp && (
                <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  {errors.whatsapp}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="order-email"
              className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1"
            >
              Email <span className="text-slate-400 font-normal lowercase">(opsional)</span>
            </label>
            <input
              id="order-email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="nama@email.com (untuk backup kirim file)"
              className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 hover:border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 bg-white focus:outline-none transition-colors"
            />
          </div>

          {/* Section: Layanan & Paket */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="order-service"
                className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1"
              >
                Pilih Layanan <span className="text-red-500">*</span>
              </label>
              <select
                id="order-service"
                value={formData.service}
                onChange={(e) => {
                  setFormData({ ...formData, service: e.target.value });
                  if (errors.service) setErrors({ ...errors, service: '' });
                }}
                className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none transition-colors ${
                  errors.service
                    ? 'border-red-400 focus:border-red-500'
                    : 'border-slate-200 hover:border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
                }`}
              >
                <option value="">-- Pilih Jenis Layanan --</option>
                {servicesData.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title} ({s.priceFormatted})
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  {errors.service}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="order-package"
                className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1"
              >
                Pilih Paket Kecepatan
              </label>
              <select
                id="order-package"
                value={formData.packageName}
                onChange={(e) => setFormData({ ...formData, packageName: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 hover:border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 bg-white focus:outline-none transition-colors"
              >
                {pricingData.map((p) => (
                  <option key={p.id} value={p.name}>
                    {p.name} - {p.price}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Section: Deadline */}
          <div>
            <label
              htmlFor="order-deadline"
              className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1"
            >
              Deadline Pengumpulan <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                id="order-deadline"
                type="text"
                value={formData.deadline}
                onChange={(e) => {
                  setFormData({ ...formData, deadline: e.target.value });
                  if (errors.deadline) setErrors({ ...errors, deadline: '' });
                }}
                placeholder="Contoh: Besok jam 18.00 WIB / 3 jam lagi"
                className={`w-full pl-9 pr-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none transition-colors ${
                  errors.deadline
                    ? 'border-red-400 focus:border-red-500'
                    : 'border-slate-200 hover:border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
                }`}
              />
              <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
            {errors.deadline && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {errors.deadline}
              </p>
            )}
          </div>

          {/* Section: Detail Tugas */}
          <div>
            <label
              htmlFor="order-details"
              className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1"
            >
              Detail Tugas / Instruksi Soal <span className="text-red-500">*</span>
            </label>
            <textarea
              id="order-details"
              rows={3}
              value={formData.taskDetails}
              onChange={(e) => {
                setFormData({ ...formData, taskDetails: e.target.value });
                if (errors.taskDetails) setErrors({ ...errors, taskDetails: '' });
              }}
              placeholder="Contoh: Modul Wadhwani Pertemuan 4, tugas menyusun Business Canvas Model atau essay 500 kata seputar ide inovasi produk..."
              className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none transition-colors ${
                errors.taskDetails
                  ? 'border-red-400 focus:border-red-500'
                  : 'border-slate-200 hover:border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
              }`}
            />
            {errors.taskDetails && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {errors.taskDetails}
              </p>
            )}
          </div>

          {/* Section: Catatan Tambahan */}
          <div>
            <label
              htmlFor="order-notes"
              className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1"
            >
              Catatan Tambahan <span className="text-slate-400 font-normal lowercase">(opsional)</span>
            </label>
            <textarea
              id="order-notes"
              rows={2}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Contoh: Tolong format penulisan dibuat rapi dengan font Times New Roman 12pt."
              className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 hover:border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 bg-white focus:outline-none transition-colors"
            />
          </div>

          {/* Section: Upload File Mock UI */}
          <div>
            <span className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
              Upload File Tugas <span className="text-slate-400 font-normal lowercase">(opsional UI demo)</span>
            </span>
            <div className="relative border-2 border-dashed border-slate-200 hover:border-blue-300 rounded-xl p-4 text-center bg-slate-50/50 hover:bg-blue-50/30 transition-all cursor-pointer group">
              <input
                type="file"
                id="file-upload"
                onChange={handleFileUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              {mockFileName ? (
                <div className="flex items-center justify-center gap-2 text-emerald-600 font-medium text-xs">
                  <FileCheck className="w-4 h-4" />
                  <span>{mockFileName}</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setMockFileName('');
                    }}
                    className="ml-2 text-slate-400 hover:text-red-500 underline text-xs"
                  >
                    Hapus
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-1">
                  <Upload className="w-6 h-6 text-slate-400 group-hover:text-blue-500 transition-colors" />
                  <p className="text-xs text-slate-600">
                    <span className="font-semibold text-blue-600 group-hover:underline">
                      Klik untuk pilih file
                    </span>{' '}
                    atau drag and drop (PDF, DOCX, PPTX)
                  </p>
                  <p className="text-[11px] text-slate-400">
                    *File juga dapat dikirim langsung ke WhatsApp admin saat chat dibuka.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Note Info */}
          <div className="p-3 bg-blue-50/80 rounded-xl border border-blue-100 flex items-start gap-2 text-xs text-blue-900">
            <HelpCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <p>
              Saat tombol di bawah diklik, WhatsApp Web atau aplikasi WhatsApp di perangkatmu akan terbuka dengan pesan terformat rapi sesuai isian formulir.
            </p>
          </div>

          {/* Form Action */}
          <div className="pt-2 flex flex-col-reverse sm:flex-row items-center justify-end gap-3 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-semibold rounded-xl shadow-md shadow-blue-500/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Menyiapkan Pesan...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Kirim Pesanan via WhatsApp</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
