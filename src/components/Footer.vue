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
				<div class="logo-container">
					<g-image alt="Logo" src="~/logo.png" style="width: 35px; height:35px;" />
						<div class="logo-info">
							<span>Gidera</span> <span class="logo-info-lower">Your music career success partner</span>
						</div>
				</div>
				
				
			</div>
		</div>
		<div class="footer-2">
			<span>@ 2018. All rights reserved</span>
			<div class="social-icons">
				<font-awesome :icon="['fab', 'github']"/>
				<font-awesome :icon="['fab', 'twitter']"/>
				<font-awesome :icon="['fab', 'google']"/>
				<font-awesome :icon="['fab', 'instagram']"/>
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
		font-size: 14px;
    font-weight: lighter;
	}

	.social-icons {
		width: 20%;
		font-size: 20px;
		color: #20de86;
    display: flex;
    justify-content: space-around;
	}

	.social-icons svg:hover{
		cursor: pointer;
	}

	.footer {
		min-height: 386px;
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

	.blog span:hover{
		color: #20de86;
		cursor: pointer;
	}
	.logo{
		width: 100%;
		padding: 28px 0px 0px 8rem;
	}

	.logo-container{
		display: flex;
	}
	.logo-info{
    margin-left: 2rem;
	}

	.logo-info-lower{
		display: block;
	}

</style>>
