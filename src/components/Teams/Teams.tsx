import teams from "../../../public/json/teams.json"
import "./Teams.css"
import Image from "next/image";

export default function Teams() {
    return <div className={"teams"}>
        {teams.teams.map((team, i) => <div className={"team"} key={i}>
            <Image
                src="/uiElements/ContainerDecoration.png"
                width={128} height={16}
                aria-hidden="true"
                alt=""
                className={"team-bottom-deco"}
            />
            <div className={"team-image-container"}>
                <Image src={team.image} alt={""} width={128} height={128} />
            </div>
            <div className={"team-info-container"}>
                <h3>{team.name}</h3>
                <div className={"team-members"}>
                    {team.people.map((p, k) => {
                        const person = p as {url?: string, image?: string, name: string}
                        return <div className={"team-member"} key={k}>
                        <a href={person.url}><Image
                            src={person.image ?? `playerIcons/${person.name}@2x.png`}
                            alt={""} width={96} height={96}
                        /></a>
                        <p>{person.name}</p>
                    </div>})}
                </div>
            </div>

        </div>)}
    </div>
}