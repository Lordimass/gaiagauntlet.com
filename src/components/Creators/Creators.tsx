import "./Creators.css"
import Image from "next/image";

export default function Creators({
    people,
    theme = "gold",
    textType = "default"
}: {
    people: Person[];
    theme?: "gold" | "silver";
    textType?: "default" | "quote";

}) {
    // TODO: Add a "GitHub" option for socials. Needs a new icon making, otherwise I'd just do it now :P
    // TODO: Add "Twitch" option.

    return <div className={"creators"}>
        {people.map(creator => {
            const socials = creator.socials ? <div className="socials">
                    {creator.socials.map(social =>
                        <a href={social.url} target="_blank" key={social.name}>
                            <Image
                                src={"/icons/"+social.name+".png"}
                                alt={social.name}
                                width={32}
                                height={32}
                            />
                        </a>
                    )}
                </div> : null

            return <div className={"creator " + theme} key={creator.name}>
                {theme == "gold" ? <Image
                    src="/uiElements/ContainerDecoration.png"
                    width={128} height={16}
                    aria-hidden="true"
                    alt=""
                    className={"creator-top-deco"}
                /> : null}

                <div className={"creator-img-container"}>
                    <Image
                        src={creator.image}
                        width={300}
                        height={300}
                        alt={creator.name}
                    />
                </div>
                <div className={"creator-info"}>
                    <hr/>
                    <h2>{creator.name}</h2>
                    {textType == "default" ? socials : null}
                    <hr/>
                    {creator.quote && textType == "quote" ? <p className="quote">&#34;{creator.quote}&#34;</p> : null}
                    {creator.quote && textType == "default" ? <p>{creator.quote}</p> : null}

                    {creator.tags ? <div className="tags">
                        {creator.tags.map(tag => <span key={tag}>{tag}</span>)}
                    </div> : null}

                    {textType == "quote" ? socials : null}

                </div>
                {theme == "gold" ? <Image
                    src="/uiElements/ContainerDecoration.png"
                    width={128} height={16}
                    aria-hidden="true"
                    alt=""
                    className={"creator-bottom-deco"}
                /> : null}
        </div>

        })}
    </div>
}

export interface Person {
    name: string,
    image: string,
    socials?: {
        name: string
        url: string,
    }[]
    tags?: string[],
    quote?: string,
}