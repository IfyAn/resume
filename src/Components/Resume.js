import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'February 2016 - July 2016'} 
                        title={'Web Developer'}
                        subTitle={'Rizen Bureau LTD'}
                        text={'Rizen Bureau LTd is a currency exhange company, situated at the commercial capital(Lagos) of Nigeria. I work mainly on maintenance on the front-end of the company website as to improved user experience'} 
                    />
                    <ResumeItem 
                        year={'February 2020 -December 2020'} 
                        title={'Mobile Developer'}
                        subTitle={'Efficion Consulting LTD'}
                        text={"Efficion Consulting LTD company is Start-Up that deals on Consultation, Building, Development of website and mobile apps for companies and indivituals. I am my team (front-end) were developing a mobile app for emergency usage. I was actively involed in the project though I left due to personal reasons. The project isn't yet LIVE "} 
                    />
                    <ResumeItem 
                        year={'January 2021 - Present'} 
                        title={'Mobile Developer'}
                        subTitle={'T-Fair Engineering LTd'}
                        text={"Is a Start-up firm that Build & Develop Mobile application for end Users. It's a remote job. Currently working the front-end area of a transportation app (inter-state & intra-state) for a firm.    "} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'September 2009 - 2014'} 
                        title={'Elect/Elect Engineering( B.Eng)'}
                        subTitle={'Madonna University'}
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }
    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume