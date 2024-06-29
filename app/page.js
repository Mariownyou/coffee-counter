'use client';
import { useState, useEffect } from 'react';
import { Lilita_One } from "next/font/google";

const lilita = Lilita_One({ subsets: ["latin"], weight: ['400'] })

export default function Home() {
  const [cupsPerDay, setCupsPerDay] = useState('');
  const [results, setResults] = useState({
    cupsPerYear: 0,
    caffeinePerYear: 0,
    hoursPerYear: 0,
    chocolateEquivalent: 0,
    energyDrinksEquivalent: 0,
    disposableCups: 0
  });

  useEffect(() => {
    const cupsPerYear = cupsPerDay * 365;
    const caffeinePerYear = cupsPerYear * 95;
    const hoursPerYear = cupsPerYear * 10 / 60;
    const chocolateEquivalent = Math.round(caffeinePerYear / 43 / 1000);
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
  }, [cupsPerDay]);

  return (
    <div className="container" style={{ padding: '20px' }}>
      <h1 className="title">☕ Coffee Counter</h1>
      <form style={{ marginBottom: '20px' }}>
        <label className="label is-size-3" style={{ marginRight: '10px' }}>
          In average I drink
          <input
            className="input"
            type="number"
            value={cupsPerDay}
            onChange={(e) => setCupsPerDay(e.target.value)}
            style={{ width: '60px', marginLeft: '10px', marginTop: '5px', marginRight: '10px', textAlign: 'center' }}
          />
          cups of coffee per day.
        </label>
      </form>

      {results && (
        <div className="box">
          <h2 className="subtitle">Wow! Here are your results:</h2>
          <p className="is-size-3">📅 You drink <strong className={"is-size-1 " + lilita.className}>{results.cupsPerYear}</strong> cups of coffee per year.</p>
          <p className="is-size-3">💊 That's about <strong className={"is-size-1 " + lilita.className}>{results.caffeinePerYear}</strong> mg of caffeine! Impressive!</p>
          <p className="is-size-3">⏳ You spend approximately <strong className={"is-size-1 " + lilita.className}>{results.hoursPerYear.toFixed(2)}</strong> hours on coffee breaks per year.</p>
          <p className="is-size-3">🍫 This is equivalent to <strong className={"is-size-1 " + lilita.className}>{results.chocolateEquivalent}</strong> kg of dark chocolate.</p>
          <p className="is-size-3">⚡ Or <strong className={"is-size-1 " + lilita.className}>{results.energyDrinksEquivalent}</strong> cans of energy drinks!</p>
          <p className="is-size-3">🌍 You use <strong className={"is-size-1 " + lilita.className}>{results.disposableCups}</strong> disposable cups per year. Let's take care of the environment!</p>
        </div>
      )}
    </div>
  );
}
