// function createCard() {
//     return `
//       <div class="DashboardCard-Card">

//         <div class="DashboardCard-Card-img">
//           <img src="/src/assets/img/card-courses/card-imgs/jsf.png" alt="" id="img-card-script">
//         </div>

//         <div class="DashboardCard-content">
//           <h3 class="DashboardCard-title" id="title-card-script">Java Script Fundamentos</h3>
//           <p class="DashboardCard-text" id="description-card-script">Aprenda ser um bom tecnico de manutenção. E ganha dinheiro com isso</p>
//           <div class="DashboardCard-footer">
//             <div class="DashboardCard-profile">
//               <img src="/src/assets/img/card-courses/profile/francisco-removebg-preview.png" alt="Jessica chen">
//               <div class="DashboardCard-profile-info">
//                 <span class="DashboardCard-profile-name">Pessoa</span>
//                 <span class="DashboardCard-profile-role">Profissão</span>
//               </div>
//             </div>
//             <a href="" class="DashboardCard-button"> Read more</a>
//           </div>
//         </div>
//       </div>
//     `;
//   }











let quill;

function abrirEditModal() {
  let overlay = document.getElementById("overlay");
  let editBox = document.getElementById("editBox");


  overlay.style.display = "block";
  editBox.style.display = "block";

  // if (!quill) {
  //   const quill = new Quill('#quill-editor', {
  //     placeholder: 'Compose an epic...',
  //     theme: 'snow',
  //     theme: 'snow',
  //     placeholder: 'Escreva aqui a descrição...',
  //     modules: {
  //       toolbar: [
  //         [{ header: [1, 2, false] }],
  //         ['bold', 'italic', 'underline'],
  //         ['link', 'image'],
  //         [{ list: 'ordered' }, { list: 'bullet' }]
  //       ]
  //     }
  //   });
  // }

  document.getElementById("formEdited").addEventListener("submit", function (e) {
    document.getElementById("descricao").value = quill.root.innerHTML;;
  })

}

document.getElementById("btEdited").addEventListener("click", abrirEditModal);

document.getElementById("overlay").addEventListener("click", () => {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("editBox").style.display = "none";
});



const  inputFile = document.querySelector("#picture__input");
const pictureImage = document.querySelector(".picture__image");
const pictureImageTxt = `Choose an image`;
pictureImage.innerHTML = pictureImageTxt;

inputFile.addEventListener('change', function(e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if(file){
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("picture__img")

      pictureImage.innerHTML = "";
      pictureImage.appendChild(img);
    })
     reader.readAsDataURL(file);
     
  } else {
    pictureImage.innerHTML = pictureImageTxt;
  }
});



const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(header => {
  header.addEventListener("click", event => {
    header.classList.toggle("active");
  });
});

