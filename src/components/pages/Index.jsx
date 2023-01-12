import React from "react";
import Layout from "../layout/Layout";
import HeroSection from "./sections/HeroSection";
import TableCurrency from "./sections/TableCurrency";
import Footer from "./footer/Footer";
import REgistrationForm from "./sections/RegistrationForm";

function Index() {
  return (
    <Layout>
      <HeroSection />
      <TableCurrency />
      <REgistrationForm />
      <Footer />
    </Layout>
  );
}

export default Index;
