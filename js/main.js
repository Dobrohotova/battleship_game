$(function() {
    var i, j = 0;
    var matrica = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    var niza = "";
    var selected = null;
    console.log(matrica);

    function pecati() {
        $("#more").html(" ");
        niza = "";

        for (i = 0; i < 10; i++) {
            for (j = 0; j < 10; j++) {
                var el = matrica[i][j];
                switch (el) {
                	case 0:
                        niza += "<div class='pole' i='" + i + "' j='" + j + "'>" + matrica[i][j] + "</div>";
                        break;
                    case 1:
                        niza += "<div class='pole bg1' i='" + i + "' j='" + j + "'>" + matrica[i][j] + "</div>";
                        break;
                    case 2:
                        niza += "<div class='pole bg2' i='" + i + "' j='" + j + "'>" + matrica[i][j] + "</div>";
                        break;
                    case 3:
                        niza += "<div class='pole bg3' i='" + i + "' j='" + j + "'>" + matrica[i][j] + "</div>";
                        break;
                    case 4:
                        niza += "<div class='pole bg4' i='" + i + "' j='" + j + "'>" + matrica[i][j] + "</div>";
                        break;
                    case 5:
                        niza += "<div class='pole bg5' i='" + i + "' j='" + j + "'>" + matrica[i][j] + "</div>";
                        break;
                    
                }
            }
            niza += "<div class='clear' ></div>"
        }
        $("#more").append(niza);

        $("#more .pole").on("click", function() {
            //console.log($(this).attr("i") + " " + $(this).attr("j"));

            var kliki = parseInt($(this).attr("i"));
            var klikj = parseInt($(this).attr("j"));
            var imaBrod = false;
            console.log("pole: " + kliki + ", " + klikj);

            console.log(kliki + selected);
            if ((kliki + selected) > 10) {
                alert("ne go sobira");
            } else {
            	$(".border2").remove();
                for (var i = kliki; i < (kliki + selected); i++) {
                    if (matrica[i][klikj] != 0) {
                        imaBrod = true;
                        
                    }
                }

                if (!imaBrod) {
                    for (var i = kliki; i < (kliki + selected); i++) {
                        matrica[i][klikj] = selected;


                    }
                }
                else{
                	alert("ima brod");
                }
            }
            pecati();

        })
    }

    pecati();


    $(".extra").on("click", function() {

        selected = parseInt($(this).attr("data-size"));
        console.log("selected: " + selected);
        $(".extra").removeClass('border2');
        $(this).addClass('border2');
    })



})