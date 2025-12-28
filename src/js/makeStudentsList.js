function isStudentEnrolled(bolleanValue) {
    let isEnrText = "";
    if (bolleanValue) {
        isEnrText = "Студент записаний";
    }
    else {
        isEnrText = "Студент не записаний";
    }
    return isEnrText;
}

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
              <td>${isStudentEnrolled(st.isEnrolled)}</td>
              <td class="buttons__td">
                <button class="update-btn" data-id="${st.id}">Оновити</button>
                <button class="delete-btn" data-id="${st.id}">Видалити</button>
              </td>
        </tr>
        `).join('');
    return studentInfo.innerHTML = newStudent;
}