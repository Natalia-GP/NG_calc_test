'use client'
import { useEffect, useState } from 'react';
import styles from './History.module.css';

const History = () => {
    const [sumas, setSumas] = useState([]);

    useEffect(() => {
        const storedSumas = localStorage.getItem('sumas');
        if (storedSumas) {
            setSumas(JSON.parse(storedSumas));
        }
    }, []);

    useEffect(() => {
        // Guardar sumas en el Local Storage cuando haya cambios
        localStorage.setItem('sumas', JSON.stringify(sumas));
    }, [sumas]);

    const clearHistory = () => {
        setSumas([]);
        localStorage.removeItem('sumas');
    };

    return (
        <div className={styles.div}>
            <h1 className={styles.title}>Historial de Sumas</h1>
            {sumas.length > 0 ? (
                <div>
                    <ul className={styles.list}>
                        {sumas.map((suma, index) => (
                            <li key={index}>{suma}</li>
                        ))}
                    </ul>
                    <button className={styles.clearButton} onClick={clearHistory}>
                        Limpiar Historial
                    </button>
                </div>
            ) : (
                <p className={styles.text}>No hay sumas guardadas</p>
            )
            }
        </div >
    );
};

export default History;
