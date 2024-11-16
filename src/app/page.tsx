"use client";

import React, {useEffect, useState} from 'react';
import OrderForm from '../components/OrderForm';
import OrderSummary from '../components/OrderSummary';
import Image from 'next/image';
import ImageNextToText from "@/components/ImageNextToText";
import { RegularCoffee, DecafCoffee } from "@/utils/billingSystem";

const HomePage = () => {
    const [total, setTotal] = useState<string | null>(null);

    const regularCoffee = new RegularCoffee();
    const decafCoffee = new DecafCoffee();

    // Scroll to the order summary when total is updated
    useEffect(() => {
        if (total !== null) {
            const orderSummaryElement = document.querySelector("#order-summary");
            if (orderSummaryElement) {
                orderSummaryElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [total]); // Trigger when total changes
    const handleOrderSubmit = (orderTotal: string) => {
        setTotal(orderTotal);
    };

    return (
        <>
            <div className="relative" id="about-us">
                <Image src="/coffee-beans.jpg" width={1920} height={800} priority alt="Coffe Beans" className="brightness-90 mb-8"></Image>
                <h1 className="text-neutral-50 text-center text-4xl sm:text-6xl md:text-7xl absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Coffee Snobs</h1>
            </div>
            <div id="pricing">
                <ImageNextToText
                    imagePath="/coffee-regular.jpeg"
                    imageAlt="Regular Coffee"
                    imageWidth={900}
                    imageHeight={600}
                    title={regularCoffee.getDescription()}
                    description={`$${regularCoffee.getCost()}`}
                    imageLeft={true}
                    ctaText="Order Coffee"
                    ctaLink="#order"
                />
                <ImageNextToText
                    imagePath="/coffee-decaf.jpg"
                    imageAlt="Decaf Coffee"
                    imageWidth={900}
                    imageHeight={600}
                    title={decafCoffee.getDescription()}
                    description={`$${decafCoffee.getCost()}`}
                    imageLeft={false}
                    ctaText="Order Coffee"
                    ctaLink="#order"
                />
            </div>
            <div className="container mx-auto flex flex-col items-center py-8" id="order">
                <h3 className="text-3xl font-bold mb-6 text-center">Order System</h3>
                <OrderForm onOrderSubmit={handleOrderSubmit}/>
                {total && <OrderSummary total={total}/>}
            </div>
        </>

    );
};

export default HomePage;
