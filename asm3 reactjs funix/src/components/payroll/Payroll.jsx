import React from 'react';
import {Link} from 'react-router-dom'
import {STAFFS} from '../dataUser/staffs'
import styles from './payroll.module.css'
function Payroll(props) {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.header}>
                <Link to='/'>
                    <h2>Nhân Viên/</h2>
                </Link>
                <h2>Bảng Lương</h2>
            </div>

            {/* render */}
            <div className={styles.contentContainer}>
               {STAFFS.map((pay,index) => {
                   return (
                    <div className={styles.content} key={index}>
                        <h2 className={styles.user}>{pay.name}</h2>
                        <h4 className={styles.user}>{`Mã nhân viên: ${pay.id}`}</h4>
                        <h4 className={styles.user}>{`Hệ số lương: ${pay.salaryScale}`}</h4>
                        <h4 className={styles.user}>{`Số giờ làm thêm: ${pay.overTime}`}</h4>
                        <div className={styles.payroll}>
                        <h4>LƯƠNG:{(pay.salaryScale*300000)+(pay.overTime*200000)}</h4>
                        </div>
                    </div>
                   )
               })}
                
            </div>
        </div>
    );
}

export default Payroll;