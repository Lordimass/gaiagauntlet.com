"use client"

import "./SignUp.css"
import Countdown from "@/components/Countdown/Countdown";
import {Accordion, AccordionBody, AccordionHeader} from "react-bootstrap";
import Image from "next/image";

export default function SignUp() {
    const time = new Date(Date.UTC(2026, 11, 13, 21, 15, 0, 0))

    return (<div className={"signup"}>
        <Image
            src="/uiElements/ContainerDecoration.png"
            width={200} height={16}
            aria-hidden="true"
            alt=""
        />
        <h1 id={"Thankmas"}>Gaia Gauntlet: How the Trinch Stole Thankmas</h1>
        <hr/>
        <div className={"split"}>
            <div className={"left"}>
                <Countdown end={time}/>
                <p>Until the event</p>
            </div>
            <div className={"right"}>
                <p>
                    Join us on <code>{time.toLocaleDateString()}</code> at {" "}
                    <code>{time.toLocaleTimeString().substring(0, 5)}</code> (time subject to change) for a
                    special game for <b>Hytale Thankmas 2026</b>!
                    <br/><br/>
                    <i>How The Trinch Stole Thankmas</i> will be available as a limited time gamemode on <i>Gaia Gauntlet:
                    Alterverses</i> soon after the creator event. That means you can play the game yourself, as well as
                    our first game, Elimination Zone, with your friends :D
                </p>
            </div>
        </div>
        <Accordion>
            <AccordionHeader>
                <div>
                    <h2>Are you a creator? Sign up to be considered!</h2>
                </div>
            </AccordionHeader>
            <AccordionBody>
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdZ7jZMa8USqpjaZNzoKW-r3DMl-W_jOsHsiZ1J1TJQ05Ye-A/viewform?embedded=true"
                    width="100%" height="1000">Loading…
                </iframe>
            </AccordionBody>
        </Accordion>
        <Image
            src="/uiElements/ContainerDecoration.png"
            width={200} height={16}
            aria-hidden="true"
            alt=""
        />
    </div>)
}