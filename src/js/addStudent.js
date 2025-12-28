import { getStudentsApi } from "../api/getStudentsApi.js";
import { addStudentApi } from "../api/addStudentApi.js";

export const addStudents = async (e) => {
    e.preventDefault();
    try {
        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value;
        const course = document.getElementById("course").value;
        const skills = document.getElementById("skills").value.split(",").map(skill => skill.trim());
        const email = document.getElementById("email").value;
        const isEnrolled = document.getElementById("isEnrolled").checked;
        
        const student = {
            name,
            age,
            course,
            skills,
            email,
            isEnrolled
        };

        await addStudentApi(student);
        document.getElementById("add-student-form").reset();
        await getStudentsApi();
    }
    catch (error) {
        console.log("Помилка при додаванні студента:", error);
    }
}
