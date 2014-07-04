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

  App.YGRID = 60;
  App.XGRID = 10;
  App.FLOORS = 12;

  function helper() {
    return '<div>Hey</div>';
  }

  function createShaft($elt) {
    console.log("Creating shaft", $elt);
    $elt.resizable({
      handles: 'n, s',
      grid: [48, App.YGRID + App.FLOORS]
    });

    var $car = $('<div class="car"></div>');
    $elt.append($car);
  }

  function handleDrop(event, ui) {
    console.log(event, ui);
    var $canvas = $(event.target);
    var $elt = ui.draggable.clone();

    // calculate where to snap to
    var left = Math.round(ui.position.left / 10) * 10;

    // add the elt
    $canvas.append($elt);
    $elt.offset({left: left});

    // we can't put restaurants on top of each other
    var overlaps = $elt.overlaps('.tenant');

    // TODO -- an elevator shaft class should handle this
    if($elt.hasClass('shaft')) {
      createShaft($elt);
    }

    if(overlaps.length > 1) {
      $elt.remove();
    }
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

    $('.floor').droppable({
      drop: handleDrop
    });

    $( "#resizable" ).resizable();
  };

  return App;
});

