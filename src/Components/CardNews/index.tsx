interface CardNews {
    Image: string;
    Date: string;
    Title: string;
    Paragraph: string;
}

export function CardNews({ Date, Title, Paragraph, Image }: CardNews) {
    return (
        <>
            <div className="bg-white w-[280px] h-[630px] md:w-[320px] xl:w-[360px]">
                <div className="relative">
                    <img className="" src={Image} />
                    <div className="absolute bottom-0 bg-white pr-10 pl-4 py-2">{Date}</div>
                </div>
                <div className="py-8 px-4">
                    <h1 className="text-[1.2rem] mb-4 font-bold font-openSans">{Title}</h1>
                    <p className="text-sm font-normal leading-6 tracking-widest">{Paragraph}</p>
                </div>
            </div>
        </>
    )
}