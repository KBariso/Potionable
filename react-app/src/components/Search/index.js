import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { getSearch } from "../../store/search";
import { useHistory } from 'react-router-dom';

const Search = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [search, setSearch] = useState('');
    const [errors, setErrors] = useState([]);


    const handleSearch = async (e) => {
        e.preventDefault();

        if (!search) {
            setErrors(["Did you drink a forgetfulness potion? You have no search term!"]);

            } else {
            setErrors([]);

        // alert(search)
        if (search === '') {
            window.location.href = `/`
        } else {
            window.location.href = `/?searchKeyword=${search}`;

        }
    }
        // history.push(`/?searchKeyword=${search}`)
    }



    return (
        <form onSubmit={handleSearch}>
              {errors.length > 0 && (
          <ul className="errors">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
            <input type='text' value={search} onChange={(e) => setSearch(e.target.value)}  placeholder="Let's make..." />
        </form>
    )
}

export default Search
