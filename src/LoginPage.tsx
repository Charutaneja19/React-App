import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import UserList from './List.json';

function LoginPage(){
    let userData;
    const [userDetails, setUserDetails] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
         // userData = JSON.parse(localStorage.getItem('userData'));
    }, [userData])
    function handleSubmit(){
        userData = JSON.parse(localStorage.getItem('userData'));
         userData = userData?.find(obj => (
            obj.email === email && obj.password === password
         ))
         setUserDetails(userData);
         if (! userData || userData.length === 0){
            alert('Invalid credentials');
         }
         else {
            
            navigate(`/home/${userData.role}`);
            
         }
    }
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    return(
        <>
        email: <input type = 'text' onChange = { (e) => { setEmail(e.target.value)}}></input> <br/>
        password: <input type ='text' onChange = { (e) => { setPassword(e.target.value)}}></input> <br/>
        <button onClick={handleSubmit}> Submit</button>
        </>
    )
}

export default LoginPage;