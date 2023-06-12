import { Image, Content, Header, Info, Text, Container, MailButton, MailIcon } from "./styled";
import AutorPhoto from "../../../common/images/AuthorPhoto.jpg";
import ThemeSwitch from "../ThemeSwitch";

const SectionHeader = () => (
    <>
        <ThemeSwitch />
        <Container>
            <Image src={AutorPhoto} alt="Zdjęcie autora"></Image>
            <Content>
                <Info>This is</Info>
                <Header>Jakub Woźny</Header>
                <Text>👨🏻‍💻  I’m a passionate Frontend Developer in love with React,<br /> currently looking for new job opportunities.</Text>
                <MailButton href="mailto:jakubwozny28@gmail.com">
                    <MailIcon />Hire me
                </MailButton>
            </Content>
        </Container>
    </>
);

export default SectionHeader;