export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  priceFormatted: string;
  priceStarting: number;
  iconName: string;
  badge?: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  priceNumber: number;
  badge?: string;
  isPopular?: boolean;
  features: string[];
  description?: string;
}

export interface StepItem {
  step: string;
  title: string;
  description: string;
  iconName: string;
}

export interface StatisticItem {
  value: string;
  label: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  courseBadge?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface OrderFormData {
  name: string;
  whatsapp: string;
  email: string;
  service: string;
  packageName: string;
  deadline: string;
  taskDetails: string;
  notes: string;
  fileName?: string;
}
