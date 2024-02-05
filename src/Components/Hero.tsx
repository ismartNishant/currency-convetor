import InputBox from "./InputBox";
import UseCurrencyInfo from "./Hooks/UseCurrencyInfo";
import { useState } from "react";



const Hero = () => {
    const [amount, setAmount] = useState(0)
    const [from, setFrom] = useState("usd")
    const [to, setTo] = useState("inr")
    const [convertedAmount, setConvertedAmount] = useState(0)

    // Define the type of currencyInfo
    type CurrencyInfo = {
        [key: string]: number; // Index signature allowing any string key with number values
    };

    // Now, use the defined type for currencyInfo
    const currencyInfo: CurrencyInfo = UseCurrencyInfo(from);


    const options = Object.keys(currencyInfo)

    const swap = () => {
        setFrom(to)
        setTo(from)
        setConvertedAmount(amount)
        setAmount(convertedAmount)
    }

    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to])
    }

    return (
        <div className='flex items-center justify-center dark:text-gray-100 h-screen hero-bg relative overflow-hidden bg-cover bg-no-repeat p-2 md:p-12 text-center bg-black/10' >
            <div className=" dark:bg-black/55 bg-white/55 my-centenr  p-2 md:p-4 border-2 relative">
                <h1 className='w-full max-w-xl text-3xl text-center my-2 md:mb-3 font-bold'>Cu₹₹ency conveter</h1>
                <div className="w-full">
                    <div className=" mx-auto  rounded-lg px-0 py-5 md:px-10 md:py-2 backdrop-blur-sm ">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                convert()
                            }}
                        >
                            <div className="w-full mb-1">
                                <InputBox
                                    amount={amount}
                                    currencyOptions={options}

                                    onAmountChange={(newAmount) => setAmount(newAmount)}
                                    onCurrencyChange={(currency) => setFrom(currency)}
                                    selectCurrency={from}
                                    label="From"
                                    className={""}
                                />
                            </div>
                            <div className="relative w-full h-0.5">
                                <button type="button"
                                    onClick={swap}
                                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/3 border-2 font-semibold dark:hover:text-white border-white rounded-md dark:hover:bg-pink-700 hover:bg-orange-400 dark:bg-sky-400 bg-yellow-300 text-black px-3 py-1"> swap
                                </button>
                            </div>
                            <div className="w-full mt-1 mb-4">
                                <InputBox
                                    label="To"
                                    className={""}
                                    amount={convertedAmount}

                                    onAmountChange={(newAmount) => setConvertedAmount(newAmount)}
                                    currencyOptions={options}
                                    onCurrencyChange={(currency) => setTo(currency)}
                                    selectCurrency={to}

                                />
                            </div>
                            <button type="submit" className="w-full bg-yellow-300  dark:hover:text-white text-black font-semibold px-4 py-3 rounded-lg hover:bg-orange-400 dark:hover:bg-pink-700 dark:bg-sky-400">
                                Convert {from.toUpperCase()} to {to.toUpperCase()}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
