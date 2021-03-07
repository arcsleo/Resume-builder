import React from 'react';
import styles from './styles.module.scss';
import { Redirect } from 'react-router-dom';
import { Personal } from '../components/Personal';
import { Academic } from '../components/Academic';
import { View } from '../components/View';
import { Skills } from '../components/Skills';

export function MainContainer(props: any) {

    const { isDisable } = props;

    const [visibleComponent, setvisibleComponent] = React.useState('Personal');
    const [redirectionLink, setredirectionLink] = React.useState('');
    const [redirect, setredirect] = React.useState(false);
    const [userData, setuserData] = React.useState([{
        name: "",
        email: "",
        address: "",
        phone: ""
    }]);
    const [experienceData, setexperienceData] = React.useState([{
        company: "",
        year: "",
        desig: "" 
    }]);
    const [educationData, seteducationData] = React.useState([{
        institution: "",
        year: "",
        degree: "" 
    }]);
    const [skills, setskills] = React.useState([]);

    const dataTabChange = (value: string) => {
        setvisibleComponent(value);
    }

    const tabChange = (value: string, primarydata: any, secondaryData: any) => {
        debugger;
        if( value === "Academic" )
        {
            setuserData(primarydata);
        }
        else if(value === "Skills"){
            setexperienceData(primarydata);
            seteducationData(secondaryData);
        }
        else{
            setskills(primarydata);
            setredirectionLink('/View');
            // dataTabChange('Personal');
            setredirect(true);
        }
        setvisibleComponent(value);
    };

    const pageRedirection = () => {
        setredirectionLink('/Creation');
        dataTabChange('Personal');
        setredirect(true);
    };

    const cancelFunction = () => {
        setredirectionLink('/View');
        dataTabChange('Personal');
        setredirect(true);
    }

    React.useEffect(()=>{
        dataTabChange('Personal');
    },[isDisable])

    return(
        <div className={`col-md-12 ${styles.maindiv} d-flex align-items-center flex-wrap justify-content-center p-0`}>
            <div className={`col-md-3 ${styles.sidediv} d-flex align-items-center flex-wrap justify-content-center`}>
                <div className={`col-md-12 d-flex flex-wrap`}>
                    <div className={`col-md-12 ${styles.welcomeText}`}>
                        Welcome back !!!
                    </div>
                    <div className={`col-md-12 ${styles.subText}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique, arcu ac finibus vehicula, nisi nisi varius augue, quis pharetra purus metus a enim. 
                    </div>
                </div>
            </div>
            <div className={`col-md-9 ${styles.tabHead} d-flex align-items-center flex-wrap justify-content-center`}>
                { isDisable ? 
                    <div className={`col-md-11 d-flex align-items-center flex-wrap justify-content-center`}>
                        <View userData={userData} expData={experienceData} eduData={educationData} skillData={skills} callBack={pageRedirection} />
                    </div>
                :
                <div className={`col-md-8 d-flex align-items-center flex-wrap justify-content-center`}>
                    <div className={`col-md-12 p-0 d-flex`}>
                        <div className={`${styles.singleTab} ${visibleComponent === "Personal" ? styles.active : null} d-flex align-items-center justify-content-center`} onClick={ ()=>dataTabChange('Personal') }>
                            Personal
                        </div>
                        <div className={`${styles.singleTab} ${visibleComponent === "Academic" ? styles.active : null} d-flex align-items-center justify-content-center`} onClick={ ()=>dataTabChange('Academic') }>
                            Academic / Professional
                        </div>
                        <div className={`${styles.singleTab} ${visibleComponent === "Skills" ? styles.active : null} d-flex align-items-center justify-content-center`} onClick={ ()=>dataTabChange('Skills') }>
                            Skills
                        </div>
                        { isDisable ?
                            <input type="button" value="Edit" onClick={()=>pageRedirection()} className={styles.editbutton}/>
                            :
                            null
                        }
                    </div>
                    <div className="col-md-12 p-0">
                        { visibleComponent === "Personal" ?
                                <Personal disable={isDisable} callBack={tabChange} data={userData} cancel={cancelFunction} />
                            :
                            visibleComponent === 'Academic' ?
                                <Academic disable={isDisable} callBack={tabChange} eduData={educationData} expData={experienceData} cancel={cancelFunction} />
                            :
                                <Skills disable={isDisable} callBack={tabChange} data={skills} cancel={cancelFunction} />
                        }
                    </div>   
                </div>
                }
            </div>
            { redirect ?
                <Redirect to={redirectionLink} />
                :
                null
            }
        </div>
    );
}