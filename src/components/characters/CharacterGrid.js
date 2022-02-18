import React from "react";
import CharaterItem from "./CharacterItem";
import Spinner from "../utils/Spinner";

const CharacterGrid = ({items, isLoading}) => {
    return isLoading ? (
        <Spinner />
    ) : (
        <section className="cards">
            {items.map((item) => (
                <CharaterItem key={item.char_id} item={item}></CharaterItem>
            ))}
        </section>
    )
}

export default CharacterGrid;