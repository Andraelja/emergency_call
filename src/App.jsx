import React, { useMemo, useState } from 'react'
import Summary from './components/Summary'
import MoodChart from './components/MoodChart'
import Motivation from './components/Motivation'

const dummySessions = [
  { date: '2025-10-01', duration: 45 },
  { date: '2025-10-08', duration: 50 },
  { date: '2025-10-15', duration: 40 },
  { date: '2025-10-22', duration: 55 },
]

const dummyMoods = [
  { day: 'Mon', value: 6 },
  { day: 'Tue', value: 7 },
  { day: 'Wed', value: 5 },
  { day: 'Thu', value: 6 },
  { day: 'Fri', value: 8 },
  { day: 'Sat', value: 7 },
  { day: 'Sun', value: 8 },
]

export default function App() {
  const [sessions, setSessions] = useState(dummySessions)
  const [moods] = useState(dummyMoods)

  const summary = useMemo(() => {
    const total = sessions.length
    const avg = (sessions.reduce((s, x) => s + x.duration, 0) / Math.max(1, total)).toFixed(0)
    return { total, avg }
  }, [sessions])

  function addSession() {
    const next = { date: new Date().toISOString().slice(0,10), duration: 40 + Math.round(Math.random()*20) }
    setSessions(prev => [next, ...prev].slice(0,10))
    // small optional toast via alert (kept minimal)
    const el = document.getElementById('toast')
    if (el) {
      el.classList.add('show')
      setTimeout(()=> el.classList.remove('show'), 2000)
    }
  }

  return (
    <div className="app">
      <header className="topbar">
        <h1>Wellness Tracker</h1>
        <nav>
          <button className="btn" onClick={addSession}>Tambah sesi (dummy)</button>
        </nav>
      </header>

      <main className="container">
        <section className="left">
          <Summary summary={summary} />
          <Motivation />
        </section>

        <section className="right">
          <MoodChart data={moods} />
          <div className="card sessions">
            <h3>Riwayat Sesi Singkat</h3>
            <ul>
              {sessions.map((s, idx) => (
                <li key={idx}>
                  <div>{s.date}</div>
                  <div>{s.duration} menit</div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <div id="toast" className="toast">Data diperbarui</div>
    </div>
  )
}
