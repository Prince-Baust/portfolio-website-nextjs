import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

import {data} from '../../constants/constants'

const Acomplishments = () => (
  <Section>
    <SectionTitle>Achievements</SectionTitle>
    <Boxes>
      {
        data.map((card, index) => (
          <Box key={index}>
            <BoxNum>{card.number}+</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))
      }
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
