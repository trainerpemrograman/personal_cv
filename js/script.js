var skill = {
    Basic_programming: ["HTML dan CSS", "Bootstrap dan SASS", "JavaScript dan JQuery", "VueJS"],
    Framework_web: ["VueJS", "ReactJS", "Django", "Laravel"]
};

var skillLevel = {
    "HTML dan CSS": 90,
    "Bootstrap dan SASS": 85,
    "JavaScript dan JQuery": 80,
    "VueJS": 87,
    "ReactJS": 75,
    "Django": 85,
    "Laravel": 90
};

function createSkillItem(name, level) {
    var skillItem = document.createElement('div');
    skillItem.className = 'col-12 col-sm-6 col-xl-5 skill-item';

    skillItem.innerHTML = `
    <div class="bg-white rounded shadow-sm p-3 p-md-4 p-xxl-5">
        <h3 class="fw-bold mb-2">${name}</h3>
        <p class="text-secondary fst-italic mb-4">Nullam felis turpis, commodo id fermentum eget, semper vel odio.</p>
        <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="${name}" aria-valuenow="${level}" aria-valuemin="0" aria-valuemax="100" style="width: ${level}%">${level}%</div>
        </div>
    </div>
`;

    return skillItem;
}

var container = document.getElementById('skills-container');

Object.keys(skill).forEach(function (category) {
    skill[category].forEach(function (item) {
        var skillItem = createSkillItem(item, skillLevel[item]);
        container.appendChild(skillItem);
    });
});