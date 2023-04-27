export function Header() {
    return (
        <>
            <div className="bg-HeaderBackground bg-cover w-full h-[1096px] flex px-3 py-32 sm:py-56 sm:px-12">
                <div className="text-white">
                    <h2 className="font-openSans sm:mb-[-20px] text-[56px] sm:text-[64px]">NEW HAWK Q7</h2>
                    <h1 className="font-anton text-[70px] sm:text-[92px]">MISSION QUEST 21</h1>
                    <h5 className="font-openSans mb-8 mt-2 underline text-sm sm:text-lg font-semibold tracking-widest">LEARN ABOUT THE MISSION</h5>
                    <button className="font-openSans border-[3px] px-6 py-3">WATCH THE REPLAY</button>
                </div>
            </div>
        </>
    )
}