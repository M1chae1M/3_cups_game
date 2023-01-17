import React from 'react';
import ReactDOM from 'react-dom/client';
import GameArea from './components/GameArea';
import Verdict from './components/Verdict';
import Confetti from './components/Confetti';
import './index.css';

class App extends React.Component{
  state={
    verdict:'',
    allEmotesState:[],
  }
  render(){
    const styles={
      App:{
        width:'100vw',
        height:'100vh',
        display:'grid',
        justifyItems:'center',
        alignItems:'center',
        overflow:'hidden',
        backgroundColor:'var(--bodyBackgroundColor)',
        background:'var(--bodyBackgroundGradient)',
      },
    }
    const changeVerdict=()=>{
      setTimeout(()=>{
        this.setState({verdict:'win'});
      },700);
    }
    const resetVerdict=()=>{
      this.setState({verdict:''});
    }
    const changeState=(temp)=>{
      this.setState({allEmotesState:temp});
    }
    return(
      <div id='App' style={styles.App}>
        <GameArea changeVerdict={changeVerdict} resetVerdict={resetVerdict} changeState={changeState}/>
        {
          this.state.verdict==='win'?
            <Verdict changeState={changeState} allEmotesState={this.state.allEmotesState}/>:
              null
        }
        {
          this.state.allEmotesState.map((x,i)=>
            x.exist===true && this.state.verdict!==''?
              <Confetti
                allEmotesState={this.state.allEmotesState}
                ID={x.ID}
                exist={x.exist}
                key={i}
                startPosition={x.startPosition}
                startPosition2={x.startPosition2}
                LR={x.lOrR}
                delay={x.delay}
                changeState={changeState}
              />:
                null
          )
        }
      </div>
    );
  }
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);