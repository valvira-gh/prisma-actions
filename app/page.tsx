import styles from './page.module.css';
import React from 'react';

const Home:React.FC = () => {

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to Prisma Actions learning platform!
      </h1>

    </main>
  )
}

export default Home;
