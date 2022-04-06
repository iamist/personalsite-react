import React from 'react';
import { faAt, faMapMarkerAlt, faPhone, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AboutMe: React.FC = () => {
    return (
        <div id="aboutMe" className="container py-20">
            <div className="md:flex md:gap-2">
                <div className="w-full md:w-9/12 p-10">
                    <h1 className="text-6xl text-orange-600">
                        Hello, my name is Christian, I go by `Ist`.
                    </h1>
                    <div className="text-2xl mt-10">
                        <p className="text-5xl text-slate-200">
                            I am a fullstack web developer based in the Philippines.
                        </p>

                        <p>
                            In 2005, I graduated with Bachelor's degree in computer science and have been in web development industry ever since.</p>

                        <p>
                            My interest in programming started in developing desktop application as part of my computer programming course in college. I then discover web development when I attended a seminar and found it very interesting as application you can create is accessible world wide.
                        </p>

                        <p>
                            After graduating, I pursue web development career and have been working for 17 years. I have worked for various companies, established and start-ups and have gain professional knowledge and skills in coding from basic websites to complex web application.
                        </p>

                        <p>
                            As I grow in my professional career, I have been able to use agile methodology, apply best practices and industry standard development process. I also developed interest in web application designs and architecture, modern technologies and DevOps tools.
                        </p>

                        <p>
                            Working with corporate companies also offered me chance to gain project and time management skills, lead and mentor teammates, ability to communicate with teams members and clients to effectively meeting milestones and deadlines.
                        </p>

                        <p className="mb-12">
                        For me web development is vast, keeps evolving and always challenging. These  what keep my passion for and interests in web programming.
                        </p>

                        <h2 className="text-3xl text-slate-200">Personal Life</h2>
                        <p>
                        I'm a family man, married for 16 years and father of four kids.
                        </p>

                        <p>
                        In my free time, I read anything related to technologies from <a target="_blank" href="https://news.ycombinator.com/news" rel="noreferrer">Hacker News</a>.
                        </p>

                        <p>
                        Read articles, watch tutorials and try new tools, framework and/or programming related to my profession to keep myself up to date.
                        </p>

                        <p>
                        Watch and read news about current events, TV series or movies, cycling and other outdoor activities.
                        </p>

                        <p>
                        I also do stock and crypto currency trading.
                        </p>
                    </div>
                </div>
                <div className="md:w-3/12">
                    <ul className="list-none full-rounded rounded-2xl bg-zinc-900 p-10">
                        <li className="flex flex-1 text-orange-400 mb-4">
                            <FontAwesomeIcon className="text-xl text-zinc-700" icon={faMapMarkerAlt} /> <span className="inline-block ml-2">General Trias, Cavite, Philippines</span>
                        </li>
                        <li className="mb-4">
                            <a href="mailto:vicentechristian@gmail.com" className="flex flex-1">
                                <FontAwesomeIcon className="text-xl text-zinc-700" icon={faAt} /> <span className="inline ml-2 text-left">
                                vicentechristian@gmail.com
                                </span>
                            </a>
                        </li>
                        <li className="mb-4">
                            <a href="tel:+639175900647" className="flex flex-1">
                                <FontAwesomeIcon className="text-xl text-zinc-700" icon={faPhone} /> <span className="inline-block ml-2 self-start">
                                contact me
                                </span>
                            </a>
                        </li>
                        <li className="mb-4">
                            <a href="https://drive.google.com/file/d/1qcJ7-ky2UyASKLZPq3NnKBq5vPiphjsj/view?usp=sharing" className="flex flex-1" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="text-xl text-zinc-700" icon={faFilePdf} /> <span className="inline-block ml-2 self-start">
                                view my CV
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default AboutMe;
export const path = '/about-me'
