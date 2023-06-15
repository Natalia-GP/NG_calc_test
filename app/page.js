'use client';

import { useRouter } from "next/navigation";
import styles from './pageHome.module.css';


export default function Home() {

  const router = useRouter()

  return (
    <>
      <div className={styles.divHome}>
        <h1 >Bienvenido.</h1>
        <p className={styles.textHome}>Para empezar pulsa el botón</p>
        <button className={styles.buttonHome} type="button" onClick={() => router.push('/calc')}>Comenzar</button>

      </div>

    </>

  );
}
