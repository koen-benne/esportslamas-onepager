import styles from './Header.module.css';

function Header() {
  return (
    <div class={styles.Header}>
      <img src={require('./Logo-transparent.png')} class={styles.Image}/>
    </div>
  );
}

export default Header;
