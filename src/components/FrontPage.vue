<template>
  <div class="card">
    <div class="frontpage">
      <div class="frontpage-info">
				<span>Your music career success partner</span>
				<h1>We back Nigerian indie artists from around the world and help them do their best work</h1>

				<p>We invest between N2m - N5m in marketing, production and promotional fees in yound budding Nigerian artists and help
					them succeed with designs support and our network of success indie musicians
				</p>

        <div class="frontpage-icons">
					<font-awesome :icon="['far', 'arrow-alt-circle-down']"/>
				</div>
      </div>
			<div class="frontpage-image">
				<g-image src="~/assets/Hero image.png" width="600"/>
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
    padding: 0px 10px;
    background: #000c2d;
    color: white;
    /* text-align: center;  */
  }

	.frontpage {
		display: flex;
		margin: 0px 60px 0px 30px;
		justify-content: space-between;
	}

  .frontpage-icons{
    margin-top: 4rem;
    font-size: 2.5rem;
    color: #20de86;
  }

  .frontpage-icons svg:hover {
    cursor: pointer;
    font-size: 35px;
    transition: 0.5s;
  }
	.frontpage-info {
		padding-top: 40px;
	}
	.frontpage-info h1 {
		font-size: 50px;
    font-weight: normal;
    font-family: serif;
    line-height: initial;
	}

	.frontpage-info p {
		padding: 0px 120px 0px 0px;
    font-weight: normal;
    line-height: 2;
    font-weight: lighter;
	}
  
  @media only screen
  and (min-device-width : 0px)
  and (max-device-width : 798px) {
    img{
      display: none
    }
  }

</style>
