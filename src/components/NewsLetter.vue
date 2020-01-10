<template>
  <div class="card">
    <div class="newsletter-info">
      <span>Great updates</span>
      <h1>Sign up to our newletters to get updates on events, news and opportunities</h1>
      <div class="newsletter-entry">
        <div class="form-control">
          <input type="text" placeholder="Username or email">
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  .card {
    min-height: 30rem;
    padding: 20px;
    background: #dcfaec;
    text-align: center;
    /* width: 100%;  */
  }
  .newsletter-info { 
    margin: 7rem;
  }

  .newsletter-info h1 {
    line-height: 1.3;
    font-size: 50px;
    font-weight: 800;
  }

  .form-control {
    margin-top: 4rem;
  }

  .form-control input {
    height: 3.3rem;
    width: 20rem;
    border: none;
    font-size: 16px;
    border-radius: 5px;
    padding-left: 30px;
  }

  .form-control button {
    font-weight: bold;
    margin-left: 2rem;
    height: 3.3rem;
    width: 10rem;
    font-size: 16px;
    color: white;
    background: #000c2d;
    border-radius: 5px;
    transition: 0.3s;
  }

  .form-control button:hover {
    background: white;
    color: #000c2d;
    border: 2px solid #000c2d;
  }

</style>>
