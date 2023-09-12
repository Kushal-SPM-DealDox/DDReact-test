
// HOME BUTTON TABS TOGGLE JS

export const handleClick1 = (event) => {
 const current1 = document.getElementsByClassName('activeH');
   current1[0].className = current1[0].className.replace(' activeH', '');
   event.target.classList.add('activeH');
  };
  
  export const handleClick2 = (event) => {
   const current2 = document.getElementsByClassName('activ');
   current2[0].className = current2[0].className.replace(' activ', '');
   event.target.classList.add('activ');
  };



//   -----------HOME PAGE SIDEBAR JS-----------
export const handleSidebarToggle = () => {
 const sidebarToggle = document.querySelector('.sidebarhome-toggle');
 const container = document.querySelector('.containerhome');
 container.classList.toggle('sidebarhome-open');
 if (container.classList.contains('sidebarhome-open')) {
 sidebarToggle.textContent = '>';
 sidebarToggle.style.right = '250px'; /* Width of the sidebar plus margin */
 } else {
 sidebarToggle.textContent = '<';
 sidebarToggle.style.right = '0px';
 }

};







