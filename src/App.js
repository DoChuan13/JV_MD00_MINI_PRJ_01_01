import logo from './logo.svg';
import './App.css';
import Control from './components/Control.js'
import ListStudent from './components/ListStudent.js'
import Form from './components/Form.js';
import React, { createContext, useState, useEffect, useCallback } from 'react';


export const StudentContext = createContext()
function App() {
  console.log("App Comp");
  const [listAllStudent, setListAllStudent] = useState([])
  const [isForm, setIsForm] = useState(false)
  const [actionName, setActionName] = useState('')
  const [selectedStudent, setSelectedStudent] = useState({})
  const [isSearch, setIsSearch] = useState(false)
  const [fillStudentArr, setFillStudentArr] = useState([])
  const [sortOpt, setSortOpt] = useState({ dir: '', by: '' })

  let studentRender = JSON.parse(JSON.stringify(listAllStudent));


  useEffect(() => {
    let listAllStudent = JSON.parse(localStorage.getItem('listAllStudent'))
    if (listAllStudent) {
      setListAllStudent(listAllStudent)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('listAllStudent', JSON.stringify(listAllStudent));
  }, [listAllStudent])


  const isToggleAction = useCallback((formStatus, actionName, selectedStudent) => {
    setIsForm(formStatus);
    setActionName(actionName);
    setSelectedStudent(selectedStudent);
  }, [])

  const findStudent = useCallback((searchStudent, isSearch) => {
    let studentRenderArr = listAllStudent.filter((student) => {
      if (student.studentName.toLowerCase().includes(searchStudent.toLowerCase())) {
        return student;
      }
    })
    setFillStudentArr(studentRenderArr)
    setIsSearch(isSearch, searchStudent)
  }, [listAllStudent])


  const setNewStudent = (formStatus, newStudent) => {
    setIsForm(formStatus);
    setListAllStudent([...listAllStudent, newStudent])
  }

  const updateCurrentStudent = (formStatus, newStudent, currentStudent) => {
    let newListAllStudent = listAllStudent.map((student) => {
      if (student.studentId != currentStudent.studentId) {
        return student;
      }
      else {
        return newStudent;
      }
    })
    setIsForm(formStatus);
    setListAllStudent(newListAllStudent);
  }

  const deleteStudent = (deletedStudent) => {
    let newListAllStudent = listAllStudent.filter((student) => {
      if (student.studentId != deletedStudent.studentId) {
        return student;
      }
    })
    setListAllStudent(newListAllStudent);
  }

  const sortStudentOpt = useCallback((dir, by, isSearch) => {
    setSortOpt({ dir: dir, by: by });
    setIsSearch(isSearch);
  }, [])


  if (sortOpt.dir != '') {
    if (sortOpt.dir == 'studentName') {
      if (sortOpt.by == 'ASC') {
        studentRender.sort((a, b) => (a.studentName > b.studentName) ? 1 : (a.studentName < b.studentName) ? -1 : 0)
      }
      else {
        studentRender.sort((a, b) => (b.studentName > a.studentName) ? 1 : (b.studentName < a.studentName) ? -1 : 0)
      }
    }
    else {
      if (sortOpt.by == 'ASC') {
        studentRender.sort((a, b) => (a.studentAge - b.studentAge))
      }
      else {
        studentRender.sort((a, b) => (b.studentAge - a.studentAge))
      }
    }
  }


  let elementForm;
  if (isForm) {
    elementForm = <Form></Form>
  }
  else {
    elementForm = ''
  }


  if (isSearch) {
    studentRender = fillStudentArr;
  }


  return (
    <StudentContext.Provider value={{
      isToggleAction: isToggleAction,
      setNewStudent: setNewStudent,
      updateCurrentStudent: updateCurrentStudent,
      deleteStudent: deleteStudent,
      actionName: actionName,
      listAllStudent: studentRender,
      selectedStudent: selectedStudent
    }}>
      <div className="App">
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              {/* START CONTROL */}
              <Control
                isToggleAction={isToggleAction}
                findStudent={findStudent}
                sortStudentOpt={sortStudentOpt}
              >
              </Control>
              {/* END CONTROL */}
              {/* START LIST STUDENT */}
              <ListStudent></ListStudent>
              {/* END LIST STUDENT */}
            </div>
          </div>
          {/* START FORM SINH VIEN */}
          {elementForm}
          {/* END FORM SINH VIÊN */}
        </div>
      </div>
    </StudentContext.Provider>
  );
}

export default App;
