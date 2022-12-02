<script>
    import Header from "./Components/Header.svelte";
    import MeetUpGrid from "./Meetups/MeetUpGrid.svelte";
    import TextInput from "./Components/TextInput.svelte";
    import Button from "./Components/Button.svelte";

    let title = "";
    let subtitle = "";
    let address = "";
    let imageUrl = "";
    let email = "";
    let description = "";

    let meetUps = [
        {
            "id": "m1",
            "title": "Coding Bootcamp",
            "subtitle": "Learn to code in 2 hours",
            "description": "There will be some experts teaching you how to code",
            "imageUrl": "https://static.dnls.nl/home/5/60P9A7yn96sltKNLXJKFed/all-event-venues-of-london.jpg",
            "address": "221B Baker St, London",
            "contactEmail": "code@test.com",
            "isFavorite": false,
        },
        {
            "id": "m2",
            "title": "Swim Together",
            "subtitle": "Let's learn how to swim",
            "description": "Having fun while teaching and swimming",
            "imageUrl": "https://static.dnls.nl/home/5/60P9A7yn96sltKNLXJKFed/all-event-venues-of-london.jpg",
            "address": "221B Baker St, London",
            "contactEmail": "swim@test.com",
            "isFavorite": false,
        },
    ];

    function addMeetUp() {
        const newMeetUp = {
            id: Math.random().toString(),
            title: title,
            subtitle: subtitle,
            address: address,
            imageUrl: imageUrl,
            contactEmail: email,
            description: description,
        };

        meetUps = [newMeetUp, ...meetUps];
    }

    function toggleFavorite(event) {
        const id = event.detail;
        const updatedMeetUp = {...meetUps.find(m => m.id === id)};
        updatedMeetUp.isFavorite = !updatedMeetUp.isFavorite;
        const meetUpIndex = meetUps.findIndex(m => m.id === id);
        const updatedMeetUps = [...meetUps];
        updatedMeetUps[meetUpIndex] = updatedMeetUp;
        meetUps = updatedMeetUps;
    }
</script>

<style>
    main {
        margin-top: 5rem;
    }

    form {
        width: 30rem;
        max-width: 90%;
        margin: auto;
    }
</style>

<Header />

<main>
    <form on:submit|preventDefault="{addMeetUp}">
        <TextInput 
            id="title"
            label="Title"
            value={title}
            on:input={event => (title = event.target.value)} />
        
        <TextInput 
            id="subtitle"
            label="Subtitle"
            value={subtitle}
            on:input={event => (subtitle = event.target.value)} />
        
        <TextInput 
            id="address"
            label="Address"
            value={address}
            on:input={event => (address = event.target.value)} />
        
        <TextInput 
            id="imageUrl"
            label="Image URL"
            value={imageUrl}
            on:input={event => (imageUrl = event.target.value)} />
        
        <TextInput 
            id="email"
            label="Email"
            type="email"
            value={email}
            on:input={event => (email = event.target.value)} />
        
        <TextInput 
            id="description"
            label="Description"
            controlType="textarea"
            value={description}
            on:input={event => (description = event.target.value)} />
        
        <Button type="submit" caption="Save" />
    </form>
    <MeetUpGrid meetUps={meetUps} on:togglefavorite="{toggleFavorite}" />
</main>
