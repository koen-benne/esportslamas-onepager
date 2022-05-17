import Container from '../Container';
import styles from './Persona.module.css';

function Persona() {
  return (
    <div class={styles.persona}>
      <Container>
      <span class={styles.aspect}>Ouders</span>
      <div class={styles.aspect}>Docenten</div>
      <div class={styles.aspect}>Leerlingen</div>
      <div class={styles.aspect}>Experts</div>
      <div class={styles.name}>Martijn, 12</div>
      <img class={styles.video} src={require('./persona-vid.gif')}/>
      </Container>
    </div>
  );
}

export default Persona;
