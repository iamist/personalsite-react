import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const socialConnect = [
    {
        icon: faGithub,
        url: 'https://github.com/iamist/',
        target: '_blank'
    },
    {
        icon: faLinkedinIn,
        url: 'https://www.linkedin.com/in/christian-vicente-21013918/',
        target: '_blank'
    },
    {
        icon: faAt,
        url: 'mailto:vicentechristian@gmail.com',
        target: '_blank'
    }
];

const SocialMedia: React.FC = () => {
    return (
        <div id="socialMedia" className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            {
                socialConnect.map(social => {
                    return (
                        <a href={social.url} target={social.target} className="text-zinc-600 duration-500">
                            <FontAwesomeIcon icon={social.icon} />
                        </a>
                    );
                })
            }
        </div>
    )
}

export default SocialMedia;
