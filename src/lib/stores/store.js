import {writable} from 'svelte/store'
import { Modules } from './modules'

export const AllTabs = writable(Modules);
export const CurrentTab = writable([]);
export const OpenedTabs = writable([]);

let tabs =[];

export const addTab = (value) => {

	CurrentTab.set (value);

	tabs.push(value);

	OpenedTabs.set(value);
};

export const removeTab = (value) => {

 CurrentTab.set (value);

 tabs.slice(1);

}

