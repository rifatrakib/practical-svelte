<script>
	import ContactCard from "./ContactCard.svelte";

	let name = "Abdur Rakib";
	let title = "";
	let image = "";
	let description = "";
	let formState = "empty";

	let createdContacts = [];

	function addContactCard() {
		if (
			name.trim().length === 0 ||
			title.trim().length === 0 ||
			image.trim().length === 0 ||
			description.trim().length == 0
		) {
			formState = "invalid";
			return;
		}
		formState = "done";
		createdContacts = [...createdContacts, {
			id: `identifier-${createdContacts.length}`,
			name: name,
			jobTitle: title,
			imageUrl: image,
			description: description,
		}];
	}

	function deleteFirst() {
		createdContacts = createdContacts.slice(1);
	}

	function deleteLast() {
		createdContacts = createdContacts.slice(0, -1);
	}
</script>

<style>
	#form {
		width: 30rem;
		max-width: 100%;
	}
</style>

<div id="form">
	<div class="form-control">
		<label for="userName">User Name</label>
		<input type="text" bind:value={name} id="userName" />
	</div>
	<div class="form-control">
		<label for="jobTitle">Job Title</label>
		<input type="text" bind:value={title} id="jobTitle" />
	</div>
	<div class="form-control">
		<label for="image">Image URL</label>
		<input type="text" bind:value={image} id="image" />
	</div>
	<div class="form-control">
		<label for="desc">Description</label>
		<textarea rows="3" bind:value={description} id="desc" />
	</div>
</div>

<button on:click="{addContactCard}">Add Contact Card</button>
<button on:click="{deleteFirst}">Delete First</button>
<button on:click="{deleteLast}">Delete Last</button>

{#if formState === "invalid"}
	<p>Invalid Input</p>
{:else}
	<p>Please enter some data and hit the button!</p>
{/if}

{#each createdContacts as createdContact, index (createdContact.id)}
	<h2># {index + 1}</h2>
	<ContactCard 
		userName={createdContact.name}
		jobTitle={createdContact.jobTitle}
		description={createdContact.description}
		userImage={createdContact.imageUrl} />
{:else}
	<p>Please start adding some contacts, we found none!</p>
{/each}
