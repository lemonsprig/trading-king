import {createContext, useState} from 'react';

export const WatchListContext = createContext();

export const WatchListContextProvider = (props) => {

  const [watchList, setWatchList] = useState(['MSFT', 'AMZN', 'GOOGL']);

  return <WatchListContext.Provider value={{ watchList }}>
     {props.children}  
    </WatchListContext.Provider>
}