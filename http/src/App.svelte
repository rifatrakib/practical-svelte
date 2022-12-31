<script>
    import { onMount } from "svelte";

    let hobbies = [];
    let hobbyInput;
    let isLoading = false;

    onMount(() => {
        isLoading = true;
        fetch(
            "sample url for firebase"
        ).then(res => {
            if (!res.ok) {
                throw new Error("Failed!");
            }
            return res.json();
        }).then(data => {
            isLoading = false;
            hobbies = Object.values(data);
        }).catch(err => {
            isLoading = false;
            console.log(err);
        });
    });

    let getHobbies = fetch(
        "sample url for firebase"
    ).then(res => {
        if (!res.ok) {
            throw new Error("Failed!");
        }
        return res.json();
    }).then(data => {
        isLoading = false;
        hobbies = Object.values(data);
        return hobbies;
    }).catch(err => {
        isLoading = false;
        console.log(err);
    });

    function addHobby() {
        hobbies = [...hobbies, hobbyInput.value];

        isLoading = true;
        fetch(
            "sample url for firebase",
            {
                method: "POST",
                body: JSON.stringify(hobbyInput.value),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        ).then(res => {
            isLoading = false;
            if (!res.ok) {
                throw new Error("Failed!");
            }
            alert("Saved Data");
        }).catch(err => {
            isLoading = false;
            console.log(err);
        });
    }
</script>

<label for="hobby">Hobby</label>
<input type="text" id="hobby" bind:this={hobbyInput} />
<button on:click={addHobby}>Add Hobby</button>

<h2>Using onMount</h2>
{#if isLoading}
    <p>Loading...</p>
{:else}
    <ul>
        {#each hobbies as hobby}
            <li>{hobby}</li>
        {/each}
    </ul>
{/if}

<h2>Using await</h2>
{#await getHobbies}
    <p>Loading...</p>
{:then hobbyData}
    <ul>
        {#each hobbyData as hobby}
            <li>{hobby}</li>
        {/each}
    </ul>
{:catch error}
    <p>{error.message}</p>
{/await}
