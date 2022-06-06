import Container from '../Container';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer class={styles.footer}>
      <Container>
        <h3 className={styles.title}>Do you have any questions about our work?</h3>
        <p  className={styles.desc}>Stuur ons gerust een mail</p>
        <a className={styles.button}>Contact us</a>
      </Container>
    </footer>
  );
}

export default Footer;
