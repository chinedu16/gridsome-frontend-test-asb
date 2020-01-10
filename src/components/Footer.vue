<template>
  <div class="card">
		<div class="footer">
			<div class="blog">
				<div class="store">
					<h4>Store</h4>
					<span>Catalog</span>
					<span>Popular</span>
					<span>Features</span>
				</div>
				<div class="about">
					<h4>About</h4>
					<span>Catalog</span>
					<span>Popular</span>
					<span>Features</span>
				</div>
				<div class="catalog">
					<h4>Catalog</h4>
					<span>Catalog</span>
					<span>Popular</span>
					<span>Features</span>
				</div>
			</div>
			<div class="logo">
				<g-image alt="Logo" src="~/logo.png" width="15" />Gidera <span>Your music career success partner</span>
			</div>
		</div>
		<div class="footer-2">
			<span>@ 2018. All rights reserved</span>
			<div class="social-icons">
				<span>tww</span>
				<span>fac</span>
				<span>go</span>
				<span>ins</span>
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
    min-height: 400px;
		padding: 60px 60px 20px 60px;
    background: #000c2d;
    color: white;
    /* text-align: center;  */
  }

	.footer-2 {
		display: flex;
    justify-content: space-between;
    font-size: 10px;
	}

	.footer {
		min-height: 350px;
    display: flex;
    justify-content: space-between;
	}
  .blog {
		width: 100%;
		display: flex;
    justify-content: space-around;
		font-size: 18px;
	}

	.blog span {
		display: block;
		margin-top: 2rem;
		font-weight: lighter;
	}
	.logo{
		width: 100%;
		padding: 28px 0px 0px 8rem;
	}

</style>>
