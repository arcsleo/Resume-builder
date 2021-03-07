import React from 'react';
import styles from './styles.module.scss';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';

export function Skills(props: any) {


    const { data, callBack, disable, cancel } = props;

    const [skills] = React.useState([
        "JavaScript",
        "ReactJS",
        "AngularJS",
        "HTML",
        "CSS",
        "TypeScript",
        "Java",
    ]);

    const [skillArray, setskillArray] = React.useState([{
        skill: "",
        year: ""
    }]);

    const [ validation, setvalidation ] = React.useState(false);

    const addSection = (value: string) => {
        if( value === "Exp" ){
            const addexpTemp = [...skillArray];
            addexpTemp.push({
                skill: "",
                year: "" 
            });
            setskillArray(addexpTemp);
        }
    };

    const arraySetting = (indexVal: number, columnName: string, fieldName: string, e: any) => {
        if(columnName === "skill"){
            const tempArray = [...skillArray];
            tempArray.forEach((value,index) =>{
                if( index === indexVal )
                {
                    if( fieldName === "skill" )
                        value.skill = e.currentTarget.value;
                    else if( fieldName === "year" )
                        value.year = e.currentTarget.value;
                }
            });
            setskillArray(tempArray);
        }
    };

    const arrayUpdation = (indexVal: number, columnName: string, fieldName: string, e: any) => {
        
        if(columnName === "skill"){
            const tempArray = [...skillArray];
            tempArray.forEach((value,index) =>{
                if( index === indexVal )
                {
                    if( fieldName === "skill" )
                        value.skill = e.currentTarget.innerText;
                    else if( fieldName === "year" )
                        value.year = e.currentTarget.value;
                }
            });
            setskillArray(tempArray);
        }
    };

    const removeFunction = (columnName: string, indexVal: number) =>{

        // const dataTemp = [];
        if(columnName === "exp"){
            const tempArray = [...skillArray];
            tempArray.length = 0;
            skillArray.forEach((value, index)=>{
                if( index !== indexVal ){
                    tempArray.push(value);
                }
            });
            setskillArray(tempArray);
        }
    };

    const Submission = () => {
        setvalidation(false);
        if(skillArray[0].skill !== "" && skillArray[0].year !== "")
            callBack('Submission',skillArray,[]);
        else
            setvalidation(true);
    };

    React.useEffect(()=>{
        setskillArray(data);
    },[data]);

    return(
        <div className={`col-md-12 ${styles.boxcover} d-flex align-items-center flex-wrap p-5`}>

            <div className="col-md-12">
                <div className={`col-md-12 ${styles.expHead} mb-3 mt-3 p-0`}>
                    Skills
                </div>
            </div>
            <div className="col-md-12 p-0 d-flex align-items-center justify-content-center flex-wrap">
                <div className={`col-md-11 d-flex flex-wrap align-items-end mb-5`}>
                    { skillArray.map((value: any, index: number)=>{
                    return(
                        <>
                            <Autocomplete
                                id={styles.selectionbox}
                                inputValue={value.skill}
                                disabled={disable}
                                onChange={(event, newInputValue)=>arrayUpdation(index, "skill", "skill", event)}
                                options={skills.map((option) => option)}
                                renderInput={(params: any) => (
                                <TextField {...params} label="Skill" onChange={(event: any)=>arraySetting(index, "skill", "skill", event)} margin="normal" variant="outlined" />
                                )}
                            />
                            <input type="number" className={`${styles.skillseconddiv} mb-3`} onChange={ (e)=>arrayUpdation(index, "skill", "year", e) } value={value.year} disabled={disable} placeholder={"Years of Experience"}/>
                            { !disable ?
                                <>
                                <span className={`${styles.forthdiv} mb-3`} onClick={()=>removeFunction('exp',index)}><CloseIcon/></span>
                                </>
                                : 
                                null
                            }
                        </>
                    );
                    }) }
                </div>
                <div className={`col-md-1`}>
                    { !disable ?
                        <p className={styles.addButton} onClick={()=>addSection('Exp')}><ControlPointIcon /></p>
                        : null
                    }
                </div>            
            </div>
            { validation ? 
                <div className={`col-md-12 ${styles.validation} mb-5 align-items-center justify-content-center`}>
                    Please fill all fields to continue
                </div>
                :
                null
            }
            <div className={`col-md-12 ${styles.buttondiv} d-flex align-items-center flex-wrap justify-content-end`}>
                { !props.disable ?
                    <>
                        <input type="button" onClick={()=>Submission()} className={`${styles.savebtn} mr-3`} value="Submit"/>
                        <input type="button" className={`${styles.cancelbtn}`} onClick={()=>cancel()} value="Cancel"/>
                    </>
                    :
                    null
                }
            </div>
        </div>
    );
}