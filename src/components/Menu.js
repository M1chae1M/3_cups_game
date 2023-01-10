import React from 'react';

class Menu extends React.Component{
  render(){
    const styles={
      Menu:{
        position:'absolute',
        display:'grid',
        width:'100%',
        height:'70%',
        backgroundColor:'var(--lightBrown)',
        borderTop:'solid var(--darkBrown) 5px',
        borderBottom:'solid var(--darkBrown) 5px',
        zIndex:'1410',
        justifyItems:'center',
        gridTemplateRows:'20% 20%',
        fontSize:'30px',
      },
      input:{
        height:'30px',
        display:'grid',
        verticalAlign:'middle',
      },
      select:{
        height:'30px',
        display:'grid',
        verticalAlign:'middle',
      },
      div:{
        display:"grid",
        width:'90%',
        textAlign:'center',
        gridTemplateColumns:'repeat(auto-fit, 50%)',
        justifyItems:'center',
        alignItems:'center',
      },
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
          <select value={this.props.dificult} onChange={this.props.changeInputSelect} style={styles.select}>
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