<script>
    import meetups from "./Meetups/meetups-store";
    import Header from "./Components/Header.svelte";
    import MeetUpGrid from "./Meetups/MeetUpGrid.svelte";
    import Button from "./Components/Button.svelte";
    import EditMeetUp from "./Meetups/EditMeetUp.svelte";
    import MeetUpDetail from "./Meetups/MeetUpDetail.svelte";

    let editMode;
    let page = "overview";
    let pageData = {};

    function addMeetUp(event) {
        editMode = null;
    }

    function cancelEdit() {
        editMode = null;
    }

    function showDetails(event) {
        page = "details";
        pageData.id = event.detail;
    }

    function closeDetail() {
        page = "overview";
        pageData = {};
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
            <Button on:click={() => editMode = "add"}>New MeetUp</Button>
        </div>
        {#if editMode === "add"}
            <EditMeetUp on:save="{addMeetUp}" on:cancel="{cancelEdit}" />
        {/if}
        <MeetUpGrid meetUps={$meetups} on:showDetails="{showDetails}" />
    {:else}
        <MeetUpDetail id="{pageData.id}" on:close="{closeDetail}" />
    {/if}
</main>
