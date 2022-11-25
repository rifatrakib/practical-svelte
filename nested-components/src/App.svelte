<script>
    import { tick } from "svelte";
	import Product from "./Product.svelte";
    import Modal from "./Modal.svelte";

    let products = [
        {
            id: "p1",
            title: "A Book",
            price: 9.99,
        },
    ];

    let showModal = false;
    let closeable = false;

    let text = "These are some dummy texts";

    function addToCart(event) {
        console.log(event.detail);
    }

    function deleteProduct(event) {
        console.log(event.detail);
    }

    function transform(event) {
        if (event.which !== 9) {
            return;
        }
        event.preventDefault();

        const selectStart = event.target.selectionStart;
        const selectEnd = event.target.selectionEnd;
        const value = event.target.value;

        text = value.slice(0, selectStart) + 
                value.slice(selectStart, selectEnd).toUpperCase() +
                value.slice(selectEnd);
        
        tick().then(() => {
            event.target.selectionStart = selectStart;
            event.target.selectionEnd = selectEnd;
        });
    }
</script>

{#each products as product}
    <Product
        {...product}
        on:add-to-cart="{addToCart}"
        on:delete="{deleteProduct}" />
{/each}

<button on:click="{() => showModal = true}">Show Modal</button>

{#if showModal}
    <Modal
    on:cancel="{() => (showModal = false)}"
    on:close="{() => (showModal = false)}"
    let:didAgree={closeable}>
        <h1 slot="header">Hello!</h1>
        <p>Using Slots!!!</p>
        <button slot="footer" on:click="{() => (showModal = false)}" disabled={!closeable}>Confirm</button>
    </Modal>
{/if}

<textarea rows="5" value="{text}" on:keydown="{transform}"></textarea>
