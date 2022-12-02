<script>
    import Header from "./Components/Header.svelte";
    import MeetUpGrid from "./Meetups/MeetUpGrid.svelte";
    import Button from "./Components/Button.svelte";
    import EditMeetUp from "./Meetups/EditMeetUp.svelte";

    let meetUps = [
        {
            "id": "m1",
            "title": "Coding Bootcamp",
            "subtitle": "Learn to code in 2 hours",
            "description": "There will be some experts teaching you how to code",
            "imageUrl": "https://static.dnls.nl/home/5/60P9A7yn96sltKNLXJKFed/all-event-venues-of-london.jpg",
            "address": "221B Baker St, London",
            "contactEmail": "code@test.com",
            "isFavorite": false,
        },
        {
            "id": "m2",
            "title": "Swim Together",
            "subtitle": "Let's learn how to swim",
            "description": "Having fun while teaching and swimming",
            "imageUrl": "https://static.dnls.nl/home/5/60P9A7yn96sltKNLXJKFed/all-event-venues-of-london.jpg",
            "address": "221B Baker St, London",
            "contactEmail": "swim@test.com",
            "isFavorite": false,
        },
    ];

    let editMode;

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

    function toggleFavorite(event) {
        const id = event.detail;
        const updatedMeetUp = {...meetUps.find(m => m.id === id)};
        updatedMeetUp.isFavorite = !updatedMeetUp.isFavorite;
        const meetUpIndex = meetUps.findIndex(m => m.id === id);
        const updatedMeetUps = [...meetUps];
        updatedMeetUps[meetUpIndex] = updatedMeetUp;
        meetUps = updatedMeetUps;
    }
</script>

<style>
    main {
        margin-top: 5rem;
    }
</style>

<Header />

<main>
    <Button caption="New MeetUp" on:click={() => editMode = "add"} />
    {#if editMode === "add"}
        <EditMeetUp />
    {/if}
    <MeetUpGrid meetUps={meetUps} on:togglefavorite="{toggleFavorite}" />
</main>
