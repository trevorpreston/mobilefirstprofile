console.log('javascript TWO connected!')

$(function() {
  //event listeners
  $('.project-selector').on('mouseenter', updateProjectDisplay)

  function updateProjectDisplay(){
    $('#current-project').css('background-image',"url('./images/projects/" + event.target.id +".png')")
  }

  function activeProject(){
    $('.project-selector').removeClass('active-project')
    $(this).addClass('active-project')
    let currentProjDescId = '#'+$(this).attr('id') + '-desc'
    console.log(currentProjDescId)

    $('.proj-desc').removeClass('active-desc')
    $(currentProjDescId).addClass('active-desc')
  }

  function activeDesc(){
    $('.project-selector').removeClass('active-project')
    $(this).addClass('active-project')
  }


  $('.project-selector').on('mouseenter', activeProject)


  // hideContact();


  /* SCROLL MAGIC*/
  // init
  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onLeave',
    }

  });

  // get all slides
  var slides = document.querySelectorAll("section.panel");

  // create scene for every slide
  for (var i=0; i<slides.length; i++) {
    new ScrollMagic.Scene({
        triggerElement: slides[i]
      })
      .setPin(slides[i])
      .setTween("#animate1", 0.5, {backgroundColor: "green", scale: 2.5}) // trigger a TweenMax.to tween
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
  }

  var scroller = ['full stack apps.','responsive front-end.','robust back-end.', 'fluid UX.', 'web-connected devices.'];
  function cycleScroller(arr){
    $('#scroller-2').text(arr[0]);
    var i = 1;
    setInterval(
      function(){
        $('#scroller-2').text(arr[i]);
        i++;
        if(i >= scroller.length) i = 0;
      },2000);
  }

  cycleScroller(scroller);


var controller2 = new ScrollMagic.Controller({
  globalSceneOptions: {
    duration: 1.2*($(window).height()),
    reverse: true
  }
});

var scenes = {
  'scene1': {
    'section-1': 'anchor1'
  },
  'scene2': {
    'section-2': 'anchor2'
  },
  'scene3': {
    'section-3': 'anchor3'
  }
}

for(var key in scenes) {
  // skip loop if the property is from prototype
  if (!scenes.hasOwnProperty(key)) continue;

  var obj = scenes[key];

  for (var prop in obj) {
    // skip loop if the property is from prototype
    if(!obj.hasOwnProperty(prop)) continue;

    new ScrollMagic.Scene({ triggerElement: '#' + prop })
        .setClassToggle('#' + obj[prop], 'active')
        .addTo(controller2);
  }
}

// Change behaviour of controller
// to animate scroll instead of jump
controller2.scrollTo(function(target) {

  TweenMax.to(window, 0.5, {
    scrollTo : {
      y : target,
      autoKill : true // Allow scroll position to change outside itself
    },
    ease : Cubic.easeInOut
  });

});

var anchor_nav = document.querySelector('.anchor-nav');

anchor_nav.addEventListener('click', function(e) {

  var target = e.target,
      id     = target.getAttribute('href');

        console.log(target)

  if(id !== null) {
    if(id.length > 0) {
      e.preventDefault();
      controller.scrollTo(id);

      if(window.history && window.history.pushState) {
        history.pushState("", document.title, id);
      }
    }
  }
});

// build scenes

  new ScrollMagic.Scene({triggerElement: ".about"})
        .on('start', function () {
          $('nav').fadeToggle(400,'linear')
          console.log("passed trigger");
        })
        // .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

  new ScrollMagic.Scene({triggerElement: ".about"})
        .setClassToggle("#nav-tog-el-1", "active-nav") // add class toggle
        // .addIndicators() 
        .addTo(controller2);
  new ScrollMagic.Scene({triggerElement: ".projects"})
        .setClassToggle("#nav-tog-el-2", "active-nav") // add class toggle
        // .addIndicators() 
        .addTo(controller2);
  new ScrollMagic.Scene({triggerElement: ".contact"})
        .setClassToggle("#nav-tog-el-4", "active-nav") // add class toggle
        // .addIndicators() 
        .addTo(controller2);






});
