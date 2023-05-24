import { CardNews } from "../../Components/CardNews"

import New8May from '../../Assets/News/8May2021.png'
import New11May from '../../Assets/News/11May2021.png'
import New22May from '../../Assets/News/22May2021.png'

export function News() {
    return (
        <>
            <div className="bg-[#E9E9E9] py-12 px-5">
                <div className="grid grid-cols-1 items-center justify-items-center sm:grid-cols-2 gap-8 lg:flex lg:justify-center lg:items-center pb-10">
                    <CardNews
                        Image={New8May}
                        Date="May 8, 2021"
                        Title="New Hawk Set to Launch in early May"
                        Paragraph="Lorem ipsum text as placeholder for this section of text. To be filled in later with something meaningful and space themed. Lorem ipsum text as placeholder for this section of text. "
                    />
                    <CardNews
                        Image={New22May}
                        Date="May 22, 2021"
                        Title="Jupiter Mission is moving ahead of schedule"
                        Paragraph="Lorem ipsum text as placeholder for this section of text. To be filled in later with something meaningful and space themed. Lorem ipsum text as placeholder for this section of text. "
                    />
                    <CardNews
                        Image={New11May}
                        Date="May 11, 2021"
                        Title="See how Space:Neo is changing satellite launches"
                        Paragraph="To be filled in later with something meaningful and space themed. Lorem ipsum text as placeholder for this section of text. Lorem ipsum text as placeholder for this section of text. Lorem ipsum text as placeholder for this section of text."
                    />
                    <div className="flex justify-center items-center sm:border-[1px] sm:border-NewsBorderCTAColor sm:w-[320px] sm:h-[630px] lg:hidden">
                        <a className="w-[280px] h-[60px] order-2 px-5 py-4 border-4 text-center border-NewsCTAColor text-NewsCTAColor cursor-pointer hover:bg-NewsCTAColor hover:text-white">SEE ALL NEWS UPDATES</a>
                    </div>
                </div>
                <div className="lg:flex lg:w-full lg:justify-center hidden">
                    <a className="w-[280px] order-2 px-5 py-4 border-4 text-center border-NewsCTAColor text-NewsCTAColor cursor-pointer hover:bg-NewsCTAColor hover:text-white">SEE ALL NEWS UPDATES</a>
                </div>
            </div>
        </>
    )
}