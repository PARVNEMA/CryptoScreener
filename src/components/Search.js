import React, { useContext, useState } from "react";
import searchIcon from "../assets/search-icon.svg";
import { CryptoContext } from "../context/CryptoContext";
import debounce from "lodash.debounce";

const SearchInput = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState("");
  const { searchData, setCoinSearch, setsearchData } =
    useContext(CryptoContext);

  let handleInput = (e) => {
    e.preventDefault();
    let query = e.target.value;
    // console.log(query);
    setSearchText(query);
    handleSearch(query);
  };
  const selectCoin = (coin) => {
    setCoinSearch(coin);
    setSearchText("");
    setsearchData();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchText);
  };
  return (
    <>
      <form
        className="md:w-96 relative flex items-center ml-7 font-nunito "
        onSubmit={handleSubmit}
      >
        <input
          value={searchText}
          onChange={handleInput}
          type="text"
          name="search"
          className="
         md:w-full
          rounded bg-gray-200
        placeholder:text-gray-100 pl-2
        required outline-0 border border-transparent
        focus:border-cyan  "
          placeholder="Search here..."
        />
        <button type="submit" className="absolute right-1 cursor-pointer">
          <img src={searchIcon} className="w-full h-auto" alt="search" />
        </button>
      </form>

      {searchText.length > 0 ? (
        <ul
          className="absolute top-11 right-0 w-96 h-96 rounded overflow-x-hidden py-2 bg-gray-200 bg-opacity-60 backdrop:blur-md
        scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-gray-200
        0  max-[500px]:pl-14"
        >
          {searchData ? (
            searchData.map((coin) => {
              return (
                <li
                  className="flex items-center ml-4 my-2 cursor-pointer"
                  key={coin.id}
                  onClick={() => selectCoin(coin.id)}
                >
                  <img
                    className="w-[1 rem] h-[1rem] ml-1.5 mx-2"
                    src={coin.thumb}
                    alt={coin.name}
                  />
                  <span>{coin.name}</span>
                </li>
              );
            })
          ) : (
            <div className="w-full h-full flex justify-center items-center">
              <div
                className="w-8 h-8 border-4 border-cyan rounded-full border-b-gray-200 animate-spin "
                role="status"
              />
              <span className="ml-2">Searching ...</span>
            </div>
          )}
        </ul>
      ) : null}
    </>
  );
};
const Search = () => {
  let { getSearchResult } = useContext(CryptoContext);
  const debounceFunc = debounce(function (val) {
    getSearchResult(val);
  }, 2000);

  return (
    <div className="relative">
      <SearchInput handleSearch={debounceFunc} />
    </div>
  );
};

export default Search;
