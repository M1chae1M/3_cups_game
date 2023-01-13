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
    const swap=()=>{
      var reps=1;
      this.props.resetVerdict();
      const rep=()=>{
        let dwoNumbers=[0,2],
        firstRandomNumber=Math.round(Math.random()*2),
        secoundRandomNumber=
            firstRandomNumber===0?1:
                firstRandomNumber===2?1:
                    dwoNumbers[Math.round(Math.random()*1)]

        let c1=document.querySelectorAll('#Cup')[firstRandomNumber].getBoundingClientRect().left,
        c2=document.querySelectorAll('#Cup')[secoundRandomNumber].getBoundingClientRect().left,
        roznica=c1-c2;

        document.querySelector(':root').style.setProperty('--toLeft', roznica+'px');
        document.querySelector(':root').style.setProperty('--toRight', ((roznica)*(-1))+'px');
        document.querySelectorAll('#Cup')[firstRandomNumber].classList.add('toRight');
        document.querySelectorAll('#Cup')[secoundRandomNumber].classList.add('toLeft');

        setTimeout(()=>{
          document.querySelectorAll('#Cup')[firstRandomNumber].classList.remove('toRight');
          document.querySelectorAll('#Cup')[secoundRandomNumber].classList.remove('toLeft');
        },this.props.speed);

        let a1=this.props.tabWithCups[firstRandomNumber];
        this.props.tabWithCups[firstRandomNumber]=this.props.tabWithCups[secoundRandomNumber];
        this.props.tabWithCups[secoundRandomNumber]=a1;

        this.props.changeStateTabWithCups(this.props.tabWithCups);
      }
      const loop=()=>{
        if(reps<=this.props.moves){
          if(reps===1){
            this.props.checkAllCups();
            setTimeout(()=>{
              rep();
              this.props.changeStateMixing(true)
              setTimeout(()=>{
                reps+=1;
                loop();
              },this.props.speed);
            },this.props.speed);
          }else{
            rep();
              setTimeout(()=>{
                reps++;
                loop();
              },this.props.speed);
          }
          if(reps===this.props.moves){
            setTimeout(()=>{
              this.props.changeStateMixing(false);
            },1000);
          }
        }
      }
      loop();
    }
    return(
      <input
        type="button"
        value="Start!"
        id="StartButton"
        style={styles.StartButton}
        onClick={swap}
      />
    );
  }
}

export default StartButton;