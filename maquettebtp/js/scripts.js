let connectEl = document.getElementById('#connect');
let toShowEl = document.getElementById('#toShow')
let isConnect;
let password = document.getElementById('#inputPasswordinscription')
 
function connected() {
    isConnect = true;
    console.log(isConnect)

}

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

//FORMULAIRE INSCRIPTION
function ValidationForm() {

        let pass = document.getElementById('inputPasswordinscription').value;
        let passConf = document.getElementById('inputPasswordConfirm').value;

        if(passConf != pass) {
          alert("Les mots de passes sont différents");
          return false
        }

        return true;
}

function validate() { 
        var msg; 
        var str = document.getElementById("inputPasswordinscription").value; 
        if (str.match( /[0-9]/g) && 
            str.match( /[A-Z]/g) && 
            str.match(/[a-z]/g) && 
            str.match( /[^a-zA-Z\d]/g) &&
            str.length >= 10) 
            alert('Mot de passe fort') 
        else 
            msg = "<p style='color:red'>Mot de passe faible.</p>"; 
            document.getElementById("msg").innerHTML= msg; 
} 


function strenghtPassword(){
    var meter = document.getElementById("pwd_meter").value;
    var pwd = document.getElementById("inputPasswordinscription").value;
    
    var updated = 0;
    
    if (pwd.length > 8) {
        updated += 1;
    }
    
    if (/[a-z]/.test(pwd)) {
        updated += 1;
    } 
    
    
    if (/[A-Z]/.test(pwd)) {
        updated += 1;
    } 
    
    if (/[0-9]/.test(pwd)) {
        updated += 1;
    }
    
    if (/[^a-zA-Z0-9]/.test(pwd)) {
        updated += 1;
    } 
    
    document.getElementById("pwd_meter").value = updated;
    
    if (updated === 5) {
        PWD_CHECK = 1;
    } else {
        PWD_CHECK = 0;
    }
}