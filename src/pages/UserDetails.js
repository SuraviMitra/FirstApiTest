import { useData } from '../context/DataContext';

const UserDetails = () => {
    const { userData } = useData();

    return(
        <div className="p-4">
            <h1 className="text-xl mb-2">User List</h1>
            <ul className="list-disc ml-6">
                {userData.map((user) => (
                    <li key={user.id}> 
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserDetails;