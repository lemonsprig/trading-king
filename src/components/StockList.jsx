import { useState, useEffect} from 'react';
import finHub from '../apis/finHub';

export const StockList = () => {
  const [stock, setStock] = useState([]);
  const [watchList, setWatchList] = useState(['MSFT', 'AMZN', 'GOOGL']);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {  
      try {
        const responses = await Promise.all(watchList.map((stock) => {
          return finHub.get("/quote", {
            params: {
              symbol: stock
            }
          });
        }));
        
        const data = responses.map((response) => {
          return {
            data: response.data,
            symbol: response.config.params.symbol
          }
        })
        if(isMounted) {
          setStock(data);
        }
        console.log(data);
      } catch (err) {

      }
    }
    fetchData();

    return () => (isMounted = false)

  }, [])

  return <div>Stock List Component</div>
}