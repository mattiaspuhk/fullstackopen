import React, { useState } from 'react'

const Statistics = (all, title, good, neutral, bad) => {
  if (all === 0 && title === true) {
    return (
      <tr>
        <td>No feedback given</td>
      </tr>
    )
  }

  if (all === 0) {
    return (
      <tr>
        <td></td>
      </tr>
    )
  }

  return (
    <table>
      <tbody>
        <Statistics title={true} all={good+neutral+bad}/>
          <Statistics name="Good" value={good}/>
          <Statistics name="Neutral" all={good+neutral+bad} content={neutral}/>
          <Statistics name="Bad" all={good+neutral+bad} content={bad}/>
          <Statistics name="Average" all={good+neutral+bad} content={(good-bad)/(good+bad+neutral)}/>
          <Statistics name="Positive" all={good+neutral+bad} content={(good)/(bad+good+neutral)*100}/>
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const clickGood = () => {
    setGood(good + 1)
  }

  const clickNeutral = () => {
    setNeutral(neutral + 1)
  }

  const clickBad = () => {
    setBad(bad + 1)
  }

  return(
    <div>
      <div>
        <h1>give feedback</h1>
        <button onClick={clickGood}>Good</button>
        <button onClick={clickNeutral}>Neutral</button>
        <button onClick={clickBad}>Bad</button>
        <h1>statistics</h1>
        <Statistics  all={good+neutral+bad} title={true} good={good} neutral={neutral} bad={bad}/>
      </div>
    </div>
  )
}

export default App