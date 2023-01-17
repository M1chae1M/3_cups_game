import React from 'react';

class CupSVG extends React.Component{
    render(){
        const styles={
            CupSVG:{
                fill:'#008080',
                stroke:'black',
                strokeWidth:'0.564583px',
                strokeLinecap:'butt',
                strokeLinejoin:'miter',
                strokeOpacity:'1',
            },
        }
        return(
            <svg
                height="120px"
                width="80px"
                viewBox="0 0 16.484381 26.07605"
                version="1.1"
                id="svg386"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsSvg="http://www.w3.org/2000/svg"
            >
                <defs id="defs383" />
                <g id="layer1"
                transform="translate(-149.59209,-59.373404)"
                >
                    <path
                        style={styles.CupSVG}
                        d="m 152.07045,59.506453 -2.33357,25.81071 h 16.19357 l -2.54571,-25.74 z"
                        id="path365"
                    />
                </g>
            </svg>
        );
    }
}

export default CupSVG;