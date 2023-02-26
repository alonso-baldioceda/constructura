import React, { useState, useEffect } from "react"

const ProgressBar = () => {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    progressBarCalc()
    window.addEventListener("scroll", progressBarCalc)

    return () => {
      window.removeEventListener("scroll", progressBarCalc)
    }
  }, [])

  const progressBarCalc = () => {
    const scrollTotal = document.documentElement.scrollTop
    const heightWin =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    const newScroll = `${(scrollTotal / heightWin) * 100}%`

    setScroll(newScroll);
  }

  const progressMainWrapper = {
    background: "rgba(255, 255, 255, 0.14)",
    height: "6px",
    left: 0,
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 101,
  }

  const progressMainStyle = {
    background: "#3182ce",
    height: "6px",
    width: scroll,
  }

  return (
    <div className="progress-bar" style={progressMainWrapper}>
      <div style={progressMainStyle} />
    </div>
  )
}

export default ProgressBar
