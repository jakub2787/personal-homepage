import { List, ListItem, SectionHeader, StyledContainer } from "./styled";
import { nanoid } from 'nanoid';

const SkillsList = ({ skills, tittle }) => {
    return (
        <>
            <StyledContainer>
                <SectionHeader>{tittle}</SectionHeader>
                <List>
                    {skills.map((skill) => (
                        <ListItem
                            key={skill}
                        >
                            {skill}
                        </ListItem>
                    ))}
                </List>
            </StyledContainer>
        </>
    )
};

export default SkillsList;