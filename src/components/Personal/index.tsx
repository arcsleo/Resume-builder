import React from 'react';
import styles from './styles.module.scss';

export function Personal(props: any) {

    const { data, callBack, disable, cancel } = props;

    const [ userData, setuserData ] = React.useState([{
        name: "",
        email: "",
        address: "",
        phone: ""
    }]);

    const [ validation, setvalidation ] = React.useState(false);

    const dataChange = (field: string, e: any) => {
        const tempData = [...userData];
        if( field === "name" )
            tempData[0].name = e.currentTarget.value;
        else if( field === "email" )
            tempData[0].email = e.currentTarget.value;
        else if( field === "address" )
            tempData[0].address = e.currentTarget.value;
        else if( field === "phone" )
            tempData[0].phone = e.currentTarget.value;

        setuserData(tempData);
    };

    const saveFunction = () => {
        setvalidation(false);
        if( userData[0].name !== "" && userData[0].email !== "" && userData[0].address !== "" && userData[0].phone !== "" )
            callBack('Academic', userData,[]);
        else
            setvalidation(true);
    }

    React.useEffect(()=>{
        setuserData(data);
    },[data])

    return(
        <div className={`col-md-12 ${styles.boxcover} d-flex flex-wrap p-5`}>
            { userData.map((value)=>{
                return(
                    <>
                                <div className={`col-md-12 p-0 d-flex flex-wrap mb-2`}>
                {/* Name */}

                <div className={`col-md-6 ${styles.inputmainbox} d-flex flex-wrap p-0 mb-5`}>
                    <div className={`col-md-12 ${styles.textbox}`}>
                        Name
                    </div>
                    <div className={`col-md-12 ${styles.inputbox}`}>
                        <input placeholder={'Enter name'} onChange={(e)=>dataChange('name',e)} className={`${styles.inputfield}`} value={value.name} type="text" name="" id="" disabled={disable}/>
                    </div>
                </div>

                {/* Email */}

                <div className={`col-md-6 ${styles.inputmainbox} d-flex flex-wrap p-0 mb-5`}>
                    <div className={`col-md-12 ${styles.textbox}`}>
                        Email
                    </div>
                    <div className={`col-md-12 ${styles.inputbox}`}>
                        <input placeholder={'Enter email'} onChange={(e)=>dataChange('email',e)} className={`${styles.inputfield}`}  value={value.email} disabled={disable} type="text" name="" id=""/>
                    </div>
                </div>

            </div>
            <div className={`col-md-12 p-0 d-flex flex-wrap mb-5`}>
                {/* Address */}

                <div className={`col-md-6 ${styles.inputmainbox} d-flex flex-wrap p-0`}>
                    <div className={`col-md-12 ${styles.textbox} mb-2`}>
                        Address
                    </div>
                    <div className={`col-md-12 ${styles.inputbox}`}>
                        <textarea placeholder={'Enter address'} onChange={(e)=>dataChange('address',e)} value={value.address} disabled={disable} className={`${styles.textfield}`} name="" id=""/>
                    </div>
                </div>

                {/* Phone */}

                <div className={`col-md-6 ${styles.inputmainbox} d-flex flex-wrap p-0`}>
                    <div className={`col-md-12 ${styles.textbox} mb-2`}>
                        Phone
                    </div>
                    <div className={`col-md-12 ${styles.inputbox}`}>
                        <input placeholder={'Enter phone'} onChange={(e)=>dataChange('phone',e)} value={value.phone} disabled={disable} className={`${styles.inputfield}`} type="number" name="" id=""/>
                    </div>
                </div>

            </div>
            { validation ? 
                <div className={`col-md-12 ${styles.validation} mb-5 align-items-center justify-content-center`}>
                    Please fill all fields to continue
                </div>
                :
                null
            }
            {/* Save Button */}

            <div className={`col-md-12 ${styles.buttondiv} d-flex align-items-center flex-wrap justify-content-end`}>
                { !disable ?
                    <>
                        <input type="button" className={`${styles.savebtn} mr-3`} onClick={()=>saveFunction()} value="Save & Next"/>
                        <input type="button" className={`${styles.cancelbtn}`} onClick={()=>cancel()} value="Cancel"/>
                    </>
                    :
                        <input type="button" className={`${styles.savebtn} mr-3`} onClick={()=>callBack('Academic', userData, [])} value="Next"/>
                }
            </div>
                    </>
                );
            }) }
        </div>
    );
}