import Container from '../Container';
import styles from './Concepts.module.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'

function Concepts() {
  return (
    <div class={styles.persona}>
      <Container>
        <div>
          <h4 className={styles.title}>Our concepts</h4>
        </div>
        <Tabs>
          <TabPanel>
            <div className={styles.item}>
              <div className={styles.intro}>
                <h3 class={styles.concept_title}>Concept 1: Jouw cito</h3>
                <p className={styles.concept_para}>Het concept 'Jouw cito' is een online spel war leerlingen en keuze kunnen maken uit
thema's, zoals sport, games en social media. Doordat de leering het zelf kan personaliseren
maakt de interactie van het oefenen van de cito leuker. De leering zal cito-vragen
beantwoorden door middel van een 3D object (bijvoorbeeld en voetbal).</p>
              </div>
              <img class={styles.video} src={require('./concept1.png')} alt="img"/>
            </div>
          </TabPanel>
          <TabPanel>
          <div className={styles.item}>
              <div className={styles.intro}>
                <h3 class={styles.concept_title}>Concept 2: CITO City</h3>
                <p className={styles.concept_para}>Het concept "CITO City" is een game waarbij leerlingen opdrachten moeten maken om verder te komen. Elk vak heeft een eigen gebouw, wat bestaat uit uit meerdere vierdiepingen. Bij elk goed antwoordt wordt er een verdieping bijgebouwd met een moeilijkere vraag, tot de leerling de eindbaas bereikt. Als de leerling de eindbaas verslaat wordt er een nieuw gebouwd geplaatst in de open world van het behaalde vak. Zo creëert de leering een een eigen wereld die hun kunnen opbouwen. Als de leerling de vragen niet goed beantwoord stort langzamerhand het gebouw in.</p>
              </div>
              <img class={styles.video} src={require('./concept2.png')} alt="img"/>
            </div>
          </TabPanel>
          <TabPanel>
          <div className={styles.item}>
              <div className={styles.intro}>
                <h3 class={styles.concept_title}>Concept 3: World of cito</h3>
                <p className={styles.concept_para}>Het concept "World of CITO" is een open world game waarin je kan rondlopen en CITO vragen kan ontdekken en beantwoorden. Als je een veel genoeg tijd besteed hebt aan het oefenen van de CITO vragen ga je naar de volgende wereld die er indrukwekkender uit ziet dan de vorige. Er is ook een multiplayer aspect waarbij je aan mede leerlingen kan laten zien hoe hard je gewerkt hebt.</p>
              </div>
              <img class={styles.video} src={require('./concept3.png')} alt="img"/>
            </div>
          </TabPanel>
          <TabList className={styles.tab}>
            <Tab className={styles.li}>Title 1</Tab>
            <Tab className={styles.li}>Title 2</Tab>
            <Tab className={styles.li}>Title 2</Tab>
          </TabList>
        </Tabs>
      </Container>
    </div>
  );
}

export default Concepts;
