import SkillsList from "../../features/personalHomepage/Skills";
import { skillsList, nextSkills } from "../../features/personalHomepage/Skills/skillsData";

const Section = () => {
    return (
        <>
            <SkillsList
                tittle="My skillset includes 🛠️"
                skills={skillsList}
            />
            <SkillsList
                tittle="What I want to learn next&nbsp;🚀"
                skills={nextSkills}
            />
        </>
    )
};

export default Section;