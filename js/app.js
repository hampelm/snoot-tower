/*jslint nomen: true */
/*globals define: true */


define([
  'jquery',
  'jqueryui',
  'underscore',
  'backbone',
  'lib/leaflet/leaflet',
  'settings'
],

function($, _, Backbone, L, settings) {
  'use strict';

  var App = {};

  function helper() {
    return '<div>Hey</div>';
  }

  function handleDrop(event, ui) {
    var $canvas = $(event.target);
    var $elt = ui.draggable.clone();
    $elt.html('Restaurant');
    $canvas.append($elt);
  }

  App.initialize = function() {
    console.log("Initalizing app");
    $('.draggable').draggable({
      containment: 'document',
      cursor: 'move',
      helper: 'clone'
    });

    $('.floor').droppable({
      drop: handleDrop,
      accept: '.draggable'
    });
  };

  return App;
});

