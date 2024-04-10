import { createContext, useLayoutEffect, useState } from "react";

export const TrendingContext = createContext({});

export const TrendingProvider = ({ children }) => {
  const [trendData, setTrendData] = useState();

  //   const getCoinData = async (coinid) => {
  //     const url = `https://api.coingecko.com/api/v3/coins/${coinid}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=true&sparkline=false`;
  // const options = {method: 'GET', headers: {'x-cg-demo-api-key': 'CG-HCHJVLUgMKGuRp4g6Yzqsfo4'}};
  //     try {
  //       const data = await fetch(url, options)
  //         .then((res) => res.json())
  //         .then((json) => json);

  //       console.log(data);
  //       setCoinData(data);
  //       // setCryptoData(data);
  //     } catch (error) {
  //       throw error;
  //     }
  //   };
  const getTrendData = async () => {
    const url = "https://api.coingecko.com/api/v3/search/trending";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-HCHJVLUgMKGuRp4g6Yzqsfo4",
      },
    };
    try {
      const data = await fetch(url, options)
        .then((res) => res.json())
        .then((json) => json);

      // console.log(data);
      setTrendData(data.coins);
    } catch (error) {
      throw error;
    }
  };
  //   const getSearchResult = async (query) => {
  //     const url = `https://api.coingecko.com/api/v3/search?query=${query}`;
  //     console.log(query);
  //     const options = {
  //       method: "GET",
  //       headers: { "x-cg-demo-api-key": "CG-HCHJVLUgMKGuRp4g6Yzqsfo4" },
  //     };
  //     try {
  //       const data = await fetch(url, options)
  //         .then((res) => res.json())
  //         .then((json) => json);

  //       console.log(data);
  //       setsearchData(data.coins);
  //     } catch (error) {
  //       throw error;
  //     }
  //   };

  const resetTrendingResult = () => {
    getTrendData();
  };

  useLayoutEffect(() => {
    getTrendData();
  }, []);
  return <TrendingContext.Provider value={{trendData,

resetTrendingResult}}>{children}</TrendingContext.Provider>;
};
