import React from 'react';

class MenuButton extends React.Component{
  render(){
    const styles={
      MenuButton:{
        position:'absolute',
        top:'20px',
        right:'40px',
        borderRadius:'50%',
        height:'40px',
        width:'40px',
        borderWidth:'3px',
        textAlign:'center',
        backgroundColor:'rgb(221, 113, 25,0)',
        borderColor:'rgb(221, 113, 25,0)',
      },
    }
    return(
      <input
        type="button"
        value={this.props.openedMenu===false?"⚙️":"🚫"}
        id="MenuButton"
        style={styles.MenuButton}
        onClick={this.props.openMenu}
      />
    );
  }
}

export default MenuButton;