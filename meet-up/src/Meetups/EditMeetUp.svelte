<script>
    import meetups from "./meetups-store";
    import { createEventDispatcher, onMount } from "svelte";
    import TextInput from "../Components/TextInput.svelte";
    import Button from "../Components/Button.svelte";
    import Modal from "../Components/Modal.svelte";
    import { isEmpty, isValidImageUrl, isValidEmail } from "../helper/validation.js";
    import { tweened } from "svelte/motion";
    import { cubicIn } from "svelte/easing";

    export let id = null;

    let title = "";
    let subtitle = "";
    let address = "";
    let imageUrl = "";
    let email = "";
    let description = "";

    if (id) {
        const unsubscribe = meetups.subscribe(items => {
            const selectedMeetup = items.find(i => i.id === id);
            title = selectedMeetup.title;
            subtitle = selectedMeetup.subtitle;
            address = selectedMeetup.address;
            email = selectedMeetup.contactEmail;
            description = selectedMeetup.description;
            imageUrl = selectedMeetup.imageUrl;
        });
        unsubscribe();
    }

    const dispatch = createEventDispatcher();

    $: titleValid = !isEmpty(title);
    $: subtitleValid = !isEmpty(subtitle);
    $: addressValid = !isEmpty(address);
    $: imageUrlValid = isValidImageUrl(imageUrl);
    $: emailValid = isValidEmail(email);
    $: descriptionValid = !isEmpty(description);
    $: formValid =
        titleValid &&
        subtitleValid &&
        addressValid &&
        imageUrlValid &&
        emailValid &&
        descriptionValid;
    
    $: validItems = [
        titleValid, subtitleValid, addressValid,
        imageUrlValid, emailValid, descriptionValid
    ].filter(i => i === true).length;

    const progress = tweened(0, {
        duration: 700,
        easing: cubicIn,
    });

    $: progress.set(Math.floor(validItems/6 * 1000) / 1000);

    function submitForm() {
        const meetupData = {
            title: title,
            subtitle: subtitle,
            address: address,
            imageUrl: imageUrl,
            contactEmail: email,
            description: description,
        };

        if (id) {
            meetups.updateMeetup(id, meetupData);
        } else {
            meetups.addMeetup(meetupData);
        }
        dispatch("save");
    }

    function deleteMeetup() {
        meetups.removeMeetup(id);
        dispatch("save");
    }

    function cancel() {
        dispatch("cancel");
    }
</script>

<style>
    form {
        width: 100%;
    }

    progress {
        width: 100%;
        height: 5px;
        border-radius: 50px;
        background: crimson;
        color: lightblue;
    }

    progress::-moz-progress-bar {
        background: lightblue;
    }

    progress::-webkit-progress-value {
        background: #cf0056;
    }
</style>

<Modal title="Edit MeetUp" on:cancel>
    <progress value={$progress}></progress>
    <form on:submit="{submitForm}">
        <TextInput 
            id="title"
            label="Title"
            valid={titleValid}
            validityMessage="Please enter a valid title"
            value={title}
            on:input={event => (title = event.target.value)} />
        
        <TextInput 
            id="subtitle"
            label="Subtitle"
            valid={subtitleValid}
            validityMessage="Please enter a valid subtitle"
            value={subtitle}
            on:input={event => (subtitle = event.target.value)} />
        
        <TextInput 
            id="address"
            label="Address"
            valid={addressValid}
            validityMessage="Please enter a valid address"
            value={address}
            on:input={event => (address = event.target.value)} />
        
        <TextInput 
            id="imageUrl"
            label="Image URL"
            valid={imageUrlValid}
            validityMessage="Please enter a valid image URL"
            value={imageUrl}
            on:input={event => (imageUrl = event.target.value)} />
        
        <TextInput 
            id="email"
            label="Email"
            valid={emailValid}
            validityMessage="Please enter a valid email"
            type="email"
            value={email}
            on:input={event => (email = event.target.value)} />
        
        <TextInput 
            id="description"
            label="Description"
            valid={descriptionValid}
            validityMessage="Please enter a valid description"
            controlType="textarea"
            bind:value={description} />
    </form>
    <div slot="footer">
        <Button type="button" mode="outline" on:click="{cancel}">Cancel</Button>
        <Button type="button" on:click="{submitForm}" disabled="{!formValid}">
            Save
        </Button>
        {#if id}
            <Button type="button" on:click={deleteMeetup}>Delete</Button>
        {/if}
    </div>
</Modal>
