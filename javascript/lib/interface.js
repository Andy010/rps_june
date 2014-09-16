$(document).ready(function(){
  var p1 = new Player('Andy');
  var p2 = new Player('Nick');
  var game = new Game(p1, p2);

  $('.choices img').on('click', function(){
    p1.picks($(this).data('pick'));

  var choices = $('.choices img').map(function(){ 
    return $(this).data('pick');
  });

  p2.randomlyPicks(choices);

// $('#results').prepend('<li>' + game.winningMessage() + '</li>');
    $("<li>" + game.winningMessage() + "</li>").prependTo('#results').slideDown();

    $("#results li:gt(2)").slideToggle(function(){
      $(this).remove();
      console.log('A')
    });
    console.log('B')

  })
})