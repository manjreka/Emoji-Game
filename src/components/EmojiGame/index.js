import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import './index.css'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0}

  render() {
    const {score, topScore} = this.state
    const {emojisList} = this.props
    const newList = emojisList.filter(each => each.emojiName.includes('Face'))

    return (
      <div className="bg-container">
        <NavBar score={score} topScore={topScore} />
        <div className="content-container">
          <ul>
            {newList.map(eachEmoji => (
              <EmojiCard details={eachEmoji} key={eachEmoji.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default EmojiGame
