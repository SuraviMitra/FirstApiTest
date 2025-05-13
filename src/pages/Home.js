import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useData } from '../context/DataContext';

const Home = () => {
    const navigate = useNavigate();
    const { setUserData } = useData();

    const fetchData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUserData(response.data);
            navigate('/user-details');
        }
        catch(err){
            console.error(err);
        }
    };

    return (
       <div className="p-4">
        <h1 className="text-xl mb-2">Fetch Users Example</h1>
        <button onClick={fetchData} className="px-4 py-2 bg-blue-500 text-white rounded">
            Fetch and View Users
        </button>
       </div> 
    )
};

export default Home;
