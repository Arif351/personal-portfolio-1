import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiMail, IconName } from "react-icons/hi";

const Footer = () => {
    return (
        <footer className="footer items-center p-4 bg-neutral text-neutral-content">
            <div className="items-center grid-flow-col">
                <p>Copyright © 2022 - All right reserved</p>
            </div>
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end hover-text">

                <a href='https://twitter.com/Arifkutubi5' target="_blank" rel='noreferrer' className="tooltip" data-tip="Twitter"><svg xmlns="" width="40" height="40" viewBox="0 0 24 24" className="fill-current"><FaTwitter className=''></FaTwitter> </svg>
                </a>

                <a href='mailto:arifulislam63099@gmail.com?subject=Mail from our Website' target="_blank" rel='noreferrer' className="tooltip" data-tip="Send Mail"><svg xmlns="" width="40" height="40" viewBox="0 0 24 24" className="fill-current"> <HiMail></HiMail> </svg></a>

                <a href='https://www.facebook.com/profile.php?id=100007848876670' target="_blank" rel='noreferrer' className="tooltip" data-tip="Facebook"><svg xmlns="" width="40" height="40" viewBox="0 0 24 24" className="fill-current"><FaFacebook></FaFacebook> </svg></a>

                <a href='https://www.linkedin.com/in/arifulislam63099' target="_blank" rel='noreferrer' className="tooltip" data-tip="LinkedIn"><svg xmlns="" width="40" height="40" viewBox="0 0 24 24" className="fill-current"><FaLinkedin></FaLinkedin> </svg></a>

                <a href='https://github.com/Arif351?tab=repositories' target="_blank" rel='noreferrer' className="tooltip" data-tip="GitHub"><svg xmlns="" width="40" height="40" viewBox="0 0 24 24" className="fill-current"><FaGithub></FaGithub> </svg></a>
            </div>
        </footer>
    );
};

export default Footer;