$(document).ready(function(){
    $(".stars").on("mouseout",function(){
      $(".star.hover").removeClass("hover");
    });

    $(".stars .star").on("mouseover", function(){
      $(".star.hover").removeClass("hover");
      $(this).addClass("hover");
      $(this).prevAll().addClass("hover");
    });

    $(".stars .star").on("click",function(){
      $(".star.selected").removeClass("selected");
      $(".star.hover").addClass("selected");
      $(".rating_num").attr("value",($(".star.selected").length/2));
      $(".rating_display span").html(($(".star.selected").length/2));
    });
});
