<script>
    import Header from "./Components/Header.svelte";
    import MeetUpGrid from "./Meetups/MeetUpGrid.svelte";
    import TextInput from "./Components/TextInput.svelte";

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
        },
        {
            "id": "m1",
            "title": "Swim Together",
            "subtitle": "Let's learn how to swim",
            "description": "Having fun while teaching and swimming",
            "imageUrl": "https://static.dnls.nl/home/5/60P9A7yn96sltKNLXJKFed/all-event-venues-of-london.jpg",
            "address": "221B Baker St, London",
            "contactEmail": "swim@test.com",
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
            type="text"
            value={title}
            on:input={event => (title = event.target.value)} />
        
        <TextInput 
            id="subtitle"
            label="Subtitle"
            type="text"
            value={subtitle}
            on:input={event => (subtitle = event.target.value)} />
        
        <TextInput 
            id="address"
            label="Address"
            type="text"
            value={address}
            on:input={event => (address = event.target.value)} />
        
        <TextInput 
            id="imageUrl"
            label="Image URL"
            type="text"
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
        
        <button type="submit">Save</button>
    </form>
    <MeetUpGrid meetUps={meetUps} />
</main>
