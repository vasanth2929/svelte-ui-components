// Import Core Modules
import {writable} from 'svelte/store';

// create store
export let store = writable([]);

// function to generate Id number.
let getRandomId = () => Math.floor(Math.random() * 2000 ); 

// function to create new alert.
export let createAlert = (item)=>{
    store.update((value)=>{
        return [{...item,id:getRandomId()},...value]
    });
}

// function to remove alert
export let removeAlert = (id)=>{
    store.update(value=>{
        return value.filter(item=>item.id !== id);
    });
}