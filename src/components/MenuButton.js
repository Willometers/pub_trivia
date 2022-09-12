import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

    function PlayButton () {

        const navigate = useNavigate()

        const handleSubmit = (e) => {
            e.preventDefault()
            navigate("/menu")
        }

        return (
            <form onSubmit={handleSubmit} >
                <Button type="submit">Menu</Button>
            </form>
        )
    }

    export default PlayButton;