
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate();
    navigate('/login')
    return (
        <div>Page Not Found
        </div>
        );
  
}

export default NotFound