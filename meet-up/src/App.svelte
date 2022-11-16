<script>
    import Header from "./Components/Header.svelte";
    import MeetUpGrid from "./Meetups/MeetUpGrid.svelte";

    const meetUps = [
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
</script>

<style>
    main {
        margin-top: 5rem;
    }
</style>

<Header />

<main>
    <MeetUpGrid meetUps={meetUps} />
</main>
