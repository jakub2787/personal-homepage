import { Image, Content, Header, Info, Text, Container, MailButton } from "./styled";
import AutorPhoto from "../images/AuthorPhoto.jpg";
import { ReactComponent as MailIcon } from '../images/Message.svg';

const SectionHeader = () => {
    return (
        <>
            <Container>
                <Image src={AutorPhoto} alt="Zdjęcie autora"></Image>
                <Content>
                    <Info>This is</Info>
                    <Header>Jakub Woźny</Header>

                    <Text>👨🏻‍💻  I’m a passionate Frontend Developer in love with React,<br /> currently looking for new job opportunities.</Text>
                    <MailButton href="mailto:jakubwozny28@gmail.com">
                        <MailIcon /> &nbsp;Hire me
                    </MailButton>
                </Content>
            </Container>
        </>
    )
};

export default SectionHeader;