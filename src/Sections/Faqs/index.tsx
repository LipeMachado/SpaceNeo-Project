import MoonPhases from '../../Assets/Faqs/moonPhases.png'

export function Faqs() {
    return (
        <>
            <div className="w-full bg-black px-8 sm:px-16 pb-16">
                <img className="w-full py-5" src={MoonPhases} alt="" />
                <div className="text-white">
                    <h1 className="font-anton text-6xl mb-9">FAQs</h1>

                    <h2 className="font-openSans text-2xl sm:text-4xl mb-5">WHEN IS THE NEXT LAUNCH?</h2>
                    <p className="font-openSans mb-5 tracking-wider">
                        For up-to-date information on SpaceNeo's next launch, visit our "Upcoming Launches"
                        section or follow our social media channels. Dates and times are subject to change,
                        so stay tuned for real-time updates.
                    </p>

                    <h2 className="font-openSans text-2xl sm:text-4xl mb-5">IS THERE A RIDESHARE?</h2>
                    <p className="font-openSans mb-5 tracking-wider">
                        Yes, SpaceNeo offers rideshare options. To learn more about participating in a shared launch,
                        please contact our support team or refer to the "Services" section on our website.
                    </p>

                    <h2 className="font-openSans text-2xl sm:text-4xl mb-5">HOW LONG IS EACH TRIP?</h2>
                    <p className="font-openSans mb-5 tracking-wider">
                        The duration of each space journey varies depending on the mission. Some missions may be short,
                        while others can last weeks or even months. Consult the specific details of each mission in our
                        "Missions" section for information on the estimated duration.
                    </p>
                </div>
            </div>
        </>
    )
}