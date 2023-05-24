import { useDispatch, useSelector } from "react-redux";
import { ButtonText, StyledButton, Container, ButtonIcon, Box } from "./styled";
import { selectModeSwitch, toggleTheme, } from "./themeSlice";

const Buttton = () => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector(selectModeSwitch);

    return (
        <>
            <Container>
                <ButtonText>Dark mode {isDarkMode ? "on" : "off"}</ButtonText>
                <StyledButton onClick={() => (dispatch(toggleTheme()))}>
                    <Box moveSwitch={!isDarkMode} >
                    <ButtonIcon /> 
                    </Box>        
                </StyledButton>
            </Container>
        </>
    )
};
export default Buttton;