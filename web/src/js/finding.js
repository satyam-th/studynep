// When the stream changes, update sub-stream options
document.getElementById('stream').onchange = function () {
    var substream = document.getElementById('sub-stream');
    var selected = this.value;
    var options = [];

    if (selected === 'science') {
        options = ['Bio', 'Computer'];
    } else if (selected === 'management') {
        options = [
            'H.M. without math',
            'Computer with math',
            'Computer without math',
            'H.M with math',
            'Business with math',
            'Business without math'
        ];
    }

    // Clear old options and add new ones
    substream.innerHTML = '<option value="">--- sub stream ---</option>';
    for (var i = 0; i < options.length; i++) {
        var opt = document.createElement('option');
        opt.value = options[i];
        opt.textContent = options[i];
        substream.appendChild(opt);
    }
};

// When the interest changes, update department options
document.getElementById('interest').onchange = function () {
    var department = document.getElementById('department');
    var selected = this.value;
    var options = [];

    if (selected === 'technology') {
        options = ['AI', 'Web Development', 'Hardware', 'Software Engineering', 'Data Science', 'Cyber Security'];
    } else if (selected === 'medicine') {
        options = ['Cardiology', 'Neurology', 'Pediatrics'];
    } else if (selected === 'business') {
        options = ['Marketing', 'Finance', 'HR', 'Entrepreneurship', 'Accounting'];
    }

    department.innerHTML = '<option value="">--- department ---</option>';
    for (var i = 0; i < options.length; i++) {
        var opt = document.createElement('option');
        opt.value = options[i];
        opt.textContent = options[i];
        department.appendChild(opt);
    }
};

// Suggestions
document.getElementById('courseForm').onsubmit = function (e) {
    e.preventDefault();

    var name = document.getElementById('fullname').value.trim();
    var stream = document.getElementById('stream').value;
    var subStream = document.getElementById('sub-stream').value.toLowerCase();
    var gpa = parseFloat(document.getElementById('gpa').value);
    var interest = document.getElementById('interest').value;
    var dept = document.getElementById('department').value;

    var suggestion = "";
    var error = "";

    //  Science-Bio students can apply for medicine
    if (interest === "medicine" && !(stream === "science" && subStream === "bio")) {
        error = "Sorry, only Science-Bio students can apply for medical fields.";
    }

    // Suggest courses based on stream and interest
    var uniSuggestions = [];
    if (!error) {
        if (stream === "science" && subStream === "bio" && interest === "medicine") {
            if (gpa >= 3.6) {
                uniSuggestions.push("TU: MBBS, BDS, BSc Nursing");
                uniSuggestions.push("KU: MBBS, BSc Nursing");
            } else {
                uniSuggestions.push("TU/PU: BPH, BMLT, BPharma");
            }
        } else if (stream === "science" && interest === "technology") {
            uniSuggestions.push("TU: BSc CSIT, BIT");
            uniSuggestions.push("KU: BTech in CS, BCA");
        } else if (stream === "management" && interest === "business") {
            uniSuggestions.push("TU: BBA, BBS");
            uniSuggestions.push("KU: BBA");
        } else if (stream === "management" && interest === "technology") {
            if (subStream.indexOf("math") !== -1) {
                uniSuggestions.push("TU: BCA, BIM");
                uniSuggestions.push("PU: BCA, BIT");
            } else {
                uniSuggestions.push("TU: BCA");
                uniSuggestions.push("PU: BCA");
            }
        } else if (stream === "humanities") {
            if (interest === "technology") {
                uniSuggestions.push("TU: BCA");
                uniSuggestions.push("PU: BCA, Web Design");
            } else if (interest === "business") {
                uniSuggestions.push("TU: BBS, BBM");
                uniSuggestions.push("PU: BBA, BHM");
            } else if (interest === "humanities") {
                uniSuggestions.push("TU: BA, BSW");
                uniSuggestions.push("PU: BA Rural Development, BSW");
            } else if (interest === "medicine") {
                error = "Sorry, Humanities students cannot apply for medical fields.";
            }
        }
    }

    // Show suggestions or error
    if (error) {
        document.getElementById('suggestion-n').innerHTML = error;
        document.getElementById('suggestion-c').innerHTML = "";
        document.getElementById('suggestion-l').innerHTML = "";
    } else {
        suggestion = "Hello " + name + ", here are some university options:<br><ul>";
        for (var i = 0; i < uniSuggestions.length; i++) {
            suggestion += "<li>" + uniSuggestions[i] + "</li>";
        }
        suggestion += "</ul>";
        document.getElementById('suggestion-n').innerHTML = suggestion;
        document.getElementById('suggestion-c').innerHTML = "";
        document.getElementById('suggestion-l').innerHTML = "You can also take our skill-based courses like Python, Web Design, etc.";
    }
};
