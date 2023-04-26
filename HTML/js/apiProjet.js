
// script pour afficher les données avec axios
axios.get('http://projet.inforiz.org/api/listeprojet')
  .then(function (response) {
let div=''

console.log(response.data[0].ref)
for(let i in response.data){
let li =''
for(let j in response.data[i].agents){
    li+=`<li class="list-group-item py-3 text-center text-md-start">
    <div
        class="d-flex align-items-center flex-column flex-sm-column flex-md-column flex-lg-row">
        <div class="no-thumbnail mb-2 mb-md-0">
            <img class="avatar lg rounded-circle"
                src="assets/images/profile_av.webp" alt="">
        </div>
        <div class="flex-fill ms-3 text-truncate">
            <h6 class="mb-0  fw-bold">${response.data[i].agents[j].name}</h6>
            <span class="text-muted">${response.data[i].agents[j].specialite}</span>
        </div>

    </div>
</li>
`
}
div+= ` <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
<div class="card">
    <div class="card-body">
        <div class="d-flex align-items-center justify-content-between mt-5">
            <div class="lesson_name">
                <div class="project-block light-orange-bg">
                    <i class="icofont-dashboard-web"></i>
                </div>
                <span class="small text-muted project_name fw-bold">${response.data[i].ref} </span>
                <h6 class="mb-0 fw-bold  fs-6  mb-2">${response.data[i].libelle}</h6>
            </div>
            <div class="btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#editproject" onclick="test(${response.data[i].id})"><i class="icofont-edit text-success"></i></button>
                <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#deleteproject"><i class="icofont-ui-delete text-danger"></i></button>
            </div>
        </div>
        <div class="d-flex align-items-center">
            <div class="col-lg-5">
               <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#addUser${response.data[i].id}" style="color: white; background-color: green;">Agent(s) assigné(s)</button>
            </div>
            <div class="col-lg-2">
            </div>
            <div class="col-lg-5">
                <a  href="fonctionnalite.html?projet=${response.data[i].ref}"> <button type="button" class="btn btn-outline-secondary" style="color: white; background-color: orange;">Fonctionnalités</button> </a>
            </div>
        </div>
        <div class="row g-2 pt-4">
           
            <div class="col-6">
                <div class="d-flex align-items-center">
                    <i class="icofont-sand-clock"></i>
                    <span class="ms-2">Début: ${response.data[i].date_debut}</span>
                </div>
            </div>
            <div class="col-6">
                <div class="d-flex align-items-center">
                    <i class="icofont-sand-clock"></i>
                    <span class="ms-2">Fin: ${response.data[i].date_fin}</span>
                </div>
            </div>
           
        </div>
        <div class="dividers-block"></div>
        <div class="d-flex align-items-center justify-content-between mb-2">
            <h4 class="small fw-bold mb-0">Progrès</h4>
        </div>
        <div class="progress" style="height: 8px;">
            <div class="progress-bar bg-secondary" role="progressbar" style="width: ${response.data[i].id}%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </div>
</div>
</div>


<div class="modal fade" id="addUser${response.data[i].id}" tabindex="-1" aria-labelledby="addUserLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title  fw-bold" id="addUserLabel">Agent(s) assigné(s)</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="members_list">
                                <h6 class="fw-bold ">Équipe</h6>
                                <ul class="list-unstyled list-group list-group-custom list-group-flush mb-0">
                                    
                                    ${li}

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
}
let blocProjet = document.getElementById("bloc_projet");
blocProjet.innerHTML= div
// handle success


    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

// script pour afficher les données avec axios


// script pour Ajouter les données avec le formulaire de modification form_modif 
const formAdd = document.getElementById("createproject");

formAdd.addEventListener('submit', function(e){
    e.preventDefault();
  const lib  =   document.getElementById("libelle").value; 
  const dateDebut = document.getElementById("dateDebut").value; 
  const dateFin = document.getElementById("dateFin").value; 


    axios.post(`http://projet.inforiz.org/api/addProjet`,{
        libelle:lib,
        date_debut:dateDebut,
        date_fin:dateFin
    })
.then(function (response) {

if(response.data.response_code == 1){


    Swal.fire(
        'Nouveau Projet!',
        'Féliciation Projet crée avec succès!',
        'success'
      );
      
      setTimeout(function load (){
        location.href="projets.html"
      
    } , 3000)

   
}
else if(response.data.response_code == -1){
    console.log(error.response.data.response_message.libelle);
}

console.log(response.data)
})
.catch(function (error) {
  // handle error
})})

// script pour Ajouter les données avec le formulaire de modification form_Add 

// script pour afficher les données dans les input au click
function test(id){

    axios.get(`http://projet.inforiz.org/api/projet/${id}`)
    .then(function (response) {
    
    document.getElementById("libelle_M").value = response.data.response_message[0].libelle; 
    document.getElementById("id_M").value = response.data.response_message[0].id; 
    document.getElementById("dateDebut_M").value = response.data.response_message[0].date_debut;
    document.getElementById("dateFin_M").value = response.data.response_message[0].date_fin ;
    // handle success
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
    }
  
    // script pour afficher les données dans les input au click


// script pour modifier les données avec le formulaire de modification form_modif 
const formModif = document.getElementById("editproject");

formModif.addEventListener('submit', function(e){
    e.preventDefault();
  const id =   document.getElementById("id_M").value;    
  const lib  =   document.getElementById("libelle_M").value; 
  const dateDebut = document.getElementById("dateDebut_M").value; 
  const dateFin = document.getElementById("dateFin_M").value; 


    axios.post(`http://projet.inforiz.org/api/updateProjet/${id}`,{
        libelle:lib,
        date_debut:dateDebut,
        date_fin:dateFin
    })
.then(function (response) {

if(response.data.response_code == 1){
    location.href="projets.html"
}
else if(response.response_code == -1){
    console.log(error.response.data.response_message.libelle);
}

console.log(response.data)
})
.catch(function (error) {
  // handle error
})})

// script pour modifier les données avec le formulaire de modification form_modif 








