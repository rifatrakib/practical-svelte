<script>
    import CustomInput from "./CustomInput.svelte";
    import Toggle from "./Toggle.svelte";
    import { isValidEmail } from "./validation.js";

    let val = "Max";
    let selectedOption = 1;
    let price = 0;
    let agreed;
    let favColors = ["red"];
    let favColor = "red";
    let dropdownFavColor = "red";
    let usernameInput;
    let someDiv;
    let customInput;
    let enteredEmail = "";
    let formIsValid = false;

    $: console.log(val);
    $: console.log(selectedOption);
    $: console.log(price);
    $: console.log(agreed);
    $: console.log(favColors);
    $: console.log(favColor);
    $: console.log(dropdownFavColor);
    $: console.log(customInput);

    $: if(isValidEmail(enteredEmail)) {
        formIsValid = true;
    } else {
        formIsValid = false;
    }

    function setValue(event) {
        val = event.target.value;
    }

    function saveData() {
        console.log(usernameInput.value);
        console.dir(usernameInput);
        console.dir(someDiv);
        customInput.empty();
    }
</script>

<style>
    input.invalid {
        border: 1px solid red;
    }
</style>

<!-- <input type="text" value="{val}" on:input="{setValue}" /> -->
<!-- <input type="text" bind:value={val} /> -->
<CustomInput bind:val bind:this={customInput} />
<Toggle bind:chosenOption={selectedOption} />

<input type="number" bind:value={price} />

<label>
    <input type="checkbox" bind:checked={agreed} />
    Agree to terms?
</label>

<h1>Favorite colors?</h1>
<label>
    <input type="checkbox" name="color" value="red" bind:group={favColors} />
    Red
</label>
<label>
    <input type="checkbox" name="color" value="green" bind:group={favColors} />
    Green
</label>
<label>
    <input type="checkbox" name="color" value="blue" bind:group={favColors} />
    Blue
</label>

<h1>Favorite color?</h1>
<label>
    <input type="radio" name="color" value="red" bind:group={favColor} />
    Red
</label>
<label>
    <input type="radio" name="color" value="green" bind:group={favColor} />
    Green
</label>
<label>
    <input type="radio" name="color" value="blue" bind:group={favColor} />
    Blue
</label>

<select bind:value={dropdownFavColor}>
    <option value="green">Green</option>
    <option value="red">Red</option>
    <option value="blue">Blue</option>
</select>

<hr />

<input type="text" bind:this="{usernameInput}" />
<button on:click="{saveData}">Save</button>

<div bind:this="{someDiv}"></div>

<hr />

<form on:submit|preventDefault>
    <input type="email" bind:value={enteredEmail} class="{isValidEmail(enteredEmail) ? '' : 'invalid'}" />
    <button type="submit" disabled={!formIsValid}>Save</button>
</form>
