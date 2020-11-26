import $ from './jquery-2.1.0.min.js'
import '../sass/application.scss';


$('.kittens').find('li').each(function (i, el) {
  var img = $(el).find('img');;
  var name = $(el).find('.name');
  var age = $(el).find('.age');

  var w = 250;
  var h = 250;

  img.attr('src', 'http://placekitten.com/' + w + '/' + h + '?image=' + i);
  name.text(names[i]);
  age.text(ages[i]);
  
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').then(registration => {
        console.log('SW registered: ', registration);
      }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
    });
  }
});
