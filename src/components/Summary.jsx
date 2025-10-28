import React from 'react'

export default function Summary({ summary }) {
  return (
    <div className="card summary" title="Ringkasan sesi">
      <h3>Ringkasan Sesi Konseling</h3>
      <div className="metrics">
        <div className="metric">
          <div className="label">Total Sesi</div>
          <div className="value">{summary.total}</div>
        </div>
        <div className="metric">
          <div className="label">Durasi Rata-rata</div>
          <div className="value">{summary.avg} menit</div>
        </div>
      </div>
    </div>
  )
}
