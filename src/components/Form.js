import React, { useContext, useEffect, useState, useCallback } from "react";
import { StudentContext } from "../App";


function Form() {
    console.log("Form");
    const [studentInfo, setStudentInfo] = useState({
        studentId: '',
        studentName: '',
        studentAge: '',
        studentSex: '',
        studentDateBirth: '',
        studentPlaceBirth: '',
        studentAddress: '',
    });
    const [currentStudent, setCurrentStudent] = useState({})

    let listContext = useContext(StudentContext)

    const checkValidateCurrentStudent = () => {
        let flag = true;
        listContext.listAllStudent.forEach((student) => {
            if (student.studentId == studentInfo.studentId) {
                flag = false;
            }
        });
        return flag;
    }

    const checkValidateAllField = () => {
        let studentId = studentInfo.studentId != '';
        let studentName = studentInfo.studentName != '';
        let studentAge = studentInfo.studentAge != '';
        let studentSex = studentInfo.studentSex != '';
        let studentDateBirth = studentInfo.studentDateBirth != '';
        let studentPlaceBirth = studentInfo.studentPlaceBirth != '';
        let studentAddress = studentInfo.studentAddress != ''
        // console.log(studentId, studentName, studentAge, studentSex, studentDateBirth, studentPlaceBirth, studentAddress);
        if (studentId && studentName && studentAge && studentSex && studentDateBirth && studentPlaceBirth && studentAddress) {
            return true;
        }
        else {
            return false;
        }
    }

    // useEffect(() => {
    //     setStudentInfo(listContext.selectedStudent)
    //     setCurrentStudent(listContext.selectedStudent)
    // }, [])

    useEffect(() => {
        setStudentInfo(listContext.selectedStudent)
        setCurrentStudent(listContext.selectedStudent)
    }, [listContext.selectedStudent])


    const getStudentInfo = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        setStudentInfo({ ...studentInfo, [name]: value })

        if (name == "studentId") {
            let id = value.toUpperCase().replace(/ /g, '')
            setStudentInfo({ ...studentInfo, studentId: id })
        }
        if (name == "studentDateBirth") {
            let today = new Date()
            let birthdate = new Date(value)
            setStudentInfo({ ...studentInfo, [name]: value, studentAge: (today.getFullYear() - birthdate.getFullYear()) })
        }
    }


    const setNewStudent = (event) => {
        event.preventDefault();
        let checkAllField = checkValidateAllField();
        let checkWithCurrent = checkValidateCurrentStudent();
        console.log(checkAllField, checkWithCurrent);
        if (!checkAllField) {
            window.alert("Vui lòng không được để trống các trường")
            return;
        }
        if (!checkWithCurrent) {
            window.alert("Mã Sinh Viên đã tồn tại, vui lòng thử lại")
            return;
        }
        listContext.setNewStudent(false, studentInfo)
    }

    const updateCurrentStudent = (event) => {
        event.preventDefault();
        let checkAllField = checkValidateAllField();
        let checkWithCurrent = checkValidateCurrentStudent();
        console.log(currentStudent.studentId != studentInfo.studentId, checkWithCurrent);

        if (!checkAllField) {
            window.alert("Vui lòng không được để trống các trường")
            return;
        }
        if (currentStudent.studentId != studentInfo.studentId && !checkWithCurrent) {
            window.alert("Mã Sinh Viên đã tồn tại, vui lòng thử lại")
            return;
        }
        listContext.updateCurrentStudent(false, studentInfo, currentStudent)
    }

    const hideForm = () => {
        let newStudent = {
            studentId: '',
            studentName: '',
            studentAge: '',
            studentSex: '',
            studentDateBirth: '',
            studentPlaceBirth: '',
            studentAddress: '',
        }
        listContext.isToggleAction(false, '', newStudent)
    }

    let elementBtn = '', inputStatus = true;
    if (listContext.actionName == "CreateStudent") {
        elementBtn = <button type="submit" className="btn btn-primary me-2" onClick={setNewStudent}> Create</button>
    }
    else if (listContext.actionName == "UpdateStudent") {
        elementBtn = <button type="submit" className="btn btn-primary me-2" onClick={updateCurrentStudent}> Update</button>
    }


    //! Input Box Status
    if (listContext.actionName == '') {
        inputStatus = true;
    }
    else {
        inputStatus = false;
    }


    return (
        <div className="col-5 grid-margin">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">Thông tin sinh viên</h3>
                    <i className="fa-regular fa-circle-xmark fa-xl icon-close" onClick={hideForm} />
                    <form className="form-sample">
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                            <div className="col-sm-9">
                                <input readOnly={inputStatus} type="text" className="form-control" name="studentId" value={studentInfo.studentId} onChange={getStudentInfo} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                            <div className="col-sm-9">
                                <input readOnly={inputStatus} type="text" className="form-control" name="studentName" value={studentInfo.studentName} onChange={getStudentInfo} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Tuổi</label>
                            <div className="col-sm-9">
                                <input readOnly={true} type={"number"} className="form-control" name="studentAge" value={studentInfo.studentAge} onChange={getStudentInfo} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Giới tính</label>
                            <div className="col-sm-9">
                                <select readOnly={inputStatus} className="form-control" name="studentSex" value={studentInfo.studentSex} onChange={getStudentInfo}>
                                    <option value={''}>Khác</option>
                                    <option value={true}>Nam</option>
                                    <option value={false}>Nữ</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Ngày sinh</label>
                            <div className="col-sm-9">
                                <input readOnly={inputStatus} type={"date"} className="form-control" placeholder="dd/mm/yyyy" name="studentDateBirth" value={studentInfo.studentDateBirth} onChange={getStudentInfo} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Nơi sinh</label>
                            <div className="col-sm-9">
                                <select readOnly={inputStatus} className="form-control" name="studentPlaceBirth" value={studentInfo.studentPlaceBirth} onChange={getStudentInfo}>
                                    <option value={"select"}>Lựa chọn</option>
                                    <option value={"Hà Nội"}>Hà Nội</option>
                                    <option value={"TP. Hồ Chí Minh"}>TP. Hồ Chí Minh</option>
                                    <option value={"Đà Nẵng"}>Đà Nẵng</option>
                                    <option value={"Quảng Ninh"}>Quảng Ninh</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Địa chỉ</label>
                            <div className="col-sm-9">
                                <textarea readOnly={inputStatus} className="form-control" name="studentAddress" value={studentInfo.studentAddress} onChange={getStudentInfo} />
                            </div>
                        </div>
                        {/* Submit */}
                        {elementBtn}
                    </form>
                </div>
            </div >
        </div >
    )
}
export default Form