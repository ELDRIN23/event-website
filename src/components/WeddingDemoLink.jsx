import { WEDDING_DEMO_URL } from '../config/weddingDemoUrl';

/**
 * External link to the standalone wedding demo (same tab — full-page demo experience).
 */
export default function WeddingDemoLink({ className, children, ...rest }) {
  return (
    <a href={WEDDING_DEMO_URL || '#'} className={className} {...rest}>
      {children}
    </a>
  );
}
