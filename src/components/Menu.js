import React from 'react';

class Menu extends React.Component{
  render(){
    const styles={
      Menu:{
        position:'absolute',
        display:'grid',
        width:'80%',
        height:'70%',
        backgroundColor:'var(--lightBrown)',
        borderRadius:'30px',
        opacity:'0.95',
        borderTop:'solid var(--darkBrown) 5px',
        borderBottom:'solid var(--darkBrown) 5px',
        zIndex:'1410',
        justifyItems:'center',
        gridTemplateRows:'20% 20%',
        fontSize:'30px',
        padding:'5px',
      },
      input:{
        height:'30px',
        display:'grid',
        verticalAlign:'middle',
        marginLeft:'20px',
        marginRight:'20px',
      },
      select:{
        height:'30px',
        display:'grid',
        verticalAlign:'middle',
        marginLeft:'20px',
        marginRight:'20px',
      },
      div:{
        display:"grid",
        maxWidth:'90%',
        minWidth:'content',
        paddingLeft:'20px',
        paddingRight:'20px',
        textAlign:'center',
        gridTemplateColumns:'repeat(auto-fit, 50%)',
        justifyItems:'center',
        alignItems:'center',
      },
    }
    const changeInputSelect=(e)=>{
      this.props.changeStateInputSelect(e.target.value);
      // eslint-disable-next-line
      switch(e.target.value){
        case 'Slow':
          document.querySelector(':root').style.setProperty('--speedOfAnimation','1.5s');
          this.props.changeSpeedState(2000);
          break;
          case 'Normal':
            document.querySelector(':root').style.setProperty('--speedOfAnimation','1s');
            this.props.changeSpeedState(1500);
            break;
        case 'Fast':
          document.querySelector(':root').style.setProperty('--speedOfAnimation','0.3s');
          this.props.changeSpeedState(800);
          break;
      }
    }
    return(
      <div id='Menu' style={styles.Menu}>
        <div>Menu</div>
        <div style={styles.div}>
          <div>Number of moves:</div>
          <input
            type="number"
            value={this.props.moves}
            min="1"
            max="10"
            id=""
            placeholder="Number of moves"
            onChange={this.props.changeInputNumber}
            style={styles.input}
          />
        </div>
        <div style={styles.div}>
          <div>Dificult (speed):</div>
          <select value={this.props.dificult} onChange={changeInputSelect} style={styles.select}>
            <option value="Slow">Slow</option>    
            <option value="Normal">Normal</option>    
            <option value="Fast">Fast</option>    
          </select>
        </div>
      </div>
    );
  }
}

export default Menu;