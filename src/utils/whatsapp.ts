import { OrderFormData } from '../types';

export const WHATSAPP_PHONE = '6281222634834';
export const WHATSAPP_DISPLAY = '0812-2263-4834';

/**
 * Message for "Chat WhatsApp" consultation button
 */
export const CONSULTATION_MESSAGE =
  'Hallo Joki Wadhwani 👋, saya ingin konsultasi mengenai jasa bantuan tugas.';

/**
 * Message for general "Pesan Sekarang" direct click
 */
export const QUICK_ORDER_MESSAGE =
  'Hallo Joki Wadhwani 👋, saya ingin memesan jasa bantuan tugas.';

/**
 * Build WhatsApp URL from phone and text
 */
export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export function getConsultationUrl(): string {
  return buildWhatsAppUrl(CONSULTATION_MESSAGE);
}

export function getQuickOrderUrl(): string {
  return buildWhatsAppUrl(QUICK_ORDER_MESSAGE);
}

/**
 * Builds formatted order message and URL based on user input form
 */
export function createOrderWhatsAppUrl(order: OrderFormData): string {
  const emailText = order.email?.trim() ? order.email.trim() : '-';
  const notesText = order.notes?.trim() ? order.notes.trim() : '-';
  const fileText = order.fileName ? `\nLampiran File: ${order.fileName}` : '';

  const message = [
    'Hallo Joki Wadhwani 👋',
    '',
    'Saya ingin memesan jasa.',
    '',
    `Nama: ${order.name.trim()}`,
    `Nomor WhatsApp: ${order.whatsapp.trim()}`,
    `Email: ${emailText}`,
    `Layanan: ${order.service}`,
    `Paket: ${order.packageName || 'Standar'}`,
    `Deadline: ${order.deadline.trim()}`,
    '',
    'Detail tugas:',
    order.taskDetails.trim(),
    '',
    'Catatan:',
    notesText + fileText,
    '',
    'Mohon informasi selanjutnya. Terima kasih.',
  ].join('\n');

  return buildWhatsAppUrl(message);
}

/**
 * Safely open WhatsApp window via anchor click
 */
export function openWhatsApp(url: string): void {
  if (typeof window !== 'undefined') {
    try {
      const link = document.createElement('a');
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      window.location.href = url;
    }
  }
}
