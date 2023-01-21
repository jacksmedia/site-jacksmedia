import * as React from "react"

const Jahr = new Date().getFullYear()

const Timecalc = () => {
  return(
    <span>{Jahr}</span>
  )
}
export default Timecalc