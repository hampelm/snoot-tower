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

    App.GRID = 60;

  function helper() {
    return '<div>Hey</div>';
  }

  function handleDrop(event, ui) {
    console.log(event, ui);
    var $canvas = $(event.target);
    var $elt = ui.draggable.clone();
    $canvas.append($elt);
    $elt.offset({left: ui.position.left });
    $('.shaft').resizable({
      grid: App.GRID
    });
  }

  App.initialize = function() {
    console.log("Initalizing app");
    $('.restaurant').draggable({
      containment: 'document',
      cursor: 'move',
      helper: 'clone'
    });

    $('.shaft').draggable({
      containment: 'document',
      cursor: 'move',
      helper: 'clone'
    });

    $('.shaft').resizable({
      grid: App.GRID
    });

    $('.floor').droppable({
      drop: handleDrop
    });
  };

  return App;
});

