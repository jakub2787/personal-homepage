import { useSelector } from "react-redux";

import { Header, Paragraph, PortfolioIcon, Wrapper } from "./styled";
import { selectRepos } from "./portfolioSlice";

const Portfolio = () => {
    const repos = useSelector(selectRepos)


    return (
        <>
            <Wrapper>
                <PortfolioIcon />
                <Header>Portfolio</Header>
                <Paragraph>My recent projects</Paragraph>
            </Wrapper>
        </>
    )
};

export default Portfolio;