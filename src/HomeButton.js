import { useNavigate } from 'react-router-dom';

    function HomeButton () {

        const navigate = useNavigate()

        const handleSubmit = (e) => {
            e.preventDefault()
            navigate("/")
        }

        return (
            <form onSubmit={handleSubmit} >
                <button type="submit">Home</button>
            </form>
        )
    }

    export default HomeButton;