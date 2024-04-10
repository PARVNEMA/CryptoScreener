import { createContext, useLayoutEffect, useState } from "react";

export const CryptoContext = createContext({});

export const CryptoProvider = ({ children }) => {
  const [cryptoData, setCryptoData] = useState();
  const [searchData, setsearchData] = useState();
  const [coinSearch, setCoinSearch] = useState("");
  const [currency, setCurrency] = useState("usd");
  const [sortBy, setSortBy] = useState("market_cap_desc");
  const [page, setPage] = useState(1);
  const [perpage, setPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(250);
  const [coinData, setCoinData] = useState();

  const getCoinData = async (coinid) => {
    const url = `https://api.coingecko.com/api/v3/coins/${coinid}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=true&sparkline=false`;
const options = {method: 'GET', headers: {'x-cg-demo-api-key': 'CG-HCHJVLUgMKGuRp4g6Yzqsfo4'}};
    try {
      const data = await fetch(url, options)
        .then((res) => res.json())
        .then((json) => json);

      // console.log(data);
      setCoinData(data);
      // setCryptoData(data);
    } catch (error) {
      throw error;
    }
  };
  const getCryptoData = async () => {

    setCryptoData();
    setTotalPages(250);

    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinSearch}&order=${sortBy}&per_page=${perpage}&page=${page}&price_change_percentage=1h%2C24h%2C7d`;
    const options = {
      method: "GET",
      headers: { "x-cg-demo-api-key": "	CG-HCHJVLUgMKGuRp4g6Yzqsfo4" },
    };
    try {
      const data = await fetch(url, options)
        .then((res) => res.json())
        .then((json) => json);

      // console.log(data);
      setCryptoData(data);
    } catch (error) {
      throw error;
    }
  };
  const getSearchResult = async (query) => {
    const url = `https://api.coingecko.com/api/v3/search?query=${query}`;
    console.log(query);
    const options = {
      method: "GET",
      headers: { "x-cg-demo-api-key": "CG-HCHJVLUgMKGuRp4g6Yzqsfo4" },
    };
    try {
      const data = await fetch(url, options)
        .then((res) => res.json())
        .then((json) => json);

      // console.log(data);
      setsearchData(data.coins);
    } catch (error) {
      throw error;
    }
  };

  const resetFunction = () => {
    setPage(1);
    setCoinSearch("");
  };

  useLayoutEffect(() => {
    getCryptoData();
  }, [coinSearch, currency, sortBy, page, perpage]);
  return (
    <CryptoContext.Provider
      value={{
        cryptoData,
        searchData,
        getSearchResult,
        setCoinSearch,
        setsearchData,
        currency,
        setCurrency,
        sortBy,
        setSortBy,
        setPage,
        page,
        resetFunction,
        perpage,
        setPerPage,
        getCoinData,
        coinData,
        totalPages
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};
