import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { PageMain } from "../../../Components/PageMain";
import loadContent from "../../loadContent";

export default function LevelTravelHome() {
    const { lang } = useParams();
    const ref = useRef(null);

    // useEffect(() => {
    //     const scriptWrapper = document.getElementById("scripy-wrapper");

    //     window.addEventListener("load", function() {
    //         console.log('FFFFFFFFF');
    //     });

    //     const script1 = document.createElement('script');
    //     script1.src = 'https://c26.travelpayouts.com/content?trs=210401&shmarker=411135&departure=Moscow&destination=205%2C10097%2C10098%2C210%2C995%2C983&start_date=WEEK&nights=4..6&adults=2&kids=0&redirect=_blank&powered_by=true&promo_id=8286';
    //     script1.async = true;
    //     scriptWrapper.appendChild(script1);

    //     const script2 = document.createElement('script');
    //     script2.src = 'https://c26.travelpayouts.com/content?trs=210401&shmarker=411135&hotel=https%3A%2F%2Flevel.travel%2Fhotels%2F9073883-Kleopatra_Bebek&type=package&departure=Moscow&start_date=WEEK&nights=8&adults=2&kids=0&redirect=_blank&powered_by=true&promo_id=8295';
    //     script2.async = true;
    //     scriptWrapper.appendChild(script2);

    //     const script3 = document.createElement('script');
    //     script3.src = 'https://c26.travelpayouts.com/content?trs=210401&shmarker=411135&package=https%3A%2F%2Flevel.travel%2Fpackages%2F311145086&redirect=_blank&powered_by=true&promo_id=8294';
    //     script3.async = true;
    //     scriptWrapper.appendChild(script3);

    //     return () => {
    //         scriptWrapper.parentElement.removeChild(scriptWrapper);
    //     }
    // }, []);

    // useEffect(() => {
    //     var myFrame = document.getElementById('myFrame');
    //     myFrame.onload = function() {
    //       myFrame.style.height = myFrame.contentWindow.document.body.scrollHeight + 'px';
    //     }
    // }, []);

    return (
        <PageMain ref={ref}>
            {/* <ScriptWrapper id="scripy-wrapper"></ScriptWrapper> */}
            {/* <iframe src="/pages/leveltravel/home.html" /> */}
            <InsuranceIFrame src="/pages/leveltravel/home.html" />
        </PageMain>
    )
}

const ScriptWrapper = styled.div`
    padding: 10px;
    background: #404040;
`

const InsuranceIFrame = styled.iframe.attrs(() => ({
    name: "module",
    scrolling: "no",
    id: "myFrame",
    width: "100%",
    seamless: "seamless",
    onload: event => {
        let myFrame = document.getElementById("myFrame");
        myFrame.contentWindow.document.addEventListener('DOM')
        setTimeout(() => {
            myFrame.style.height = myFrame.contentWindow.document.body.scrollHeight + 'px';   
        }, 10000);
    },
    
}))`
    margin: 0 auto;
    border: none;
    display: block;
`