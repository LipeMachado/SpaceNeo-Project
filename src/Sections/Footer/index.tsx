import SpaceNeoLogo from '../../Assets/Footer/SpaceNeoLogoFooter.svg'

export function Footer() {
    return (
        <>
            <div className="flex justify-between flex-wrap flex-col gap-10 xl:gap-0 xl:flex-row py-10 px-10 sm:px-20 border-b-4 border-FooterBorderColor">
                <div className="">
                    <img className="" src={SpaceNeoLogo} alt="Logo" />
                </div>
                <div className="">
                    <ul className="flex flex-col sm:flex sm:flex-row gap-7 sm:gap-10 flex-wrap items-start sm:items-center font-openSans font-semibold">
                        <li className="cursor-pointer hover:text-gray-500">TWITTER</li>
                        <li className="cursor-pointer hover:text-gray-500">INSTAGRAM</li>
                        <li className="cursor-pointer hover:text-gray-500">YOUTUBE</li>
                        <li className="cursor-pointer hover:text-gray-500">CONTACT</li>
                        <li className="cursor-pointer hover:text-gray-500">PRIVACY POLICY</li>
                        <li className="font-normal">QUEST© 2021</li>
                    </ul>
                </div>
            </div>
        </>
    )
}