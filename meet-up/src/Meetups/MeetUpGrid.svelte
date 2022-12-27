<script>
    import MeetUpItem from "./MeetUpItem.svelte";

    export let meetUps;
</script>

<style>
    section {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 1rem;
    }

    @media (min-width: 768px) {
        section {
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>

<section id="meetups">
    {#each meetUps as meetUp}
        <MeetUpItem
            id="{meetUp.id}"
            title="{meetUp.title}"
            subtitle="{meetUp.subtitle}"
            imageUrl="{meetUp.imageUrl}"
            description="{meetUp.description}"
            email="{meetUp.contactEmail}"
            address="{meetUp.address}"
            isFav="{meetUp.isFavorite}" />
    {/each}
</section>