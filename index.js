$(

  $('.personal-description').on('mouseover', function() {
const description = ['a full-stack web developer', 'Bob Nearents', 'a cat enthusiast', 'a husband', 'a dad'];
    
    $(this).html(description[Math.floor(Math.random() * 5)]);
})

)