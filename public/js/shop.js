function changeCollapse(id) {
    var element = document.getElementById(id);
    if (element.classList.contains('show')){
        element.classList.remove("show");
    }else {
        element.classList.add('show');
    }
}
