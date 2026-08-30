import "../Creators.css"
import "./SpecialThanks.css"
import Image from "next/image";
import special_thanks from "../../../../public/json/special_thanks.json"

export default function SpecialThanks() {
    return <div className={"creators special-thanks"}>
        {special_thanks.people.map(creator => {
            return <div className={"creator"} key={creator.name}>

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
                    {creator.socials ? <div className="socials">
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
                    </div> : null}
                    <hr/>
                    {creator.quote ? <p>{creator.quote}</p> : null}
                </div>
            </div>

        })}
    </div>


}