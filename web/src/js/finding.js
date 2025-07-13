// Update sub-stream when stream changes
document.getElementById('stream').onchange = function () {
    var substream = document.getElementById('sub-stream');
    var selected = this.value;
    var options = [];

    if (selected === 'science') {
        options = ['Bio', 'Computer'];
    } else if (selected === 'management') {
        options = [
            'Hotel Mgmt (no math)',
            'Computer (with math)',
            'Computer (no math)',
            'Hotel Mgmt (with math)',
            'Business (with math)',
            'Business (no math)'
        ];
    }

    substream.innerHTML = '<option value="">--- select sub-stream ---</option>';
    options.forEach(function (opt) {
        var option = document.createElement('option');
        option.value = opt;
        option.textContent = opt;
        substream.appendChild(option);
    });
};

// Update department when interest changes
document.getElementById('interest').onchange = function () {
    var department = document.getElementById('department');
    var selected = this.value;
    var options = [];

    if (selected === 'technology') {
        options = ['AI', 'Web', 'Hardware', 'Software', 'Data', 'Cyber'];
    } else if (selected === 'medicine') {
        options = ['MBBS', 'Nursing', 'Pharmacy'];
    } else if (selected === 'business') {
        options = ['Marketing', 'Finance', 'HR', 'Entrepreneur', 'Accounting'];
    }

    department.innerHTML = '<option value="">--- select department ---</option>';
    options.forEach(function (opt) {
        var option = document.createElement('option');
        option.value = opt;
        option.textContent = opt;
        department.appendChild(option);
    });
};

// Show suggestions
document.getElementById('courseForm').onsubmit = function (e) {
    e.preventDefault();

    var name = document.getElementById('fullname').value.trim();
    var stream = document.getElementById('stream').value;
    var subStream = document.getElementById('sub-stream').value.toLowerCase();
    var gpa = parseFloat(document.getElementById('gpa').value);
    var interest = document.getElementById('interest').value;

    var error = "";
    var suggestions = [];

    if (interest === "medicine" && !(stream === "science" && subStream === "bio")) {
        error = "Only Science-Bio students can apply for medicine.";
    }

    if (!error) {
        if (stream === "science" && subStream === "bio" && interest === "medicine") {
            if (gpa >= 3.6) {
                suggestions.push("National: MBBS, BDS, BSc Nursing (TU, KU, PU)");
            } else {
                suggestions.push("National: BPH, BMLT, Pharmacy (TU, PU)");
            }
        } else if (stream === "science" && interest === "technology") {
            suggestions.push("National: BSc CSIT, BIT, BCA (TU, KU, PU)");
            suggestions.push("Foreign-affiliated: BSc Computing (Islington, Softwarica)");
        } else if (stream === "management" && interest === "business") {
            suggestions.push("National: BBA, BBS, BHM (TU, KU, PU)");
            suggestions.push("Foreign-affiliated: BBA (British College, NAMI)");
        } else if (stream === "management" && interest === "technology") {
            if (subStream.includes("math")) {
                suggestions.push("National: BIM, BCA, BIT (TU, PU)");
                suggestions.push("Foreign-affiliated: BSc IT (LBEF, Herald)");
            } else {
                suggestions.push("National: BCA (TU, PU)");
                suggestions.push("Foreign-affiliated: Web Design, IT (Softwarica, Informatics)");
            }
        } else if (stream === "humanities") {
            if (interest === "technology") {
                suggestions.push("National: BCA (TU, PU)");
                suggestions.push("Foreign-affiliated: BSc Computing (Islington, IIMS)");
            } else if (interest === "business") {
                suggestions.push("National: BBS, BBM, BBA (TU, PU)");
                suggestions.push("Foreign-affiliated: BBA (British College)");
            } else if (interest === "humanities") {
                suggestions.push("National: BA, BSW (TU, PU)");
            } else if (interest === "medicine") {
                error = "Humanities students cannot apply for medicine.";
            }
        }
    }

    // Display results
    if (error) {
        document.getElementById('suggestion-n').innerHTML = error;
    } else {
        let html = " Hello <b>" + name + "</b>, here are some course options:<ul>";
        suggestions.forEach(s => html += "<li>" + s + "</li>");
        html += "</ul>";
        document.getElementById('suggestion-n').innerHTML = html;
    }

    document.getElementById('suggestion-c').innerHTML = "";
    document.getElementById('suggestion-l').innerHTML = "We teach: You can also learn short courses like Python, Web Design, and AI.";
};
