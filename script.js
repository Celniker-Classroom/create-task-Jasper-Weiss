const majors = [

// AI Documentation used for Data/List:
// https://docs.google.com/document/d/1oHh4w8nZ0HzM3KfmAQcIRfFZDQrNLzSHxaht8lR191Q/edit?usp=sharing


  // Engineering
  { name: "Mechanical Engineering", keywords: ["math", "problem solving", "technology", "machines", "design", "physics", "building", "systems"] },
  { name: "Electrical Engineering", keywords: ["math", "circuits", "technology", "electronics", "physics", "problem solving", "computers", "systems"] },
  { name: "Computer Engineering", keywords: ["computers", "technology", "coding", "electronics", "problem solving", "hardware", "software", "math"] },
  { name: "Civil Engineering", keywords: ["math", "construction", "design", "buildings", "bridges", "infrastructure", "physics", "problem solving"] },
  { name: "Chemical Engineering", keywords: ["chemistry", "math", "problem solving", "technology", "processes", "science", "materials", "physics"] },
  { name: "Biomedical Engineering", keywords: ["biology", "medicine", "technology", "engineering", "problem solving", "health", "design", "science"] },
  { name: "Aerospace Engineering", keywords: ["physics", "math", "airplanes", "space", "design", "technology", "problem solving", "flight"] },
  { name: "Environmental Engineering", keywords: ["environment", "science", "math", "sustainability", "water", "pollution", "problem solving", "technology"] },
  { name: "Industrial Engineering", keywords: ["efficiency", "systems", "math", "problem solving", "business", "optimization", "processes", "data"] },
  { name: "Materials Engineering", keywords: ["chemistry", "physics", "materials", "technology", "science", "design", "problem solving", "engineering"] },

  // Computer and Technology
  { name: "Computer Science", keywords: ["coding", "computers", "technology", "problem solving", "software", "algorithms", "math", "logic"] },
  { name: "Information Technology", keywords: ["computers", "technology", "networks", "support", "systems", "software", "problem solving", "cybersecurity"] },
  { name: "Cybersecurity", keywords: ["computers", "security", "technology", "problem solving", "coding", "networks", "data", "systems"] },
  { name: "Data Science", keywords: ["data", "math", "statistics", "coding", "technology", "analysis", "problem solving", "computers"] },
  { name: "Software Engineering", keywords: ["coding", "technology", "computers", "software", "design", "problem solving", "logic", "systems"] },
  { name: "Game Design", keywords: ["gaming", "design", "coding", "computers", "art", "storytelling", "technology", "creativity"] },
  { name: "Web Development", keywords: ["coding", "design", "computers", "technology", "websites", "creativity", "problem solving", "software"] },

  // Life Sciences and Health
  { name: "Biology", keywords: ["biology", "science", "research", "nature", "health", "animals", "plants", "lab work"] },
  { name: "Biochemistry", keywords: ["biology", "chemistry", "science", "lab work", "research", "medicine", "molecules", "health"] },
  { name: "Microbiology", keywords: ["biology", "science", "research", "lab work", "health", "bacteria", "medicine", "disease"] },
  { name: "Neuroscience", keywords: ["biology", "brain", "science", "research", "psychology", "medicine", "health", "lab work"] },
  { name: "Genetics", keywords: ["biology", "science", "research", "dna", "medicine", "health", "lab work", "inheritance"] },
  { name: "Public Health", keywords: ["health", "community", "science", "medicine", "helping people", "policy", "research", "wellness"] },
  { name: "Nursing", keywords: ["health", "medicine", "helping people", "science", "care", "patients", "service", "biology"] },
  { name: "Pre-Med", keywords: ["medicine", "biology", "chemistry", "health", "science", "helping people", "research", "patients"] },
  { name: "Kinesiology", keywords: ["sports", "health", "exercise", "biology", "movement", "fitness", "science", "wellness"] },
  { name: "Nutrition", keywords: ["health", "food", "science", "biology", "wellness", "helping people", "diet", "fitness"] },

  // Physical and Environmental Sciences
  { name: "Chemistry", keywords: ["chemistry", "science", "lab work", "research", "problem solving", "molecules", "experiments", "medicine"] },
  { name: "Physics", keywords: ["physics", "math", "science", "problem solving", "research", "technology", "space", "theory"] },
  { name: "Environmental Science", keywords: ["environment", "science", "nature", "sustainability", "research", "climate", "animals", "plants"] },
  { name: "Geology", keywords: ["earth", "science", "rocks", "nature", "research", "environment", "field work", "geography"] },
  { name: "Astronomy", keywords: ["space", "science", "physics", "research", "math", "stars", "planets", "technology"] },
  { name: "Marine Biology", keywords: ["biology", "ocean", "animals", "science", "research", "nature", "environment", "marine life"] },

  // Math and Analytics
  { name: "Mathematics", keywords: ["math", "problem solving", "logic", "theory", "analysis", "numbers", "patterns", "reasoning"] },
  { name: "Applied Mathematics", keywords: ["math", "problem solving", "models", "data", "physics", "analysis", "technology", "statistics"] },
  { name: "Statistics", keywords: ["math", "statistics", "data", "analysis", "research", "probability", "numbers", "problem solving"] },
  { name: "Actuarial Science", keywords: ["math", "statistics", "business", "finance", "risk", "data", "analysis", "problem solving"] },
  { name: "Economics", keywords: ["business", "money", "analysis", "data", "math", "markets", "finance", "problem solving"] },

  // Business
  { name: "Business Administration", keywords: ["business", "leadership", "management", "organization", "communication", "planning", "teamwork", "money"] },
  { name: "Finance", keywords: ["money", "business", "math", "investing", "analysis", "economics", "problem solving", "markets"] },
  { name: "Accounting", keywords: ["math", "money", "business", "organization", "details", "analysis", "numbers", "finance"] },
  { name: "Marketing", keywords: ["business", "communication", "creativity", "advertising", "social media", "branding", "sales", "design"] },
  { name: "Entrepreneurship", keywords: ["business", "leadership", "creativity", "innovation", "money", "planning", "management", "risk"] },
  { name: "Management Information Systems", keywords: ["business", "technology", "computers", "data", "management", "systems", "problem solving", "analysis"] },
  { name: "Supply Chain Management", keywords: ["business", "organization", "logistics", "systems", "problem solving", "planning", "efficiency", "management"] },

  // Social Sciences
  { name: "Psychology", keywords: ["psychology", "people", "behavior", "research", "helping people", "science", "mental health", "communication"] },
  { name: "Sociology", keywords: ["people", "society", "research", "culture", "community", "behavior", "social issues", "analysis"] },
  { name: "Political Science", keywords: ["government", "law", "policy", "debate", "history", "research", "society", "leadership"] },
  { name: "Anthropology", keywords: ["people", "culture", "history", "research", "society", "science", "human behavior", "field work"] },
  { name: "Criminology", keywords: ["crime", "law", "justice", "research", "society", "psychology", "government", "investigation"] },
  { name: "International Relations", keywords: ["government", "politics", "global issues", "history", "communication", "policy", "research", "culture"] },

  // Humanities
  { name: "English", keywords: ["reading", "writing", "literature", "communication", "analysis", "creativity", "stories", "language"] },
  { name: "History", keywords: ["history", "research", "reading", "writing", "analysis", "culture", "government", "society"] },
  { name: "Philosophy", keywords: ["thinking", "logic", "writing", "ethics", "analysis", "questions", "reading", "debate"] },
  { name: "Linguistics", keywords: ["language", "communication", "culture", "analysis", "research", "words", "speech", "writing"] },
  { name: "Religious Studies", keywords: ["history", "culture", "reading", "writing", "beliefs", "society", "analysis", "philosophy"] },

  // Arts and Design
  { name: "Graphic Design", keywords: ["design", "art", "creativity", "visuals", "branding", "drawing", "communication", "technology"] },
  { name: "Studio Art", keywords: ["art", "drawing", "painting", "creativity", "visuals", "design", "expression", "craft"] },
  { name: "Animation", keywords: ["art", "design", "creativity", "drawing", "technology", "storytelling", "visuals", "gaming"] },
  { name: "Film Studies", keywords: ["film", "storytelling", "creativity", "media", "writing", "visuals", "art", "communication"] },
  { name: "Interior Design", keywords: ["design", "art", "creativity", "spaces", "architecture", "visuals", "planning", "style"] },
  { name: "Architecture", keywords: ["design", "math", "art", "buildings", "creativity", "construction", "planning", "drawing"] },
  { name: "Music", keywords: ["music", "creativity", "performance", "art", "expression", "practice", "sound", "composition"] },
  { name: "Theater", keywords: ["acting", "performance", "creativity", "stories", "art", "communication", "expression", "drama"] },

  // Education and Service
  { name: "Education", keywords: ["teaching", "helping people", "communication", "leadership", "children", "learning", "service", "planning"] },
  { name: "Elementary Education", keywords: ["teaching", "children", "helping people", "communication", "learning", "service", "leadership", "classroom"] },
  { name: "Special Education", keywords: ["teaching", "helping people", "children", "service", "communication", "learning", "support", "patience"] },
  { name: "Social Work", keywords: ["helping people", "community", "service", "psychology", "communication", "social issues", "care", "support"] },

  // Communication and Media
  { name: "Journalism", keywords: ["writing", "communication", "news", "research", "media", "stories", "current events", "interviews"] },
  { name: "Communications", keywords: ["communication", "media", "writing", "speaking", "people", "public relations", "creativity", "leadership"] },
  { name: "Public Relations", keywords: ["communication", "writing", "media", "branding", "people", "business", "speaking", "marketing"] },
  { name: "Advertising", keywords: ["business", "creativity", "design", "communication", "marketing", "branding", "media", "sales"] },

  // Law and Government
  { name: "Legal Studies", keywords: ["law", "government", "debate", "reading", "writing", "justice", "analysis", "policy"] },
  { name: "Public Policy", keywords: ["government", "law", "policy", "research", "society", "leadership", "analysis", "community"] },

  // Agriculture and Food
  { name: "Agricultural Science", keywords: ["science", "plants", "environment", "food", "nature", "research", "biology", "sustainability"] },
  { name: "Food Science", keywords: ["food", "science", "chemistry", "biology", "health", "research", "nutrition", "lab work"] },

  // Other
  { name: "Hospitality Management", keywords: ["business", "service", "people", "organization", "leadership", "events", "communication", "management"] },
  { name: "Sports Management", keywords: ["sports", "business", "leadership", "management", "organization", "communication", "events", "marketing"] },
  { name: "Fashion Design", keywords: ["fashion", "design", "art", "creativity", "style", "drawing", "visuals", "branding"] }
];

