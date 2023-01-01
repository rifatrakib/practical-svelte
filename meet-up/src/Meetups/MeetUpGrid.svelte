<script>
    import { createEventDispatcher } from "svelte";
    import MeetUpItem from "./MeetUpItem.svelte";
    import MeetUpFilter from "./MeetUpFilter.svelte";
    import Button from "../Components/Button.svelte";
    import { scale } from "svelte/transition";
    import { flip } from "svelte/animate";

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

    #no-meetups {
        margin: 1rem;
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
{#if filteredMeetups.length === 0}
    <p id="no-meetups">No meetups found, please add some</p>
{:else}
    <section id="meetups">
        {#each filteredMeetups as meetUp (meetUp.id)}
            <div transition:scale animate:flip={{duration: 300}}>
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
            </div>
        {/each}
    </section>
{/if}
