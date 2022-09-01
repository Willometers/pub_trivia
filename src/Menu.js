import { useState } from 'react'
import { useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';


const Menu = () => {
    const [ categories, setCategories ] = useState([])
    const [ selection, setSelection ] = useState([])

    useEffect(() => { 
        fetch('https://opentdb.com/api_category.php')
        .then((res) => res.json())
        .then(res => setCategories(res.trivia_categories))
        })

        const handleSubmit = (e) => {
            e.preventDefault()
            setSelection(e.target.name)
        }

        return (
            <div>
            <h2>Menu</h2> 
                <p>Category Selections:</p>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {categories.map((cat)=> (
                        <Dropdown.Item name={cat.name} onClick={handleSubmit}>{cat.name}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <br/>
                
                {selection.length >0 ? <Button>Play: {selection}</Button> : null}
            </div>
        );
}

export default Menu;