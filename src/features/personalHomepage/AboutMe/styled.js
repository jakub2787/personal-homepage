import styled from "styled-components";

export const Image = styled.img`
  width: 398px;
  height: 398px;
  border-radius: 50%;
  margin-top: 20px;
`;

export const Info = styled.p`
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  line-height: 130%;
`;

export const Header = styled.h1`
  font-weight: 900;
  font-size: 38px;
  color: ${({ theme }) => theme.color.mineShaft};
  margin: 12px 0 0 0;
`;

export const Content = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  justify-items: flex-start;  
`;

export const Text = styled.p`
  font-weight: 400;
  line-height: 1.4;
  margin: 36px 0 0 0;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 64px;
`;