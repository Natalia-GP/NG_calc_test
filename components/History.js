'use client'
import { useEffect, useState } from 'react';

const History = () => {
    const [sumas, setSumas] = useState([]);

    useEffect(() => {
        const storedSumas = localStorage.getItem('sumas');
        if (storedSumas) {
            setSumas(JSON.parse(storedSumas));
        }
    }, []);

    return (
        <div>
            <h1>Historial de Sumas</h1>
            <ul>
                {sumas.map((suma, index) => (
                    <li key={index}>{suma}</li>
                ))}
            </ul>
        </div>
    );
};

export default History;
