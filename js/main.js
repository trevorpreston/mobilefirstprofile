console.log('javascript TWO connected!')

$(function () {
  //event listeners
  function createProj1Events(){
    var $pic1 = $('#proj1-pic');
    var $proj1Desc=$('#proj1-desc');
    var $proj1Hitbox = $('#proj1-hitbox')

    $pic1.on('mouseenter', function(){
      console.log('huva!');
      $proj1Desc.css({'display':'block', 'height':$pic1.height()});
      $pic1.css('opacity', '1');
      $('#proj1-github').css('display', 'block')

      $('#proj2-github').css('display', 'none')
      $('#proj3-github').css('display', 'none')
      $('#proj4-github').css('display', 'none')
    })

    $pic1.on('mouseleave', function(){
      console.log('off')
      $proj1Desc.css('display', 'none');
      $pic1.css('opacity', '.6')
    })

    $('#proj1-github').on('mouseenter', function(){
      $('#proj1-see').css('display', 'block')
    })

    $('#proj1-github').on('mouseleave', function(){
      $('#proj1-see').css('display', 'none')
    })
  }

  function createProj2Events(){
    var $pic2 = $('#proj2-pic');
    var $proj2Desc = $('#proj2-desc')
    var $proj234Container = $('#project234-container')
    $pic2.on('mouseenter', function(){
      console.log('huva!');
      $proj2Desc.css({'display':'block', 'height':$proj234Container.height()});
      $pic2.css('opacity', '1');
      $('#proj2-github').css('display', 'block')

      $('#proj1-github').css('display', 'none')
      $('#proj3-github').css('display', 'none')
      $('#proj4-github').css('display', 'none')
    })

    $pic2.on('mouseleave', function(){
      console.log('off')
      $proj2Desc.css('display', 'none');
      $pic2.css('opacity', '.6')
    })

    $('#proj2-github').on('mouseenter', function(){
      $('#proj2-see').css('display', 'block')
    })

    $('#proj2-github').on('mouseleave', function(){
      $('#proj2-see').css('display', 'none')
    })
  }

  function createProj3Events(){
    var $pic3 = $('#proj3-pic');
    var $proj3Desc = $('#proj3-desc')
    var $proj234Container = $('#project234-container')

    $pic3.on('mouseenter', function(){
      console.log('huva!');
      $proj3Desc.css({'display':'block', 'height':$proj234Container.height()});
      $pic3.css('opacity', '1');
      $('#proj3-github').css('display', 'block')

      $('#proj1-github').css('display', 'none')
      $('#proj2-github').css('display', 'none')
      $('#proj4-github').css('display', 'none')
    })

    $pic3.on('mouseleave', function(){
      console.log('off')
      $proj3Desc.css('display', 'none');
      $pic3.css('opacity', '.6')
    })

    $('#proj3-github').on('mouseenter', function(){
      $('#proj3-see').css('display', 'block')
    })

    $('#proj3-github').on('mouseleave', function(){
      $('#proj3-see').css('display', 'none')
    })
  }

  function createProj4Events(){
    var $pic4 = $('#proj4-pic');
    var $proj4Desc = $('#proj4-desc')
    var $proj234Container = $('#project234-container')

    $pic4.on('mouseenter', function(){
      console.log('huva!');
      $proj4Desc.css({'display':'block', 'height':$proj234Container.height()});
      $pic4.css('opacity', '1');
      $('#proj4-github').css('display', 'block')

      $('#proj1-github').css('display', 'none')
      $('#proj2-github').css('display', 'none')
      $('#proj3-github').css('display', 'none')
    })

    $pic4.on('mouseleave', function(){
      console.log('off')
      $proj4Desc.css('display', 'none');
      $pic4.css('opacity', '.6')
    })

    $('#proj4-github').on('mouseenter', function(){
      $('#proj4-see').css('display', 'block')
    })

    $('#proj4-github').on('mouseleave', function(){
      $('#proj4-see').css('display', 'none')
    })
  }

  function toggleOffGitButtons(){
    $('#projects-wrapper').on('mouseleave', function(){
      $('.github-button').css('display', 'none')
    })
  }

  function toggleSkills(){
    if ($('#about-container').css('display') !== 'none'){
      $('#about-container').slideToggle('fast');
      $('#skills-container').slideToggle('fast')
    } else if ($('#resume-container').css('display') !== 'none'){
      $('#resume-container').slideToggle('fast')
      $('#skills-container').slideToggle('fast')
    } else {
      $('#about-container').slideToggle('fast');
      $('#skills-container').slideToggle('fast')
    }
    // $('#info-wrapper').children().slideToggle('fast')
  }

  function toggleResume(){
    if ($('#about-container').css('display') !== 'none'){
      $('#about-container').slideToggle('fast');
      $('#resume-container').slideToggle('fast')
    } else if ($('#skills-container').css('display') !== 'none'){
      $('#skills-container').slideToggle('fast')
      $('#resume-container').slideToggle('fast')
    } else {
      $('#about-container').slideToggle('fast');
      $('#resume-container').slideToggle('fast')
    }
  }

  function toggleEmail(){
    $('#email-button').on('click', function(){
      console.log('toggling email')
      $('#email-address').slideToggle(400)
    })
  }


  function skillsButton(){
    $('#skills-button').on('click', toggleSkills)
  }

  function resumeButton(){
    $('#resume-button').on('click', toggleResume)
  }

  function navFadein(){
    $('nav').fadeToggle('slow','linear')
  }





  createProj1Events();
  createProj2Events();
  createProj3Events();
  createProj4Events();
  skillsButton();
  resumeButton();
  toggleOffGitButtons();
  toggleEmail();
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

  // new ScrollMagic.Scene({triggerElement: ".about"})
  //       .setClassToggle("nav", "active") // add class toggle
  //       // .addIndicators() // add indicators (requires plugin)
  //       .addTo(controller);


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
