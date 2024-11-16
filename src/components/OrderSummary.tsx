import React from 'react';

interface OrderSummaryProps {
    total: string;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ total }) => (
    <div className="mt-6 p-4 bg-white rounded-lg shadow-md" id="order-summary">
        <h3 className="text-lg font-bold">Order Summary</h3>
        <p className="mt-2 font-semibold">Final bill is <span className="font-semibold text-green-700">{total}</span></p>
    </div>
);

export default OrderSummary;

