import Container from '../Container';
import styles from './TargetQuestionSection.module.css';

function TargetQuestionSection() {
  return (
    <div className={styles.targetquestion}>
        <Container>
          <div className={styles.row}>
            <div className={styles.item}>
                <h2>Our target question</h2>
                <h3 className={styles.title}>Hoe kunnen we leerlingen tussen de 8 en 12 jaar alvorens de cito toets beter voorbereiden door middel van Gamification?</h3>
            </div>
            <div>
               <img src={require('./leerling.webp')} alt="hero"/>
            </div>
            </div>
        </Container>
    </div>
  );
}

export default TargetQuestionSection;
