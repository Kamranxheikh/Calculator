import React, { useState } from "react";

const Calculator = () => {
    const [value, setValue] = useState('');


    const handleButtonClick = (value) => {
        setValue(prv => prv + value)
    }

    const handleReset = () => {
        setValue('');
    };

    const handleDelete = () => {
        setValue(prv => prv.slice(0, -1)); 
    };


    const handleCalculate = () => {
        try {
           
            const result = eval(value.replace('×', '*').replace('÷', '/'));
            setValue(result.toString());
        } catch {
            setValue('Error');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-200">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                <div className="text-white text-right mb-4 p-4 rounded bg-gray-800 text-3xl font-mono">
                    {value}
                </div>
                <div className="grid grid-cols-4 gap-3">
                    <button className="col-span-2 bg-gray-700 text-white p-4 rounded hover:bg-gray-600" onClick={handleReset}>
                        AC
                    </button>
                    <button className="bg-gray-700 text-white p-4 rounded hover:bg-gray-600" onClick={handleDelete}>
                        DE
                    </button>
                    <button className="bg-orange-500 text-white p-4 rounded hover:bg-orange-400" onClick={() => handleButtonClick('÷')}>
                        ÷
                    </button>

                    <button className="bg-gray-800 text-white p-4 rounded hover:bg-gray-700" onClick={() => handleButtonClick('7')}>
                        7
                    </button>
                    <button className="bg-gray-800 text-white p-4 rounded hover:bg-gray-700" onClick={() => handleButtonClick('8')}>
                        8
                    </button>
                    <button className="bg-gray-800 text-white p-4 rounded hover:bg-gray-700" onClick={() => handleButtonClick('9')}>
                        9
                    </button>
                    <button className="bg-orange-500 text-white p-4 rounded hover:bg-orange-400" onClick={() => handleButtonClick('×')}>
                        ×
                    </button>

                    <button className="bg-gray-800 text-white p-4 rounded hover:bg-gray-700" onClick={() => handleButtonClick('4')}>
                        4
                    </button>
                    <button type="text" className="bg-gray-800 text-white p-4 rounded hover:bg-gray-700" onClick={() => handleButtonClick('5')}>
                        5
                    </button>
                    <button className="bg-gray-800 text-white p-4 rounded hover:bg-gray-700" onClick={() => handleButtonClick('6')}>
                        6
                    </button>
                    <button className="bg-orange-500 text-white p-4 rounded hover:bg-orange-400" onClick={() => handleButtonClick('-')}>
                        -
                    </button>

                    <button className="bg-gray-800 text-white p-4 rounded hover:bg-gray-700" onClick={() => handleButtonClick('1')}>
                           1
                    </button>
                    <button className="bg-gray-800 text-white p-4 rounded hover:bg-gray-700" onClick={() => handleButtonClick('2')}>
                          2
                    </button>
                    <button className="bg-gray-800 text-white p-4 rounded hover:bg-gray-700" onClick={() => handleButtonClick('3')}>
                          3
                    </button>
                    <button className="bg-orange-500 text-white p-4 rounded hover:bg-orange-400" onClick={() => handleButtonClick('+')}>
                         +
                    </button>

                    <button className="col-span-2 bg-gray-800 text-white p-4 rounded hover:bg-gray-700" onClick={() => handleButtonClick('0')}>
                         0
                    </button>
                    <button className="bg-gray-800 text-white p-4 rounded hover:bg-gray-700" onClick={() => handleButtonClick('.')}>
                            .
                    </button>
                    <button className="bg-orange-500 text-white p-4 rounded hover:bg-orange-400" onClick={handleCalculate}>
                              =
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Calculator;























