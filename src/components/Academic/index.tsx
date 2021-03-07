import React from 'react';
import styles from './styles.module.scss';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import CloseIcon from '@material-ui/icons/Close';

export function Academic(props: any) {

    const { eduData, expData, callBack, disable, cancel } = props;

    const [expArray, setexpArray] = React.useState([{
        company: "",
        year: "",
        desig: "" 
    }]);
    const [eduArray, seteduArray] = React.useState([{
        institution: "",
        year: "",
        degree: "" 
    }]);
    const [ validation, setvalidation ] = React.useState(false);

    const addSection = (value: string) => {
        if( value === "Exp" ){
            const addexpTemp = [...expArray];
            addexpTemp.push({
                company: "",
                year: "",
                desig: ""    
            });
            setexpArray(addexpTemp);
        }
        else{
            const addeduTemp = [...eduArray];
            addeduTemp.push({
                institution: "",
                year: "",
                degree: ""   
            });
            seteduArray(addeduTemp);
        }
    };

    const arrayUpdation = (indexVal: number, columnName: string, fieldName: string, e: any) => {
        if(columnName === "exp"){
            const tempArray = [...expArray];
            tempArray.forEach((value,index) =>{
                if( index === indexVal )
                {
                    if( fieldName === "company" )
                        value.company = e.currentTarget.value;
                    else if( fieldName === "year" )
                        value.year = e.currentTarget.value;
                    else if( fieldName === "desig" )
                        value.desig = e.currentTarget.value;
                }
            });
            setexpArray(tempArray);
        }
        else{
            const tempArray = [...eduArray];
            tempArray.forEach((value,index) =>{
                if( index === indexVal )
                {
                    if( fieldName === "institution" )
                        value.institution = e.currentTarget.value;
                    else if( fieldName === "year" )
                        value.year = e.currentTarget.value;
                    else if( fieldName === "degree" )
                        value.degree = e.currentTarget.value;
                }
            });
            seteduArray(tempArray);
        }
    };

    const removeFunction = (columnName: string, indexVal: number) =>{

        // const dataTemp = [];
        if(columnName === "exp"){
            const tempArray = [...expArray];
            tempArray.length = 0;
            expArray.forEach((value, index)=>{
                if( index !== indexVal ){
                    tempArray.push(value);
                }
            });
            setexpArray(tempArray);
        }
        else{
            const tempArray = [...eduArray];
            tempArray.length = 0;
            eduArray.forEach((value, index)=>{
                if( index !== indexVal ){
                    tempArray.push(value);
                }
            });
            seteduArray(tempArray);
        }
    };

    const saveFunction = () => {
        setvalidation(false);
        if( expArray[0].company !== "" && expArray[0].desig !== "" && expArray[0].year !== "" && eduArray[0].degree !== "" && eduArray[0].institution !== "" && eduArray[0].year !== "" )
            callBack('Skills',expArray,eduArray);
        else
            setvalidation(true);
    }

    React.useEffect(()=>{
        setexpArray(expData);
        seteduArray(eduData);
    },[eduData,expData])

    return(
        <div className={`col-md-12 ${styles.boxcover} d-flex align-items-center flex-wrap p-5`}>

            <div className="col-md-12">
                <div className={`col-md-12 ${styles.expHead} mb-3 mt-3 p-0`}>
                    Experience
                </div>
            </div>
            <div className="col-md-12 p-0 d-flex align-items-center justify-content-center flex-wrap">
                <div className={`col-md-11`}>
                    { expArray.map((value: any, index: number)=>{
                    return(
                        <>
                            <input type="text" className={`${styles.firstdiv} mb-3`} disabled={disable} onChange={ (e)=>arrayUpdation(index, "exp", "company", e) } value={value.company} placeholder={"Company"}/>
                            <input type="number" className={`${styles.seconddiv} mb-3`} disabled={disable} onChange={ (e)=>arrayUpdation(index, "exp", "year", e) } value={value.year} placeholder={"Year"}/>
                            <input type="text" className={`${styles.thirddiv} mb-3`} disabled={disable} onChange={ (e)=>arrayUpdation(index, "exp", "desig", e) } value={value.desig} placeholder={"Designation"}/>
                            { !disable ?
                                <span className={`${styles.forthdiv} mb-3`} onClick={()=>removeFunction('exp',index)}><CloseIcon/></span>
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
                        :
                        null
                    }
                </div>            
            </div>
            <div className="col-md-12">
                <div className={`col-md-12 ${styles.expHead} mb-3 mt-3 p-0`}>
                    Education
                </div>
            </div>
            <div className="col-md-12 p-0 d-flex align-items-center justify-content-center flex-wrap">
                <div className={`col-md-11`}>
                    { eduArray.map((value: any, index: number)=>{
                    return(
                        <>
                            <input type="text" className={`${styles.firstdiv} mb-3`} disabled={disable} onChange={ (e)=>arrayUpdation(index, "edu", "institution", e) } value={value.institution} placeholder={"Institution"}/>
                            <input type="number" className={`${styles.seconddiv} mb-3`} disabled={disable} onChange={ (e)=>arrayUpdation(index, "edu", "year", e) } value={value.year} placeholder={"Year"}/>
                            <input type="text" className={`${styles.thirddiv} mb-3`} disabled={disable} onChange={ (e)=>arrayUpdation(index, "edu", "degree", e) } value={value.degree} placeholder={"Degree"}/>
                            { !disable ?
                                <span className={`${styles.forthdiv} mb-3`} onClick={()=>removeFunction('edu',index)}><CloseIcon/></span>
                                :
                                null
                            }
                        </>
                    );
                    }) }
                </div>
                <div className={`col-md-1`}>
                    { !disable ?
                        <p className={styles.addButton} onClick={()=>addSection('Edu')}><ControlPointIcon /></p>
                        :
                        null
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
                { !disable ?
                    <>
                        <input type="button" onClick={()=>saveFunction()}  className={`${styles.savebtn} mr-3`} value="Save & Next"/>
                        <input type="button" className={`${styles.cancelbtn}`} onClick={()=>cancel()} value="Cancel"/>
                    </>
                    :
                    <input type="button" className={`${styles.savebtn} mr-3`} onClick={()=>callBack('Skills',expArray,eduArray)} value="Next"/>
                }
            </div>
        </div>
    );
}