<template>
  <Layout>
    <FrontPage />
    <AboutUs />
    <Mentors />
    <Resources />
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p> -->

    <NewsletterCard />
    <Footer />

  </Layout>
</template>

<script>
import NewsletterCard from '~/components/NewsLetter.vue'
import FrontPage from '~/components/FrontPage.vue'
import AboutUs from '~/components/AboutUs.vue'
import Mentors from '~/components/Mentors.vue'
import Resources from '~/components/Resources.vue'
import Footer from '~/components/Footer.vue'

export default {
  metaInfo: {
    title: 'Hello, world Chinedu!'
  },
  components: {
    NewsletterCard,
    FrontPage,
    AboutUs,
    Mentors,
    Resources,
    Footer
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
