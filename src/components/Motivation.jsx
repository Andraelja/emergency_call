import React, { useState } from 'react'

const MOTIVATIONS = [
  'Ingat: kemajuan kecil tetap kemajuan.',
  'Tarik napas, kamu sedang melakukan yang terbaik.',
  'Setiap langkah maju layak dirayakan.',
  'Sadari pencapaian hari ini, sekecil apa pun itu.',
  'Kamu tidak sendiri — langkah kecil mendatangkan perubahan.'
]

export default function Motivation() {
  const [idx, setIdx] = useState(Math.floor(Math.random()*MOTIVATIONS.length))
  function next() {
    setIdx((s) => (s+1) % MOTIVATIONS.length)
  }
  return (
    <div className="card motivation" role="note">
      <h3>Pesan Motivasi</h3>
      <p className="quote">“{MOTIVATIONS[idx]}”</p>
      <button className="link-like" onClick={next}>Pesan lain</button>
    </div>
  )
}
