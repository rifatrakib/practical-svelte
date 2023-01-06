<script>
    import Product from "./Product.svelte";
    import CartItem from "./CartItem.svelte";

    let renderedItem = {cmp: CartItem, title: "Another Product", id: "p2"};

    function toggle() {
        if (renderedItem.cmp === Product) {
            renderedItem = {cmp: CartItem, title: "Another Product", id: "p2"};
        } else {
            renderedItem = {cmp: Product, title: "Test Product", id: "p1"};
        }
    }
</script>

<button on:click={toggle}>Toggle Display</button>

<svelte:component this={renderedItem.cmp} title="{renderedItem.title}" id="{renderedItem.id}" />
