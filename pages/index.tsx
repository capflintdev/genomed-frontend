import {withLayout} from '../layout/Layout';
import FirstSection from "../components/FirstSection/FirstSection";
import Slider from "../components/HomePage/Slider/Slider";
import Advantages from "../components/HomePage/Advantages/Advantages";
import Analyzes from "../components/HomePage/Analyzes/Analyzes";
import {GetStaticProps} from "next";
import {testsAPI, wpAPI} from "../api/api";
import {oneCategory} from "../interfaces/page.interface";
import {block2} from "../interfaces/wp.interface";
import React from "react";


function Home({...props}: pageProps): JSX.Element {

    return (
        <>
            <FirstSection titleH1={props.titleH1} subtitle1={props.subtitle1} subtitle2={props.subtitle2}/>
            <Slider data={props.data}/>
            <Advantages {...props.advantages}/>
            <Analyzes data={props.data}/>
        </>
    );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<pageProps> = async () => {

    const titleH1: string = await wpAPI.getDataWP().then(response => response["block-1-title"]);
    const subtitle1: string = await wpAPI.getDataWP().then(response => response["block-1-subtitle-1"]);
    const subtitle2: string = await wpAPI.getDataWP().then(response => response["block-1-subtitle-2"]);
    const advantages: block2[] = await wpAPI.getDataWP().then(response => response["block-2"]);


    const data: oneCategory[] = await testsAPI.getTests();

    return {
        props: {
            titleH1,
            subtitle1,
            subtitle2,
            advantages,
            data
        }
    };
};

interface pageProps extends Record<string, unknown> {
    titleH1: string;
    subtitle1: string;
    subtitle2: string;
    advantages: block2[]
    data: oneCategory[]
}