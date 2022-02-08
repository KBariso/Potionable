import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { getSearch } from "../../store/search";
import { useHistory } from 'react-router-dom';

const Search = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [search, setSearch] = useState('');


    const handleSearch = async (e) => {
        e.preventDefault();

        const payload = {
            search
        }

        dispatch(getSearch(payload))

        setSearch('');

        history.push(`/search/${search}`)
    }



    return (
        <form onSubmit={handleSearch}>
            <input type='text' value={search} onChange={(e) => setSearch(e.target.value)}  placeholder="Let's make..." />
        </form>
    )
}

export default Search
