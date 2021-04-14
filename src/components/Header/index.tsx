import styles from './styles.module.scss';

export function Header() {
  return (
    <header  className={styles.headerContainer}>
      <div className={styles.headerContect}>
        <img src="/images/logo.svg" alt="Logo" />
        <nav>
          <a href="">Home</a>
          <a href="">OUtro</a>
        </nav>
      </div>
    </header>
  );
}