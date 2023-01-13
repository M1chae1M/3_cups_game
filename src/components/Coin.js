import React from 'react';

class Coin extends React.Component{
  render(){
    const styles={
      Coin:{
        border:'solid var(--darkYellow) 3px',
        backgroundColor:'var(--lightYellow)',
        borderRadius:'50%',
        color:'var(--darkYellow)',
        fontWeight:'bold',
        width:'30px',
        height:'30px',
        position:'absolute',
        bottom:'0%',
        opacity:'0',
        display:'grid',
        justifyItem:'center',
        alignItems:'center',
        textAlign:'center',
        verticalAlign:'middle',
      },
      p:{
        lineHeight:'30px',
        transform:'translateY(-3px)',
      },
    }
    return(
      <div id='Coin' style={styles.Coin} className={this.props.CoinClassState}>
        <p style={styles.p}>1</p>
      </div>
    );
  }
}

export default Coin;