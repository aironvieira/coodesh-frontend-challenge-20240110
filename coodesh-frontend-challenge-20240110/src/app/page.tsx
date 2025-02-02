import Header from "./components/Header";
import Hero from "./components/Hero";
import NovosAnuncios from "./components/NovosAnuncios";
import EncontreImovel from "./components/EncontreImovel";
import Diferenciais from "./components/Diferenciais";
import Banner from "./components/Banner";
import PorEstado from "./components/PorEstado";
import Oportunidade from "./components/Oportunidade";
import Motivacional from "./components/Motivacional";
import PostsBlog from "./components/PostsBlog";
import Associar from "./components/Associar";
import Footer from "./components/Footer";


const Home: React.FC = () => {
  return (
    <div className="">
      <Header />
      <Hero />
      <NovosAnuncios />
      <div className="bg-gradient-to-bl from-[#EDF1F4] to-[#FFFFFF]">
        <EncontreImovel />
      </div>
      <Diferenciais />
      <Banner />
      <PorEstado />
      <Oportunidade />
      <Motivacional />
      <PostsBlog />
      <div className="container">
        <Associar />
      </div>
      <Footer /> 
    </div>
  );
}
export default Home;
