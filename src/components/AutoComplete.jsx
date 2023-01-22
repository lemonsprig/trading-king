import { render } from '@testing-library/react';
import { useState, useEffect} from 'react';
import finHub from '../apis/finHub';

export const AutoComplete = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  const renderDropdown = () => {
    const dropDownClass = search ? 'show' : null;
    return (
      <ul className={`dropdown-menu ${dropDownClass}`}
        style={{
          height: "500px",
          overflowY: "scroll",
          overflowX: "hidden",
          cursor: "pointer"
        }}> 
        {results.map((result) => {
          return (
            <li key={result.symbol} className='dropdown-item'>{result.description} ({result.symbol})</li>
          )
        })}
      </ul>
    )
  }

  useEffect(()=>{
    let isMounted = true;
    const fetchData = async() => {
      try {
        const response = await finHub.get('/search', {
          params: {
            q: search
          }
        })
        if(isMounted) {
          setResults(response.data.result);
        }
      } catch (error) {

      }
    }
    if (search.length > 0) {
      fetchData();
    } else {
      setResults([]);
    }
    return () => (isMounted = false);
    
  }, [search]);

  return <div className="w-50 p-5 rounded mx-auto">
    <div className="form-floating dropdown">
      <input type="text" style={{backgroundColor:"rgba(145, 158, 171, 0.04"}} 
        id="search" className="form-control" placeholder="Search"
        autoComplete='off' value={search} onChange={(e) => setSearch(e.target.value)}/>
      <label htmlFor="search">Search</label>
      {renderDropdown()}
    </div>
  </div>
}