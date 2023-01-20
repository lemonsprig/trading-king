import { useState, useEffect} from 'react';

export const StockList = () => {
  const [watchList, setWatchList] = useState(['MSFT', 'AMZN', 'GOOGL']);
  return <div>Stock List Component</div>
}