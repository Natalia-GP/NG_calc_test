'use client'
import { useEffect, useState } from 'react';
import styles from './History.module.css'

const History = () => {
    const [sumas, setSumas] = useState([]);

    useEffect(() => {
        const storedSumas = localStorage.getItem('sumas');
        if (storedSumas) {
            setSumas(JSON.parse(storedSumas));
        }
    }, []);

    return (
        <div className={styles.div}>
            <h1 className={styles.title}>Historial de Sumas</h1>
            <ul className={styles.list}>
                {sumas.map((suma, index) => (
                    <li key={index}>{suma}</li>
                ))}
            </ul>
        </div>
    );
};

export default History;
