

`use strict`;

import { fetchData, url } from "./api.js";
import * as module from "./module.js";


/**
 * Add event listener on multiple elements
 * @param {NodeList} elements elements node array
 * @param {string} eventType event type > click, mouseover
 * @param {Function} callback callback function 
 */
const addEventOnElements = function (elements, eventType, callback) {
    for (const element of elements) element.addEventListener(eventType, callback);
}

const searchView = document.querySelector("[data-search-view]");
const searchTogglers = document.querySelector("[data-search-toggler]");

const toggleSearch = () => searchView.classList.toggle("active");
addEventOnElements(searchTogglers, "click", toggleSearch);