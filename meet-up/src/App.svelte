<script>
    import meetups from "./Meetups/meetups-store";
    import Header from "./Components/Header.svelte";
    import MeetUpGrid from "./Meetups/MeetUpGrid.svelte";
    import EditMeetUp from "./Meetups/EditMeetUp.svelte";
    import MeetUpDetail from "./Meetups/MeetUpDetail.svelte";

    let editMode;
    let editedId;
    let page = "overview";
    let pageData = {};

    fetch(
        "firebase url",
    ).then(res => {
        if (!res.ok) {
            throw new Error("fetching meetups failed, please try again later");
        }
        return res.json();
    }).then(data => {
        const loadedMeetups = [];
        for (const key in data) {
            loadedMeetups.push({...data[key], id: key});
        }
        meetups.setMeetups(loadedMeetups);
    }).catch(err => {
        console.log(err);
    });

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
</style>

<Header />

<main>
    {#if page === "overview"}
        {#if editMode === "edit"}
            <EditMeetUp id={editedId} on:save="{savedMeetUp}" on:cancel="{cancelEdit}" />
        {/if}
        <MeetUpGrid
            meetUps={$meetups}
            on:showDetails="{showDetails}"
            on:edit={startEdit}
            on:add={() => {editMode="edit"}} />
    {:else}
        <MeetUpDetail id="{pageData.id}" on:close="{closeDetail}" />
    {/if}
</main>
