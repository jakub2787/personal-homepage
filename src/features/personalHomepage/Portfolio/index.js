import { useDispatch, useSelector } from "react-redux";
import { Header, Paragraph, PortfolioIcon, Wrapper } from "./styled";
import { fetchPortfolioLoading, selectStatus } from "./portfolioSlice";
import { useEffect } from "react";
import RepositoriesList from "./RepositoriesList";

const Portfolio = () => {
    const dispatch = useDispatch();
    const status = useSelector(selectStatus)

    useEffect(() => {
        dispatch((fetchPortfolioLoading()))
    }, [dispatch])
    return (
        <>
            <Wrapper>
                <PortfolioIcon />
                <Header>Portfolio</Header>
                <Paragraph>My recent projects</Paragraph>
                {status === "loading" ?
                    <div></div>
                    : status === "success" ?
                        <RepositoriesList /> :
                        <p></p>}
            </Wrapper>
        </>


    );
};

export default Portfolio;