import Image from "next/image";
import styles from "./page.module.css";
import Creators from "@/components/Creators/Creators";
import ImageMarquee from "@/components/ImageMarquee/ImageMarquee";
import staff from "../../public/json/gg_team.json"
import special_thanks from "../../public/json/special_thanks.json"
import old_staff from "../../public/json/gg_old_team.json"

export default function Home() {
    return (
        <div className={styles.page}>
            <div className={styles.headerContainer}>
                <div className={styles.headerBg}/>
                <div className={styles.header}>
                    <Image
                        className={styles.gaia}
                        src="/branding/gaia.png"
                        alt="A golden Gaia statue"
                        width={350}
                        height={350}
                    />
                    <Image
                        className={styles.logo}
                        id={styles.ggLogo}
                        src="/branding/gg_text_glow.png"
                        alt="Gaia Gauntlet logo"
                        width={500}
                        height={300}
                        priority
                    />
                    <Image
                        className={styles.logo}
                        id={styles.ggCentredLogo}
                        src="/branding/gg_text_glow_centred.png"
                        alt="Gaia Gauntlet logo"
                        width={500}
                        height={300}
                        priority
                    />
                </div>
            </div>
            <div className={styles.mainHeader}>
                <Image
                    src="/uiElements/ContainerDecoration.png"
                    width={200} height={16}
                    aria-hidden="true"
                    alt=""
                />
                <div>
                    <h1>One event.<br/> Countless creators.<br/> One champion.</h1>
                    <Image
                        src="/branding/5_point_tree.svg"
                        width={100} height={100}
                        alt={"An icon of a five point tree with nodes at the end of each branch."}
                    />
                </div>

                <Image
                    src="/uiElements/ContainerDecoration.png"
                    width={200} height={16}
                    aria-hidden="true"
                    alt=""
                />
            </div>


            <ImageMarquee images={["/twitterPosts/post1.webp", "/twitterPosts/post3.webp", "/twitterPosts/post2.webp", "/twitterPosts/post4.webp"]} />
            <main className={styles.main}>
                <div className={styles.intro}>
                    {/*<h2>Competing Teams</h2>*/}
                    {/*<Teams/>*/}
                    <h2>The GG Team</h2>
                    <Creators people={staff.people} textType={"quote"}/>
                    <h2>With special thanks to...</h2>
                    <p>
                        We wouldn&#39;t be able to do this without help from the community. Thank you everyone!
                    </p>
                    <Creators people={special_thanks.people} theme={"silver"}/>
                    <h2>Previous Staff</h2>
                    <p>
                        Some people have contributed to Gaia Gauntlet immensely, but are unfortunately not part of our
                        core team any longer. That doesn&#39;t mean we don&#39;t still want to say thank you though!
                    </p>
                    <Creators people={old_staff.people} textType={"quote"}/>

                    <blockquote>
                        &#34;I&#39;m just one part of the team of people who work on making Gaia Gauntlet a reality. We all do
                        this out of passion and love for the community, and none of us are paid, so we really appreciate
                        your support. Thank you to everyone who contributed to making this project a reality, you&#39;re
                        all amazing!&#34;
                    </blockquote>
                    <p className={"align-self-start"}>- Lordimass</p>
                </div>
            </main>
        </div>
    );
}
