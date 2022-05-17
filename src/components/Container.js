import styles from './Container.module.css';

function Container({children}) {
  return (
    <div class={styles.container}>
        {children}
    </div>
  );
}

export default Container;
