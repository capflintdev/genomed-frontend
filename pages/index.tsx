import { Layout } from '../layout/Layout';
import FirstSection from "../components/FirstSection/FirstSection";
import Slider from "../components/MainPage/Slider/Slider";
import Advantages from "../components/MainPage/Advantages/Advantages";
import Analyzes from "../components/MainPage/Analyzes/Analyzes";
import {mainPage} from '../components/FirstSection/FirstSection.data';


function Home(): JSX.Element {

  return (
    <Layout title="Геномед">
      <FirstSection {...mainPage}/>
      <Slider/>
      <Advantages/>
      <Analyzes/>
      {/*<p>
        <Link href={'/categories'}><a>перейти в Категории</a></Link>
      </p>*/}
    </Layout>
  );
}

export default Home;


