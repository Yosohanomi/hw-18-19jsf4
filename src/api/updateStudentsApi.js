export const updateStudentApi = async(student) => {
    return await fetch(`https://695054968531714d9bd0565f.mockapi.io/students/${student.id}`, {
        method: "PUT",
      
        body: JSON.stringify(student),
      
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => response.json())
    
      .then((post) => console.log(post))
    
      .catch((error) => console.log("ERROR" + error));
}

