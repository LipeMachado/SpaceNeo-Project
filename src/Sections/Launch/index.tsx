export function Launch() {
    return (
        <>
            <div className="bg-LaunchBg bg-cover relative w-full h-auto sm:h-screen flex items-center">
                <h1 className="w-full font-anton text-start lg:text-center text-LaunchBgTextColor uppercase tracking-normal lg:tracking-wide select-none hidden sm:block text-[220px] lg:text-[320px]">Launch</h1>
                <div className="relative sm:absolute w-full sm:w-[480px] h-full sm:h-[520px] right-0 lg:right-40 bg-LaunchBoxBgColor filter backdrop-blur-sm p-12">
                    <h2 className="uppercase text-white text-[50px] font-anton tracking-wide mb-2">Get Involved</h2>
                    <p className="text-white tracking-widest font-openSans text-[14px] font-semibold leading-6 mb-8">
                        Get Involved with SpaceNeo: Explore the cosmos with us and discover your role in advancing space exploration.
                        From aspiring astronauts to dedicated enthusiasts, there's a place for everyone. Keep a close watch on this
                        section for updates that will guide you on your journey to explore the limitless expanse of space and its
                        endless wonders. Join SpaceNeo's mission and be part of a community dedicated to pushing the boundaries of
                        human exploration. Together, we'll reach for the stars and unlock the secrets of the universe.
                    </p>
                    <a className="px-5 py-4 border-4 border-white text-white cursor-pointer hover:bg-white hover:text-black">Get Involved</a>
                </div>
            </div>
        </>
    )
}