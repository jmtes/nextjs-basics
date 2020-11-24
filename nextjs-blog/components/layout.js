// COMPONENT-LEVEL STYLES WITH CSS MODULES
// This is a layout component that can be shared across all pages and
// contains styling.

// Importing a CSS module
import styles from './layout.module.css';

// To use the imported CSS module's container class, simply use
// styles.container as the returned div's className.

// If you inspect the HTML, you'll notice that a unique class name was
// automatically generated for the div. So long as you use CSS Modules or
// some other CSS-in-JS library, you needn't worry about class name
// collisions.

// What's more is that Next.js's code splitting applies to CSS Modules as
// well. It ensures the minimal amount of CSS is loaded for each page,
// resulting in smaller bundle sizes.

const Layout = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default Layout;
