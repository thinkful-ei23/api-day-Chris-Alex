/* global $ */
'use strict';

const api = (function() {

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Chris-Alex';

  const getItems = function(callback) {
    $.getJSON(`${BASE_URL}/items`, callback);
  };

  const createItem = function(name, callback) {
    const newItem = {name};
    const data = JSON.stringify(newItem);
    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'POST',
      contentType: 'application/json',
      data: data,
      success: callback
    });
  };

  return {
    getItems,
    createItem
  };

}());