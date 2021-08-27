import React from 'react'

import { ModelFromDexie } from '../Constnants/constants';

import "./itemsMap.css"

type Props = {
    items: ModelFromDexie[],
    deleteItem: (d: oneObject) => {}

};

interface oneObject {
    [key: string]: any
};

const ItemsMap: React.FC<Props> = ({items, deleteItem}) => {
    return (
        <div className="items-from-map-container">
             {items ? items.map((item: ModelFromDexie, i:number) => {
                return(
                    <div className="items-from-map" key={i} >
                        {i + 1}: {item.name}
                        <button className="btn-delete-icon" onClick={() => {
                            deleteItem(item)
                        }}>Delete icon</button>
                    </div>
                )

            }):"tova e"}
        </div>
    );
};

export default ItemsMap;
