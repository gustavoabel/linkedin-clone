import styles from "../styles/Profile.module.css";

import Intro from "../components/Intro";

function Profile() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Intro />
      </div>
      <div className={styles.aside}>People also viewed</div>
    </div>
  );
}

export default Profile;
