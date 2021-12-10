import { Layout } from '../layout/Layout';
import FirstSection from "../components/FirstSection/FirstSection";
import Slider from "../components/MainPage/Slider/Slider";
import Advantages from "../components/MainPage/Advantages/Advantages";
import Analyzes from "../components/MainPage/Analyzes/Analyzes";
import {GetStaticProps} from "next";
import {wpAPI} from "../api/api";



function Home({...props} : pageProps): JSX.Element {

  return (
    <Layout title="Геномед">
       <FirstSection {...props}/>
      <Slider/>
      <Advantages/>
      <Analyzes/>
    </Layout>
  );
}

export default Home;

export const getStaticProps: GetStaticProps<pageProps> = async () => {


    const title: string = await wpAPI.getH1();
    const subtitle1: string = await wpAPI.getSubtitle1();
    const subtitle2: string = await wpAPI.getSubtitle2();

    return {
        props: {
            title,
            subtitle1,
            subtitle2
        }
    };
};

interface pageProps {
    title: string;
    subtitle1: string;
    subtitle2: string;
}