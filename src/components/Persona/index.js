import { skipPartiallyEmittedExpressions } from 'typescript';
import Container from '../Container';
import styles from './Persona.module.css';

function Persona() {
  return (
    <div class={styles.persona}>
      <Container>
        <div>
          <h4 className={styles.title}>Meet Martijn & The Stakeholders</h4>
          <p className={styles.desc}>Martijn zit in groep 8 van de basisschool. In zijn vrije tijd speelt hij graag spelletjes met vrienden. Sinds groep 5 wordt hij al voorbereid op de cito door proeftoetsen en opdrachten</p>
        </div>
      <span class={styles.aspect}>Ouders</span>
      <div class={styles.aspect}>Docenten</div>
      <div class={styles.aspect}>Leerlingen</div>
      <div class={styles.aspect}>Experts</div>
      <img class={styles.video} src={require('./persona-vid.gif')}/>
      </Container>
    </div>
  );
}

export default Persona;
