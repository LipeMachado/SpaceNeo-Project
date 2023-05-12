import { Header } from "../../Sections/Header";
import { HeaderFeatured } from "../../Sections/HeaderFeatured";
import { Launch } from "../../Sections/Launch";
import { NavBar } from "../../Sections/NavBar";

export function InitialPage() {
    return (
        <>
            <NavBar />
            <Header />
            <HeaderFeatured />
            <Launch />
        </>
    )
}