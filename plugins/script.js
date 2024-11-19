$(document).ready(function () {
    $("#banners ul").bxSlider({
        auto: true,
        speed:1000,
        // auto: true faz as imagenas passar automaticamente
        // mode: fade passa aparecendo e desaparecendo
    });
    
    $('#fotos #galeria').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }
    
    });
});
