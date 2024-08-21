import React, {useId} from "react";

function Inputcomp({
  label,
  amount,
  onAmountchange,
  onCurrencychange,
  currencyOption = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
    const  amountInputId = useId()
  return (
    <div className={`bg-white p-5 rounded-md text-base flex ${className}`}>
      <div className="w-1/2 ">
        <label htmlFor={amountInputId}
        className="text-black/60 mb-3 inline-block">{label}</label>
        <input
        id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountchange && onAmountchange(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/60 mb-3 w-full"> Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-200 curdsor-pointer outline-none"
          name=""
          id=""
          value={selectCurrency}
          onChange={(e)=> onCurrencychange && onCurrencychange(e.target.value)}
          disabled={currencyDisable}>
            {currencyOption.map((currency) => (
                <option key={currency} value={currency}>
                    {currency}
                </option>
            ))}
        </select>
      </div>
    </div>
  );
}

export default Inputcomp;
