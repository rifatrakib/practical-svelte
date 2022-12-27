<script>
    import meetups from "./Meetups/meetups-store";
    import Header from "./Components/Header.svelte";
    import MeetUpGrid from "./Meetups/MeetUpGrid.svelte";
    import Button from "./Components/Button.svelte";
    import EditMeetUp from "./Meetups/EditMeetUp.svelte";

    let editMode;

    function addMeetUp(event) {
        editMode = null;
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
    <MeetUpGrid meetUps={$meetups} />
</main>
