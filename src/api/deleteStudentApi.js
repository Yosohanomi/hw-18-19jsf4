export const deleteStudentsApi = async(id) => {
    return await fetch(`https://695054968531714d9bd0565f.mockapi.io/students/${id}`, {
        method: "DELETE"
    })
}