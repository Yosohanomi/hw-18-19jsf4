import { getStudentsApi } from "../api/getStudentsApi.js";
import { deleteStudentsApi } from "../api/deleteStudentApi.js";

export const deleteStudent = async (e) => {
    if (e.target.classList.contains('delete-btn')) {
        try {
            const id = e.target.dataset.id;  
            await deleteStudentsApi(id);
            await getStudentsApi();
        }
        catch (error) {
            console.log("Помилка: ", error);
        }
    }
}