import { getStudentsApi } from "./api/getStudentsApi.js";
import { addStudents } from "./js/addStudent.js";
import { deleteStudent } from "./js/deleteStudent.js";
import { updateStudent } from "./js/updateStudents.js";

const getStudentsBtn = document.getElementById("get-students-btn");
getStudentsBtn.addEventListener("click", getStudentsApi);

const addStudentForm = document.getElementById("add-student-form");
addStudentForm.addEventListener("submit", addStudents);

const studentsTable = document.getElementById("students-table");
studentsTable.addEventListener("click", (e) => {
    if (e.target.classList.contains('delete-btn')) {
        deleteStudent(e);
    } else if (e.target.classList.contains('update-btn')) {
        updateStudent(e);
    }
});