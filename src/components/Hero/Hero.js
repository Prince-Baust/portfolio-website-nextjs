import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>Welcome to <br/> My Personal Portfolio</SectionTitle>
      <SectionText>
        Engineering student with the ability to review plans, write reports, research solutions and implement company procedures. Willingness to learn, ability to follow instructions and work cooperatively within team environments. Competencies include various frameworks and technologies like MERN stack, Scrum etc.
      </SectionText>
      <Button onClick={() => window.location="https://www.linkedin.com/in/maruf-prince/"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;