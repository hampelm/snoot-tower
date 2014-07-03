/*jslint nomen: true */
/*globals require: true */

require.config({
  paths: {
    async: 'lib/async',
    backbone: 'lib/backbone',
    jquery: 'lib/jquery',
    jqueryui: 'lib/jquery-ui',
    moment: 'lib/moment.min',
    text: 'lib/text',
    underscore: 'lib/underscore'
  },

  shim: {
    jqueryui: 'jquery'
  }
});

require(['jquery', 'jqueryui', 'underscore', 'backbone', 'app'],
        function ($, ui, _, Backbone, app) {
  'use strict';

  $(document).ready(function () {
    app.initialize();
  });
});
