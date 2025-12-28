export const addStudentApi = async (student) => {
    return await fetch("https://695054968531714d9bd0565f.mockapi.io/students", {
        method: "POST",
        body: JSON.stringify(student),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    })
    .then(response => response.json())
    .catch(error => console.log(error));
}