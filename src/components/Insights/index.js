import Container from '../Container';
import styles from './Insights.module.css';

function Insights() {
  return (
    <div class={styles.Insights}>
        <Container>
        <div className={styles.intro}>
            <h3 class={styles.Insights_title}>Important insights</h3>
            <p className={styles.para}>Belangrijke inzichten vanuit het onderzoek doormiddel van deskresearch, interviews en observatie. Hieruit hebben wij belangrijke informaties vergaderd voor een aansluitend concept</p>
        </div>
        <div class={styles.Container}>
            <div class={styles.Column}>
                    <div class={styles.Insights_cardsItem}>
                    <img class={styles.video} src={require('./gaming.png')} alt="img"/>
                    <h4 class={styles.Insights_cardtitle}>Interviews</h4>
                        <p class={styles.Insights_cardSubTitle}>Veel leerlingen vinden het fijn als er meer gamification wordt toegepast in het onderwijs</p>
                    </div>
                    <div class={styles.Insights_cardsItem}>
                    <img class={styles.video} src={require('./eenzaam.png')} alt="img"/>
                        <h4 class={styles.Insights_cardtitle}>Desk research</h4>
                        <p class={styles.Insights_cardSubTitle}>Samen gamen kan gevoelens van eenzaamheid tegengaan.</p>
                    </div>
            </div>
            <div class={styles.Column}>
                    <div class={styles.Insights_cardsItem}>
                    <img class={styles.video} src={require('./focus.png')} alt="img"/>
                    <h4 class={styles.Insights_cardtitle}>Desk research</h4>
                        <p class={styles.Insights_cardSubTitle}>Videogames verbeteren de aandacht capaciteit in het algemeen</p>
                    </div>
                    <div class={styles.Insights_cardsItem}>
                    <img class={styles.video} src={require('./leren.png')} alt="img"/>
                        <h4 class={styles.Insights_cardtitle}>Desk research</h4>
                        <p class={styles.Insights_cardSubTitle}>Serious gaming zorgt voor actief en zelfsturend leren, dit leidt tot meer inzicht en begrip in de leerstof</p>
                    </div>
            </div>
        </div>
        </Container>
    </div>
  );
}

export default Insights;
