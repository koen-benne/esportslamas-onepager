import styles from './TeamBlock.module.css';

function TeamBlock() {
  return (
    <div class={styles.TeamBlock}>
      <div class={styles.Block}></div>
      <div class={styles.TeamNames}>Dylan, Ranicha, Nienke, Valerie, Rik, Koen, Gertjan</div>
    </div>
  );
}

export default TeamBlock;
