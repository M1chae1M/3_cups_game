import React from "react";

class Confetti extends React.Component{
    state={
      classNameState:'',
    }
    componentDidMount(){
      let temporaryArray=Array.from(this.props.allEmotesState);
      setTimeout(()=>{
        if(this.props.LR==="left"){
          this.setState({classNameState:'toLeftConfetti'})
        }
        if(this.props.LR==="right"){
          this.setState({classNameState:'toRightConfetti'})
        }
        setTimeout(()=>{
          temporaryArray[this.props.ID].exist=false;
          // console.log(temporaryArray)
          this.props.changeState(temporaryArray)
          // console.log(this.props.allEmotesState)
        },1200)
      },this.props.delay*1000)
    }
    render(){
      const styles={
        Confetti:{
          position:'absolute',
          bottom:this.props.startPosition2+"px",
          left:this.props.startPosition+"%",
          opacity:"0",
          width:'100px',
          height:'100px',
          fontSize:'100px',
        },
      }
      return(
        <div id='Confetti' style={styles.Confetti} className={this.state.classNameState}>🎉</div>
      );
    }
}

export default Confetti;