// Removes the "active" selection from all chips
// clears any displayed results text
// Resets the extra results 

const clearBtn = document.getElementById("clearBtn");

clearBtn.addEventListener("click", function () {                      
  document.querySelectorAll(".chip").forEach(function (chip) {
    chip.classList.remove("active");
  });

  output.textContent = "";
  showMoreBtn.style.display = "none";
  extraResults = [];
});

// Searches through all majors and checks how many of the user's selected subjects match
// If a major has at least one match, it gets added to a results list with the number of matches
// Results are sorted so the majors with the most matches come first

function searchMajors(selectedSubjects, majorList) {
  let results = [];

  for (let i = 0; i < majorList.length; i++) {
    let matchCount = 0;

    for (let j = 0; j < selectedSubjects.length; j++) {
      if (majorList[i].keywords.includes(selectedSubjects[j])) {
        matchCount++;
      }
    }

    if (matchCount > 0) {
      results.push({
        name: majorList[i].name,
        matches: matchCount
      });
    }
  }

  results.sort(function (a, b) {
    return b.matches - a.matches;
  });

  return results;
}

const chips = document.querySelectorAll(".chip");
const output = document.getElementById("output");
const submitBtn = document.getElementById("submitBtn");
const showMoreBtn = document.getElementById("showMoreBtn");

