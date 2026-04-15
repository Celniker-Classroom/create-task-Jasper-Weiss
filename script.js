const majors = [
    { name: "Mechanical Engineering", keywords: ["math", "problem solving","technology"]},
    { name: "Biology", keywords: ["science", "helping people","technology"]},
    { name: "Computer Science", keywords: ["technology", "problem solving","math"]},
    { name: "Graphic Design", keywords: ["creativity", "design"]},
    { name: "Architecture", keywords: ["creativity", "design", "math"]},
    { name: "Nursing", keywords: ["helping people", "communication"]},
    { name: "Psychology", keywords: ["helping people", "science"]},
    { name: "Communications", keywords: ["communication", "helping people"]},
    { name: "Political Science", keywords: ["communication", "helping people"]},
    { name: "Finance", keywords: ["math", "business"]},
    { name: "Marketing", keywords: ["communication", "business", "creativity"] },
    { name: "Economics", keywords: ["math", "business", "problem solving"] },
    { name: "Mathematics", keywords: ["math", "problem solving"]},
    { name: "Clinical Research", keywords: ["research", "science", "helping people", "data"]},
    { name: "Pharmacology", keywords: ["research", "science", "helping people"]},
    { name: "Archaeology", keywords: ["research", "nature", "culture"]},
    { name: "Bioethics", keywords: ["ethics", "science", "helping people"]},
    { name: "Human Rights", keywords: ["ethics", "society", "communication"]},
    { name: "Criminal Justice", keywords: ["ethics", "society", "problem solving"]},
    { name: "Nanotechnology", keywords: ["innovation", "science", "technology", "research"]},
    { name: "Renewable Energy", keywords: ["innovation", "environment", "science", "technology"]},
    { name: "Space Systems Engineering", keywords: ["innovation", "technology", "math", "problem solving"]},
    { name: "Sociology", keywords: ["society", "research", "helping people"]},
    { name: "Public Policy", keywords: ["society", "problem solving", "communication"]},
    { name: "International Relations", keywords: ["society", "communication", "culture"]},
    { name: "Climate Science", keywords: ["environment", "science", "research", "data"]},
    { name: "Conservation Biology", keywords: ["environment", "nature", "science"]},
    { name: "Green Architecture", keywords: ["environment", "design", "innovation", "math"]},
    { name: "Photojournalism", keywords: ["media", "creativity", "communication"]},
    { name: "Social Media Management", keywords: ["media", "communication", "business"]},
    { name: "Art History", keywords: ["culture", "creativity", "research"]},
    { name: "Museum Studies", keywords: ["culture", "research", "creativity"]},
    { name: "Comparative Literature", keywords: ["culture", "communication", "creativity"]},
];

function cleanInput(text) {
    return text.trim().toLowerCase();
}

function clearInput() {
    document.getElementById("interestInput").value = "";
}

function searchMajors(input, majorList) {
    let results = []
    for (let i = 0; i < majorList.length; i++) {
        if (majorList[i].keywords.includes(input)) {
            results.push(majorList[i].name);
        }
    }
    return results;
}

function getMatchingMajors(userInput) {
  let cleanedInput = cleanInput(userInput);
  return searchMajors(cleanedInput, majors);
}

// Test 1: input = "ethics" → expected: Bioethics, Human Rights, Criminal Justice
// Test 2: input = "media" → expected: Photojournalism, Social Media Management

document.getElementById("searchButton").addEventListener("click", function () {
  let rawInput = document.getElementById("interestInput").value;
  let results = getMatchingMajors(rawInput);

  let output = document.getElementById("output");

  if (results.length > 0) {
        output.textContent = "Matching Majors: " + results.join(", ");
    } else { 
        output.textContent = "Invalid Input, pick an interest from the list!";
    }

clearInput();
});