import react from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CategorySection from '../components/CategorySection ';
function Home(){
    return(
        <>
        <Navbar/>
        <Hero/>
        <CategorySection/>
        <Footer/>   
        </>
    )
}
export default Home;