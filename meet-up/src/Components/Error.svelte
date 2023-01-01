<script>
    import Modal from "./Modal.svelte";
    
    export let message;
</script>

<Modal title="an error occurred" on:cancel>
    <p>{message}</p>
</Modal>
