export const makeStudentList = (data) => {
    const studentInfo = document.getElementById("studentInfo");
    const newStudent = data.map(st => `
        <tr>
              <td>${st.id}</td>
              <td>${st.name}</td>
              <td>${st.age}</td>
              <td>${st.course}</td>
              <td>${st.skills.join(", ")}</td>
              <td>${st.email}</td>
              <td>${st.isEnrolled}</td>
              <td>Дії</td>
        </tr>
        `).join('');
    return studentInfo.innerHTML = newStudent;
}