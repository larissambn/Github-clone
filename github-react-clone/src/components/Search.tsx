//autênticar loadUser no search. Fazer uma promise por que já está feita com o await no Home/loadUser.

type SearchProps = {
    loadUser: (userName: string) => Promise<void>
}

import {useState, KeyboardEvent} from "react";
import {BsSearch} from "react-icons/bs"
import classes from "./search.module.css"

const Search = ({loadUser}: SearchProps) =>{
    const [userName, setUserName] = useState("")

    const handleKeyDown = (e: KeyboardEvent) => {
        if(e.key === "Enter") {
            loadUser(userName);
        }
    };

    return(
        <div className={classes.search}>
            <h1> Search Account </h1>
            <div className={classes.search_container}>
                <input type = "Text" placeholder="Type user name here" onChange={(e) => setUserName(e.target.value)} onKeyDown={handleKeyDown}/>
                <button onClick={() => loadUser(userName)}>
                    <BsSearch/>
                </button>
            </div>
        </div>
    )

}

export default Search;