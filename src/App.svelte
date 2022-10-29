<script>
	let name = "Abdur Rakib";
	let age = 27;

	$: uppercaseName = name.toUpperCase();

	$: console.log(name);

	$: if (name === "Muhammad Abdur Rakib") {
		age = 30;
	}

	function incrementAge() {
		age += 1;
	}

	function changeName(event) {
		const enteredValue = event.target.value;
		name = enteredValue;
	}
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello {uppercaseName}! My age is {age} years.</h1>
<button on:click="{incrementAge}">Change Age</button>
<input type="text" bind:value="{name}" />
