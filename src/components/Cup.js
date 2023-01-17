import React from 'react';
import Coin from './Coin';
import emote from './object/emote';
import CupSVG from './img/CupSVG';

class Cup extends React.Component{
    state={
      CupAnimationStateClass:'',
    }
  render(){
    const styles={
      Cup:{
        height:'120px',
        width:'80px',
        display:'grid',
        position:'relative',
        justifyItems:'center',
      },
    }
    const generateConfetti=()=>{
      let leftRight=["left", "right"];
      let randomNumber=Math.round(Math.random()*20+10);
      let allEmotes=[];
      Array(randomNumber).fill(0).map((x,i)=>allEmotes.push(
        new emote(
          i, Math.round(Math.random()*80+10), Math.round(Math.random()*120+50), leftRight[Math.round(Math.random()*1)], Math.round(Math.random()*10+1), true
        )
      ))
      this.props.changeState(allEmotes);
    }
    const checkCoin=(e)=>{
      if(this.props.mixing===false){
        this.setState({CupAnimationStateClass:'checkCoin'});
        if(e.target.querySelector('#Coin')){
          e.target.querySelector('#Coin').classList.add('dropCoin');
        }
        if(this.props.haveCoin===true){
          this.props.changeCoinClassState('dropCoin')
        }
        setTimeout(()=>{
          this.setState({CupAnimationStateClass:''});
            this.props.changeCoinClassState('');
        },1000);
        if(this.props.haveCoin===true){
          this.props.changeVerdict();
          generateConfetti();
        }
      }
      else if(this.props.mixing===true){
        console.log("You shouldn't pick cup before they stop mixing!");
      }
    }
    return(
      <div
        id='Cup'
        style={styles.Cup}
        onClick={checkCoin}
        className={this.state.CupAnimationStateClass}
      >
        <CupSVG />
        {
          this.props.haveCoin===true?
            <Coin CoinClassState={this.props.CoinClassState}/>
              :null
        }
      </div>
    );
  }
}

export default Cup;