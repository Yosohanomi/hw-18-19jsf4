//  https://695054968531714d9bd0565f.mockapi.io/students

import { getStudentsApi } from "./api/getStudentsApi";
import { addStudents } from "./js/addStudent";


const getStudentsBtn = document.getElementById("get-students-btn")
getStudentsBtn.addEventListener("click", getStudentsApi)
const addStudentBtn = document.getElementById("addStudentBtn");

addStudentBtn.addEventListener("click", addStudents)