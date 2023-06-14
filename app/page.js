'use client';
import { useState } from 'react';

export default function Home() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sumas, setSumas] = useState([]);

  //functions

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'num1') {
      setNum1(Number(value));
    } else if (name === 'num2') {
      setNum2(Number(value));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const resultado = num1 + num2;
    const nuevaSuma = `${num1} + ${num2} = ${resultado}`;
    setSumas([...sumas, nuevaSuma]); //crea nuevo array que tiene los elem exist en sumas seguidos por después se actualiza el estad sumas con este nuevo array
  };

  return (
    <div className="divForm">
      <h1 className="divForm__title">Suma App</h1>
      <form id="form" onSubmit={handleSubmit}>
        <label htmlFor="number-one">
          Número 1:
          <input
            type="number"
            name="num1"
            value={num1}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="number-two">
          Número 2:
          <input
            type="number"
            name="num2"
            value={num2}
            onChange={handleInputChange}
          />
        </label>
        <button className="form__button" type="submit">
          Sumar
        </button>
      </form>
      <h2 className="divForm__h2">Sumas realizadas:</h2>
      <ul className="divForm__list">
        {sumas.map((suma, index) => (
          <li key={index}>{suma}</li>
        ))}
      </ul>
    </div>
  );
}
