import { writable } from "svelte/store";

const meetups = writable([
    {
        "id": "m1",
        "title": "Coding Bootcamp",
        "subtitle": "Learn to code in 2 hours",
        "description": "There will be some experts teaching you how to code",
        "imageUrl": "https://media.licdn.com/dms/image/C5616AQHQgyiC5Wv--w/profile-displaybackgroundimage-shrink_350_1400/0/1608105676401?e=1677715200&v=beta&t=Vb0FVyLu-JRPWW2rh62Aye5B0t1nkXG357kE5lyotCk",
        "address": "221B Baker St, London",
        "contactEmail": "code@test.com",
        "isFavorite": false,
    },
    {
        "id": "m2",
        "title": "Swim Together",
        "subtitle": "Let's learn how to swim",
        "description": "Having fun while teaching and swimming",
        "imageUrl": "https://media.licdn.com/dms/image/C5616AQHQgyiC5Wv--w/profile-displaybackgroundimage-shrink_350_1400/0/1608105676401?e=1677715200&v=beta&t=Vb0FVyLu-JRPWW2rh62Aye5B0t1nkXG357kE5lyotCk",
        "address": "221B Baker St, London",
        "contactEmail": "swim@test.com",
        "isFavorite": false,
    },
]);

const customMeetupsStore = {
    subscribe: meetups.subscribe,
    addMeetup: (meetupData) => {
        const newMeetup = {
            ...meetupData,
            id: Math.random().toString(),
            isFavorite: false,
        };
        meetups.update(items => {
            return [newMeetup, ...items];
        });
    },
    updateMeetup: (id, meetupData) => {
        meetups.update(items => {
            const meetupIndex = items.findIndex(i => i.id === id);
            const updatedMeetup = {...items[meetupIndex], ...meetupData};
            const updatedMeetups = [...items];
            updatedMeetups[meetupIndex] = updatedMeetup;
            return updatedMeetups;
        });
    },
    removeMeetup: (id) => {
        meetups.update(items => {
            return items.filter(i => i.id !== id);
        });
    },
    toggleFavorite: (id) => {
        meetups.update(items => {
            const updatedMeetUp = {...items.find(m => m.id === id)};
            updatedMeetUp.isFavorite = !updatedMeetUp.isFavorite;
            const meetUpIndex = items.findIndex(m => m.id === id);
            const updatedMeetUps = [...items];
            updatedMeetUps[meetUpIndex] = updatedMeetUp;
            return updatedMeetUps;
        })
    },
}

export default customMeetupsStore;
