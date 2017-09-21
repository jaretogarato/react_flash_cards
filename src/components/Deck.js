import React from 'react'
import Card from './Card'

class Deck extends React.Component {
  state = { card: "I am a card" }

  render() {
    return(
      <div>
        Deck
        // loop through props
        <Card card={this.state.card[0].frontText} />
        { this.state.card }
      </div>
    )
  }
}

export default Deck
