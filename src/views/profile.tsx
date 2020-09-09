    import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  align-items: end;
  background: #fff;
  border: solid 1px #EDF2F7;
  border-radius: 0.5rem;
  margin-bottom: 0.75rem;
`;
const Container = styled.div`
  padding: 2rem;
`;
const Details = styled.div`
  color: #718096;
  font-size: 0.85rem;
  margin-bottom: 1rem;
  letter-spacing: 0.05em;
`;
const Name = styled.div`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;
const ProfileImage = styled.img`
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  display: block;
  height: auto;
  width: 100%;
`;

export default function Profile(): ReactElement {
  return (
    <Card>
      <ProfileImage
        alt="Profile Image"
        src="https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg"
        />

      <Container>
        <Name>
          John Smith
        </Name>
        <Details>
          Villa de Valencia 423 <br />
          08212 Barcelona
        </Details>
        <Details>
          +34 793 846 519
        </Details>
        <Details>
          john.smith@gmail.com
        </Details>
      </Container>
    </Card>
  );
}
