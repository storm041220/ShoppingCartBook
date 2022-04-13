function changeCollapse(id) {
    var element = document.getElementById(id);
    if (element.classList.contains('show')){
        element.classList.remove("show");
    }else {
        element.classList.add('show');
    }
}
function checkAction() {
    if (window.location.href.indexOf("Health") !== -1){
        let element = document.getElementById("Health");
        element.classList.remove('text-dark');
        element.classList.add('text-danger');
    }
    else if (window.location.href.indexOf("ArtsPhotography") !== -1){
        console.log('aaaa');
        let element = document.getElementById("ArtsPhotography");
        element.classList.remove('text-dark');
        element.classList.add('text-danger');
    }
    else if (window.location.href.indexOf("FoodDrink") !== -1){
        let element = document.getElementById("F&D");
        element.classList.remove('text-dark');
        element.classList.add('text-danger');
    }
    else if (window.location.href.indexOf("Romance") !== -1){
        let element = document.getElementById("Romance");
        element.classList.remove('text-dark');
        element.classList.add('text-danger');
    }
     else if (window.location.href.indexOf("Biography") !== -1){
        let element = document.getElementById("Biography");
        element.classList.remove('text-dark');
        element.classList.add('text-danger');
    }
    else if (window.location.href.indexOf("0from50") !== -1){
        let element = document.getElementById("0from50");
        element.classList.remove('text-dark');
        element.classList.add('text-danger');
    }
    else if (window.location.href.indexOf("50from100") !== -1){
        let element = document.getElementById("50from100");
        element.classList.remove('text-dark');
        element.classList.add('text-danger');
    }
    else if (window.location.href.indexOf("100from150") !== -1){
        let element = document.getElementById("100from150");
        element.classList.remove('text-dark');
        element.classList.add('text-danger');
    }
    else if (window.location.href.indexOf("150from200") !== -1){
        let element = document.getElementById("150from200");
        element.classList.remove('text-dark');
        element.classList.add('text-danger');
    }
    else if (window.location.href.indexOf("200from10000") !== -1){
        let element = document.getElementById("200from10000");
        element.classList.remove('text-dark');
        element.classList.add('text-danger');
    }
}
checkAction();
