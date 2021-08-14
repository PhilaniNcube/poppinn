import { Fragment } from 'react';
import styled from 'styled-components';
import ContactForm from '../components/Hompage/ContactForm';
import Description from '../components/Hompage/Description';
import FeaturedProperty from '../components/Hompage/FeaturedProperty';
import Hero from '../components/Hompage/Hero';
import SectionOne from '../components/Hompage/SectionOne';
import SectionThree from '../components/Hompage/SectionThree';
import SectionTwo from '../components/Hompage/SectionTwo';

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Description />
      <SectionOne />
      <FeaturedProperty />
      <SectionTwo />
      <ContactForm />
    </Fragment>
  );
}
