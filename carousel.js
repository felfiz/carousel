// Carousel

function Carousel() {
  var settings = {
    firstImg: function() {
      element = document.querySelector('.one_photo');
      element.classList.add('active');
      this.photo(element);
      this.description(element);
    },

    slide: function() {
      element = document.querySelector('.active');

      if(element.nextElementSibling) {
        element.nextElementSibling.classList.add('active');
        settings.photo(element.nextElementSibling);
        settings.description(element.nextElementSibling);
        element.classList.remove('active');
      } else {
        element.classList.remove('active');
        settings.firstImg();
      }

    },

    next: function() {
      clearInterval(interval);
      element = document.querySelector('.active');

      if(element.nextElementSibling) {
        element.nextElementSibling.classList.add('active');
        settings.photo(element.nextElementSibling);
        settings.description(element.nextElementSibling);
        element.classList.remove('active');
      } else {
        element.classList.remove('active');
        settings.firstImg();
      }
      interval = setInterval(settings.slide,4000);
    },

    prev: function() {
      clearInterval(interval);
      element = document.querySelector('.active');

      if(element.previousElementSibling) {
        element.previousElementSibling.classList.add('active');
        settings.photo(element.previousElementSibling);
        settings.description(element.previousElementSibling);
        element.classList.remove('active');
      } else {
        element.classList.remove('active');
        element = document.querySelector('.one_photo:last-child');
        element.classList.add('active');
        this.description(element);
        this.photo(element);
      }
      interval = setInterval(settings.slide,4000);
    },

    description: function(obj) {
      var description = obj.querySelector('img').getAttribute('alt');
      document.querySelector('.photo_description').innerHTML = description;
    },


    photo: function(obj) {
      var photo = '<img src=' + obj.querySelector('.active a').getAttribute('href') + '>';
      document.querySelector('.big_photo div').innerHTML = photo;
    }

  }

    settings.firstImg();

    settings.description(element);


    var interval = setInterval(settings.slide,4000);
    document.querySelector('.next').addEventListener('click', settings.next, false);
    document.querySelector('.prev').addEventListener('click', settings.prev, false);
    //document.querySelector('.one_photo').addEventListener('click', this.classList('active'), false);
  }

  window.addEventListener('load',Carousel,false);
