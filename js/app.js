/*jslint nomen: true */
/*globals define: true */


define([
  'jquery',
  'underscore',
  'backbone',
  'lib/leaflet/leaflet',
  'settings'
],

function($, _, Backbone, L, settings) {
  'use strict';

  // Here's the dashboard app:
  // So fancy!
  var App = {};

  // Kick off the LocalData app
  App.initialize = function() {
    console.log("Initalizing app");

    this.map = new L.map('map', {
      zoom: 15,
      center: [37.77585785035733, -122.41362811351655]
    });
    L.tileLayer(settings.baseLayer).addTo(this.map);
  };

  return App;
});

