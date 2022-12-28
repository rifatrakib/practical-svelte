<script>
    import meetups from "./Meetups/meetups-store";
    import Header from "./Components/Header.svelte";
    import MeetUpGrid from "./Meetups/MeetUpGrid.svelte";
    import Button from "./Components/Button.svelte";
    import EditMeetUp from "./Meetups/EditMeetUp.svelte";
    import MeetUpDetail from "./Meetups/MeetUpDetail.svelte";

    let editMode;
    let editedId;
    let page = "overview";
    let pageData = {};

    function savedMeetUp(event) {
        editMode = null;
        editedId = null;
    }

    function cancelEdit() {
        editMode = null;
        editedId = null;
    }

    function showDetails(event) {
        page = "details";
        pageData.id = event.detail;
    }

    function closeDetail() {
        page = "overview";
        pageData = {};
    }

    function startEdit(event) {
        editMode = "edit";
        editedId = event.detail;
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
    {#if page === "overview"}
        <div class="meetup-controls">
            <Button on:click={() => editMode = "edit"}>New MeetUp</Button>
        </div>
        {#if editMode === "edit"}
            <EditMeetUp id={editedId} on:save="{savedMeetUp}" on:cancel="{cancelEdit}" />
        {/if}
        <MeetUpGrid
            meetUps={$meetups}
            on:showDetails="{showDetails}"
            on:edit={startEdit} />
    {:else}
        <MeetUpDetail id="{pageData.id}" on:close="{closeDetail}" />
    {/if}
</main>
