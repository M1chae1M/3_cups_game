import React from 'react';

class Verdict extends React.Component{
  render(){
    const styles={
      Verdict:{
        position:'absolute',
        fontSize:'3rem',
        overflow:'hidden',
      },
      youWin:{
        color:'yellow',
        textShadow:'grey 2px 1px',
        fontSize:'60px',
        fontWeight:'bold',
        textAlign:'center',
      },
      p:{
        textAlign:'center',
      },
    }
    return(
      <div id='Verdict' style={styles.Verdict}>
        <p style={styles.p}>🏆🏆🏆</p>
        <p style={styles.youWin} id="win">You win!</p>
      </div>
    );
  }
}

export default Verdict;