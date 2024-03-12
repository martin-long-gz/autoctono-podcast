import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../components/Hero/Hero';
import Slider from '../components/Slider/Slider';
import { SliderData } from '../components/Slider/SliderData';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Autóctono Podcast</title>
        <meta
          name="description"
          content="Created as template for future work"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading="Autóctono Podcast" message="Conversaciones cara a cara" />
      <About />
      <Slider slides={SliderData} />
      <Footer />
    </>
  );
};

export default Home;
