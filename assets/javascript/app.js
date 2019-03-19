$(document).ready(function(){

    // a call to Materialize sidenav
    $('.sidenav').sidenav();
    // a call to Materialize parallax
    $('.parallax').parallax();
    // a call to Materialize tap target
    $('.tap-target').tapTarget();
    // a call to Materialize tool tip
    $('.tooltipped').tooltip();

    $('#basicExample').justifiedGallery({
        rowHeight : 250,
        lastRow : 'nojustify',
        margins : 3
    });  
});