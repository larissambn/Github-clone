import Search from "../components/Search";
import { useState } from "react";
import { userProps } from "../types/user";
import { User } from "../components/User";
import { Error } from "../components/error";

//useState para requisição do usuário
// OR in typescript is only one pipe.
//apresentar dados do usuário. 
// spread Operator para copiar as propriedades de User Props.

const Home = () => {
    const [user, setUser] = useState <userProps|null> (null);
    const [error, setError] = useState(false)

    const loadUser = async(userName:string) => {
        const res = await fetch (`https://api.github.com/users/${userName}`)

        const data = await res.json()

        if(res.status === 404) {
            setError(true);
            return
        }

        const {avatar_url, login, location, followers, following}= data

        const userData : userProps = {
            avatar_url, login, location, followers, following
        }

        setUser(userData);
    }


    return (
    <div> 
        <Search loadUser = {loadUser}/>
        {user && <User {...user}/>}
        {error && <Error/>}
    </div>
    )
}

export {Home};