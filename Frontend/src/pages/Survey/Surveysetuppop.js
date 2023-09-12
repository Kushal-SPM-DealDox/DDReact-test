//Pop of overview button section
export function openPopup() {
    var openpopup = document.getElementById("overwriteContainer")
    openpopup.style.display = "block";
    var backdrop1 = document.getElementById("backdrop")
    backdrop1.style.display = "block";
}

export function closePopup() {
    var closepopup = document.getElementById("overwriteContainer")
    closepopup.style.display = "none";
    var backdrop2 = document.getElementById("backdrop")
    backdrop2.style.display = "none";
}

// --------popup showmore----------

export function myFunctionpopupSurvey() {
    var dots = document.getElementById("dotspopupsurvey");
    var moreText = document.getElementById("morepopupsurvey");
    var btnText = document.getElementById("myBTNpopupsurvey");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "SHOW MORE";
        moreText.style.display = "none";
    }
    else {
        dots.style.display = "none";
        btnText.innerHTML = "SHOW LESS";
        moreText.style.display = "inline";
    }
}
//---------- popoup search survey-----------

export function myFunctionpopupSurvey1() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearchpopupsurvey");
    filter = input.value.toUpperCase();
    ul = document.getElementById("surveyName");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
// overwrite popup screen button enable

// const dataElement = document.getElementById("surveyName");
// const buttonElement = document.getElementById("overwrite");
// dataElement.onclick = enableButton;
//  function enableButton() {
//     buttonElement.disabled = false;
// }
export function showOverwriteButton() {
    const overwriteButton = document.getElementById('overwrite');
    overwriteButton.disabled = false;
  }