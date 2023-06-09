import { ReactComponent as FacebookIcon } from '../../../../common/images/FacebookIcon.svg';
import { ReactComponent as GithubIcon } from '../../../../common/images/GithubIcon.svg';
import { ReactComponent as InstagramIcon } from '../../../../common/images/InstagramIcon.svg';
import { ReactComponent as LinkedinIcon } from '../../../../common/images/LinkedinIcon.svg';
import { StyledIcon } from './styled';

export const socials = [
    {
        name: "Github",
        url: "https://github.com/jakub2787",
        Icon: StyledIcon(GithubIcon)
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/jakub.wozny.568/",
        Icon: StyledIcon(FacebookIcon)
    },
    {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/jakub-wo%C5%BAny-86a466253/",
        Icon: StyledIcon(InstagramIcon)
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/ja_wozny/",
        Icon: StyledIcon(LinkedinIcon)
    },
];