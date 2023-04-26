const { host, hostname, href, origin, pathname, port, protocol, search } =
  window.location;

var fonctionnalite = search.split("?fonctionnalite=")[1];
console.log(fonctionnalite);
var idFonc;

// script pour afficher les données avec axios
axios
  .get(`http://projet.inforiz.org/api/tache/fonctionnalite/${fonctionnalite}`)
  .then(function (response) {
    
 let div = "";
    for (let i in response.data.response_message) {
      div += `<div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
      <div class="card">
          <div class="card-body">

              <div
                  class="task-info d-flex align-items-center justify-content-between">
                  <div class="task-priority d-flex flex-column align-items-center justify-content-center">
                                  <div class="avatar-list avatar-list-stacked m-0">
                                      <img class="avatar rounded-circle small-avt" src="assets/images/profile_av.webp" alt="">
                                      <img class="avatar rounded-circle small-avt" src="assets/images/profile_av.webp" alt="">
                                  </div>
                                  <span class="badge bg-warning text-end mt-2">${response.data.response_message[i].name}</span>
                              </div>
                              <div>
                                  <button type="button" class="btn btn-outline-secondary"><i class="icofont-edit text-success"></i></button>
                                  <button type="button" class="btn btn-outline-secondary"><i class="icofont-ui-delete text-danger"></i></button>
                              </div>
              </div>
              <p class="py-2 mb-0">${response.data.response_message[i].libelle}</p>
              <div class="tikit-info row g-3 align-items-center">
                  <div class="col-sm">
                      <ul
                          class="d-flex list-unstyled align-items-center flex-wrap">
                          <li class="me-2">
                              <div class="d-flex align-items-center">
                                  <i class="icofont-hours"></i>
                                  <span class="ms-1">${response.data.response_message[i].created_at}</span>
                              </div>
                          </li>
                          
                      </ul>
                  </div>
                  <div class="col-sm text-end">

                      <div
                          class="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
                         Taux: ${response.data.response_message[i].taux}%</div>
                  </div>
              </div>
          </div>

          </li>
      </div>
  </div>`
  ; }

    body = document.getElementById("bloc_tache")
    body.innerHTML = div;
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
