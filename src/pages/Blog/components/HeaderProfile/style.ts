import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 2.5rem;
  gap: 2rem;
`;
export const ProfileImage = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 0.5rem;
`;

export const ProfileContent = styled.div`
  grid-area: content_profile;
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
`;
export const ProfileHeader = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;

  h2 {
    color: ${({ theme }) => theme.colors["base-title"]};
    font-size: ${({ theme }) => theme.textSizes["title-title-l"]};
  }
`;

export const ProfileBio = styled.p`
  color: ${({ theme }) => theme.colors["base-text"]};
  font-size: ${({ theme }) => theme.textSizes["text-text-m"]};
`;

export const ProfileSocials = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1rem;
`;
