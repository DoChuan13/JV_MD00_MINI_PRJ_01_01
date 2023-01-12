import React, { memo, useContext, useState } from "react";
import { StudentContext } from "../App";


function Control(props) {
    console.log("Control comp");
    const [student, setStudent] = useState('');
    // let listContext = useContext(StudentContext);

    const addNewStudent = () => {
        let newStudent = {
            studentId: '',
            studentName: '',
            studentAge: '',
            studentSex: '',
            studentDateBirth: '',
            studentPlaceBirth: '',
            studentAddress: '',
        }
        props.isToggleAction(true, "CreateStudent", newStudent);
    }

    const getStudentSearchInfo = (event) => {
        let value = event.target.value;
        setStudent(value)
    }

    const findStudent = (event) => {
        event.preventDefault();
        console.log(student);
        props.findStudent(student, true)
    }

    const sortStudent = (event) => {
        let sortOption = event.target.value.split('-');
        props.sortStudentOpt(sortOption[0], sortOption[1], false)
    }

    return (
        <div className="card-header">
            <div className="row">
                <div className="col-3">
                    <button type="button"
                        className="btn btn-primary btn-icon-text"
                        onClick={addNewStudent}
                    >
                        Thêm mới sinh viên
                    </button>
                </div>
                <div className="col-6">
                    <form className="search-form" action="#">
                        <i className="icon-search" />
                        <input
                            type="search"
                            className="form-control"
                            placeholder="Search Here"
                            title="Search here"
                            name="search"
                            value={student}
                            onChange={getStudentSearchInfo}
                        />
                        <button type="button"
                            className="btn btn-primary btn-icon-text"
                            onClick={findStudent}
                        >
                            Tìm kiếm
                        </button>
                    </form>
                </div>
                <div className="col-3 d-flex align-items-center">
                    <select className="form-control" onChange={sortStudent}>
                        <option value="-">Mặc định</option>
                        <option value="studentName-ASC">Tên tăng dần</option>
                        <option value="studentName-DESC">Tên giảm dần</option>
                        <option value="studentAge-ASC">Tuổi tăng dần</option>
                        <option value="studentAge-DESC">Tuổi giảm dần</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default memo(Control)