import { useParams } from "react-router-dom";

function User(){
    const params=useParams();
    // or
    // const {userid}=useParams();
    return(
        <div>
            <h1 className="bg-gray-600 text-white text-3xl p-4 text-center">user {params.userid}</h1>
        </div>
    )
}
export default User;