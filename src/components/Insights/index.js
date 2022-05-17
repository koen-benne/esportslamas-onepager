import Container from '../Container';
import styles from './Insights.module.css';
import ArrowImage from './arrow.svg';

function Insights() {
  return (
    <div class={styles.Insights}>
        <div class={styles.Insights_title}>
            Belangrijke inzichten
        </div>
        <div class={styles.Container}>
            <div class={styles.Column}>
                <div class={styles.Row}>
                    <div class={styles.Insights_cardsItem}>
                        <h4 class={styles.Insights_cardtitle}>Videogames verbeteren de aandacht capaciteit in het algemeen</h4>
                        <hr class={styles.Insights_cardDivider}></hr>
                        <p class={styles.Insights_cardSubTitle}>Desk research</p>
                    </div>
                </div>
                <div class={styles.Row}>
                    <div class={styles.Insights_cardsItem}>
                        <h4 class={styles.Insights_cardtitle}>Videogames verbeteren de aandacht capaciteit in het algemeen</h4>
                        <hr class={styles.Insights_cardDivider}></hr>
                        <p class={styles.Insights_cardSubTitle}>Desk research</p>
                    </div>
                </div>
            </div>
            <div class={styles.Arrow}>
                <svg width="162" height="686" viewBox="0 0 162 686" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M65.1783 677.856C70.4474 665.475 75.7144 653.117 80.9835 640.736C82.5826 636.996 79.0288 633.589 75.4343 633.979C68.4026 634.772 61.3485 635.563 54.3189 636.333C47.0406 591.439 55.8933 545.381 72.8433 503.091C90.888 458.082 126.167 415.108 123.705 364.32C123.181 353.531 120.047 340.153 114.649 327.221C136.156 310.866 152.368 285.524 158.645 261.498C166.977 229.611 158.86 195.537 137.507 171.567C145.731 141.559 139.153 105.331 126.548 79.4336C103.518 32.1668 55.5555 1.77472 3.24974 0.619266C-0.392028 0.548882 -1.00927 6.13329 2.70958 6.34746C42.2554 8.48389 80.1513 26.9146 104.541 58.565C126.731 87.3459 138.797 128.095 130.222 164.237C126.545 160.932 122.549 157.893 118.276 155.147C91.3218 137.952 33.4891 133.409 32.3577 178.329C31.3269 219.3 77.2234 232.911 107.686 213.623C120.194 205.701 128.696 194.603 133.997 181.884C150.059 202.352 156.437 229.641 150.479 255.813C145.184 279.045 130.456 302.82 110.548 318.325C97.6728 293.13 76.0464 272.548 48.5621 280.923C32.3006 285.874 23.4783 301.81 28.7793 318.169C34.7328 336.499 52.7275 346.091 71.2082 344.763C83.9618 343.849 96.1262 339.331 107.158 332.408C117.121 357.715 115.294 387.189 105.16 413.195C97.0277 434.065 85.4458 453.314 75.5766 473.384C65.7426 493.32 57.5274 514.115 51.6055 535.58C42.4409 568.845 38.9371 603.598 44.3548 637.464C40.6908 637.869 37.0023 638.295 33.3383 638.7C30.0933 638.508 26.8792 638.228 23.6266 637.876C21.205 637.602 19.4541 639.348 18.8787 641.364C17.0553 643.399 17.5215 647.106 19.6488 649.059C32.3922 660.749 45.1827 672.421 57.8951 684.2C62.0213 688.025 67.0267 682.285 65.1783 677.856ZM89.0453 212.32C72.344 216.888 53.8374 212.003 45.5717 195.843C36.7343 178.537 43.1126 158.479 62.5931 153.036C79.4441 148.322 98.4353 153.594 112.847 162.735C118.129 166.077 122.907 169.963 127.215 174.26C120.69 192.028 107.865 207.155 89.0453 212.32ZM77.6142 334.263C59.7798 338.111 34.6976 328.942 36.5783 306.595C37.4294 296.368 46.718 290.146 56.1858 288.991C67.3274 287.63 77.6858 293.612 85.5862 300.91C92.9247 307.676 98.6809 315.363 103.048 323.602C95.1652 328.615 86.611 332.336 77.6142 334.263Z" fill="#3F3E3E"/>
                </svg>
            </div>

            <div class={styles.Column}>
                <div class={styles.Row}>
                    <div class={styles.Insights_cardsItem}>
                        <h4 class={styles.Insights_cardtitle}>Videogames verbeteren de aandacht capaciteit in het algemeen</h4>
                        <hr class={styles.Insights_cardDivider}></hr>
                        <p class={styles.Insights_cardSubTitle}>Desk research</p>
                    </div>
                </div>
                <div class={styles.Row}>
                    <div class={styles.Insights_cardsItem}>
                        <h4 class={styles.Insights_cardtitle}>Videogames verbeteren de aandacht capaciteit in het algemeen</h4>
                        <hr class={styles.Insights_cardDivider}></hr>
                        <p class={styles.Insights_cardSubTitle}>Desk research</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Insights;
