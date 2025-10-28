import React from 'react'

export default function MoodChart({ data }) {
  const w = 600, h = 200, pad = 24
  const values = data.map(d => d.value)
  const min = Math.min(...values, 0)
  const max = Math.max(...values, 10)
  const scaleX = (i) => pad + (i/(data.length-1))*(w-2*pad)
  const scaleY = (v) => h - pad - ((v - min)/(max - min))*(h-2*pad)
  const path = data.map((d,i)=> `${i===0 ? 'M' : 'L'} ${scaleX(i)} ${scaleY(d.value)}`).join(' ')

  return (
    <div className="card mood-chart" aria-label="Grafik perubahan mood">
      <h3>Perubahan Mood Mingguan</h3>
      <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="xMidYMid meet" className="chart">
        <defs>
          <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopOpacity="0.15" />
            <stop offset="100%" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={path} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d={`${path} L ${scaleX(data.length-1)} ${h-pad} L ${scaleX(0)} ${h-pad} Z`} fill="url(#g1)" />
        {data.map((d,i)=> (
          <g key={i}>
            <circle cx={scaleX(i)} cy={scaleY(d.value)} r="4" />
            <text x={scaleX(i)} y={h-4} className="tick" textAnchor="middle">{d.day}</text>
          </g>
        ))}
      </svg>
    </div>
  )
}
