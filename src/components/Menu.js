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
        gridTemplateRows:'15% 15% 15%',
        fontSize:'30px',
      },
      input:{
        height:'30px',
        verticalAlign:'middle',
      },
      select:{
        height:'30px',
        verticalAlign:'middle',
      },
    }
    return(
      <div id='Menu' style={styles.Menu}>
        <div>Menu</div>
        <div>Number of moves:
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
        <div>Dificult (speed):
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