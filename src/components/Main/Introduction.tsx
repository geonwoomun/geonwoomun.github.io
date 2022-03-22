import React from 'react';
import styled from '@emotion/styled';
import ProfileImage from './ProfileImage';
import { IGatsbyImageData } from 'gatsby-plugin-image';

const Background = styled.div`
  width: 100%;
  background-image: linear-gradient(60deg, #0f0f0f 0%, #505050 100%);
  color: #fff;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 768px;
  height: 300px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
    padding: 0 20px;
  }
`;

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const Title = styled.div`
  margin-top: 5px;
  font-size: 35px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

type IntroductionProps = {
  profileImage: IGatsbyImageData;
};

const Introduction = ({ profileImage }: IntroductionProps) => {
  return (
    <Background>
      <Wrapper>
        <ProfileImage profileImage={profileImage} />

        <div>
          <SubTitle>Nice to Meet You</SubTitle>
          <Title>I`m Junior Frontend Developer Woo.</Title>
        </div>
      </Wrapper>
    </Background>
  );
};

export default Introduction;
