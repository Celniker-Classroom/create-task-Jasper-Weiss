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