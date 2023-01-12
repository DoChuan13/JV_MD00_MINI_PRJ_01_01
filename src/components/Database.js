class Student {
    constructor(studentId, studentName, studentAge, studentGender, studentDateBirth, studentPlaceBirth, studentAddress) {
        this.studentId = studentId;
        this.studentName = studentName;
        this.studentAge = studentAge;
        this.studentGender = studentGender;
        this.studentDateBirth = studentDateBirth;
        this.studentPlaceBirth = studentPlaceBirth;
        this.studentAddress = studentAddress

    }
}

// let intStudentDB = [];
// intStudentDB[0] = new Student("SV001", "Nguyễn Văn A", 20, true, "2002-11-20", "Hà Nội", "Hà Nội")
// intStudentDB[1] = new Student("SV002", "Nguyễn Thanh B", 19, false, "2003-01-01", "Đà Nẵng", "Đà Nẵng")
// intStudentDB[2] = new Student("SV003", "Nguyễn Văn C", 21, true, "2002-11-20", "Quảng Ninh", "Sài Gòn")

// let studentDatabase = JSON.parse(localStorage.getItem('studentDatabase'))
// if (studentDatabase == null) {
//     localStorage.setItem('studentDatabase', JSON.stringify(intStudentDB))
// }



//  [
//   { studentId: "SV001", studentName: "Nguyễn Văn A", studentAge: 20, studentGender: true, studentDateBirth: "2002-11-20", studentPlaceBirth: "Hà Nội", studentAddress: "Hà Nội" },
//   { studentId: "SV002", studentName: "Nguyễn Văn B", studentAge: 19, studentGender: false, studentDateBirth: "2003-01-01", studentPlaceBirth: "Đà Nẵng", studentAddress: "Đà Nẵng" },
//   { studentId: "SV003", studentName: "Nguyễn Văn C", studentAge: 21, studentGender: true, studentDateBirth: "2001-06-06", studentPlaceBirth: "Quảng Ninh", studentAddress: "Sài Gòn" },
// ],


export default Student