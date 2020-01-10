<template>
  <div class="card">
    <div class="about">
      <div class="about-info">
        <h1>Resources</h1>
      </div>

			<div class="">
				<div class="about-images">
					<div class="line"></div>
					<div class="image-info">
						<span>Resources for student artists</span>
					</div>

					<div class="images-container">
						<div class="image-1">
							<div class="card-image">
								<g-image src="~/assets/What we do section image 1.png" style="width:100%;" alt="image one" />
								<div class="container-image">
									<h4><b>One</b></h4> 
									<p>Place any text you want here etc.
										We invest between N2m - N5m in marketing, production fees.</p> 
								</div>
							</div>
						</div>
						<div class="image-2">
							<div class="card-image">
								<g-image src="~/assets/What we do section image 2.png" style="width:100%;" alt="image two" />
								<div class="container-image">
									<h4><b>Two</b></h4> 
									<p>Place any text you want here etc.
										We invest between N2m - N5m in marketing, production fees.</p>
								</div>
							</div>
						</div>
						<div class="image-3">
							<div class="card-image">
								<g-image src="~/assets/What we do section image 3.png"  style="width:100%;" alt="image three"/>
								<div class="container-image">
									<h4><b>Three</b></h4> 
									<p>Place any text you want here etc.
										We invest between N2m - N5m in marketing, production fees,</p>
								</div>
							</div>
						</div>
					</div>
					<div class="" style="display: flex; justify-content: flex-end;margin: 40px 74px 0px;">
						<div class="btn-large">
							<button style="width: 281px; height: 65px; background: #000c2d; color: white; border-radius: 5px; text-transform: uppercase; font-size: 14px;">view all resources</button>
						</div>
					</div>
				</div>

				<div class="about-images" style="margin-top: 5rem;">
					<div class="line"></div>
					<div class="image-info">
						<span>Resources for student artists</span>
					</div>

					<div class="images-container">
						<div class="image-1">
							<div class="card-image">
								<g-image src="~/assets/What we do section image 1.png" style="width:100%;" alt="image one" />
								<div class="container-image">
									<h4><b>One</b></h4> 
									<p>Place any text you want here etc.
										We invest between N2m - N5m in marketing, production fees.</p> 
								</div>
							</div>
						</div>
						<div class="image-2">
							<div class="card-image">
								<g-image src="~/assets/What we do section image 2.png" style="width:100%;" alt="image two" />
								<div class="container-image">
									<h4><b>Two</b></h4> 
									<p>Place any text you want here etc.
										We invest between N2m - N5m in marketing, production fees.</p>
								</div>
							</div>
						</div>
						<div class="image-3">
							<div class="card-image">
								<g-image src="~/assets/What we do section image 3.png"  style="width:100%;" alt="image three"/>
								<div class="container-image">
									<h4><b>Three</b></h4> 
									<p>Place any text you want here etc.
										We invest between N2m - N5m in marketing, production fees,</p>
								</div>
							</div>
						</div>
					</div>
					<div class="" style="display: flex; justify-content: flex-end;margin: 40px 74px 0px;">
						<div class="btn-large">
							<button style="width: 281px; height: 65px; background: #000c2d; color: white; text-transform: uppercase; border-radius: 5px; font-size: 14px;">view all resources</button>
						</div>
					</div>
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
    min-height: 450px;
    padding: 60px;
    background: #f3f3f4;
    color: black;
  }

	.about {
		display: flex;
		justify-content: space-between;
		
	}

	.about-info {
		margin-top: 2rem;
	}
	.about-images {
		margin-left: 3rem;
	}
	.about-info  h1{
		writing-mode: vertical-rl;
		text-orientation: mixed;
		line-height: 0;
		font-size: 50px;
		font-weight: 800;
	}

	.images-container {
		display: flex;
		justify-content: space-between;
	}

	.image-info {
		margin: 30px 0px;
	}

	.image-info h1 {
		font-size: 23px;
		line-height: 1.3;
		font-weight: 500;
		width: 80%;
	}
	.line {
		height: 2px;
		background-color: black;
		border-radius: 2px;
	}

	.card-image {
		box-shadow: 0 24px 49px 0 rgba(0,0,0,0.1);
		transition: 0.3s;
		width: 80%;
		border-radius: 7px;
	}

	.card-image:hover {
		box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
	}

	.container-image {
		padding: 2px 20px 12px;
		background: white;
		border-radius: 8px;
		margin-top: -10px;
	}

	.container-image h4 {
		font-size: 21px;
	}
</style>>
