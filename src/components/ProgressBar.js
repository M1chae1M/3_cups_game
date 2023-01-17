import React from 'react';

class ProgressBar extends React.Component{
  render(){
    var animationDuration=((this.props.moves*this.props.speed)-500)/1000;
    const styles={
      ProgressBar:{
        position:'absolute',
        width:'80%',
        top:'20px',
        height:'20px',
        border:'solid var(--darkBrown) 5px',
        borderRadius:'30px',
        overflow:'hidden',
      },
      loader:{
        backgroundColor:'var(--lightBrown)',
        width:'100%',
        height:'20px',
        animation:'loading '+animationDuration+'s linear forwards',
        transition:'all '+animationDuration+'s linear forwards',
      },
    }
    return(
      <div id='ProgressBar' style={styles.ProgressBar}>
        {console.log('animationDuration '+animationDuration)}
        <div id='loader' style={styles.loader}></div>
      </div>
    );
  }
}

export default ProgressBar;