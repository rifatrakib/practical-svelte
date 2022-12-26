<script>
    import meetups from "./Meetups/meetups-store";
    import Header from "./Components/Header.svelte";
    import MeetUpGrid from "./Meetups/MeetUpGrid.svelte";
    import Button from "./Components/Button.svelte";
    import EditMeetUp from "./Meetups/EditMeetUp.svelte";

    let editMode;

    function addMeetUp(event) {
        const newMeetUp = {
            id: Math.random().toString(),
            title: event.detail.title,
            subtitle: event.detail.subtitle,
            address: event.detail.address,
            imageUrl: event.detail.imageUrl,
            contactEmail: event.detail.email,
            description: event.detail.description,
        };

        meetUps = [newMeetUp, ...meetUps];
        editMode = null;
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

    function cancelEdit() {
        editMode = null;
    }
</script>

<style>
    main {
        margin-top: 5rem;
    }

    .meetup-controls {
        margin: 1rem;
    }
</style>

<Header />

<main>
    <div class="meetup-controls">
        <Button on:click={() => editMode = "add"}>New MeetUp</Button>
    </div>
    {#if editMode === "add"}
        <EditMeetUp on:save="{addMeetUp}" on:cancel="{cancelEdit}" />
    {/if}
    <MeetUpGrid meetUps={$meetups} on:togglefavorite="{toggleFavorite}" />
</main>
