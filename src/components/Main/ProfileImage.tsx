import React from 'react';
import styled from '@emotion/styled';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { GatsbyImage } from 'gatsby-plugin-image';

const ProfileImageWrapper = styled(GatsbyImage)`
  width: 140px;
  height: 140px;
  margin-right: 10px;
  margin-bottom: 30px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center top;

  @media (max-width: 768px) {
    width: 80px;
    min-width: 80px;
    height: 80px;
    margin-top: 40px;
  }
`;

type ProfileIamgeProps = {
  profileImage: IGatsbyImageData;
};

const ProfileImage = ({ profileImage }: ProfileIamgeProps) => {
  return (
    <ProfileImageWrapper
      image={profileImage}
      alt="profile image"
    ></ProfileImageWrapper>
  );
};

export default ProfileImage;
