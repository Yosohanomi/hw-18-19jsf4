import { getStudentsApi } from "../api/getStudentsApi.js";
import { addStudentApi } from "../api/addStudentApi.js";

export const addStudents = async (e) => {
    if (e.target.nodeName === "SUBMIT") {
        const id = e.target.dataset.id
        await addStudentApi(id);
        await getStudentsApi();
    }
    else{console.log(nor);}
}