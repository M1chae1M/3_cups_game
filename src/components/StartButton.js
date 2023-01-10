import React from 'react';

class StartButton extends React.Component{
  render(){
    const styles={
      StartButton:{
        position:'absolute',
        top:'20px',
        borderRadius:'20px',
        width:'80px',
        paddingLeft:'5px',
        paddingRight:'5px',
        paddingTop:'5px',
        paddingBottom:'5px',
        border:'solid var(--darkBrown) 3px',
        backgroundColor:'var(--lightBrown)',
      },
    }
    return(
      <input
        type="button"
        value="Start!"
        id="StartButton"
        style={styles.StartButton}
        onClick={this.props.swap}
      />
    );
  }
}

export default StartButton;