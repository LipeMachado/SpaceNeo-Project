import { Header } from "../../Sections/Header";
import { HeaderFeatured } from "../../Sections/HeaderFeatured";
import { NavBar } from "../../Sections/NavBar";

export function InitialPage() {
    return (
        <>
            <NavBar />
            <Header />
            <HeaderFeatured />
        </>
    )
}