var sceneEl = document.querySelector('a-scene');

//var entity = document.querySelector('[sound]');
//entity.components.sound.stopSound();

document.addEventListener('DOMContentLoaded', function() {


    var pictures = document.querySelectorAll(".picture");
    var entity = document.querySelector('#voz');
    console.log(pictures);
    console.log(entity);
    console.log(entity.sound);
    
  
    var setPictureEvent = function(picture) {
      var img = picture.id;      
      picture.addEventListener('mouseenter',function(){
        var img = this.id;
        console.log(img);
        //entity.setAttribute('sound','src: #'+ img +'Sound;');        
        if (img) {            
            entity.setAttribute('sound','src: #'+ img +'Sound;');        
          var panel = document.querySelector('#' + img + 'Esp');
          panel.setAttribute('visible','true');          
          var panel2 = document.querySelector('#' + img + 'Oto');
          panel2.setAttribute('visible','true');          
          entity.components.sound.playSound();
        }
      });
  
      picture.addEventListener('mouseleave',function(){
        var img = this.id;        
        if (img) {
          var panel = document.querySelector('#' + img + 'Esp');
          panel.setAttribute('visible','false');
          var panel2 = document.querySelector('#' + img + 'Oto');
          panel2.setAttribute('visible','false');       
          entity.components.sound.stopSound();
        }
      });
    }
    pictures.forEach(p => setPictureEvent(p))
  
    let cameraRig = document.querySelector("#cameraRig");
    let camera = document.querySelector("#head");
  
  
    var sunflowers = document.querySelectorAll(".sunflower");
    var setSunflowerEvent = function(sunflower) {
      sunflower.addEventListener('click', function(e) {
        sunflower.setAttribute("dynamic-body","true");
      })
    }
    sunflowers.forEach(s => setSunflowerEvent(s))
  
  
    // var els = document.querySelectorAll(".sunflower");
    // els.forEach(function(el) {
    //   document.addEventListener("dragstart", function() {
    //     el.removeAttribute("dynamic-body");
    //     console.log("remove")
    //   });
    //   document.addEventListener("dragend", function() {
    //     el.setAttribute("dynamic-body", "true");
    //     console.log("add dynamic-body")
    //   });
    // });
  
    
  });
  