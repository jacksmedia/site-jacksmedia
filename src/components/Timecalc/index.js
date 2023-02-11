import * as React from "react"

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const Monat = new Date().toLocaleDateString('en-US', options )


const Timecalc = () => {
  return(
    <div>⚓️ Today is
      <span> {Monat}</span>
    </div>
  )
}
export default Timecalc