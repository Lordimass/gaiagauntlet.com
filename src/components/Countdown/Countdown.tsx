"use client";

import {useEffect, useState} from "react";

export default function Countdown({end, className}: {end: Date, className?: string}) {

    
    function updateTime() {
        setTimeout(() => {
            setTime((end.getTime() - Date.now()))
            updateTime()
        }, 1000)
    }

    const [time, setTime] = useState<number>(0);
    const timeDate = new Date(time);

    useEffect(() => {updateTime()}, [])

    const months = timeDate.getMonth();
    const days = timeDate.getDate();

    return (<h1 className={"countdown" + (className != null ? (" " + className) : "")}>
        {months > 0 ? months + ":" : ""}
        {(months > 0 && days > 0) ? days.toString(10).padStart(2, "0") + ":" : ""}
        {timeDate.getHours().toString(10).padStart(2, "0")}:
        {timeDate.getMinutes().toString(10).padStart(2, "0")}:
        {timeDate.getSeconds().toString(10).padStart(2, "0")}
    </h1>)
}