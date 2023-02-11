import * as React from "react"

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const Monat = new Date().toLocaleDateString('en-US', options )
const date1 = new Date('5/12/2021')
const date2 = new Date(Monat)
const Difference_In_Time = date2.getTime() - date1.getTime()
const Difference_In_Days = Difference_In_Time / (1000*60*60*24)
const RoundedResult = Math.round(Difference_In_Days)

const Timecalc = () => {
  return(
    <div>
      <div>⚓️ Today is
        <span> {Monat}</span>
      </div>
      <div>🤯 It's been
        <span> {RoundedResult} since this practice began.</span>
      </div>
    </div>
  )
}
export default Timecalc