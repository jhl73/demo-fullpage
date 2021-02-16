const seccionesPagina = new fullpage('#fullpage', {

//OPCIONES BASICAS
autoScrolling: true,
fitToSection: false,
fitToSectionDelay: 300,
easing: 'easeInOutCubic',
scrollingSpeed: 700,
css3: true,
easingcss3: 'ease-out',
loopBottom: false,

//BARRA DE NAVEGACION
navigation: true,
menu: '#menu',
anchors: ['Inicio', 'Productos', 'Contacto'],
navigationTooltips: ['Inicio', 'Productos', 'Contacto'],
showActiveTooltip: false,


//SECCIONES
sectionsColor : ['#000', '#c2c2c2', '#000'],
verticalCentered: true,


//SLIDER

controlArrows: true,
slidesNavigation: false,
afterLoad: function(origin, destination){
    if(destination.anchor == 'contacto'){
        document.querySelector('.footer h2').style.opacity = 1;
    }
}


});
