import React, { Component, useContext, useEffect, useReducer } from "react";
import { StudentContext } from "../App";


// const ReducerStudent = (state, action) => {
//     switch (action) {
//         case "view":
//             return state = { status: "view" };
//         case "edit":
//             return state = { status: "edit" };
//         case "delete":
//             return state = { status: "delete" };
//     }
// }
function Student(props) {
    console.log("Student");

    // const [status, dispatch] = useReducer(ReducerStudent, { status: '', log: 0 })

    let { student } = props;
    let listContext = useContext(StudentContext)
    // useEffect(() => {
    //     switch (status.status) {
    //         case "view":
    //             listContext.isToggleAction(true, "", student);
    //             break;
    //         case "edit":
    //             listContext.isToggleAction(true, "UpdateStudent", student);
    //             break;
    //         case "delete":
    //             let checkconfirm = window.confirm("Bạn có chắc chắn muốn xóa Sinh viên này không?");
    //             if (!checkconfirm) {
    //                 return;
    //             }
    //             listContext.deleteStudent(student);
    //             break;
    //         default:
    //             console.log("Invalid");
    //     }
    // }, [status])

    const viewStudent = () => {
        listContext.isToggleAction(true, "", student);
    }

    const editStudent = () => {
        listContext.isToggleAction(true, "UpdateStudent", student);
    }

    const deleteStudent = () => {
        let checkconfirm = window.confirm("Bạn có chắc chắn muốn xóa Sinh viên này không?");
        if (!checkconfirm) {
            return;
        }
        listContext.deleteStudent(student)
    }

    return (
        <tr>
            <td>{props.stt + 1}</td>
            <td>{student.studentId}</td>
            <td>{student.studentName}</td>
            <td>{student.studentAge}</td>
            <td>{student.studentSex.toString() == "true" ? "Nam" : (student.studentSex.toString() == "false" ? "Nữ" : "Khác")}</td>
            <td>
                <div className="template-demo">
                    <button
                        type="button"
                        className="btn btn-danger btn-icon-text"
                        // onClick={() => { dispatch("view") }}
                        onClick={viewStudent}
                    >
                        Xem
                    </button>
                    <button
                        type="button"
                        className="btn btn-warning btn-icon-text"
                        // onClick={() => { dispatch("edit") }}
                        onClick={editStudent}
                    >
                        Sửa
                    </button>
                    <button
                        type="button"
                        className="btn btn-success btn-icon-text"
                        // onClick={() => { dispatch("delete") }}
                        onClick={deleteStudent}
                    >
                        Xóa
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default Student