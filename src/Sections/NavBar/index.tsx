import SpaceNeoLogo from '../../Assets/NavBar/SpaceNeoLogo.svg'
import { List } from 'phosphor-react'

export function NavBar() {
    return (
        <>
            <div className="fixed w-full left-0 px-0 py-5 sm:left-[10%] sm:px-5">
                <div className="w-full sm:w-[80%] flex items-center justify-between p-4 bg-NavBarBackgroundColor filter backdrop-blur-3xl">
                    <div className="w-[70%] sm:w-auto">
                        <img className="" src={SpaceNeoLogo}></img>
                    </div>
                    <div className="">
                        <ul className="hidden font-poppins gap-6 text-white lg:flex">
                            <li><a href="#">Our Mission</a></li>
                            <li><a href="#">Rideshare</a></li>
                            <li><a href="#">Engines</a></li>
                            <li><a href="#">Carrers</a></li>
                            <li><a href="#">Shop</a></li>
                        </ul>
                        <div className="flex lg:hidden">
                            <List size={23} color='white' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}