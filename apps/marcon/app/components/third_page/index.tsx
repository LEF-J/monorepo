import React from "react";

function ThirdPageCard({title, subtitle, image, isReverse}: {title: string, subtitle: string, image: string, isReverse: boolean}) {
    return (
        <div className={`flex ${(isReverse ? "flex-row-reverse" : "flex-row")} lg:flex-col lg:w-3/12 p-4`}>
            <img 
                src={image}
                className="rounded-full w-5/12 p-2 h-fit lg:w-10/12 lg:mx-auto"
            />
            <div className="w-7/12 p-2 lg:w-full">
                <h3 className={"text-2xl font-bold leading-tight text-primary mb-2" + (isReverse ? " text-right" : " text-left") + " lg:text-center"}>{title}</h3>
                <p className={(isReverse ? "text-right" : "text-left") + " lg:text-center"}>{subtitle}</p>
            </div>
        </div>
    )
}

function ThirdPage() {

    const cards = [
        {
            title: "Lorem ipsum dolor sit amet",
            subtitle: "Excepteur sint occaecat cupidatat non proident.",
            image: "https://placeimg.com/640/640"
        },
        {
            title: "consectetur adipiscing elit",
            subtitle: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "https://placeimg.com/640/640"
        },
        {
            title: "Auctor elit sed vulputate mi",
            subtitle: "Vitae nunc sed velit dignissim sodales.",
            image: "https://placeimg.com/640/640"
        },
        {
            title: "Penatibus et magnis dis parturient",
            subtitle: "Vitae tempus quam pellentesque nec nam aliquam sem et tortor.",
            image: "https://placeimg.com/640/640"
        },
    ]

    return (
        <section id="third" className="my-2 sm:w-full lg:px-60 lg:flex">
            {
                cards && cards.map((item, index) => {
                    return (
                        <ThirdPageCard key={index} title={item.title} subtitle={item.subtitle} image={item.image} isReverse={index % 2 == 1}/>
                    )
                })
            }
        </section>
    );
}

export default ThirdPage;