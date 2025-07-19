import {useParams} from 'react-router-dom';
function HomePage(){
    const params = useParams();
    return(
        <>
        Welcome {params.role}
        </>
    )
}
export default HomePage;