import { useState } from 'react'
import { useEffect } from 'react'

const Menu = () => {
    const [categories, setCategories ] = useState([])

    useEffect(() => { 
        fetch('https://opentdb.com/api_category.php')
        .then((res) => res.json())
        .then(res => setCategories(res.trivia_categories))
        })

        return (
            <div>
            <h2>Menu</h2> 
                <p>Category Selections:</p>
                    <ul>{categories.map((cat)=> (
                        <a>{cat.name}<br/></a>
                        ))
                    }</ul>
                    <button >Play</button>
            </div>
        );
}

export default Menu;