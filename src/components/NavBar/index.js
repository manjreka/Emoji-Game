import './index.css'

const NavBar = props => {
  const {score, topScore} = props
  return (
    <nav className="bg">
      <div className="logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <p>Emoji Game</p>
      </div>
      <div className="score">
        <p className="para">score: {score}</p>
        <p className="para">Top score: {topScore}</p>
      </div>
    </nav>
  )
}

export default NavBar
