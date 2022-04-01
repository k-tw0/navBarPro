$(function () {
  var active__nav = 0;

  $("ul li a").click(function () {
    // quitar .seleccionado a todos (por si hay alguno)
    $("ul li a").removeClass("seleccionado");
    // agregar seleccionado a "este" elemento.
    $(this).addClass("seleccionado");
  });

  $(".label").on("click", function () {
    if (active__nav == 0) {
      $(".back").addClass("op");
      active__nav = 1;
    } else if (active__nav == 1) {
      $(".back").removeClass("op");
      active__nav = 0;
    }
  });
  $(".back").on("click", function () {
    $("#check").prop("checked", false);
    $(".back").removeClass("op");
    active__nav = 0;
    console.log("clicked me");
  });

  $("li a").on("click", function () {
    // Marcar únicamente el checkbox que corresponde al índice

    //console.log("this", $(this).index(), "parent", $(this).parent().index());

    //Aqui se seleccionan los 4 ultimos elementos del navBar y luego si primero no fue seleccionado se elimina Añadiendo una clase Hiden
    if (
      $(this).parent().index() === 1 ||
      $(this).parent().index() === 2 ||
      $(this).parent().index() === 3 ||
      $(this).parent().index() === 4
    ) {
      $(".container-card").removeClass("fixed__show");
      $(".container-card").addClass("fixed__hiden");
    }
    if ($(this).parent().index() === 0) {
      $(".coco").removeClass("fixed__show");
      $(".coco2").removeClass("fixed__show");
      $(".coco3").removeClass("fixed__show");
      $(".container-card").removeClass("fixed__hiden"); // se puede ver

      $(".container-card").addClass("fixed__show"); // n
    }

    if ($(this).parent().index() === 1) {
      $(".coco2").removeClass("fixed__show");
      $(".coco3").removeClass("fixed__show");

      $(".coco").addClass("fixed__show");
    }
    if ($(this).parent().index() === 2) {
      $(".coco").removeClass("fixed__show");
      $(".coco3").removeClass("fixed__show");

      $(".coco2").addClass("fixed__show");
    }
    if ($(this).parent().index() === 3) {
      $(".coco").removeClass("fixed__show");
      $(".coco2").removeClass("fixed__show");

      $(".coco3").addClass("fixed__show");
    }
  });
});
