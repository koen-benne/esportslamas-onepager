import Container from '../Container';
import styles from './Hero.module.css';

function Hero({}) {
  return (
    <section className={styles.hero}>
        <Container>
          <h1>Esports Lama's</h1>
          <p>Een team gecombineerd met leerlingen van CMD & CMGT om iets mooi's te creeeren</p>
            <img src={require('./img.png')} alt="hero"/>
            <span className={styles.desc}>Dylan, Ranicha, Nienke, Valerie, Rik, Koen, Gertjan</span>
      </Container>
    </section>
  );
}

export default Hero;
