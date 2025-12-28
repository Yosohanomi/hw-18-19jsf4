import { makeStudentList } from "../js/makeStudentsList"

export const getStudentsApi = async() => {
    return await fetch("https://695054968531714d9bd0565f.mockapi.io/students")
    .then(response => response.json())
    .then(student => makeStudentList(student))
}