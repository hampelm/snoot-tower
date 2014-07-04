/*jslint nomen: true */
/*globals require: true */

require.config({
  paths: {
    async: 'lib/async',
    jquery: 'lib/jquery',
    jqueryui: 'lib/jquery-ui',
    moment: 'lib/moment.min',
    text: 'lib/text',
    underscore: 'lib/underscore',
    backbone: 'lib/backbone'
  },

  shim: {
    jqueryui: 'jquery',
    "lib/jquery.overlaps": ["jquery"]
  }
});

require(['jquery', 'jqueryui', 'lib/jquery.overlaps', 'underscore', 'backbone', 'app'],
        function ($, ui, overlaps, _, Backbone, app) {
  'use strict';

  $(document).ready(function () {
    app.initialize();
  });
});
