import React from "react";
import{useNavigate} from 'react-router-dom'
const TrendingCoin = ({ data }) => {

    let navigate=useNavigate();

    const getCoinDetails=(id)=>{
        navigate(`${id}`);
    }
  return (
    <div className="md:w-[60%] w-[80%] bg-purple md:mb-12 mb-4 last:mb-0 rounded-lg p-4 relative cursor-pointer hover:bg-white  hover:bg-opacity-[70%] md:p-10
    hover:scale-110 " onClick={()=>getCoinDetails(data.id)}>
      {data ? (
        <>
          <h3 className="text-base flex items-center my-0.5">
            <span className="text-gray-300 capitalize font-bold">name:&nbsp;</span>
            <span className="text-darkgreen">{data.name}</span>
            <img
              src={data.small}
              alt={data.name}
              className="w-[1.5rem] h-[1.5rem] ml-1.5 rounded-full"
            />
          </h3>

          <h3 className="text-base flex items-center my-0.5">
            <span className="text-gray-300 capitalize  font-bold">
              market cap rank:
              &nbsp;
            </span>
            <span className="text-darkgreen ">{data.market_cap_rank}</span>
          </h3>
          <h3 className="text-base flex items-center my-0.5">
            <span className="text-gray-300 capitalize  font-bold">
              price(in btc):&nbsp;
            </span>
            <span className="text-darkgreen">
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "BTC",
                maximumSignificantDigits:5,
              }).format(data.price_btc)}
            </span>
          </h3>

          <h3 className="text-base flex items-center my-0.5">
            <span className="text-gray-300 capitalize   font-bold">
             score:
              &nbsp;
            </span>
            <span className="text-darkgreen">{data.score}</span>
          </h3>

          <img
              src={data.large}
              alt={data.name}
              className="w-[25%] h-auto ml-1.5 rounded-full absolute top-2/4 -right-12 -translate-y-2/4"
            />
        </>
      ) : (
        <div
          className="w-full  h-full flex justify-center items-center
             "
        >
          <div
            className="w-8 h-8 border-4 border-cyan rounded-full
             border-b-gray-200 animate-spin
             "
            role="status"
          />
          <span className="ml-2">please wait...</span>
        </div>
      )}
    </div>
  );
};

export default TrendingCoin;
