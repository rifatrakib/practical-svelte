<script>
    import Header from "./Components/Header.svelte";
    import MeetUpGrid from "./Meetups/MeetUpGrid.svelte";

    let title = "";
    let subtitle = "";
    let address = "";
    let imageUrl = "";
    let email = "";
    let description = "";

    let meetUps = [
        {
            "id": "m1",
            "title": "Coding Bootcamp",
            "subtitle": "Learn to code in 2 hours",
            "description": "There will be some experts teaching you how to code",
            "imageUrl": "https://static.dnls.nl/home/5/60P9A7yn96sltKNLXJKFed/all-event-venues-of-london.jpg",
            "address": "221B Baker St, London",
            "contactEmail": "code@test.com",
        },
        {
            "id": "m1",
            "title": "Swim Together",
            "subtitle": "Let's learn how to swim",
            "description": "Having fun while teaching and swimming",
            "imageUrl": "https://static.dnls.nl/home/5/60P9A7yn96sltKNLXJKFed/all-event-venues-of-london.jpg",
            "address": "221B Baker St, London",
            "contactEmail": "swim@test.com",
        },
    ];

    function addMeetUp() {
        const newMeetUp = {
            id: Math.random().toString(),
            title: title,
            subtitle: subtitle,
            address: address,
            imageUrl: imageUrl,
            contactEmail: email,
            description: description,
        };

        meetUps = [newMeetUp, ...meetUps];
    }
</script>

<style>
    main {
        margin-top: 5rem;
    }
</style>

<Header />

<main>
    <form on:submit|preventDefault="{addMeetUp}">
        <div class="form-control">
            <label for="title">Title</label>
            <input type="text" id="title" bind:value="{title}" />
        </div>
        <div class="form-control">
            <label for="subtitle">Subtitle</label>
            <input type="text" id="subtitle" bind:value="{subtitle}" />
        </div>
        <div class="form-control">
            <label for="address">Address</label>
            <input type="text" id="address" bind:value="{address}" />
        </div>
        <div class="form-control">
            <label for="imageUrl">Image URL</label>
            <input type="text" id="imageUrl" bind:value="{imageUrl}" />
        </div>
        <div class="form-control">
            <label for="email">Email</label>
            <input type="email" id="email" bind:value="{email}" />
        </div>
        <div class="form-control">
            <label for="description">Description</label>
            <textarea rows="3" id="description" bind:value="{description}"></textarea>
        </div>
        <button type="submit">Save</button>
    </form>
    <MeetUpGrid meetUps={meetUps} />
</main>
