import { useDispatch, useSelector } from "react-redux";
import { ButtonText, StyledButton, Container, ButtonIcon } from "./styled";
import { selectIsDarkTheme, toggleTheme, } from "./themeSlice";


const Buttton = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector(selectIsDarkTheme);

    return (
        <>
            <Container>
                <ButtonText>{darkMode ? "Dark mode on" : "Dark mode off"}</ButtonText>
                <StyledButton onClick={() => (dispatch(toggleTheme()))}>
                    <ButtonIcon />      
                </StyledButton>
            </Container>
        </>
    )
};
export default Buttton;