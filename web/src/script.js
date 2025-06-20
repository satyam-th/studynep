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


// Find my course form
document.getElementById('interest').addEventListener("change", function() {
    var subCategory = document.getElementById('department');
    var selectedValue = this.value;

    var options = [];

    if (selectedValue === 'technology') {
        options = ['AI', 'Web Development', 'Hardware', 'Software Engineering','Data Science', 'Cyber Security'];
    } else if (selectedValue === 'medical') {
        options = ['Cardiology', 'Neurology', 'Pediatrics'];
    } else if (selectedValue === 'business') {
        options = ['Marketing', 'Finance', 'HR' , 'Entrepreneurship', 'Accounting'];
    }

    subCategory.innerHTML = '';

    options.forEach(function(sub) {
        var option = document.createElement('option');
        option.value = sub.toLowerCase();
        option.text = sub;
        subCategory.appendChild(option);
    });
});
// find my course form submission
document.getElementById('courseForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('fullname').value;
    const stream = document.getElementById('stream').value;
    const gpa = parseFloat(document.getElementById('gpa').value);
    const interest = document.getElementById('interest').value;
    const dept = document.getElementById('department').value;
    const desc = document.getElementById('description').value;

    let greeting = "";
    let congrats = "";
    let suggestion = "";
    let skillAdvice = "";

    if (name) {
        greeting = `Hello, ${name}! `;
    }

    if (gpa >= 3.0) {
        congrats = "Congratulations on scoring "+ gpa + "! ";
    }

    if (gpa >= 3.6 && stream === "science" && interest === "technology") {
        suggestion = "Based on your GPA and interest in technology, you can take BSc CSIT or Computer Engineering.";
        skillAdvice = "You can learn programming languages (like Python, JavaScript), algorithms, data structures, and web development. Explore online courses on platforms like Coursera or freeCodeCamp.";
    } else if (gpa >= 3.2 && interest === "business") {
        suggestion = "You may consider BBA, BBM or BBS depending on your depth in business interest.";
        skillAdvice = "You can develop skills in accounting, marketing, Excel, and communication. Try online business simulations and case studies.";
    } else if (gpa >= 2.8 && interest === "medicine") {
        suggestion = "Consider Bachelor in Public Health, Nursing, or Pharmacy.";
        skillAdvice = "You can read biology and chemistry basics, and improve your knowledge of healthcare systems. Practice communication and empathy skills.";
    } else {
        suggestion = "Please explore general programs like BCA, BSW, or Humanities based on your interest.";
        skillAdvice = "You can work on your English, critical thinking, and basic computer skills. Explore free online courses to discover your passion.";
    }

    document.getElementById('suggestion-n').textContent = greeting + congrats;
     document.getElementById('suggestion-c').textContent = suggestion;
      document.getElementById('suggestion-l').textContent = skillAdvice;
});
