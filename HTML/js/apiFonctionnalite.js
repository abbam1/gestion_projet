const { host, hostname, href, origin, pathname, port, protocol, search } =
  window.location;

var projet = search.split("?projet=")[1];
console.log(projet);
var idProj;

// script pour afficher les données avec axios
axios
  .get(`http://192.168.1.103:8000/api/projet/${projet}`)
  .then(function (response) {
    let variable = response.data.response_message[0].libelle;
    title = document.getElementById("titre");
    title1 = document.getElementById("titre1");
    title.innerHTML = variable;
    title1.innerHTML = variable;

    idProj = response.data.response_message[0].id;
    console.log(idProj);

    document.getElementById("hide").value = idProj;

    //script pour afficher les données des fonctionnalités dans le tableau
    axios
      .get(`http://192.168.1.103:8000/api/projet/${idProj}/fonctionnalite`)
      .then(function (response) {
        console.log(response.data.response_message[0]);

        let tr = "";
        for (let i in response.data.response_message) {
          tr += `<tr>                                   <td>
${response.data.response_message[i].libelle}
                                           </td>
                                          
                                           <td><span class="badge bg-warning">${response.data.response_message[i].status}</span></td>
                                            <td>
                                                <div class="btn-group" role="group" aria-label="Basic outlined example">
                                                    <a href="taches.html"><button type="button" class="btn btn-outline-secondary"><i class="icofont-plus-circle me-2 fs-6"></i></button></a>
                                                    <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#fonctionnaliteModif" onclick='test(${response.data.response_message[i].id},"${response.data.response_message[i].libelle}")' ><i class="icofont-edit text-success"></i></button>
                                                    <button type="button" class="btn btn-outline-secondary deleterow"><i class="icofont-ui-delete text-danger"></i></button>
                                                </div>
                                            </td>
                                        </tr>`;
                           console.log(response.data.response_message[i].id)             
        }

        body = document.getElementById("bodyt");
        body.innerHTML = tr;

        // handle success
      })
      .catch(function (error) {
        // handle error
      })
      .finally(function () {
        // always executed
      });


     //script pour afficher les données des fonctionnalités dans le tableau


    // handle success
    console.log(idProj);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

// script pour afficher les données du projet avec axios



// script pour Ajouter les données avec le formulaire de modification form_modif 
const formAdd = document.getElementById("FonctionnaliteAdd");

formAdd.addEventListener('submit', function(e){
    e.preventDefault();
   const id = document.getElementById("hide").value ;
  const lib  =   document.getElementById("libelle").value; 



    axios.post(`http://192.168.1.103:8000/api/addFonctionnalite`,{
        libelle:lib,
        projet:id
    })
.then(function (response) {

if(response.data.response_code == 1){
    Swal.fire(
        'Nouvelle fonctionnalité!',
        'Fonctionnalité ajoutée avec succès au projet!',
        'success'
      );
      
      setTimeout(function load (){
        location.href=window.location
      
    } , 3000)
}
else if(response.data.response_code == -1){
    Swal.fire(
        'Echec!',
        `${response.data.response_message}`,
        'error'
      );
    console.log(error.response.data.response_message.libelle);
}

console.log(response.data)
})
.catch(function (error) {
  // handle error
})})

// script pour Ajouter les données avec le formulaire de modification form_Add 



// script pour Modifier les données avec le formulaire de modification form_modif 
const formModif = document.getElementById("fonctionnaliteModif");

formModif.addEventListener('submit', function(e){
    e.preventDefault();
   const id = document.getElementById("hide2").value ;
  const lib  =   document.getElementById("sub2").value; 



    axios.post(`http://192.168.1.103:8000/api/updateFonctionnalite`,{
        libelle:lib,
        id:id
    })
.then(function (response) {

if(response.data.response_code == 1){
location.href=window.location
}
else if(response.data.response_code == -1){
    console.log(error.response.data.response_message.libelle);
}

console.log(response.data)
})
.catch(function (error) {
  // handle error
})})

// script pour Modifier les données avec le formulaire de modification form_Add 


// script pour afficher les données dans les input au click
function test(id,libelle){
document.getElementById('sub2').value=libelle;
document.getElementById('hide2').value=id;
    }
  
// script pour afficher les données dans les input au click

