import React, {useState} from 'react';
import {cakes, calculateOrder} from '@/utils/billingSystem';

const coffeeOptions = ["regular", "decaf"];
const extrasOptions = ["milk", "sugar", "cream", "sprinkles"];
const cakeOptions = cakes;

interface OrderFormProps {
    onOrderSubmit: (total: string) => void;
}

const OrderForm: React.FC<OrderFormProps> = ({onOrderSubmit}) => {
    const [coffee, setCoffee] = useState<string>(coffeeOptions[0]);
    const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
    const [cakes, setCakes] = useState<{ [key: string]: number }>({});

    const toggleExtra = (extra: string) => {
        setSelectedExtras(prev =>
            prev.includes(extra) ? prev.filter(e => e !== extra) : [...prev, extra]
        );
    };

    const handleCakeChange = (cake: string, quantity: number) => {
        setCakes({...cakes, [cake]: quantity});
    };

    const handleSubmit = () => {
        const order = {coffee, extras: selectedExtras, cakes};
        const total = calculateOrder(order);
        onOrderSubmit(total);
    };

    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Place Your Order</h2>

            {/* Coffee selection */}
            <label className="block mb-2 font-semibold">Choose Coffee:</label>
            <select value={coffee} onChange={(e) => setCoffee(e.target.value)} className="mb-4 p-2 border rounded">
                {coffeeOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>

            {/* Extras selection */}
            <label className="block mb-2 font-semibold">Extras:</label>
            <div className="flex flex-wrap mb-4">
                {extrasOptions.map(extra => (
                    <label key={extra} className="mr-4">
                        <input
                            type="checkbox"
                            value={extra}
                            checked={selectedExtras.includes(extra)}
                            onChange={() => toggleExtra(extra)}
                            className="mr-2"
                        />
                        {extra}
                    </label>

                ))}
            </div>

            {/* Cake selection */}
            <label className="block mb-2 font-semibold">Cakes:</label>
            {Object.entries(cakeOptions).map(([cakeName, cakePrice]) => (
                <div key={cakeName} className="mb-2">
                    <label className="mr-2">{cakeName} (${cakePrice})</label>
                    <input
                        type="number"
                        min="0"
                        value={cakes[cakeName] || 0}
                        onChange={(e) => handleCakeChange(cakeName, parseInt(e.target.value) || 0)}
                        className="p-1 border rounded w-16"
                    />
                </div>
            ))}

            <button
                onClick={handleSubmit}
                className="mt-4 py-2 relative z-0 h-10 rounded-full bg-green-600 px-6 text-neutral-50 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-full after:bg-green-600 hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500"
            >
                Calculate Total
            </button>
        </div>
    );
};

export default OrderForm;
