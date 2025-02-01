import Header from "./components/Header";
import Hero from "./components/Hero";
import NovosAnuncios from "./components/NovosAnuncios";
import EncontreImovel from "./components/EncontreImovel";


const Home: React.FC = () => {
  return (
    <div className="">
      <Header />
      <Hero />
      <NovosAnuncios />
      <div className="bg-gradient-to-bl from-[#EDF1F4] to-[#FFFFFF]">

        <EncontreImovel />
      </div>
    </div>
  );
}
export default Home;
