import React from 'react'
import loadingGif from "../assets/loadingGif.svg"

export default function LoadingGif() {
  return (
    <div><img src={loadingGif} alt="Loading" className="loading-gif" /></div>
  )
}