let extraResults = [];

// Toggle function for chips

chips.forEach(function (chip) {
  chip.addEventListener("click", function () {
    chip.classList.toggle("active");
  });
});

submitBtn.addEventListener("click", function () {
  let selectedSubjects = [];

//lowercase to match keywords

  document.querySelectorAll(".chip.active").forEach(function (chip) {
    selectedSubjects.push(chip.textContent.toLowerCase());
  });

//If no keywords selected, asks user to select a chip and hides show more button

  if (selectedSubjects.length === 0) {
    output.textContent = "Please select at least one interest.";
    showMoreBtn.style.display = "none";
    extraResults = [];
    return;
  }

//Search function call
//Top 5 matches displayed

  let results = searchMajors(selectedSubjects, majors);

  if (results.length > 0) {
    let topFive = results.slice(0, 5);
    extraResults = results.slice(5);

    let topFiveNames = topFive.map(function (major) {
      return major.name;
    });

    output.textContent = "Top Matches: " + topFiveNames.join(", ");

//Hides show more if less than 5 possible majors

    if (extraResults.length > 0) {
      showMoreBtn.style.display = "inline-block";
    } else {
      showMoreBtn.style.display = "none";
    }

//If selected keywords dont match any majors

  } else {
    output.textContent = "No matching majors found.";
    showMoreBtn.style.display = "none";
    extraResults = [];
  }
});

//Adds show more button if more, less related majors are matched

showMoreBtn.addEventListener("click", function () {
  let extraNames = extraResults.map(function (major) {
    return major.name;
  });

  output.textContent += " | More Matches: " + extraNames.join(", ");
  showMoreBtn.style.display = "none";
});