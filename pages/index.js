import { Fragment } from 'react';
import styled from 'styled-components';
import FeaturedProperty from '../components/Hompage/FeaturedProperty';
import Hero from '../components/Hompage/Hero';
import SectionOne from '../components/Hompage/SectionOne';
import SectionThree from '../components/Hompage/SectionThree';
import SectionTwo from '../components/Hompage/SectionTwo';

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <FeaturedProperty />
    </Fragment>
  );
}
