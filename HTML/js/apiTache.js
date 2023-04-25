





// script pour Ajouter les données avec le formulaire de modification form_Add 
const formAdd = document.getElementById("TacheAdd");

formAdd.addEventListener('submit', function(e){
    e.preventDefault();
   const id = document.getElementById("hide").value ;
  const lib  =   document.getElementById("libelle").value; 



    axios.post(`http://192.168.1.103:8000/api/addTache`,{
        libelle:lib,
        projet:id
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

// script pour Ajouter les données avec le formulaire de modification form_Add 
