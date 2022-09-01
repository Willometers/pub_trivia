import { useNavigate } from 'react-router-dom';

    function PlayButton () {

        const navigate = useNavigate()

        const handleSubmit = (e) => {
            e.preventDefault()
            navigate("/menu")
        }

        return (
            <form onSubmit={handleSubmit} >
                <button type="submit">Menu</button>
            </form>
        )
    }

    export default PlayButton;