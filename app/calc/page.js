'use client';
import { useState, useEffect } from 'react';
import styles from '../calc/page.module.css'


export default function Calc() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sumas, setSumas] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Cargar sumas desde el Local Storage al cargar la página
    const storedSumas = localStorage.getItem('sumas');
    if (storedSumas) {
      setSumas(JSON.parse(storedSumas));
    }
  }, []);

  useEffect(() => {
    // Guardar sumas en el Local Storage cuando haya cambios
    localStorage.setItem('sumas', JSON.stringify(sumas));
  }, [sumas]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'num1') {
      if (!isNaN(value)) {
        setNum1(Number(value));
        setError('');
      } else {
        setError('Debe ingresar un número válido');
      }
    } else if (name === 'num2') {
      if (!isNaN(value)) {
        setNum2(Number(value));
        setError('');
      } else {
        setError('Debe ingresar un número válido');
      }
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    if (isNaN(num1) || isNaN(num2)) {
      setError('Debe ingresar números válidos para realizar la suma');
    } else {
      const resultado = num1 + num2;
      const nuevaSuma = `${num1} + ${num2} = ${resultado}`;
      setSumas([...sumas, nuevaSuma]);
      setError('');
    }
  };


  return (
    <div className="divForm">
      <h1 className="divForm__title">Suma App</h1>
      <form id="form" onSubmit={handleSubmit}>
        <label htmlFor="number-one">
          Número 1:
          <input
            name="num1"
            value={num1}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="number-two">
          Número 2:
          <input
            name="num2"
            value={num2}
            onChange={handleInputChange}
          />
        </label>
        {error && <p className="error">{error}</p>}
        <button className="form__button" type="submit">
          Sumar
        </button>
      </form>
      <h2 className="divForm__h2">Sumas realizadas:</h2>
      <ul className="divForm__list">
        {sumas.map((suma, index) => (
          <li key={index}>{suma}
          </li>
        ))}
      </ul>
    </div>
  );
}

