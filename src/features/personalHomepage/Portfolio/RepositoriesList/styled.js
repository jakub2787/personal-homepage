import styled from "styled-components";

export const List = styled.div`
  margin-top: 24px;
  max-width: 1216px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
`;

export const ListItem = styled.ul`
  background-color: red;
  background-color: ${({ theme }) => theme.colors.boxBackground};
  border: 6px solid ${({ theme }) => theme.colors.repositoriesList.border};
  border-radius: 4px;
  list-style: none;

  &:hover {
    border: 6px solid ${({ theme }) => theme.colors.repositoriesList.borderHover};
    transition: 1s;
    }
`;

export const GridItem = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  margin: 0px 56px 0px 12px;
`;

export const Header = styled.h3`
  color: ${({ theme }) => theme.colors.repositoriesList.header};
  font-weight: 700;
  font-size: 24px;
  margin: 56px 0px 24px 0px;
`;

export const Content = styled.p`
  color: ${({ theme }) => theme.colors.repositoriesList.text};
  margin-top: 0px;
`;

export const CodeLink = styled.a`
  font-size: 18px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.repositoriesList.link};
  margin-bottom: 8px;
  border-bottom: 1px solid ${({theme}) => theme.colors.repositoriesList.borderLink};

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.repositoriesList.linkHover};
    transition: 1s;
    }
`;

export const DemoLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.repositoriesList.link};
  border-bottom: 1px solid ${({theme}) => theme.colors.repositoriesList.borderLink};

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.repositoriesList.linkHover};
    transition: 1s;
    }
`;

export const DemoSpan = styled.span`
  margin: 24px 0 8px 0;
`;

export const CodeSpan = styled.span`
  margin-bottom:56px;
`;