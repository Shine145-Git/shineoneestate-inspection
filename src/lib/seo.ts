import type { Metadata } from 'next';

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  'https://www.shineoneestate.co.in';

export const BRAND = 'ShineOne Estate';

export const KEYWORDS = [
  'Home Inspection Gurgaon',
  'Property Inspection Gurgaon',
  'Flat Inspection Gurgaon',
  'Builder Floor Inspection Gurgaon',
  'New Home Inspection Gurgaon',
  'Possession Inspection Gurgaon',
  'Pre-Possession Inspection',
  'Snag List Gurgaon',
  'Home Inspection Service NCR',
  'Property Snag Inspection',
];

export const DEFAULT_DESCRIPTION =
  'Professional home inspection services by ShineOne Estate. Independent, detailed pre-possession and snag inspections for flats, builder floors and new homes across Gurgaon and NCR.';

interface PageMetaArgs {
  title: string;
  description?: string;
  path?: string;
}

export function buildMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '/',
}: PageMetaArgs): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogImage = `${SITE_URL}/og-image.jpg`;

  return {
    title,
    description,
    keywords: KEYWORDS,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      title,
      description,
      url,
      siteName: BRAND,
      locale: 'en_IN',
      images: [{ url: ogImage, width: 1200, height: 630, alt: BRAND }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

// LocalBusiness structured data
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BRAND,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    image: `${SITE_URL}/og-image.jpg`,
    email: 'parveen@shineoneestate.co.in',
    areaServed: ['Gurgaon', 'Gurugram', 'Delhi NCR'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gurgaon',
      addressRegion: 'Haryana',
      addressCountry: 'IN',
    },
  };
}

// Service structured data
export function serviceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Home Inspection',
    provider: {
      '@type': 'LocalBusiness',
      name: BRAND,
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'City',
      name: 'Gurgaon',
    },
    description:
      'Independent home inspection covering flooring, walls, ceilings, doors, windows, electrical, plumbing, bathrooms, kitchens, balconies, waterproofing, finishing, safety and possession readiness.',
  };
}
