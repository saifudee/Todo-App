import { render } from '@testing-library/react'
import React from 'react'
import './ListItem.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function ListItem (props) {
    const items = props.items;
    const listItems = items.map(item=>{
        return <div className="items" key={item.key}>
            <p>
                <input className="list" 
                type="text" 
                id={item.key} 
                value={item.text} 
                onChange={
                    (e)=>{
                        props.setUpdate(e.target.value, item.key)
                    }
                }
                />

            <span>
                <FontAwesomeIcon className="faicons" icon='trash' onClick={()=>props.deleteItem(item.key)}/>
            </span> 
            </p>
        </div>

    })
    return (
       <div>
        {listItems}
       </div>
    )
}

export default ListItem
