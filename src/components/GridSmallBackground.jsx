import styles from '../styles/GridSmallBackground.module.css';

export function GridSmallBackground({ children, className }) {
  
  const containerClasses = `${styles.container} ${className || ''}`;

  return (
    <div className={containerClasses}>
      <div className={styles.gridBackground} />
      <div className={styles.mask} />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}

