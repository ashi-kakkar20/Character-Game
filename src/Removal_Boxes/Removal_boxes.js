import React from 'react';
import './Removebox.css'
const boxremoval = (props) =>
{
    return (
        <div className="box" >
        <label> Enter the Text </label>
        <input type="text" name= "Data" onChange={props.handleTextChange} />
        </div> 
             
    );
}

export default boxremoval;