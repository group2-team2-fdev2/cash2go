import React from 'react'
import SmallNoticeIcon from './SmallNoticeIcon'

export default function Pending() {
  return (
    <div><div className="dashboard-overview-status-wrapper pending">
    <SmallNoticeIcon />
    <p className="dashboard-overview-status">Pending</p>
  </div></div>
  )
}
