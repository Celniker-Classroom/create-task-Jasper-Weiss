const majors = [
    { name: "Mechanical Engineering", keywords: ["math", "problem solving","technology"]},
    { name: "Biology", keywords: ["science", "helping people","technology"]},
    { name: "Computer Science", keywords: ["technology", "problem solving","math"]},
    { name: "Graphic Design", keywords: ["creativity", "design"]},
    { name: "Architecture", keywords: ["creativity", "design", "math"]},
    { name: "Nursing", keywords: ["helping people", "communication"]},
    { name: "Psychology", keywords: ["helping people", "science"]},
    { name: "Communications", keywords: ["communication", "helping people"]}];

function cleanInput(text) {
    return text.trim().toLowerCase();
}

function clearInput() {
    document.getElementById("interestInput").value = "";
}

function searchMajors(input){

    let results = []

    for (let i = 0; i < majors.length; i++) {
        if (majors[i].keywords.includes(input)){
            results.push(majors[i].name);
        }
    }

    return results;
}

function getMatchingMajors(userInput) {
  let cleanedInput = cleanInput(userInput);
  return searchMajors(cleanedInput);
}

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