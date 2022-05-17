import Container from './Container';
import styles from './Container.module.css';

function TargetQuestionSection({children}) {
  return (
    <div class={styles.targetquestion}>
        <Container>
            <div>
                <h3>Hoe kunnen we leerlingen tussen de 8 en 12 jaar alvorens de cito toets beter voorbereiden door middel van Gamification?</h3>
            </div>
        </Container>
    </div>
  );
}

export default TargetQuestionSection;
