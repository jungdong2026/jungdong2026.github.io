/* css Zen Garden default style v1.02 */
/* css released under Creative Commons License - http://creativecommons.org/licenses/by-nc-sa/1.0/  */

/* This file based on 'Tranquille' by Dave Shea */
/* You may use this file as a foundation for any new work, but you may find it easier to start from scratch. */
/* Not all elements are defined in this file, so you'll most likely want to refer to the xhtml as well. */

/* Your images should be linked as if the CSS file sits in the same folder as the images. ie. no paths. */


/* basic elements */
$(document).ready(function () {
    $('#photoGallery').innerfade({
        animationtype: 'fade',
        speed: 1000,
        timeout: 3000,
        type: 'sequence',
        containerheight: '250px'
    });
});

$(document).ready(function () {
    $('#paintingGallery').innerfade({
        animationtype: 'slide',
        speed: 1000,
        timeout: 3000,
        type: 'sequence',
        containerheight: '250px'
    });
});

$(document).ready(function () {
    $('.nav-2 a').click(function () {
        $('#wrapper').load('https://jungdong2026.github.io/Profile/Profile.html', 
            function () {
            $(this).fadeIn();
        });
        return false;
    });
}); 

        $(document).ready(function () {
            $('.nav-3 a').click(function () {
                $('#wrapper').load('../Thesis/Thesis.html', 
                    function () {
                    $(this).fadeIn();
                });
                return false;
            });
        });
        $(document).ready(function () {
            $('.nav-4 a').click(function () {
                $('#wrapper').load('ImageProcessing/ImageProcessingMain.html', function () {
                    $(this).fadeIn();
                });
                return false;
            });
        });
        $(document).ready(function () {
            $('.nav-5 a').click(function () {
                $('#wrapper').load('lightbox/galleryPhoto.html', function () {
                    $(this).fadeIn();
                });
                return false;
            });
        });

        $(document).ready(function () {
            $('.nav-6 a').click(function () {
                $('#wrapper').load('lightbox/galleryPainting.html', function () {
                    $(this).fadeIn();
                });
                return false;
            });
        });

        $(document).ready(function () {
            $('.nav-7 a').click(function () {
                $('#wrapper').load('ColorLight/ColorLight.html', function () {
                    $(this).fadeIn();
                });
                return false;
            });
        });

        $(document).ready(function () {
            $('.nav-8 a').click(function () {
                $('#wrapper').load('PhotoIssue/PhotoIssue.html', function () {
                    $(this).fadeIn();
                });
                return false;
            });
        });
        $(document).ready(function () {
            $('.nav-9 a').click(function () {
                $('#wrapper').load('GuestBook/GuestBook.html', function () {
                    $(this).fadeIn();
                });
                return false;
            });
        });


        $(document).ready(function () {
            $('#convolutionMain a').click(function () {
                $('#wrapper').load('ImageProcessing/ImageProcessingMain.html', function () {
                    $(this).fadeIn();
                });
                return false;
            });
        });

        $(document).ready(function () {
            $('.gaussianMain a').click(function () {
                $('#wrapper').load('ColorLight/ColorLight.html', function () {
                    $(this).fadeIn();
                });
                return false;
            });
        });
        $(document).ready(function () {
            $('.fourierMain a').click(function () {
                $('#wrapper').load('PhotoIssue/PhotoIssue.html', function () {
                    $(this).fadeIn();
                });
                return false;
            });
        });

        $(document).ready(function () {
            $('.PhotoG a').click(function () {
                $('#wrapper').load('lightbox/galleryPhoto.html', function () {
                    $(this).fadeIn();
                });
                return false;
            });
        });

        $(document).ready(function () {
            $('.PaintG a').click(function () {
                $('#wrapper').load('lightbox/galleryPainting.html', function () {
                    $(this).fadeIn();
                });
                return false;
            });
        });

        $(document).ready(function () {
            $('#thesisMain a').click(function () {
                $('#wrapper').load('Thesis/Thesis.html', function () {
                    $(this).fadeIn();
                });
                return false;
            });
        });