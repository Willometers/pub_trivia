import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

    function HomeButton () {

        const navigate = useNavigate()

        const handleSubmit = (e) => {
            e.preventDefault()
            navigate("/")
        }

        return (
            <form onSubmit={handleSubmit} >
                <Button type="submit">Home</Button>
            </form>
        )
    }

    export default HomeButton;