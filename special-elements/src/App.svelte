<script>
    import Product from "./Product.svelte";
    import CartItem from "./CartItem.svelte";
    import FamilyNode from "./FamilyNode.svelte";

    let y;
    let currentTitle = "My App";

    $: console.log(y);

    let familyStructure = [
        {
            isParent: true,
            name: "Chris",
            children: [
                {
                    isParent: true,
                    name: "Moe",
                    children: [
                        {
                            isParent: false,
                            name: "Julie",
                        },
                    ],
                },
            ],
        },
        {isParent: false, name: "Anna"},
    ];

    let renderedItem = {cmp: CartItem, title: "Another Product", id: "p2"};

    function toggle() {
        if (renderedItem.cmp === Product) {
            renderedItem = {cmp: CartItem, title: "Another Product", id: "p2"};
        } else {
            renderedItem = {cmp: Product, title: "Test Product", id: "p1"};
        }
    }

    function switchTitle() {
        currentTitle = "A New Title";
    }
</script>

<style>
    div {
        height: 3000px;
    }
</style>

<svelte:window bind:scrollY="{y}" />
<svelte:body on:mouseenter />
<svelte:head>
    <title>{currentTitle}</title>
</svelte:head>

<button on:click="{switchTitle}">Switch Title</button>

<div>
    <button on:click={toggle}>Toggle Display</button>

    <svelte:component this={renderedItem.cmp} title="{renderedItem.title}" id="{renderedItem.id}" />

    {#each familyStructure as familyMember}
        <FamilyNode member={familyMember} />
    {/each}
</div>
