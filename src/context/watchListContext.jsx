import {createContext, useState, useEffect} from 'react';

export const WatchListContext = createContext();

export const WatchListContextProvider = (props) => {

  const [watchList, setWatchList] = useState(  
    // the question mark 'null coalescing?' checks if the watchlist exists in the ls
    // before trying to split it
    localStorage.getItem("watchList")?.split(",") || ['MSFT', 'AMZN', 'GOOGL']
  );

  useEffect(() => {
    localStorage.setItem('watchList', watchList);
  }, [watchList]);

  const addStock = (stock) => {
    if(watchList.indexOf(stock) === -1) {
      setWatchList([...watchList, stock]);
    }
  }

  const deleteStock = (stock) => {
    setWatchList(watchList.filter((el) => {
      return el !== stock;
    }))
  }

  return <WatchListContext.Provider value={{ watchList, addStock, deleteStock }}>
     {props.children}  
    </WatchListContext.Provider>
}