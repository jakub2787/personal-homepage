import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  line-height: 140%;
  gap: 8px 32px;
  padding: 0;
  margin-top: 32px;
`;

export const ListItem = styled.li`
  list-style: none;
  
  &::before {
    content: "●";
    color: ${({ theme }) => theme.color.scienceBlue};
    padding-right: 16px;
  }
`;

export const StyledContainer = styled.section`
  background-color: red;
  margin: 63px 0 0 0;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  padding: 32px;
`;

export const SectionHeader = styled.h2`
  font-weight: 900;
  font-size: 30px;
  color: ${({ theme }) => theme.color.mineShaft};
  border-bottom: 1px solid ${({ theme }) => theme.color.iron};
  padding-bottom: 16px;
  margin: 0px;
`;