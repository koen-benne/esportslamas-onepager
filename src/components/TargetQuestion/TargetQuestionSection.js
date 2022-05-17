import Container from '../Container';
import styles from './TargetQuestionSection.module.css';

function TargetQuestionSection() {
  return (
    <div className={styles.targetquestion}>
        <Container>
            <div className={styles.item}>
                <h3 className={styles.title}>Hoe kunnen we leerlingen tussen de 8 en 12 jaar alvorens de cito toets beter voorbereiden door middel van Gamification?</h3>
            </div>
        </Container>
    </div>
  );
}

export default TargetQuestionSection;
