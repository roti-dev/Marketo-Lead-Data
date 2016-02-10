var _         = require('underscore');
var cookies   = require('js-cookie');

var marketoLeadData = {
  init: function() {
    (function(){
      var currentEnv = window.location.host;

      function getLeadMessages (e) {

        // If there no relevant messages disregard
        if (_.isUndefined(e.data)) return;
        var mktoLeadData = JSON.parse(e.data);

        // Check for some identifying information
        if (_.isUndefined(mktoLeadData.email)) return;
        if (_.isEmpty(mktoLeadData.email)) return;

        // If there's data set it as cookies
        Object.keys(mktoLeadData).map(function(field) {
          if (_.isEmpty(mktoLeadData[field])) return;
          setCookie('_mkto_lead_' + field, mktoLeadData[field]);
        });

        // Remove Lead Data Container
        cookies.set('_mkto_stored_info', 'true', { expires: 1 });
        leadContainer.remove();
        window.removeEventListener("message", getLeadMessages);
      }

      if ( !cookies.get('_mkto_trk') || cookies.get('_mkto_stored_info')) return;
      $('body').append('<iframe src="[PATH TO Landing Page]"></iframe>');

      // Listen for messages from landing page
      window.addEventListener("message", getLeadMessages);
    }());
  }
};

module.exports = marketoLeadData;
