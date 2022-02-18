import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './App.css';
import CharacterGrid from './components/characters/CharacterGrid';
import Header from './components/utils/Header';
import Search from './components/utils/Search';

const App = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState("");

    useEffect(() => {
        const fetchItems = async () => {
            setIsLoading(true)
            const result = await axios(
                `https://zelda.fanapis.com/api/characters?name=${query}`
            )

            console.log(result.data)

            setItems(result.data)
            setIsLoading(false)
        }

        fetchItems()
    }, [query])

    return (
        <div className='container'>
            <Header />
            <Search getQuery={(q) => setQuery(q)} />
            <CharacterGrid isLoading={isLoading} items={items} />
        </div>
    )
}

export default App;