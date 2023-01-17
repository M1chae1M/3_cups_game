import React from 'react';

class ProgressBar extends React.Component{
  render(){

    //slow => 2000
    // normal => 1500
    // fast => 800

    var sped=((this.props.moves*this.props.speed)-500)/1000;
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
        animation:'loading '+sped+'s linear forwards',
        transition:'all '+sped+'s linear forwards',
      },
    }
    return(
      <div id='ProgressBar' style={styles.ProgressBar}>
        {console.log('sped '+sped)}
        <div id='loader' style={styles.loader}></div>
      </div>
    );
  }
}

export default ProgressBar;