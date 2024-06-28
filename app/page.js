'use client';
import { useState } from 'react';

export default function Home() {
  const [cupsPerDay, setCupsPerDay] = useState('');
  const [results, setResults] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const cupsPerYear = cupsPerDay * 365;
    const caffeinePerYear = cupsPerYear * 95;
    const hoursPerYear = cupsPerYear * 10 / 60;
    const chocolateEquivalent = Math.round(caffeinePerYear / 43);
    const energyDrinksEquivalent = Math.round(caffeinePerYear / 80);
    const disposableCups = cupsPerYear;

    setResults({
      cupsPerYear,
      caffeinePerYear,
      hoursPerYear,
      chocolateEquivalent,
      energyDrinksEquivalent,
      disposableCups
    });
  };

  return (
    <div className="container" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 className="title">☕ Кофейный калькулятор</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <label className="label" style={{ marginRight: '10px' }}>Сколько чашек кофе вы выпиваете в день?</label>
        <div className="field is-grouped">
          <p className="control">
            <input
              className="input"
              type="number"
              value={cupsPerDay}
              onChange={(e) => setCupsPerDay(e.target.value)}
              style={{ width: '60px', textAlign: 'center' }}
              min="1"
              max="99"
            />
          </p>
          <p className="control">
            <button className="button is-primary" type="submit">Рассчитать</button>
          </p>
        </div>
      </form>

      {results && (
        <div className="box">
          <h2 className="subtitle">Вау! Вот ваши результаты:</h2>
          <p>📅 В год вы выпиваете <strong>{results.cupsPerYear}</strong> чашек кофе.</p>
          <p>💊 Это около <strong>{results.caffeinePerYear}</strong> мг кофеина! Впечатляет!</p>
          <p>⏳ За год вы тратите примерно <strong>{results.hoursPerYear.toFixed(2)}</strong> часов на кофе-паузы.</p>
          <p>🍫 Это как съесть <strong>{results.chocolateEquivalent}</strong> граммов темного шоколада.</p>
          <p>⚡ Или выпить <strong>{results.energyDrinksEquivalent}</strong> банок энергетиков!</p>
          <p>🌍 Вы использовали бы <strong>{results.disposableCups}</strong> одноразовых стаканчиков в год. Давайте заботиться об экологии!</p>
        </div>
      )}
    </div>
  );
}
