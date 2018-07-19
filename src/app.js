/* global $ */

// Import Fancybox
import '@fancyapps/fancybox'

// Import jQuery Lazy
import 'jquery-lazy'

// Load Styles
import './style.scss'

// Load jQuery Lazy
$(function () {
  $('.lazy').Lazy({
    delay: 250
  })
})
