import React, { useEffect, useState, useRef } from "react";
import clsx from "clsx";
import { GrFormAdd } from "react-icons/gr";
import { Link, useNavigate, useParams } from "react-router-dom";
import SearchUser from "../../searchUser/SearchUser";
import { FaTimesCircle } from "react-icons/fa";
import AboutUser from "./AboutUser";
import styles from "./user.module.css";
function User({ STAFFS }) {
  const navigate = useNavigate();
  // const {id} = useParams()
  const [valueSearch, setValueSearch] = useState("");
  const [resultSearch, setResultSearch] = useState({});
  const [openDashboard, setOpenDashboard] = useState(false);

  const [valueName, setValueName] = useState("");
  const [valueDate, setValueDate] = useState("");
  const [valueStart, setValueStart] = useState("");
  const [valueDepartment, setValueDepartment] = useState("");
  const [valuePayroll, setValuePayroll] = useState("");
  const [valueDayOff, setValueDayOff] = useState("");
  const [valueOverTimes, setValueOverTimes] = useState("");
  // submit value input search
  const handleSearchUser = () => {
    if (valueSearch) {
      const match = STAFFS.filter((user) => {
        // console.log(user);
        return user.name.match(new RegExp(valueSearch));
      });
      setResultSearch(match);
    }
  };
  // submit
  const handleSubmitValue = () => {
    setOpenDashboard(false);
    const user = {
      id: STAFFS.length + 1,
      name: valueName,
      doB: valueDate,
      salaryScale: valuePayroll,
      startDate: valueStart,
      image: "http://www.livedemolink.com/cric-profile/img/img1.jpg",
      department: { id: "", name: valueDepartment, numberOfStaff: 2 },
      annualLeave: valueDayOff,
      overTime: valueOverTimes,
    };
    const addUser = STAFFS.push(user);
    return addUser;
  };
  return (
    <div className={styles.user}>
      {openDashboard && (
        <div
          className={styles.overLay}
          onClick={() => setOpenDashboard(false)}
        ></div>
      )}
      <div className={styles.userTitle}>
        <div className={styles.addUserAndSearch}>
          <h2>Nhân Viên</h2>
          <div className={styles.addContainer}>
            <button
              className={styles.add}
              onClick={() => setOpenDashboard(!openDashboard)} //true
            >
              <GrFormAdd />
            </button>
            {/* ui */}
            {openDashboard && (
              <div className={styles.dashboardAdd}>
                <div className={styles.contentDashboard}>
                  <h3>Thêm nhân viên</h3>
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => setOpenDashboard(false)}
                  >
                    <FaTimesCircle />
                  </span>
                </div>

                <div className={styles.inputAdd}>
                  <h4>Tên</h4>
                  <input
                    className={styles.inputDashboard}
                    value={valueName}
                    disabled={valueName.length === 30}
                    onChange={(e) => setValueName(e.target.value)}
                  />
                </div>
                {valueName.length === 30 ? (
                  <span className={styles.errorInput}>
                    Không nhập quá 30 ký tự
                  </span>
                ) : (
                  valueName.length === 1 && (
                    <span className={styles.errorInput}>Tối thiệu 2 ký tự</span>
                  )
                )}

                <div className={styles.inputAdd}>
                  <h4>Ngày sinh</h4>
                  <input
                    className={styles.inputDashboard}
                    type="date"
                    value={valueDate}
                    onChange={(e) => setValueDate(e.target.value)}
                  />
                  {valueDate.length == 0 ? (
                    <span className={styles.errorInputDate}>
                      Không được bỏ trống
                    </span>
                  ) : (
                    ""
                  )}
                </div>

                <div className={styles.inputAdd}>
                  <h4>Ngày vào công ty</h4>
                  <input
                    className={styles.inputDashboard}
                    type="date"
                    value={valueStart}
                    onChange={(e) => setValueStart(e.target.value)}
                  />
                  <span></span>
                </div>

                <div className={styles.inputAdd}>
                  <h4>Phòng ban</h4>
                  <select
                    className={styles.select}
                    value={valueDepartment}
                    onChange={(e) => setValueDepartment(e.target.value)}
                  >
                    <option className={styles.option}>Sale</option>
                    <option className={styles.option}>HR</option>
                    <option className={styles.option}>Marketing</option>
                    <option className={styles.option}>IT</option>
                    <option className={styles.option}>Finance</option>
                  </select>
                </div>
                <div className={styles.inputAdd}>
                  <h4>Hệ số lương</h4>
                  <input
                    value={valuePayroll}
                    onChange={(e) => setValuePayroll(e.target.value)}
                    className={styles.inputDashboard}
                    type="number"
                    placeholder="1.0 -> 3.0 "
                  />
                </div>

                <div className={styles.inputAdd}>
                  <h4>Số ngày nghỉ còn lại</h4>
                  <input
                    value={valueDayOff}
                    onChange={(e) => setValueDayOff(e.target.value)}
                    className={styles.inputDashboard}
                    type="number"
                    placeholder="0"
                  />
                </div>
                <div className={styles.inputAdd}>
                  <h4>Số ngày đã làm thêm</h4>
                  <input
                    value={valueOverTimes}
                    onChange={(e) => setValueOverTimes(e.target.value)}
                    className={styles.inputDashboard}
                    type="number"
                    placeholder="0"
                  />
                </div>

                <div className={styles.buttonAdd} onClick={handleSubmitValue}>
                  <button className={styles.AddUser}>Thêm</button>
                </div>
              </div>
            )}
          </div>
          <div className={styles.searchContainer}>
            <input
              className={styles.search}
              value={valueSearch}
              onChange={(e) => setValueSearch(e.target.value)} // event
              placeholder="tìm nhân viên..."
            />
            {/* <Link to={"/staffs/search"} onClick={handleSearchUser}> */}
            <button className={styles.buttonSearch} onClick={handleSearchUser}>
              Tìm
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>

      {/* <div> */}
      {/* <SearchUser user={resultSearch} /> */}
      {/* </div> */}
      {resultSearch.length > 0 && (
        <div className={styles.userSearchContainer}>
          <li
            className={clsx(styles.itemUser, styles.itemUserSearch)}
            // onClick={() => handleGetAboutUser(user)}
          >
            {resultSearch.map((item, index) => (
              <Link
                to={`/staffs/${item.id}`}
                key={index}
                className={styles.linkAboutUserSearch}
                style={{ textDecoration: "none" }}
              >
                <img
                  className={clsx(styles.avatarUser, styles.avatarUserSearch)}
                  src="http://www.livedemolink.com/cric-profile/img/img1.jpg"
                />
                <h4 className={clsx(styles.userNameSearch)}>{item.name}</h4>
              </Link>
            ))}
          </li>
        </div>
      )}
      {/* render ui */}
      {/* mang cu */}
      {resultSearch.length > 0 ? null : ( // ? la if : la else
        <div className={styles.aboutUser}>
          <ul className={styles.listItem}>
            {STAFFS &&
              STAFFS.map((user, index) => {
                return (
                  <Link
                    to={`/staffs/${user.id}`}
                    key={index}
                    style={{ textDecoration: "none" }}
                  >
                    <li
                      className={styles.itemUser}
                      // onClick={() => handleGetAboutUser(user)}
                    >
                      <img
                        className={styles.avatarUser}
                        src="http://www.livedemolink.com/cric-profile/img/img1.jpg"
                      />
                      <div className={styles.nameUser}>
                        <h4>{user.name}</h4>
                      </div>
                    </li>
                  </Link>
                );
              })}
          </ul>
        </div>
      )}
      {/* render about item */}
    </div>
  );
}

export default User;
