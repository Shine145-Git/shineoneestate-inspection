'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/shared/SectionHeading';
import { commonIssues } from '@/data/content';

// 4. Common Issues Found During Possession — interactive cards with imagery.
export default function CommonIssues() {
  return (
    <section className="bg-shine-navy py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          light
          eyebrow="What To Watch For"
          title="Common Issues Found During Possession"
          subtitle="The recurring defects our inspections frequently surface in new homes."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {commonIssues.map((issue, i) => (
            <motion.article
              key={issue.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-lg border border-shine-gold/20 bg-shine-navy/40 shadow-glass"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={issue.image}
                  alt={issue.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-shine-navy via-shine-navy/30 to-transparent"
                />
                <div className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-shine-gold text-shine-navy">
                  <issue.icon className="h-5 w-5" aria-hidden="true" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-600 text-white">
                  {issue.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-shine-lightblue">
                  {issue.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
