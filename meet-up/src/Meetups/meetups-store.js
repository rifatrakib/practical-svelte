import { writable } from "svelte/store";

const meetups = writable([
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
]);

export default meetups;
