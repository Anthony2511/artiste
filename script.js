jQuery(document).ready(function() {
          $(".books__list__contenu__detail").hide(); // on cache le bloc de texte
        //    $(".books__list__contenu__link__two").hide();
           jQuery('.books__list__contenu__link__one').click(function () { // on clic sur le lien 'Détails'
                // on ouvre un à la fois
                $('.books__list__contenu__detail').hide();
                    $(".books__list__contenu__link").removeClass('active');
                $('.books__list__contenu__link').removeClass('active');
                    $(this).closest('.books__list__contenu__link').addClass('active');
                            $(this).closest(".books__list__contenu__link").next().stop(true).slideDown("1000");
                           });
                            jQuery('.books__list__contenu__link__two').click(function () {
                                       $(this).closest('.books__list__contenu__link').removeClass('active');
                                              $(this).closest(".books__list__contenu__link").next().stop(true).slideUp("1000");
                                            });
                                        });