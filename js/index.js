$(document).ready(function () {

  $(function () {

    $('.smooth').on('click', function (event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    });

  });
  
  function onRowAdded() {
    $('.chat-container').animate({
      scrollTop: $('.chat-container').prop('scrollHeight')
    });
    
  };

  function showChat(chatMessages) {
    var chatDelay = 0;
    $.each(chatMessages, function (index, obj) {
      chatDelay = chatDelay + 500;
      chatDelay2 = chatDelay + obj.delay;
      chatDelay3 = chatDelay2 + 10;
      scrollDelay = 0;
      chatMessage = " ";
      msgname = "." + obj.name;
      msginner = ".messageinner-" + obj.name;
      spinner = ".sp-" + obj.name;
      
      if (obj.showImage === true) {
        chatMessage =  "<img class='img-message' src='img/people.png' alt='people'>";
      } else {
        chatMessage = "<span class='message-text'>" + obj.msg + "</span>";
      }
      
      $(".chat-message-list").append("<li class='message-" + obj.align + " " + obj.name + "' hidden><div class='sp-" + obj.name + "'><span class='spinme-" + obj.align + "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" + obj.name + "' hidden>" + chatMessage + "<span class='message-icon'></span>" + "</div></li>");
      $(msgname).delay(chatDelay).fadeIn();
      $(spinner).delay(chatDelay2).hide(1);
      $(msginner).delay(chatDelay3).fadeIn();
      setTimeout(onRowAdded, chatDelay);
      setTimeout(onRowAdded, chatDelay3);
      chatDelay = chatDelay3;
    });
  }

  var shoppingChat = [{
      name: "ms1",
      delay: 500,
      align: "left",
      showImage: true
},
    {
      name: "ms2",
      msg: "Nullam blandit ligula eget hendrerit ltrices ligula, venenatis empor id.",
      delay: 3000,
      align: "left"
},
    {
      name: "ms3",
      msg: "Phasellus euismod get hendrerit ltrices ligula ultrices ligula",
      delay: 4000,
      align: "right"
},
    {
      name: "ms4",
      msg: "Nullam blandit ligula eget hendrerit",
      delay: 5000,
      align: "left"
}
                   ];

  var nightLifeChat = [{
      name: "ms1",
      msg: "Nulla malesuada",
      delay: 500,
      align: "right"      
},
    {
      name: "ms2",
      msg: "Nulla malesuada fermentum purus. Nullam blandit ligula eget.",
      delay: 3000,
      align: "left"
},
    {
      name: "ms3",
      msg: "Phasellus euismod ultrices ligula",
      delay: 4000,
      align: "right"
},
    {
      name: "ms4",
      msg: "Nullam blandit ligula eget hendrerit",
      delay: 5000,
      align: "left"
}
                   ];

  var foodChat = [{
      name: "ms1",
      delay: 500,
      align: "right",
      showImage: true
},
    {
      name: "ms2",
      msg: "Nulla malesuada fermentum purus. Nullam blandit ligula eget hendrerit ultricies.",
      delay: 3000,
      align: "right"
},
    {
      name: "ms3",
      msg: "Eget hendrerit ultricies",
      delay: 4000,
      align: "right"
},
    {
      name: "ms4",
      msg: "Eget hendrerit",
      delay: 5000,
      align: "left"
}
                   ];
$(window).scroll(function() {
   var hT = $('.third-block .heading').offset().top,
       hH = $('.third-block .heading').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
    console.log((hT-wH) , wS);
   if (wS > (hT+hH-wH)){
     $(".chat-part #wrapper").css('visibility', 'visible');
    $('ul.chat-message-list li').remove();
     showChat(foodChat);

   }
});

  $(".btn-circle").on("click", function () {
    $(".chat-part #wrapper").css('visibility', 'visible');
    $('ul.chat-message-list li').remove();
    if ($(this).hasClass('btn-night-life')) {
      showChat(nightLifeChat);
    } else if ($(this).hasClass('btn-food')) {

      showChat(foodChat);

    } else {

      showChat(shoppingChat);
    }
  });
});
