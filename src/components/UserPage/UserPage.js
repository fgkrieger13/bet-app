import React, {Component} from 'react';
import { connect } from 'react-redux';
import BetItem from '../BetItem/BetItem';
import Footer from '../Footer/Footer';




// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
class UserPage extends Component {

  componentDidMount() {
    this.props.dispatch({type: 'GET_BETS'})
  }

  render() {
    return (
  <div>
    <h1 className= "currentBets"id="welcome">
      CURRENT BETS
    </h1>
    <div className="newBet" onClick={()=>{this.props.history.push('/info');}}>
      <p className="info">New Bet +</p>
    </div>
    <div>
      {this.props.bets.map((bet, i) => (
          <div className= "betItem" key={i}>
              <BetItem bet={bet}/>
          </div>
      ))}
    </div>
    <Footer />
  </div>
  );
 }
}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
  bets: state.bets,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
