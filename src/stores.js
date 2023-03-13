import { writable } from 'svelte/store';

export const count = writable(0);

export const dataRoute= writable([
    {
        id: 0,
        title:"Home",
        path: "/",
        content: "Home page",
    },
]);