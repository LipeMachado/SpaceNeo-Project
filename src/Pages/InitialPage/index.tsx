import { Header } from "../../Sections/Header";
import { HeaderFeatured } from "../../Sections/HeaderFeatured";
import { Launch } from "../../Sections/Launch";
import { NavBar } from "../../Sections/NavBar";
import { News } from "../../Sections/News";

export function InitialPage() {
    return (
        <>
            <NavBar />
            <Header />
            <HeaderFeatured />
            <Launch />
            <News />
        </>
    )
}