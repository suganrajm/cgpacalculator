// Function to calculate the CGPA for a given semester
function calculateCGPA(semester) {
    let grades = [];
    let credits = [];
    let totalCredits = 0;
    let totalGradePoints = 0;

    switch (semester) {
        case 1:
            grades = [
                parseFloat(document.getElementById('english1').value),
                parseFloat(document.getElementById('maths1').value),
                parseFloat(document.getElementById('physics1').value),
                parseFloat(document.getElementById('chemistry1').value),
                parseFloat(document.getElementById('python1').value),
                parseFloat(document.getElementById('pythonlab1').value),
                parseFloat(document.getElementById('physchemLab1').value)
            ];
            credits = [4, 4, 3, 3, 3, 2, 2];
            totalCredits = 21;
            break;
        case 2:
            grades = [
                parseFloat(document.getElementById('english2').value),
                parseFloat(document.getElementById('tamil1').value),
                parseFloat(document.getElementById('maths2').value),
                parseFloat(document.getElementById('physics2').value),
                parseFloat(document.getElementById('eg2').value),
                parseFloat(document.getElementById('fee2').value),
                parseFloat(document.getElementById('ca2').value),
                parseFloat(document.getElementById('epllab2').value),
                parseFloat(document.getElementById('calab2').value),
                parseFloat(document.getElementById('englishlab2').value)
            ];
            credits = [2, 1, 4, 3, 4, 3, 4, 2, 1, 1.5];
            totalCredits = 25.5;
            break;
        case 3:
            grades = [
                parseFloat(document.getElementById('maths3').value),
                parseFloat(document.getElementById('tamil2').value),
                parseFloat(document.getElementById('cprogram3').value),
                parseFloat(document.getElementById('ss3').value),
                parseFloat(document.getElementById('edc3').value),
                parseFloat(document.getElementById('ca3').value),
                parseFloat(document.getElementById('dsd3').value),
                parseFloat(document.getElementById('edclab3').value),
                parseFloat(document.getElementById('cplab3').value),
                parseFloat(document.getElementById('pdlab3').value)
            ];
            credits = [4, 1, 3, 3, 3, 3, 4, 1.5, 1.5, 1];
            totalCredits = 25;
            break;
        case 4:
            grades = [
                parseFloat(document.getElementById('emt4').value),
                parseFloat(document.getElementById('ns4').value),
                parseFloat(document.getElementById('lic4').value),
                parseFloat(document.getElementById('dsp4').value),
                parseFloat(document.getElementById('cs4').value),
                parseFloat(document.getElementById('ess4').value),
                parseFloat(document.getElementById('cslab4').value),
                parseFloat(document.getElementById('liclab4').value)
            ];
            credits = [3, 4, 3, 4, 3, 2, 2, 1.5];
            totalCredits = 22.5;
            break;
        case 5:
            grades = [
                parseFloat(document.getElementById('tlrf').value),
                parseFloat(document.getElementById('vlsi').value),
                parseFloat(document.getElementById('wc').value),
                parseFloat(document.getElementById('pe11').value),
                parseFloat(document.getElementById('pe12').value),
                parseFloat(document.getElementById('pe13').value),
                parseFloat(document.getElementById('vlsilab').value)
            ];
            credits = [4, 3, 4, 3, 3, 3, 2];
            totalCredits = 22;
            break;

    }

    if (grades.length !== credits.length) {
        return NaN;
    }

    for (let i = 0; i < grades.length; i++) {
        totalGradePoints += grades[i] * credits[i];
    }

    return totalGradePoints / totalCredits;
}

// Calculate the CGPA for each semester when the respective button is clicked
document.getElementById('calculateSemester1').addEventListener('click', function() {
    const result = calculateCGPA(1);
    document.getElementById('result1').textContent = `Semester 1 GPA: ${result.toFixed(2)}`;
});

document.getElementById('calculateSemester2').addEventListener('click', function() {
    const result = calculateCGPA(2);
    document.getElementById('result2').textContent = `Semester 2 GPA: ${result.toFixed(2)}`;
});

document.getElementById('calculateSemester3').addEventListener('click', function() {
    const result = calculateCGPA(3);
    document.getElementById('result3').textContent = `Semester 3 GPA: ${result.toFixed(2)}`;
});

document.getElementById('calculateSemester4').addEventListener('click', function() {
    const result = calculateCGPA(4);
    document.getElementById('result4').textContent = `Semester 4 GPA: ${result.toFixed(2)}`;
});

document.getElementById('calculateSemester5').addEventListener('click', function() {
    const result = calculateCGPA(5);
    document.getElementById('result5').textContent = `Semester 5 GPA: ${result.toFixed(2)}`;
});

// Calculate the average CGPA across selected semesters
document.getElementById('calculateAverage').addEventListener('click', function() {
    const semesters = [1, 2, 3, 4, 5]; // List of all semesters
    let totalCGPA = 0;
    let count = 0;

    semesters.forEach(semester => {
        const cgpa = calculateCGPA(semester);
        if (!isNaN(cgpa)) {
            totalCGPA += cgpa;
            count++;
        }
    });

    if (count === 0) {
        document.getElementById('averageResult').textContent = 'Error calculating CGPA. Please check your input.';
    } else {
        const averageCGPA = totalCGPA / count;
        document.getElementById('averageResult').textContent = `Average CGPA: ${averageCGPA.toFixed(2)}`;
    }
});
