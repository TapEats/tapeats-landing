import { motion } from 'framer-motion';

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  description?: string;
  center?: boolean;
}

export const SectionHeading = ({
  subtitle,
  title,
  description,
  center = true,
}: SectionHeadingProps) => {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} mb-16`}>
      {/* Subtitle with decorative lines */}
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="h-px w-8 bg-mint"></div>
        <motion.span
          className="text-mint font-semibold uppercase tracking-wider text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          {subtitle}
        </motion.span>
        <div className="h-px w-8 bg-mint"></div>
      </div>
      
      {/* Main title */}
      <motion.h2
        className="text-4xl md:text-5xl font-heading mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {title}
      </motion.h2>
      
      {/* Border below title */}
      <div className="w-16 h-1 bg-mint rounded-full mx-auto mb-6"></div>
      
      {/* Description */}
      {description && (
        <motion.p
          className="text-muted text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};