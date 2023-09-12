export const handleClickFiles = (event) => {
  const dropContainerSkills = document.getElementById('filesOpen');
    const angleIcon = document.querySelector('#sidetoggle i');
  
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
  
   export const handleClickNotes= (event) => {
  const dropContainerSkills = document.getElementById('notesOpen');
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
    
     export const handleClickExternal= (event) => {
      const dropContainerSkills = document.getElementById('externOpen');
      const angleIcon = document.querySelector('#sidetoggle2 i');
    
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
    
     export const handleClickTimestamp= (event) => {
      const dropContainerSkills = document.getElementById('timesOpen');
      const angleIcon = document.querySelector('#sidetoggle3 i');
    
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
    
    
    
     export const handleClickInternal= (event) => {
      const dropContainerSkills = document.getElementById('internOpen');
      const angleIcon = document.querySelector('#sidetoggle4 i');
    
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
    
    
    
     export const handleClickLink= (event) => {
      const dropContainerSkills = document.getElementById('linkOpen');
      const angleIcon = document.querySelector('#sidetoggle5 i');
    
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

     export const handleClickBidTeam = (event) => {
      const dropContainerSkills = document.getElementById('bidOpen');
        const angleIcon = document.querySelector('#sidetogglebid i');
      
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





export function handleOpenClose () {
 var sidebar = document.getElementById("mySidebar");
       var main = document.getElementById("mainsidebar");
       var icon = main.querySelector("i");
       
       if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        main.style.marginRight = "0px";
        icon.classList.remove("fa-greater-than");
        icon.classList.add("fa-less-than");
       } else {
        sidebar.style.width = "250px";
        main.style.marginRight = "250px";
        icon.classList.remove("fa-less-than");
        icon.classList.add("fa-greater-than");
       }
        };
      

 


//js to copy content of Intternal Id
export const copyText = (e) => {

  // Get the anchor tag
  const link = document.getElementById('myId');
  
  // Create a range object and select the link element
  const range = document.createRange();
  range.selectNode(link);
  
  // Get the link URL from the href attribute
  const linkUrl = link.href;
  
  // Create a temporary input element to hold the link URL
  const tempInput = document.createElement('input');
  tempInput.setAttribute('value', linkUrl);
  document.body.appendChild(tempInput);
  
  // Select the input element and copy its value to the clipboard
  tempInput.select();
  document.execCommand('copy');
  
  // Remove the temporary input element
  document.body.removeChild(tempInput);
}




 //js to copy Link of that is auto generated
 export const copyLink = (e) => {
  const link = document.getElementById('myLink');

  // Create a range object and select the link element
  const range = document.createRange();
  range.selectNode(link);
  
  // Get the link URL from the href attribute
  const linkUrl = link.href;
  
  // Create a temporary input element to hold the link URL
  const tempInput = document.createElement('input');
  tempInput.setAttribute('value', linkUrl);
  document.body.appendChild(tempInput);
  
  // Select the input element and copy its value to the clipboard
  tempInput.select();
  document.execCommand('copy');
  
  // Remove the temporary input element
  document.body.removeChild(tempInput);
}
export const displayFileName = () => {
  const fileInput = document.getElementById('file-input');
    const fileList = document.getElementById('file-list');
  
    for (let i = 0; i < fileInput.files.length; i++) {
    const file = fileInput.files[i];
    const li = createListItem(file);
    fileList.appendChild(li);
    }
  
    // Clear the file input
    fileInput.value = '';
   function createListItem(file) {
    const li = document.createElement('li');
    li.id = "savedFileList";
  
    const downloadLink = createDownloadLink(file);
    li.appendChild(downloadLink);
  
    const checkIcon = createCheckIcon(li);
    li.appendChild(checkIcon);
  
    const downloadIcon = createDownloadIcon(file);
    li.appendChild(downloadIcon);
  
    const deleteIcon = createDeleteIcon(li);
    li.appendChild(deleteIcon);
  
    return li;
   }
  
   function createDownloadLink(file) {
    const downloadLink = document.createElement('a');
    downloadLink.id = "downloadFile";
    downloadLink.setAttribute('href', window.URL.createObjectURL(file));
    downloadLink.setAttribute('download', file.name);
    downloadLink.textContent = file.name;
    return downloadLink;
   }
  
   function createCheckIcon(li) {
    const checkIcon = document.createElement('i');
    checkIcon.classList.add('fa', 'fa-check', 'file-check-icon');
    checkIcon.id = 'checkFile';
  
    checkIcon.addEventListener('click', () => {
    if (checkIcon.classList.contains('fa-check')) {
     checkIcon.classList.remove('fa-check');
     checkIcon.classList.add('fa-times');
     checkIcon.style.color = "red";
    } else {
     li.parentNode.removeChild(li);
    }
    });
  
    return checkIcon;
   }
  
   function createDownloadIcon(file) {
    const downloadIcon = document.createElement('i');
    downloadIcon.id = 'downloadFile';
    downloadIcon.addEventListener('click', () => {
    const url = window.URL.createObjectURL(file);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    });
  
    return downloadIcon;
   }
  
   function createDeleteIcon(li) {
    const deleteIcon = document.createElement('i');
    deleteIcon.id = "deleteFile";
  
    deleteIcon.addEventListener('click', () => {
    li.parentNode.removeChild(li);
    });
  
    return deleteIcon;
   }
  
   };

  export default {displayFileName, handleOpenClose,copyText,copyLink};
 
  