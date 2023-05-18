import { Image, Content, Header, Info, Text, Container } from "./styled";
import AutorPhoto from "../images/AuthorPhoto.jpg";

const AboutMe = () => {
    return (
        <>
            <Container>
                <Image src={AutorPhoto} alt="Zdjęcie autora"></Image>
                <Content>
                    <Info>This is</Info>
                    <Header>Jakub Woźny</Header>
                    <Text>👨🏻‍💻  I’m a passionate Frontend Developer in love with React,<br /> currently looking for new job opportunities.</Text>
                </Content>
            </Container>
        </>
    )
};

export default AboutMe;