<script>
	let name = "Abdur Rakib";
	let age = 27;

	function incrementAge() {
		age += 1;
	}
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello {name}! My age is {age} years.</h1>
<button on:click="{incrementAge}">Change Age</button>
