export const handleClick = (event) => {
  var sidebar = document.getElementById('mySidebar');
  var main = document.getElementById('main');
  var avatarIcon = document.getElementById('avatarposition');
  var icon = document.getElementById('iconpeople');

  if (sidebar.style.width === '250px') {
    sidebar.style.width = '0';
    main.style.marginRight = '0px';
    // avatarIcon.style.marginLeft = '33%';
    icon.classList.remove("fa-greater-than");
    icon.classList.add("fa-less-than");
  } else {
    sidebar.style.width = '250px';
    main.style.marginRight = '250px';
    // avatarIcon.style.marginLeft = '24%';
    avatarIcon.style.transition = '0.5s';
    icon.classList.remove("fa-less-than");
        icon.classList.add("fa-greater-than");
  }
};

export const handleClickRoles = (event) => {
  const dropContainerRoles = document.getElementById('filesOpen');
  const angleIcon = document.querySelector('#sidetoggle i');
  if (dropContainerRoles.style.display === 'none' || dropContainerRoles.style.display === '') {
    dropContainerRoles.style.display = 'block';
    angleIcon.classList.add('fa-angle-up');
    angleIcon.classList.remove('fa-angle-down');
  } else {
    dropContainerRoles.style.display = 'none';
    angleIcon.classList.add('fa-angle-down');
    angleIcon.classList.remove('fa-angle-up');
  }

};

// ===================================================

export const handleClickSkills = (event) => {
  const dropContainerSkills = document.getElementById('filesOpen1');
  const angleIcon = document.querySelector('#sidetoggle1 i');
  if (dropContainerSkills.style.display === 'none' || dropContainerSkills.style.display === '') {
    dropContainerSkills.style.display = 'block';
    angleIcon.classList.add('fa-angle-up');
    angleIcon.classList.remove('fa-angle-down');
  } else {
    dropContainerSkills.style.display = 'none';
    angleIcon.classList.add('fa-angle-down');
    angleIcon.classList.remove('fa-angle-up');
  }

};