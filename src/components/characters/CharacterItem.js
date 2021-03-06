import React from "react";

const CharacterItem = ({item}) => {
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={item.img} alt="" />
                </div>
                <div className="card-back">
                    <h1>{item.name}</h1>
                    <ul>
                        <li>
                            <strong>Description:</strong>{item.description}
                        </li>
                        <li>
                            <strong>Gender:</strong>{item.gender} 
                        </li>
                        <li>
                            <strong>Race:</strong>{item.race}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CharacterItem;