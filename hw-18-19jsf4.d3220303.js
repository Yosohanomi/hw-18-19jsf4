function t(t,e,n,d){Object.defineProperty(t,e,{get:n,set:d,enumerable:!0,configurable:!0})}var e=globalThis,n={},d={},u=e.parcelRequire95c7;null==u&&((u=function(t){if(t in n)return n[t].exports;if(t in d){var e=d[t];delete d[t];var u={id:t,exports:{}};return n[t]=u,e.call(u.exports,u,u.exports),u.exports}var r=Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){d[t]=e},e.parcelRequire95c7=u);var r=u.register;r("fGYBI",function(e,n){t(e.exports,"getStudentsApi",()=>r);var d=u("5Ww8W");let r=async()=>await fetch("https://695054968531714d9bd0565f.mockapi.io/students").then(t=>t.json()).then(t=>(0,d.makeStudentList)(t))}),r("5Ww8W",function(e,n){t(e.exports,"makeStudentList",()=>d);let d=t=>document.getElementById("studentInfo").innerHTML=t.map(t=>{var e;return`
        <tr>
              <td>${t.id}</td>
              <td>${t.name}</td>
              <td>${t.age}</td>
              <td>${t.course}</td>
              <td>${t.skills.join(", ")}</td>
              <td>${t.email}</td>
              <td>${e=t.isEnrolled,e?"Студент записаний":"Студент не записаний"}</td>
              <td class="buttons__td">
                <button class="update-btn" data-id="${t.id}">\u{41E}\u{43D}\u{43E}\u{432}\u{438}\u{442}\u{438}</button>
                <button class="delete-btn" data-id="${t.id}">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}</button>
              </td>
        </tr>
        `}).join("")}),u("fGYBI");
//# sourceMappingURL=hw-18-19jsf4.d3220303.js.map
