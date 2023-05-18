import { List, ListItem, SectionHeader, StyledContainer } from "./styled";

const SkillsList = ({ skills, tittle }) => {
    return (
        <>
            <StyledContainer>
                <SectionHeader>{tittle}</SectionHeader>
                <List>
                    {skills.map((skill) => (
                        <ListItem>{skill}</ListItem>
                    ))}
                </List>
            </StyledContainer>
        </>
    )
};

export default SkillsList;