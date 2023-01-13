import React from 'react';
import Menu from './Menu';
import Cup from './Cup';
import MenuButton from './MenuButton';
import StartButton from './StartButton';
import ProgressBar from './ProgressBar';
import backgroundIMG from './img/64476_tlo_kolor_drewna.jpg';
// import backgroundIMG from './img/behang-met-lichte-verticale-houten-planken_9.webp';

var tabWithCups=[0,1,2];
class GameArea extends React.Component{
    state={
        tabWithCupsState:tabWithCups,
        moves:3,
        CoinClassState:'',
        openedMenu:false,
        dificult:'Normal',
        mixing:false,
        speed:1500,
    }
  render(){
    const styles={
        GameArea:{
            border:'solid var(--darkBrown) 5px',
            borderRadius:'30px',
            width:'80vw',
            height:'80vh',
            display:'grid',
            gridTemplateColumns:'1fr 1fr 1fr',
            justifyItems:'center',
            alignItems:'center',
            position:'relative',
            backgroundColor:'var(--tableBackgroundColor)',
            background:'var(--tableBackgroundGradient)',
            overflow:'hidden',
            // backgroundImage:'url("'+backgroundIMG+'")',
        },
    }
    const checkAllCups=()=>{
        Array.from(document.querySelectorAll('#Cup')).map((x,i)=>x.classList.add('checkCoin'));
        this.setState({CoinClassState:'dropCoin'});

        setTimeout(()=>{
            Array.from(document.querySelectorAll('#Cup')).map((x,i)=>x.classList.remove('checkCoin'));
            this.setState({CoinClassState:''});
        },1000);
    }
    const changeStateTabWithCups=(tab)=>{
        this.setState({tabWithCupsState:tab});
    }
    const changeStateMixing=(mixingNewState)=>{
        this.setState({mixing:mixingNewState});
    }
    const changeSpeedState=(newSpeed)=>{
        this.setState({speed:newSpeed});
    }
    const openMenu=()=>{
        this.setState({openedMenu:!this.state.openedMenu});
    }
    const changeInputNumber=(e)=>{
        this.setState({moves:parseInt(e.target.value)});
    }
    const changeStateInputSelect=(targ)=>{
        this.setState({dificult:targ});
    }
    return(
      <div id='GameArea' style={styles.GameArea}>
        {
            this.state.mixing===true?
                <ProgressBar speed={this.state.speed} moves={this.state.moves}/>
                    :null
        }
        {
            this.state.openedMenu===false && this.state.mixing===false?
                <StartButton
                    checkAllCups={checkAllCups}
                    resetVerdict={this.props.resetVerdict}
                    changeStateTabWithCups={changeStateTabWithCups}
                    changeStateMixing={changeStateMixing}
                    tabWithCups={tabWithCups}
                    moves={this.state.moves}
                    speed={this.state.speed}
                />
                    :null
        }
        {
            this.state.mixing===false?
                <MenuButton
                    openedMenu={this.state.openedMenu}
                    openMenu={openMenu}
                />
                    :null
        }
        {
            this.state.openedMenu===true?
                <Menu
                    moves={this.state.moves}
                    dificult={this.state.dificult}
                    speed={this.state.speed}
                    changeInputNumber={changeInputNumber}
                    changeSpeedState={changeSpeedState}
                    changeStateInputSelect={changeStateInputSelect}
                />:
            null
        }
        {
            Array.from(this.state.tabWithCupsState).map((x,i)=>
                <Cup
                    key={i}
                    haveCoin={x===1?true:false}
                    CoinClassState={this.state.CoinClassState}
                    changeVerdict={this.props.changeVerdict}
                    mixing={this.state.mixing}
                    changeState={this.props.changeState}
                />
            )
        }
      </div>
    );
  }
}

export default GameArea;