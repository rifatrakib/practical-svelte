import { writable } from "svelte/store";

const meetups = writable([]);

const customMeetupsStore = {
    subscribe: meetups.subscribe,
    setMeetups: (meetupArray) => {
        meetups.set(meetupArray);
    },
    addMeetup: (meetupData) => {
        const newMeetup = {
            ...meetupData,
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
