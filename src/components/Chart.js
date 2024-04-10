import React, { useContext, useLayoutEffect, useState } from 'react'


import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { CryptoContext } from '../context/CryptoContext';

function CustomTooltip({ payload, label, active }) {
  let {currency } = useContext(CryptoContext);
  if (active && payload && payload.length>0) {
    return (
      <div className="custom-tooltip">
        <p className="label text-sm text-cyan">{`${label} : ${
new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: currency,
  minimumFractionDigits:5,
}).format(payload[0].value)
          }`}</p>

      </div>
    );
  }

  return null;
}
const ChartComponent = ({data,type}) => {

    let {  coinData: coloure  } = useContext(CryptoContext);

    let colourchart = () => {
        return {
            color: coloure.market_data.price_change_percentage_24h > 0 ? "darkgreen " : "orange"
        };
    };


    const fillColor = colourchart().color;
    return (
      <ResponsiveContainer  height="90%" aspect={2}>
        <AreaChart
        width={400} height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis dataKey={type}  domain={["auto","auto"]}/>
          <Tooltip content={<CustomTooltip />} cursor={false}/>
          <Legend/>
          <Area type="monotone" dataKey={type} stroke="#14ffec"
          strokeWidth={"1px"}
          fill={fillColor}
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  };



const Chart = ({id}) => {
    const [chartData, setChartData] = useState();
  const [type, setType] = useState("prices");
  const [days, setDays] = useState(7);
    useLayoutEffect(() => {
      const getChartData=async(id)=>{
          const url = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${days}&interval=daily&precision=5`;
          const options = {method: 'GET', headers: {'x-cg-demo-api-key': 'CG-HCHJVLUgMKGuRp4g6Yzqsfo4'}};

          try {
const data=await fetch(url, options)
  .then(res => res.json())
  .then(json => json)
  .catch(err => console.error('error:' + err));

  console.log("chartdata",data);

  let convertedData=data[type].map(item=>{
    return {
        date:new Date(item[0]).toLocaleDateString(),
        [type]:item[1],
    }
  })
  console.log("convertedData",convertedData);
  setChartData(convertedData);
} catch (error) {
   console.log(error);
}
      }
 getChartData(id);

    }, [id,type,days])


  return (
    <div className='w-full h-[70%]'><ChartComponent data={chartData} type={type}/>

    <div className='flex'>
      <button
      className={`text-sm py-0.5 px-1.5 ml-2
   rounded capitalize
      bg-opacity-25 ${type === "prices" ? 'bg-cyan text-cyan':'bg-gray-200 text-gray-100'}`}
      onClick={()=>setType("prices")}>Price</button>
      <button
       className={`text-sm py-0.5 px-1.5 ml-2
   rounded capitalize
       bg-opacity-25 ${type === "market_caps" ? 'bg-cyan text-cyan':'bg-gray-200 text-gray-100'}`}
      onClick={()=>setType("market_caps")}>market cap</button>
      <button
       className={`text-sm py-0.5 px-1.5 ml-2
   rounded capitalize
       bg-opacity-25 ${type === "total_volumes" ? 'bg-cyan text-cyan':'bg-gray-200 text-gray-100'}`}
      onClick={()=>setType("total_volumes")}>Total volume</button>


      <button
 className={`text-sm py-0.5 px-1.5 ml-2
 rounded capitalize
     bg-opacity-25 ${days === 7 ? 'bg-cyan text-cyan':'bg-gray-200 text-gray-100'}`}

      onClick={()=>setDays(7)}>7d</button>
      <button
      className={`text-sm py-0.5 px-1.5 ml-2
      rounded capitalize
          bg-opacity-25 ${days === 14 ? 'bg-cyan text-cyan':'bg-gray-200 text-gray-100'}`}
      onClick={()=>setDays(14)}>14d</button>
      <button
      className={`text-sm py-0.5 px-1.5 ml-2
      rounded capitalize
          bg-opacity-25 ${days === 30 ? 'bg-cyan text-cyan':'bg-gray-200 text-gray-100'}`}
      onClick={()=>setDays(30)}>30d</button>




      </div></div>
  )
}

export default Chart