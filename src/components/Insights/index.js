import Container from '../Container';
import styles from './Insights.module.css';

function Insights() {
  return (
    <div class={styles.Insights}>
        <Container>
            <div class={styles.Insights_title}>
                Belangrijke inzichten
            </div>
            <div class={styles.row}>
                <div class={styles.column}>
                    <div class={styles.Insights_cardsItem}>
                        <h4 class={styles.Insights_cardtitle}>Videogames verbeteren de aandacht capaciteit in het algemeen</h4>
                        <hr class={styles.Insights_cardDivider}></hr>
                        <p class={styles.Insights_cardSubTitle}>Desk research</p>
                    </div>
                </div>
                <div class={styles.column}>
                    
                </div>
                <div class={styles.column}>
                    <div class={styles.Insights_cardsItem}>
                        <h4 class={styles.Insights_cardtitle}>Videogames verbeteren de aandacht capaciteit in het algemeen</h4>
                        <hr class={styles.Insights_cardDivider}></hr>
                        <p class={styles.Insights_cardSubTitle}>Desk research</p>
                    </div>
                </div>
            </div>

            <div class={styles.row}>
                <div class={styles.column}>
                    <div class={styles.Insights_cardsItem}>
                        <h4 class={styles.Insights_cardtitle}>Videogames verbeteren de aandacht capaciteit in het algemeen</h4>
                        <hr class={styles.Insights_cardDivider}></hr>
                        <p class={styles.Insights_cardSubTitle}>Desk research</p>
                    </div>
                </div>
                <div class={styles.column}>
                    
                </div>
                <div class={styles.column}>
                    <div class={styles.Insights_cardsItem}>
                        <h4 class={styles.Insights_cardtitle}>Videogames verbeteren de aandacht capaciteit in het algemeen</h4>
                        <hr class={styles.Insights_cardDivider}></hr>
                        <p class={styles.Insights_cardSubTitle}>Desk research</p>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  );
}

export default Insights;