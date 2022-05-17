import styles from './TeamBlock.module.css';

function TeamBlock() {
  return (
    <div class={styles.TeamBlock}>
      <div class={styles.Block}>
        <img class={styles.image} src={require('./1.webp')}/>
        <img class={styles.image} src={require('./2.png')}/>
        <img class={styles.image} src={require('./3.webp')}/>
        <img class={styles.image} src={require('./4.webp')}/>
        <img class={styles.image} src={require('./5.png')}/>
        <img class={styles.image} src={require('./6.webp')}/>
        <img class={styles.image} src={require('./7.webp')}/>
      </div>
      <div class={styles.TeamNames}>Dylan, Ranicha, Nienke, Valerie, Rik, Koen, Gertjan</div>
    </div>
  );
}

export default TeamBlock;
