import React from 'react';
import {DEPARTMENTS} from '../../dataUser/staffs'
import styles from './department.module.css'
function Department(props) {
    return (
        <div className={styles.departmentContainer}>
            {DEPARTMENTS.map((department,index) => {
                return(
                    <div className={styles.department} key={index}>
                        <h1>{department.name}</h1>
                        <h4 className={styles.departmentUser}>{`Số lượng nhân viên: ${department.numberOfStaff}`}</h4>
                    </div>
                )
            })}
           
        </div>
    );
}

export default Department;