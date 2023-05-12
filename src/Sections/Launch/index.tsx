export function Launch() {
    return (
        <>
            <div className="bg-LaunchBg bg-cover relative w-full h-auto sm:h-screen flex items-center">
                <h1 className="w-full font-anton text-start lg:text-center text-LaunchBgTextColor uppercase tracking-normal lg:tracking-wide select-none hidden sm:block text-[220px] lg:text-[320px]">Launch</h1>
                <div className="relative sm:absolute w-full sm:w-[480px] h-full sm:h-[520px] right-0 lg:right-40 bg-LaunchBoxBgColor filter backdrop-blur-sm p-12">
                    <h2 className="uppercase text-white text-[50px] font-anton tracking-wide mb-2">Get Involved</h2>
                    <p className="text-white tracking-widest font-openSans text-[14px] font-semibold leading-6 mb-10">
                        Lorem ipsum text as placeholder for this section of text. To be filled in later with
                        something meaningful and space themed. Lorem ipsum text as placeholder for this section of text.
                        To be filled in later with something meaningful and space themed. Lorem ipsum text as placeholder
                        for this section of text. To be filled in later with something meaningful and space themed.
                        <br />
                        Lorem ipsum text as placeholder for this section of text. To be filled in later.
                    </p>
                    <a className="px-5 py-4 border-4 border-white text-white cursor-pointer hover:bg-white hover:text-black">Get Involved</a>
                </div>
            </div>
        </>
    )
}