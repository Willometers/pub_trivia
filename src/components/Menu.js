import { useState } from 'react'
import { useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';
import QuestionShowPage from './QuestionShowPage';
import { Button } from 'react-bootstrap';

function Menu() {
    const navigate = useNavigate()
    let [ categories, setCategories ] = useState([])
    let [ selection, setSelection ] = useState([])

    useEffect(() => { 
        fetch('https://opentdb.com/api_category.php')
        .then((res) => res.json())
        .then(res => setCategories(res.trivia_categories))
    }, [])
    
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log("selec", e.target.id);
            setSelection(e.target);
        }

        if (categories.length > 0)
            
            return (
                <div>
                <h2>Menu</h2> 
                    <p>Category Selections:</p>

                    <Dropdown>

                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {selection ? `${selection.name}` : `Select Category`}
                        </Dropdown.Toggle>

                        <Dropdown.Menu >

                            {categories.map((cat)=> (
                            <Dropdown.Item key={cat.id} name={cat.name} id={cat.id} onClick={handleSubmit}>{cat.name} </Dropdown.Item>
                            ))}
                            
                        </Dropdown.Menu>

                    </Dropdown>
    
                    <br/>
                    <QuestionShowPage selection={selection.id}/>
                     

                </div>

            );
        else 
            return (
                <div> LOADING </div>
            )
}

export default Menu;