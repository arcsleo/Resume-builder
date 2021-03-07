import React from 'react';
import styles from './styles.module.scss';

export function View(props: any) {

    const { userData, eduData, expData, skillData, callBack } = props;

    React.useEffect(()=>{

    },[userData, eduData, expData, skillData, callBack]);

    return(
        <div className={`col-md-12 ${styles.parentdiv} mb-3`}>
            <div className={`col-md-12`}>
                <input type="button" value="Edit" onClick={()=>callBack()} className={styles.editbutton}/>
            </div>
            <div className={`col-md-12 ${styles.boxcover} d-flex align-items-center flex-wrap p-5 mb-5`}>
                <div className={`col-md-12 ${styles.boxHead} d-flex align-items-center flex-wrap`}>
                    <div className={`col-md-4 ${styles.userName}`}>
                        {userData[0].name}
                    </div>
                    <div className={`col-md-8`}>
                        <div className={`col-md-12 ${styles.userDetails}`}>
                            <span className={styles.userDetailsHead}>Email: </span>
                            <span className={styles.userDetailsText}>
                                {userData[0].email}
                            </span>
                        </div>
                        <div className={`col-md-12 ${styles.userDetails}`}>
                            <span className={styles.userDetailsHead}>Address: </span>
                            <span className={styles.userDetailsText}>
                                {userData[0].address}
                            </span>
                        </div>
                        <div className={`col-md-12 ${styles.userDetails}`}>
                            <span className={styles.userDetailsHead}>Phone: </span>
                            <span className={styles.userDetailsText}>
                                {userData[0].phone}
                            </span>
                        </div>
                    </div>
                </div>
                <span className={`col-md-12 ${styles.divider} mt-5 mb-5`} />
                <div className={`col-md-12 ${styles.workHead} d-flex align-items-center flex-wrap mb-5`}>
                    <div className={`col-md-12 ${styles.workHeading} mb-3`}>
                        Work Experience
                    </div>
                    <div className={`col-md-12 p-0 d-flex align-items-center flex-wrap`}>
                        { expData.map((value: any)=>{
                            return(
                                <div className={`col-md-12 p-0 mb-3 d-flex align-items-center flex-wrap`}>
                                    <div className={`col-md-8 ${styles.leftarea} p-0`}>
                                        <div className={`col-md-12 ${styles.designation}`}>
                                            {value.desig}
                                        </div>
                                        <div className={`col-md-12 ${styles.companyname}`}>
                                            {value.company}
                                        </div>
                                    </div>
                                    <div className={`col-md-4 ${styles.rightarea} p-0`}>
                                        <div className={`col-md-12 ${styles.year}`}>
                                            {value.year}
                                        </div>
                                    </div>
                                </div>
                            );
                        }) }
                    </div>
                </div>
                <div className={`col-md-12 ${styles.workHead} d-flex align-items-center flex-wrap mb-5`}>
                    <div className={`col-md-12 ${styles.workHeading} mb-3`}>
                        Academics
                    </div>
                    <div className={`col-md-12 p-0 d-flex align-items-center flex-wrap`}>
                        { eduData.map((value: any)=>{
                            return(
                                <div className={`col-md-12 p-0 mb-3 d-flex align-items-center flex-wrap`}>
                                    <div className={`col-md-8 ${styles.leftarea} p-0`}>
                                        <div className={`col-md-12 ${styles.designation}`}>
                                            {value.degree}
                                        </div>
                                        <div className={`col-md-12 ${styles.companyname}`}>
                                            {value.institution}
                                        </div>
                                    </div>
                                    <div className={`col-md-4 ${styles.rightarea} p-0`}>
                                        <div className={`col-md-12 ${styles.year}`}>
                                            {value.year}
                                        </div>
                                    </div>
                                </div>
                            );
                        }) }
                    </div>
                </div>
                <div className={`col-md-12 ${styles.workHead} d-flex align-items-center flex-wrap mb-5`}>
                    <div className={`col-md-12 ${styles.workHeading} mb-3`}>
                        Skills
                    </div>
                    <div className={`col-md-12 p-0 d-flex align-items-center flex-wrap`}>
                        { skillData.map((value: any)=>{
                            return(
                                <div className={`col-md-12 p-0 mb-3 d-flex align-items-center flex-wrap`}>
                                    <div className={`col-md-8 ${styles.leftarea} p-0`}>
                                        <div className={`col-md-12 ${styles.designation}`}>
                                            {value.skill}
                                        </div>
                                    </div>
                                    <div className={`col-md-4 ${styles.rightarea} p-0`}>
                                        <div className={`col-md-12 ${styles.year}`}>
                                            {value.year} years of experience
                                        </div>
                                    </div>
                                </div>
                            );
                        }) }
                    </div>
                </div>
            </div>
        </div>
    );
}