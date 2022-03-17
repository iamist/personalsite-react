import React from "react";
import Cover from '../components/Cover';
import Experience from '../components/Experience';
import TechSkills from '../components/TechSkill';
import {experiences, techStacks} from '../components/Data';

const Home: React.FC = () => {
    return (
        <div id="Home">
            <Cover />
            <Experience experiences={experiences} />
            <TechSkills techStacks={techStacks}></TechSkills>
        </div>
    )
};

export default Home;
export const path = '/'
