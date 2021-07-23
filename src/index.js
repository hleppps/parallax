import './styles/style.less'
import Parallax from 'parallax-js'

$(document).ready(function() {
  $('.parallax__list>li').addClass('layer')
  let scene1 = $('.parallax__list')
  let scene = document.querySelector('.parallax__list')
  console.log(scene1)
  console.log(scene)

  let parallaxInstance = new Parallax(scene)
  parallaxInstance.friction(0.2, 0.2);
})