import { useId } from "react";

interface Inputprops {
    label?: string,
    className?: string,
    amount?: number
    onAmountChange?: (e:number) => void,
    onCurrencyChange?: (e:string) => void,
    currencyOptions?:string [],
    selectCurrency?: string | "usd",
    amountDisable?: boolean,
    currencyDisable?: boolean

}

const InputBox = ({
    label,
    className = "",
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false
}: Inputprops) => {

    const amounInputId = useId()
    return (
        <div className={`dark:bg-gray-900 dark:text-white bg-white p-4 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2 flex flex-col">
                <label className="dark:text-white text-black/70 mb-2 inline-block text-left" htmlFor={amounInputId} >
                    {label}
                </label>
                <input
                id={amounInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="dark:text-white text-black/70 mb-2 w-full">Currency Type</p>
                <select
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                    className="rounded-lg px-1 py-1 dark:bg-gray-900 bg-gray-100 cursor-pointer outline-none"  >

                    {currencyOptions.map((currency,index) => {
                        return (
                            <option key={index} value={currency} >
                                {currency}
                            </option>
                        )
                    })}

                </select>
            </div>
        </div>
    );
}

export default InputBox;
