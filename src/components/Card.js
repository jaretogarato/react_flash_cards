import React from 'react';

class Card extends React.Component {
  // state = { id: 0, frontText: "dummy text", backText: "dummy text",
  //          showFront: true, showBack: false, showEdit: false}

  state = {
    cards:[
      { id: 0, frontText: "card one front", backText: "card one back", showFront: true, showBack: false, showEdit: false},
      { id: 1, frontText: "card two front", backText: "card two back", showFront: true, showBack: false, showEdit: false},
      { id: 2, frontText: "card three front", backText: "card three back", showFront: true, showBack: false, showEdit: false}
    ]
  }

  // onFlashCardsClick, onDelete
  //   this.state.frontText
  //
  //   whatImShowing() = frontText
  // render  (front (by default) || back || edit form)

  displayCards = () => {
    const { cards } = this.state
    return cards.map(card => {
      return <div>{card.frontText}</div>
    })
  }

  render() {

    return (
      <div>Card dot js:
        {this.displayCards()}
      </div>
    )
  }
}

export default Card;
