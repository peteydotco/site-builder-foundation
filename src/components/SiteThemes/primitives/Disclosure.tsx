import { memo, ReactNode } from 'react';
import styles from './Disclosure.module.css';

interface DisclosureProps {
  label?: ReactNode;
  suffix?: ReactNode;
  href?: string;
}

/**
 * Chevron SVG arrow icon.
 */
function ChevronIcon() {
  return (
    <svg viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 1l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Disclosure({ label, suffix, href, ...rest }: DisclosureProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={styles.container} href={href} {...rest}>
      <div className={styles.label}>{label}</div>
      {suffix && <div className={styles.suffix}>{suffix}</div>}
      <div className={styles.chevron}>
        <ChevronIcon />
      </div>
    </a>
  );
}

export default memo(Disclosure);
