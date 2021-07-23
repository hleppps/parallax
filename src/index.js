import './styles/style.less'
import Parallax from 'parallax-js'

$(document).ready(function() {
  $('.wrapper').addClass('active')
  let scene = $('.parallax__list')[0]

  let parallaxInstance = new Parallax(scene)
  parallaxInstance.friction(0.2, 0.2);
})