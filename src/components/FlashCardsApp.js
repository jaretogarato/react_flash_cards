import React from 'react'
import Card from './Card'
import Deck from './Deck'

class FlashCardsApp extends React.Component {
  state = {
    deck: [
    {front: "Is this the first card?",
    back: "Yes, this is the first card."},
    {front: "Is this card 22?",
    back: "nope, this is card 2"},
    {front: "is this card three?",
    back: "you betcha."}
    ], id: 0
  }

  render() {
    return(
      <div>
        <div>This is the Flash Cards App dot js</div>
        <div style={{ border: 1, padding:20, backgroundColor: 'red' }}> yo <Deck deck={this.state.deck.front} /></div>
      </div>
    )
  }
}

export default FlashCardsApp
