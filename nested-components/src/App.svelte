<script>
	import Product from "./Product.svelte";
    import Modal from "./Modal.svelte";

    let products = [
        {
            id: "p1",
            title: "A Book",
            price: 9.99,
        },
    ];

    function addToCart(event) {
        console.log(event.detail);
    }

    function deleteProduct(event) {
        console.log(event.detail);
    }
</script>

{#each products as product}
    <Product
        {...product}
        on:add-to-cart="{addToCart}"
        on:delete="{deleteProduct}" />
{/each}

<Modal>
    <h1 slot="header">Hello!</h1>
    <p>Using Slots!!!</p>
    <button slot="footer">Confirm</button>
</Modal>
