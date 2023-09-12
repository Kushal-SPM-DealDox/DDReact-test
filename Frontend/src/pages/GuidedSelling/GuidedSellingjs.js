let count = 0;
export function myFunctionguide() {
  var tablewrap6 = document.getElementById('guideid');
  tablewrap6.classList.toggle('hiddenguide');

  var clickmeguide = document.getElementById('clickmeguide');
  var icon = clickmeguide.querySelector('span');
  const guidedetails = document.querySelector('#guideid');

  // clickmeguide.addEventListener('click', function() {
  if (guidedetails.style.display === "none") {
    icon.classList.replace('fa-angle-down', 'fa-angle-up');
    guidedetails.style.display = "block";
  } else {
    icon.classList.replace('fa-angle-up', 'fa-angle-down');
    guidedetails.style.display = "none";
  }
}
// -----------------------------------------------------
// Start Of Expand And shrink Fun js 

export const expandFullWidth = (e) => {
  let expand = document.getElementById('leftsideguide');
  let penc = document.getElementById('pencil');
  let lab = document.getElementById('answer');
  let config = document.getElementById('config');
  let mainContent = document.getElementById('mainContent');
  let main1 = document.getElementById('main');
  let sideBar = document.getElementById('mySidebar');
  let leftBtn = document.getElementById('leftBtn');
  let gridv = document.getElementById('gridID');
  let gsLabeltop = document.getElementById('guidedsabel');
  gsLabeltop.innerText = "DEFINE RULES";
  let settingIcon = document.getElementById('settingicon');
  let configTable = document.getElementById('configTable');
  configTable.style.display = "block";
  // const rightleft = document.getElementById("arrowrightleft");
  // const arrowlefright = document.getElementById("arrowleftright");
  // arrowlefright.style.display = 'none';
  const cpqlabel = document.getElementById("cpqlabel");
  cpqlabel.innerHTML = `LABEL`;
  configTable.style.float = "right";
  settingIcon.style.display = "none";
  gridv.style.marginTop = "70px";
  gridv.style.transition = ".0s ease";

  //Main Content Shrink section js
  mainContent.style.width = "0%";
  mainContent.style.display = "none"
  main1.style.display = "none";
  sideBar.style.display = "none";
  leftBtn.style.display = "none";
  settingIcon.style.display = "none";

  //label section of pencil
  lab.style.display = "block";
  lab.style.marginRight = "-60px";
  lab.style.marginTop = "11px";
  lab.style.fontSize = "10px";
  lab.style.transition = ".8 ease";
  lab.style.float = "right";


  //pencil section js
  penc.style.display = "block";
  penc.style.float = "right";
  penc.style.marginTop = "-17px";
  penc.style.marginRight = "35px";
  penc.style.fontSize = "20px";
  penc.style.color = "#757474"
  penc.style.position = "relative";
  penc.style.right = "7px";

  //icon section js
  expand.style.width = "100%";
  // config label ja section
  config.style.display = "none";
  // rightleft.style.display = "none";
  // arrowlefright.style.display = "none";


  // const guidedselling = document.querySelector(".guidedselling");
  // guidedselling.innerHTML = `<i class="fa-sharp fa-solid fa-left-right" id="lft" onclick="window.changeIcon()"></i>
  //  `;



  // window.changeIcon = function () {

  //   const icon = document.getElementById("lft");

  //   if (icon.classList.contains("fa-left-right")) {
  //     icon.classList.remove("fa-sharp", "fa-solid", "fa-left-right");
  //     icon.classList.add("fa-solid", "fa-down-left-and-up-right-to-center");
  //     icon.style.transform = "rotate(-135deg)";
  //     count++;
  //   } else {
  //     icon.classList.remove("fa-solid", "fa-down-left-and-up-right-to-center");
  //     icon.classList.add("fa-sharp", "fa-solid", "fa-left-right");
  //     icon.style.transform = "none"; 
  //     count = 0;
  //   }
  // };
}

// ------------------------------------------------------

export function expandArrow() {
  const sidebarSection = document.getElementById('leftsideguide');
  const arrowleftright = document.getElementById("arrowleftright");
  const arrowrightleft = document.getElementById("arrowrightleft");
  const guidedsabel = document.getElementById("guidedsabel")
  if (sidebarSection.style.width === "100%") {
    if (arrowleftright.style.display === 'none') {
      arrowrightleft.style.display = "none";
      arrowleftright.style.display = 'block';
    } else {
      arrowrightleft.style.display = "block";
      arrowleftright.style.display = 'none';
    }
  } else {
    if (sidebarSection.style.width === "60%") {
      sidebarSection.style.width = "40%";
      arrowrightleft.style.display = "none";
      arrowleftright.style.display = 'block';
      guidedsabel.style.bottom = '22px';
      guidedsabel.style.position = 'relative';
    } else {
      sidebarSection.style.width = "60%";
      arrowrightleft.style.display = "block";
      arrowleftright.style.display = 'none';
      guidedsabel.style.bottom = '22px';
      guidedsabel.style.position = 'relative';
    }
  }
}


// -------------------------------------------------------
export function strinkwidth() {
  const arrowleftright = document.getElementById("arrowleftright");
  const arrowrightleft = document.getElementById("arrowrightleft");
  const strink = document.getElementById('leftsideguide');
  const gsLabeling = document.getElementById('guidedsabel');
  const penc = document.getElementById('pencil');
  const lab = document.getElementById('answer');
  const config = document.getElementById('config');
  const mainContent = document.getElementById('mainContent');
  const main1 = document.getElementById('main');
  const sideBar = document.getElementById('mySidebar');
  const leftBtn = document.getElementById('leftBtn');
  const gridv = document.getElementById('gridID');
  const settingIcon = document.getElementById('settingicon');
  const configTable = document.getElementById('configTable');
  const cpqlabel = document.getElementById("cpqlabel");

  gsLabeling.innerHTML = 'GUIDED SELLING';
  lab.style.display = "none";
  penc.style.display = "none";
  config.style.display = "block";
  mainContent.style.width = "100%";
  mainContent.style.display = "block";
  main1.style.display = "block";
  sideBar.style.display = 'block';
  leftBtn.style.display = "block";
  gridv.style.marginTop = "0px";
  settingIcon.style.display = "block";
  configTable.style.display = "none";

  if (arrowleftright.style.display === 'none') {
    strink.style.width = "60%"; 
    cpqlabel.innerText = "MALATESH";
  } else {
    strink.style.width = "40%"; 
    cpqlabel.innerText = "CPQ";
  }
}

// =================================================

export function guideOpen() {
  let config = document.getElementById('settingicon');
  var sidebar = document.getElementById("leftsideguide");
  var label = document.getElementById("gl");

  if (sidebar.style.width === "0%") {
    sidebar.style.width = "40%";
    config.style.display = "block";
    label.style.display = "block";
  } else {
    sidebar.style.width = "0%";
    config.style.display = "none";
    label.style.display = "none";
  }
}