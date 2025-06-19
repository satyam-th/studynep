// Navbar for phone
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('show');
}

// Save and restore scroll position ai
window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('scrollPosition', window.scrollY);
});

window.addEventListener('load', () => {
    const scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition, 10));
    }
});

// find my course form submission
// document.getElementById('courseForm').addEventListener('submit', function (e) {
//   e.preventDefault();

//   const name = document.getElementById('fullname').value;
//   const stream = document.getElementById('stream').value;
//   const gpa = parseFloat(document.getElementById('gpa').value);
//   const interest = document.getElementById('interest').value;
//   const dept = document.getElementById('department').value;
//   const desc = document.getElementById('description').value;

//   let suggestion = "";

//   if (gpa >= 3.6 && stream === "science" && interest === "technology") {
//     suggestion = "Based on your GPA and interest in technology, we suggest BSc CSIT or Computer Engineering.";
//   } else if (gpa >= 3.2 && interest === "business") {
//     suggestion = "You may consider BBA, BBM or BBS depending on your depth in business interest.";
//   } else if (gpa >= 2.8 && interest === "medicine") {
//     suggestion = "Consider Bachelor in Public Health, Nursing, or Pharmacy.";
//   } else {
//     suggestion = "Please explore general programs like BCA, BSW, or Humanities based on your interest.";
//   }

//   document.getElementById('suggestion').textContent = suggestion;
// });
