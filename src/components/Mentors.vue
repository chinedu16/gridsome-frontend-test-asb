<template>
  <div class="card">
		<h1>Our Mentors</h1>
    <div class="mentors-container">
			<div class="mentors">
			<div class="mentors-image">
					<g-image src="~/assets/Mentors section image 2 - Timbaland.png" style="width: 100%;"/>
			</div>
			<div class="mentors-info">
				<h2>Timbaland</h2>
				<p>Ut ac quam fringilla, molestie erat quis, laoreet mauris. In porta est gravida ante laoreet convallis.
					Phasellus dapibus, tellus eget facilisis ullamcorper, velit massa eleifend nunc,
					in eleifend sem erat sed quam. Praesent quis arcu a nisl feugiat pretium.
				 
				</p>
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
    padding: 20px 0px;
    background: #000c2d;
    color: white;
    /* text-align: center;  */
  }

	.card h1{
		text-align: center;
    font-size: 50px;
    font-family: sans-serif;
    font-weight: bolder;
		margin: 0;
	}

	.mentors{
		width: 36%;
	}
	.mentors-info {
		font-family: sans-serif;
	}

	.mentors-info p{
		line-height: 1.7;
	}
	.mentors-info h2{
		font-size: 30px;
    font-weight: 900;
    color: #20dd85;
	}
  

</style>>
