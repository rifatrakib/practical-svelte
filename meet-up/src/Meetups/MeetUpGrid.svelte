<script>
    import { createEventDispatcher } from "svelte";
    import MeetUpItem from "./MeetUpItem.svelte";
    import MeetUpFilter from "./MeetUpFilter.svelte";
    import Button from "../Components/Button.svelte";

    export let meetUps;

    const dispatch = createEventDispatcher();

    let favsOnly = false;

    $: filteredMeetups = favsOnly ? meetUps.filter(m => m.isFavorite): meetUps;

    function setFilter(event) {
        favsOnly = event.detail === 1;
    }
</script>

<style>
    #meetups {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 1rem;
    }

    #meetup-controls {
        margin: 1rem;
        display: flex;
        justify-content: space-between;
    }

    @media (min-width: 768px) {
        #meetups {
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>

<section id="meetup-controls">
    <MeetUpFilter on:select={setFilter} />
    <Button on:click={() => dispatch("add")}>New MeetUp</Button>
</section>
<section id="meetups">
    {#each filteredMeetups as meetUp}
        <MeetUpItem
            id="{meetUp.id}"
            title="{meetUp.title}"
            subtitle="{meetUp.subtitle}"
            imageUrl="{meetUp.imageUrl}"
            description="{meetUp.description}"
            email="{meetUp.contactEmail}"
            address="{meetUp.address}"
            isFav="{meetUp.isFavorite}"
            on:showDetails
            on:edit />
    {/each}
</section>
