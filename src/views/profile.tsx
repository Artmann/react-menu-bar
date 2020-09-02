import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  align-items: end;
  background: #fff;
  border: solid 1px #EDF2F7;
  border-radius: 0.5rem;
  margin-bottom: 0.75rem;
  padding: 1rem;
`;
const Container = styled.div`
  text-align: center;
`;
const ProfileImage = styled.img`
  display: inline-block;
  height: 16rem;
  width: 16rem;
`;
const Row = styled.div`
  font-size: 0.8rem;
  padding: 1rem 0.5rem;
  text-transform: center;
`;

export default function Profile(): ReactElement {
  return (
    <Container>
      <ProfileImage
        alt="Profile Image"
        src="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"
        />

      <Card>
        <Row>
          John Smith
        </Row>
        <Row>
          Villa de Valencia 423
        </Row>
        <Row>
          08212 Barcelona
        </Row>
      </Card>
    </Container>
  );
}
