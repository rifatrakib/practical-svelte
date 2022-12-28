<script>
    import meetups from "./meetups-store";
    import { createEventDispatcher } from "svelte";
    import Button from "../Components/Button.svelte";
    import Badge from "../Components/Badge.svelte";

    export let id;
    export let title;
    export let subtitle;
    export let imageUrl;
    export let description;
    export let address;
    export let email;
    export let isFav;

    const dispatch = createEventDispatcher();

    function toggleFavorite() {
        meetups.toggleFavorite(id);
    }
</script>

<style>
    article {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        border-radius: 5px;
        background: white;
        margin: 1rem;
    }

    header,
    .content,
    footer {
        padding: 1rem;
    }

    .image {
        width: 100%;
        height: 14rem;
    }

    .image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    h1 {
        font-size: 1.25rem;
        margin: 0.5rem 0;
        font-family: "Roboto Slab", sans-serif;
    }

    h1.is-favorite {
        color: #cf0056;
    }

    h2 {
        font-size: 1rem;
        color: #808080;
        margin: 0.5rem 0;
    }

    p {
        font-size: 1.25rem;
        margin: 0;
    }

    div {
        text-align: right;
    }

    .content {
        height: 4rem;
    }

    #article-header {
        display: flex;
        justify-content: space-between;
    }

    #header-content {
        text-align: left;
    }
</style>

<article>
    <header id="article-header">
        <div id="header-content">
            <h1 class:is-favorite={isFav}>{title}</h1>
            <h2>{subtitle}</h2>
            <p>{address}</p>
        </div>
        <div>
            {#if isFav}
                <h1><Badge>FAVORITE</Badge></h1>
            {/if}
        </div>
    </header>
    <div class="image">
        <img src="{imageUrl}" alt="{title}" />
    </div>
    <div class="content">
        <p>{description}</p>
    </div>
    <footer>
        <Button href="mailto:{email}">Contact</Button>
        <Button
            type="button"
            mode="outline"
            on:click={() => dispatch("edit", id)}>
                Edit
        </Button>
        <Button
            type="button"
            mode="outline"
            color="{isFav ? null : 'success'}"
            on:click={toggleFavorite}>
                {isFav ? "Unfavorite" : "Favorite"}
        </Button>
        <Button type="button" on:click={() => dispatch("showDetails", id)}>
            Show Details
        </Button>
    </footer>
</article>
