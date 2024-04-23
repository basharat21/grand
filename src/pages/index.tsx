import Head from "next/head";
import Header from "../components/header";
import { GetStaticProps } from "next";
import Container from "../components/container";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import { CMS_NAME } from "../lib/constants";
import Herroslider from "../components/hero-slider";
import Rightimgleftcontent from "../components/rightimageleftcontent";
import Productslider from "../components/productslider";
import Image from "next/image";
import Rslider from "../components/reserchslider";
import { Interface } from "readline";
interface Props {
  allPosts: any;
  edges: any;
  preview: any;
}
export default function Index({ allPosts: { edges }, preview }:Props) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  return (
    <Layout preview={preview}>
      <Head>
         <title>Grand Cure </title>
      </Head>
      <Header/>
      <Herroslider/>
      <Rightimgleftcontent/>
      <Container>
        <></>
       </Container>
          <section className="section bg-[#c90101] section-half-white">
             <h2 className="text-[#fff] text-center" data-aos="zoom-in">Our Products</h2>
             <Productslider/>
             </section>
             <Rslider/>
     </Layout>
  );
}
export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};
