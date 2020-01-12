<template>
  <div class="card">
		<h1>Our Mentors</h1>
    <div class="mentors-container">
			<div class="mentors" id="1">
				<div class="mentors-image">
						<g-image src="~/assets/Mentors section image 1 - Killer Mike.png" style="width: 100%;"/>
				</div>
				<div class="mentors-info">
					<div class="mentors-icons"></div>
					<h2>Killer Mike</h2>
					<p>Ut ac quam fringilla, molestie erat quis, laoreet mauris. In porta est gravida ante laoreet convallis.
						Phasellus dapibus, tellus eget facilisis ullamcorper, velit massa eleifend nunc,
						in eleifend sem erat sed quam. Praesent quis arcu a nisl feugiat pretium.
					</p>
				</div>
    	</div>
			<div class="mentors" id="2">
				<div class="mentors-image">
						<g-image src="~/assets/Mentors section image 2 - Timbaland.png" style="width: 100%;"/>
				</div>
				<div class="mentors-info">
					<div class="mentors-icons">
						<font-awesome @click="swapNodesLeft" :icon="['far', 'arrow-alt-circle-left']"/>
						<font-awesome  @click="swapNodesRight" :icon="['far', 'arrow-alt-circle-right']"/>
					</div>
					<h2>Timbaland</h2>
					<p>Ut ac quam fringilla, molestie erat quis, laoreet mauris. In porta est gravida ante laoreet convallis.
						Phasellus dapibus, tellus eget facilisis ullamcorper, velit massa eleifend nunc,
						in eleifend sem erat sed quam. Praesent quis arcu a nisl feugiat pretium.
					</p>
				</div>
    	</div>
			<div class="mentors" id="3">
				<div class="mentors-image">
						<g-image src="~/assets/Mentors section image 3 - Chance the rapper.png" style="width: 100%;"/>
				</div>
				<div class="mentors-info">
					<div class="mentors-icons"></div>
					<h2>Chance the Rapper</h2>
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
		swapNodesLeft () {
			console.log('swapping Node...');
			this.swapSiblings_left(document.getElementById('1'), document.getElementById('2'), document.getElementById('3'))
		},
		swapNodesRight () {
			console.log('swapping Node...');
			this.swapSiblings_right(document.getElementById('1'), document.getElementById('2'), document.getElementById('3'))
		},
		swapSiblings_left(node1, node2, node3) {
			let container = node2.parentNode;
			container.appendChild(node2)
			container.appendChild(node3)
			container.appendChild(node1)
		},
		swapSiblings_right(node1, node2, node3) {
			let container = node2.parentNode;
			container.appendChild(node1)
			container.appendChild(node2)
			container.appendChild(node3)
		}
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
		width: 30%;
	}

	.mentors-icons {
		margin: 30px 0px;
    display: flex;
    width: 25%;
		color: #20dd85;
    font-size: 39px;
    justify-content: space-between
	}
	.mentors-icons svg:hover {
    cursor: pointer;
    font-size: 35px;
    transition: 0.5s;
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
  .mentors-container {
		margin: 2rem 0rem;
		display: flex;
    justify-content: space-between;
    overflow: scroll;
	}

</style>>
