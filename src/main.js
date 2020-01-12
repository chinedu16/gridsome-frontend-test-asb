// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret,faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faArrowAltCircleRight, faArrowAltCircleLeft, faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add(faGithub, faTwitter, faInstagram, faGoogle, faUserSecret, faLongArrowAltRight, faArrowAltCircleRight, faArrowAltCircleLeft, faArrowAltCircleDown)

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('font-awesome', FontAwesomeIcon)
}
