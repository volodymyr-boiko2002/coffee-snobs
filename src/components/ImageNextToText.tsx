import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ImageNextToTextProps {
    imagePath: string;
    imageAlt: string;
    imageWidth: number;
    imageHeight: number;
    title: string;
    description: string;
    imageLeft?: boolean;
    ctaText: string;
    ctaLink: string;
}

const ImageNextToText: React.FC<ImageNextToTextProps> = ({
   imagePath,
   imageAlt,
   imageWidth,
   imageHeight,
   title,
   description,
   imageLeft = false,
   ctaText,
   ctaLink,
}) => {
    return (
        <div className="container mx-auto py-8">
            <div className="grid md:grid-cols-2 grid-cols-1 items-center text-center gap-8">
                <div className={`${imageLeft ? "order-1 md:order-1" : "order-2 md:order-2"}`}>
                    <Image
                        src={imagePath}
                        width={imageWidth}
                        height={imageHeight}
                        alt={imageAlt}
                        className="rounded-lg"
                    />
                </div>
                <div className={`${imageLeft ? "order-2 md:order-2" : "order-2 md:order-1"}`}>
                    <h2 className="md:text-3xl text-2xl font-bold pb-2">{title}</h2>
                    <p className="text-lg pb-3">{description}</p>
                    <Link href={ctaLink}>
                        <button
                            className="relative z-0 h-10 rounded-full bg-green-600 px-6 text-neutral-50 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-full after:bg-green-600 hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500"
                        >
                            {ctaText}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ImageNextToText;
