<script>
    import CustomInput from "./CustomInput.svelte";
    import Toggle from "./Toggle.svelte";

    let val = "Max";
    let selectedOption = 1;
    let price = 0;
    let agreed;
    let favColors = ["red"];
    let favColor = "red";

    $: console.log(val);
    $: console.log(selectedOption);
    $: console.log(price);
    $: console.log(agreed);
    $: console.log(favColors);
    $: console.log(favColor);

    function setValue(event) {
        val = event.target.value;
    }
</script>

<!-- <input type="text" value="{val}" on:input="{setValue}" /> -->
<!-- <input type="text" bind:value={val} /> -->
<CustomInput bind:val={val} />
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
