import React from 'react';
import Menu from './Menu';
import Cup from './Cup';
import MenuButton from './MenuButton';
import StartButton from './StartButton';
import ProgressBar from './ProgressBar';
import backgroundIMG from './img/64476_tlo_kolor_drewna.jpg';

var tabWithCups=[0,1,2];
var speed=1500;
class GameArea extends React.Component{
    state={
        tabWithCupsState:tabWithCups,
        moves:3,
        CoinClassState:'',
        openedMenu:false,
        dificult:'Normal',
        mixing:false,
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
            backgroundImage:'url("'+backgroundIMG+'")',
            overflow:'hidden',
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
    const swap=()=>{
        var reps=1;
        this.props.resetVerdict()
        const rep=()=>{
            let dwoNumbers=[0,2]
            let firstRandomNumber=Math.round(Math.random()*2);
            let secoundRandomNumber=
                firstRandomNumber===0?1:
                    firstRandomNumber===2?1:
                        dwoNumbers[Math.round(Math.random()*1)]

            let c1=document.querySelectorAll('#Cup')[firstRandomNumber].getBoundingClientRect().left
            let c2=document.querySelectorAll('#Cup')[secoundRandomNumber].getBoundingClientRect().left
            let roznica=c1-c2;

            document.querySelector(':root').style.setProperty('--toLeft', roznica+'px');
            document.querySelector(':root').style.setProperty('--toRight', ((roznica)*(-1))+'px');
            document.querySelectorAll('#Cup')[firstRandomNumber].classList.add('toRight');
            document.querySelectorAll('#Cup')[secoundRandomNumber].classList.add('toLeft');

            setTimeout(()=>{
                document.querySelectorAll('#Cup')[firstRandomNumber].classList.remove('toRight');
                document.querySelectorAll('#Cup')[secoundRandomNumber].classList.remove('toLeft');
            },speed)

            let a1=tabWithCups[firstRandomNumber];
            tabWithCups[firstRandomNumber]=tabWithCups[secoundRandomNumber];
            tabWithCups[secoundRandomNumber]=a1;
            this.setState({tabWithCupsState:tabWithCups});
        }
        const loop=()=>{
            if(reps<=this.state.moves){
                if(reps===1){
                    checkAllCups();
                    setTimeout(()=>{
                        rep();
                        this.setState({mixing:true});
                        setTimeout(()=>{
                            reps+=1;
                            loop();
                        },speed)
                    },speed);
                }else{
                    rep();
                        setTimeout(()=>{
                            reps++;
                            loop();
                        },speed);
                }
                if(reps===this.state.moves){
                    setTimeout(()=>{
                        this.setState({mixing:false});
                    },1000);
                }
            }
        }
        loop();
    }
    const openMenu=()=>{
        this.setState({openedMenu:!this.state.openedMenu})
    }
    const changeInputNumber=(e)=>{
        this.setState({moves:parseInt(e.target.value)})
    }
    const changeInputSelect=(e)=>{
        this.setState({dificult:e.target.value});
        // eslint-disable-next-line
        switch(e.target.value){
            case 'Normal':
                document.querySelector(':root').style.setProperty('--speedOfAnimation','1s');
                speed=1500;
                break;
            case 'Slow':
                document.querySelector(':root').style.setProperty('--speedOfAnimation','1.5s');
                speed=2000;
                break;
            case 'Fast':
                document.querySelector(':root').style.setProperty('--speedOfAnimation','0.5s');
                speed=1000;
                break;
        }
    }
    return(
      <div id='GameArea' style={styles.GameArea}>
        {
            this.state.mixing===true?
                <ProgressBar speed={speed} moves={this.state.moves}/>
                    :null
        }
        {
            this.state.openedMenu===false && this.state.mixing===false?
                <StartButton swap={swap}/>
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
                    changeInputNumber={changeInputNumber}
                    moves={this.state.moves}
                    dificult={this.state.dificult}
                    changeInputSelect={changeInputSelect}
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
        {/* {
            this.state.verdict==='win'?
                <Verdict />:
                    null
        } */}
      </div>
    );
  }
}

export default GameArea;