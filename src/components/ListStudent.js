import React, { memo, useContext } from 'react'
import Student from './Student.js'
import { TableListContext } from '../App.js'


function ListStudent() {
    console.log("List Student Comp");

    let listContext = useContext(TableListContext)

    let elementStudent = listContext().listAllStudent.map((student, index) => {
        return <Student key={index} stt={index} student={student}></Student>
    })

    return (
        <div className="card-body">
            <h3 className="card-title">Danh sách sinh viên</h3>
            <div className="table-responsive pt-3">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Mã sinh viên</th>
                            <th>Tên sinh viên</th>
                            <th>Tuổi</th>
                            <th>Giới tính</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elementStudent}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default memo(ListStudent)