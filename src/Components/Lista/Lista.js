import React from 'react';
import { Button } from '../../globalStyles';
// eslint-disable-next-line no-unused-vars
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
// eslint-disable-next-line no-unused-vars
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Lista.elements';

function Lista() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Nossos Serviços</PricingHeading>
          <PricingContainer>
            <PricingCard to='/'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Exemplo 1</PricingCardPlan>
                <PricingCardCost>R$99,90</PricingCardCost>
                <PricingCardLength>por mês</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Item 1</PricingCardFeature>
                  <PricingCardFeature>Item 2</PricingCardFeature>
                  <PricingCardFeature>Item 3</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Prosseguir</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Exemplo 2</PricingCardPlan>
                <PricingCardCost>R$149,90</PricingCardCost>
                <PricingCardLength>por mês</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Item 1</PricingCardFeature>
                  <PricingCardFeature>Item 2</PricingCardFeature>
                  <PricingCardFeature>Item 3</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Prosseguir</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Exemplo 3</PricingCardPlan>
                <PricingCardCost>R$299,90</PricingCardCost>
                <PricingCardLength>por mês</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Item 1</PricingCardFeature>
                  <PricingCardFeature>Item 2</PricingCardFeature>
                  <PricingCardFeature>Item 3</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Prosseguir</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Lista;