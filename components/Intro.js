import styles from "./Intro.module.css";

function Intro() {
  return (
    <div className={styles.wrapper}>
      <div>
        <img className={styles.cover} src="/capaignite.jpeg" />
        <img className={styles.picture} src="/gustavoabel.jpeg" />
      </div>
      <div className={styles.bottom}>
        <div>
          <h1>Gustavo Abel</h1>
          <h2>
            Student Full Stack Developer | JavaScript | NodeJS | ReactJS | React
            Native | TypeScript | HTML+CSS |
          </h2>
          <ul className={styles.lista}>
            <li>São Paulo, São Paulo, Brasil</li>
            <li>+ de 500 conexões</li>
            <br></br>
            <li>
              <a>Informações de Contato</a>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li className={styles.experienceListItem}>
              <img className={styles.logo} src="/imatec.png" />
              <a>Imatec Imagem e Tecnologia Ltda.</a>
            </li>
            <li className={styles.experienceListItem}>
              <img className={styles.logo} src="/unip.jpeg" />
              <a className={styles.text}>Universidade Paulista</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Intro;
