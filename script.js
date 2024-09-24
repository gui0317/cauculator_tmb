document.getElementById('tmb-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    let tmb;

    if (gender === 'masculino') {
        tmb = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
    } else {
        tmb = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
    }

    document.getElementById('tmb-result').textContent = tmb.toFixed(2);
});