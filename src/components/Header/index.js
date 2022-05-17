import styles from './Header.module.css';

function Header() {
  return (
    <div class={styles.Header}>
      <img src={require('./Logo-transparent.png')} class={styles.Image}/>
      <h1 class={styles.Title}>Esports Lama's</h1>
    </div>
  );
}

export default Header;
