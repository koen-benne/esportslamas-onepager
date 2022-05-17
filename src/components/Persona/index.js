import styles from './Persona.module.css';

function Persona() {
  return (
    <div class={styles.Persona}>
      <img class={styles.Video} src={require('./persona-vid.gif')}/>
      <div class={styles.Aspect}>Ouders</div>
      <div class={styles.Aspect}>Docenten</div>
      <div class={styles.Aspect}>Leerlingen</div>
      <div class={styles.Aspect}>Experts</div>
      <div class={styles.Name}>Martijn, 12</div>
    </div>
  );
}

export default Persona;
