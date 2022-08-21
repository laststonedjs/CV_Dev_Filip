var turnOnExtract = false;

const CvPerson = {
  name: "John Doe",
  title: "Product designer and UI/UX Engineer",
  work: [
    // Work experience 1:
    {
      company: "Creative company",
      position: "Graphic designer and photographer",
      workDescription: "da",
    },
    // Work experience 2:
    {
      company: "Marketing and Creative business competition",
      position: "Coordinator of the competiton",
      workDescription: "da",
    },
  ],
  education: [
    // Education 1:
    {
      institute: "MIT University in United States",
      description: "Graphic and multimedia design",
      more: "Lorem ipsum",
    },
    // Education 2:
    {
      institute: "MIT University in United States",
      description: "Graphic and multimedia design",
      more: "Lorem ipsum",
    },
  ],
  email: "john.doe@gmail.com",
  phone: "+123456789101112",
  about:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  technicalSkills: ["Adobe Photoshop", "Sketch", "Photoshop"],
  softSkills:
    "communication, leadership, team player, great presentation skills",
  language: ["English", "German"],
};

if (turnOnExtract) {
  document.getElementById("name").innerHTML = CvPerson.name;
  document.getElementById("occupation").innerHTML = CvPerson.title;

  //deleting elements of workList
  document.getElementById("workList").innerHTML = "";

  //creating elements of workList
  for (var i = 0; i < CvPerson.work.length; i++) {
    var li = document.createElement("li");
    document.getElementById("workList").appendChild(li);

    var group = document.createElement("div");
    group.className = "group";
    group.setAttribute("data-group", "job" + i);
    li.appendChild(group);

    var h4 = document.createElement("h4");
    h4.className = "company";
    h4.textContent = CvPerson.work[i].institute;
    group.appendChild(h4);

    var toFlexButton = document.createElement("div");
    toFlexButton.className = "toFlexButton";
    toFlexButton.setAttribute("onclick", "actionButton('" + "job" + i + "')");
    group.appendChild(toFlexButton);

    var text = document.createElement("p");
    text.className = "text";
    text.innerHTML = CvPerson.work[i].position;
    toFlexButton.appendChild(text);

    var image = document.createElement("img");
    image.className = "img";

    image.setAttribute("src", "./src/img/add.png");
    var string = "job" + i;
    toFlexButton.appendChild(image);

    var line = document.createElement("hr");
    line.className = "line";
    group.appendChild(line);

    var textMore = document.createElement("p");
    textMore.className = "more";
    textMore.innerHTML = CvPerson.work[i].workDescription;
    group.appendChild(textMore);
  }

  document.getElementById("eduList").innerHTML = "";

  for (var i = 0; i < CvPerson.education.length; i++) {
    var li = document.createElement("li");
    document.getElementById("eduList").appendChild(li);

    var group = document.createElement("div");
    group.className = "group";
    group.setAttribute("data-group", "edu" + i);
    li.appendChild(group);

    var h4 = document.createElement("h4");
    h4.className = "company";
    h4.textContent = CvPerson.education[i].company;
    group.appendChild(h4);

    var toFlexButton = document.createElement("div");
    toFlexButton.className = "toFlexButton";
    toFlexButton.setAttribute("onclick", "actionButton('" + "edu" + i + "')");
    group.appendChild(toFlexButton);

    var text = document.createElement("p");
    text.className = "text";
    text.innerHTML = CvPerson.education[i].description;
    toFlexButton.appendChild(text);

    var image = document.createElement("img");
    image.className = "img";

    image.setAttribute("src", "./src/img/add.png");
    var string = "edu" + i;
    toFlexButton.appendChild(image);

    var line = document.createElement("hr");
    line.className = "line";
    group.appendChild(line);

    var textMore = document.createElement("p");
    textMore.className = "more";
    textMore.innerHTML = CvPerson.education[i].more;
    group.appendChild(textMore);
  }

  document.getElementById("email").innerHTML = CvPerson.email;
  document.getElementById("phone").innerHTML = CvPerson.phone;

  document.getElementById("aboutMe").innerHTML = CvPerson.about;

  document.getElementById("techList").innerHTML = "";
  addElementsToList(CvPerson.technicalSkills, "techList");

  document.getElementById("softList").innerHTML = CvPerson.softSkills;

  document.getElementById("languageList").innerHTML = "";
  addElementsToList(CvPerson.language, "languageList");
}

function addElementsToList(list, listID) {
  for (var i = 0; i < list.length; i++) {
    var li = document.createElement("li");
    document.getElementById(listID).appendChild(li);
    li.innerHTML = list[i];
  }
}
