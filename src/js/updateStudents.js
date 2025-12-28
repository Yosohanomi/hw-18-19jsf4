import { getStudentsApi } from "../api/getStudentsApi.js";
import { updateStudentApi } from "../api/updateStudentsApi.js";

export const updateStudent = async (e) => {
    if (e.target.classList.contains('update-btn')) {
        try {
            const id = e.target.dataset.id;
            
            const name = prompt("Введіть нове ім'я: ");
            const age = prompt("Введіть новий вік: ");
            const course = prompt("Введіть новий курс: ");
            const skills = prompt("Введіть нові навички (через кому): ");
            const email = prompt("Введіть новий email: ");
            const isEnrolled = confirm("Студент записаний? ");
            
            const updatedStudent = {
                id: id,
                name: name,
                age: parseInt(age),
                course: course,
                skills: skills ? skills.split(",").map(skill => skill.trim()) : [],
                email: email,
                isEnrolled: isEnrolled
            };
            
            await updateStudentApi(updatedStudent);
            await getStudentsApi();
        }
        catch (error) {
            console.log("Помилка: ", error);
        }
    }
}