"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('super-rentals/adapters/application', ['exports', 'emberfire/adapters/firebase'], function (exports, _emberfireAdaptersFirebase) {
  exports['default'] = _emberfireAdaptersFirebase['default'].extend({});
});
define('super-rentals/app', ['exports', 'ember', 'super-rentals/resolver', 'ember-load-initializers', 'super-rentals/config/environment'], function (exports, _ember, _superRentalsResolver, _emberLoadInitializers, _superRentalsConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _superRentalsConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _superRentalsConfigEnvironment['default'].podModulePrefix,
    Resolver: _superRentalsResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _superRentalsConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('super-rentals/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _emberBootstrapComponentsBsAccordion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAccordion['default'];
    }
  });
});
define('super-rentals/components/bs-accordion/item', ['exports', 'ember-bootstrap/components/bs-accordion/item'], function (exports, _emberBootstrapComponentsBsAccordionItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAccordionItem['default'];
    }
  });
});
define('super-rentals/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _emberBootstrapComponentsBsAlert) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAlert['default'];
    }
  });
});
define('super-rentals/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _emberBootstrapComponentsBsButtonGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsButtonGroup['default'];
    }
  });
});
define('super-rentals/components/bs-button-group/button', ['exports', 'ember-bootstrap/components/bs-button-group/button'], function (exports, _emberBootstrapComponentsBsButtonGroupButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsButtonGroupButton['default'];
    }
  });
});
define('super-rentals/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _emberBootstrapComponentsBsButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsButton['default'];
    }
  });
});
define('super-rentals/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _emberBootstrapComponentsBsCollapse) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsCollapse['default'];
    }
  });
});
define('super-rentals/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _emberBootstrapComponentsBsDropdown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdown['default'];
    }
  });
});
define('super-rentals/components/bs-dropdown/button', ['exports', 'ember-bootstrap/components/bs-dropdown/button'], function (exports, _emberBootstrapComponentsBsDropdownButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownButton['default'];
    }
  });
});
define('super-rentals/components/bs-dropdown/menu', ['exports', 'ember-bootstrap/components/bs-dropdown/menu'], function (exports, _emberBootstrapComponentsBsDropdownMenu) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownMenu['default'];
    }
  });
});
define('super-rentals/components/bs-dropdown/menu/divider', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/divider'], function (exports, _emberBootstrapComponentsBsDropdownMenuDivider) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownMenuDivider['default'];
    }
  });
});
define('super-rentals/components/bs-dropdown/menu/item', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/item'], function (exports, _emberBootstrapComponentsBsDropdownMenuItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownMenuItem['default'];
    }
  });
});
define('super-rentals/components/bs-dropdown/toggle', ['exports', 'ember-bootstrap/components/bs-dropdown/toggle'], function (exports, _emberBootstrapComponentsBsDropdownToggle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownToggle['default'];
    }
  });
});
define('super-rentals/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, _emberBootstrapComponentsBsForm) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsForm['default'];
    }
  });
});
define('super-rentals/components/bs-form/element', ['exports', 'ember-bootstrap/components/bs-form/element'], function (exports, _emberBootstrapComponentsBsFormElement) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElement['default'];
    }
  });
});
define('super-rentals/components/bs-form/element/control', ['exports', 'ember-bootstrap/components/bs-form/element/control'], function (exports, _emberBootstrapComponentsBsFormElementControl) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementControl['default'];
    }
  });
});
define('super-rentals/components/bs-form/element/control/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/control/checkbox'], function (exports, _emberBootstrapComponentsBsFormElementControlCheckbox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementControlCheckbox['default'];
    }
  });
});
define('super-rentals/components/bs-form/element/control/input', ['exports', 'ember-bootstrap/components/bs-form/element/control/input'], function (exports, _emberBootstrapComponentsBsFormElementControlInput) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementControlInput['default'];
    }
  });
});
define('super-rentals/components/bs-form/element/control/textarea', ['exports', 'ember-bootstrap/components/bs-form/element/control/textarea'], function (exports, _emberBootstrapComponentsBsFormElementControlTextarea) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementControlTextarea['default'];
    }
  });
});
define('super-rentals/components/bs-form/element/errors', ['exports', 'ember-bootstrap/components/bs-form/element/errors'], function (exports, _emberBootstrapComponentsBsFormElementErrors) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementErrors['default'];
    }
  });
});
define('super-rentals/components/bs-form/element/feedback-icon', ['exports', 'ember-bootstrap/components/bs-form/element/feedback-icon'], function (exports, _emberBootstrapComponentsBsFormElementFeedbackIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementFeedbackIcon['default'];
    }
  });
});
define('super-rentals/components/bs-form/element/label', ['exports', 'ember-bootstrap/components/bs-form/element/label'], function (exports, _emberBootstrapComponentsBsFormElementLabel) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLabel['default'];
    }
  });
});
define('super-rentals/components/bs-form/element/layout/horizontal', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal'], function (exports, _emberBootstrapComponentsBsFormElementLayoutHorizontal) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutHorizontal['default'];
    }
  });
});
define('super-rentals/components/bs-form/element/layout/horizontal/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox'], function (exports, _emberBootstrapComponentsBsFormElementLayoutHorizontalCheckbox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutHorizontalCheckbox['default'];
    }
  });
});
define('super-rentals/components/bs-form/element/layout/inline', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline'], function (exports, _emberBootstrapComponentsBsFormElementLayoutInline) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutInline['default'];
    }
  });
});
define('super-rentals/components/bs-form/element/layout/inline/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline/checkbox'], function (exports, _emberBootstrapComponentsBsFormElementLayoutInlineCheckbox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutInlineCheckbox['default'];
    }
  });
});
define('super-rentals/components/bs-form/element/layout/vertical', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical'], function (exports, _emberBootstrapComponentsBsFormElementLayoutVertical) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutVertical['default'];
    }
  });
});
define('super-rentals/components/bs-form/element/layout/vertical/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical/checkbox'], function (exports, _emberBootstrapComponentsBsFormElementLayoutVerticalCheckbox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutVerticalCheckbox['default'];
    }
  });
});
define('super-rentals/components/bs-form/group', ['exports', 'ember-bootstrap/components/bs-form/group'], function (exports, _emberBootstrapComponentsBsFormGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormGroup['default'];
    }
  });
});
define('super-rentals/components/bs-modal-simple', ['exports', 'ember-bootstrap/components/bs-modal-simple'], function (exports, _emberBootstrapComponentsBsModalSimple) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalSimple['default'];
    }
  });
});
define('super-rentals/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _emberBootstrapComponentsBsModal) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModal['default'];
    }
  });
});
define('super-rentals/components/bs-modal/body', ['exports', 'ember-bootstrap/components/bs-modal/body'], function (exports, _emberBootstrapComponentsBsModalBody) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalBody['default'];
    }
  });
});
define('super-rentals/components/bs-modal/dialog', ['exports', 'ember-bootstrap/components/bs-modal/dialog'], function (exports, _emberBootstrapComponentsBsModalDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalDialog['default'];
    }
  });
});
define('super-rentals/components/bs-modal/footer', ['exports', 'ember-bootstrap/components/bs-modal/footer'], function (exports, _emberBootstrapComponentsBsModalFooter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalFooter['default'];
    }
  });
});
define('super-rentals/components/bs-modal/header', ['exports', 'ember-bootstrap/components/bs-modal/header'], function (exports, _emberBootstrapComponentsBsModalHeader) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalHeader['default'];
    }
  });
});
define('super-rentals/components/bs-modal/header/close', ['exports', 'ember-bootstrap/components/bs-modal/header/close'], function (exports, _emberBootstrapComponentsBsModalHeaderClose) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalHeaderClose['default'];
    }
  });
});
define('super-rentals/components/bs-modal/header/title', ['exports', 'ember-bootstrap/components/bs-modal/header/title'], function (exports, _emberBootstrapComponentsBsModalHeaderTitle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalHeaderTitle['default'];
    }
  });
});
define('super-rentals/components/bs-nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _emberBootstrapComponentsBsNav) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNav['default'];
    }
  });
});
define('super-rentals/components/bs-nav/item', ['exports', 'ember-bootstrap/components/bs-nav/item'], function (exports, _emberBootstrapComponentsBsNavItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavItem['default'];
    }
  });
});
define('super-rentals/components/bs-nav/link-to', ['exports', 'ember-bootstrap/components/bs-nav/link-to'], function (exports, _emberBootstrapComponentsBsNavLinkTo) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavLinkTo['default'];
    }
  });
});
define('super-rentals/components/bs-navbar', ['exports', 'ember-bootstrap/components/bs-navbar'], function (exports, _emberBootstrapComponentsBsNavbar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbar['default'];
    }
  });
});
define('super-rentals/components/bs-navbar/content', ['exports', 'ember-bootstrap/components/bs-navbar/content'], function (exports, _emberBootstrapComponentsBsNavbarContent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbarContent['default'];
    }
  });
});
define('super-rentals/components/bs-navbar/nav', ['exports', 'ember-bootstrap/components/bs-navbar/nav'], function (exports, _emberBootstrapComponentsBsNavbarNav) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbarNav['default'];
    }
  });
});
define('super-rentals/components/bs-navbar/toggle', ['exports', 'ember-bootstrap/components/bs-navbar/toggle'], function (exports, _emberBootstrapComponentsBsNavbarToggle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbarToggle['default'];
    }
  });
});
define('super-rentals/components/bs-popover', ['exports', 'ember-bootstrap/components/bs-popover'], function (exports, _emberBootstrapComponentsBsPopover) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsPopover['default'];
    }
  });
});
define('super-rentals/components/bs-popover/element', ['exports', 'ember-bootstrap/components/bs-popover/element'], function (exports, _emberBootstrapComponentsBsPopoverElement) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsPopoverElement['default'];
    }
  });
});
define('super-rentals/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _emberBootstrapComponentsBsProgress) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsProgress['default'];
    }
  });
});
define('super-rentals/components/bs-progress/bar', ['exports', 'ember-bootstrap/components/bs-progress/bar'], function (exports, _emberBootstrapComponentsBsProgressBar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsProgressBar['default'];
    }
  });
});
define('super-rentals/components/bs-tab', ['exports', 'ember-bootstrap/components/bs-tab'], function (exports, _emberBootstrapComponentsBsTab) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTab['default'];
    }
  });
});
define('super-rentals/components/bs-tab/pane', ['exports', 'ember-bootstrap/components/bs-tab/pane'], function (exports, _emberBootstrapComponentsBsTabPane) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTabPane['default'];
    }
  });
});
define('super-rentals/components/bs-tooltip', ['exports', 'ember-bootstrap/components/bs-tooltip'], function (exports, _emberBootstrapComponentsBsTooltip) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTooltip['default'];
    }
  });
});
define('super-rentals/components/bs-tooltip/element', ['exports', 'ember-bootstrap/components/bs-tooltip/element'], function (exports, _emberBootstrapComponentsBsTooltipElement) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTooltipElement['default'];
    }
  });
});
define('super-rentals/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormholeComponentsEmberWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWormholeComponentsEmberWormhole['default'];
    }
  });
});
define('super-rentals/components/new-rental', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    addNewRental: false,
    actions: {
      rentalFormShow: function rentalFormShow() {
        this.set('addNewRental', true);
      },

      saveRental1: function saveRental1() {
        var params = {
          owner: this.get('owner'),
          city: this.get('city'),
          type: this.get('type'),
          image: this.get('image'),
          bedrooms: this.get('bedrooms')
        };
        this.set('addNewRental', false);
        this.sendAction('saveRental2', params);
      }
    }
  });
});
define('super-rentals/components/new-review', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    createNewReview: false,
    actions: {
      reviewFormShow: function reviewFormShow() {
        this.set('createNewReview', true);
      },

      saveNewReview: function saveNewReview() {
        var params = {
          author: this.get('author'),
          rating: this.get('rating'),
          content: this.get('content'),
          rental: this.get('rental')
        };
        this.set('createNewReview', false);
        this.sendAction('saveNewReview', params);
      }
    }

  });
});
define('super-rentals/components/rental-detail', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    actions: {
      'delete': function _delete(rental) {
        if (confirm('Are you sure you want to delete this rental?')) {
          this.sendAction('destroyRental', rental);
        }
      }
    }
  });
});
define('super-rentals/components/rental-tile', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    isImageShowing: false,
    actions: {
      imageShow: function imageShow() {
        this.set('isImageShowing', true);
      },
      imageHide: function imageHide() {
        this.set('isImageShowing', false);
      },
      'delete': function _delete(rental) {
        if (confirm('Are you sure you want to delete this rental?')) {
          this.sendAction('destroyRental', rental);
        }
      }
    }
  });
});
define('super-rentals/components/review-tile', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('super-rentals/components/update-rental', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    updateRentalForm: false,
    actions: {
      updateRentalForm: function updateRentalForm() {
        this.set('updateRentalForm', true);
      },
      update: function update(rental) {
        var params = {
          owner: this.get('owner'),
          city: this.get('city'),
          type: this.get('type'),
          image: this.get('image'),
          bedrooms: this.get('bedrooms')
        };
        this.set('updateRentalForm', false);
        this.sendAction('update', rental, params);
      }
    }
  });
});
define('super-rentals/helpers/app-version', ['exports', 'ember', 'super-rentals/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _superRentalsConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _superRentalsConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('super-rentals/helpers/bs-contains', ['exports', 'ember-bootstrap/helpers/bs-contains'], function (exports, _emberBootstrapHelpersBsContains) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsContains['default'];
    }
  });
  Object.defineProperty(exports, 'bsContains', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsContains.bsContains;
    }
  });
});
define('super-rentals/helpers/bs-eq', ['exports', 'ember-bootstrap/helpers/bs-eq'], function (exports, _emberBootstrapHelpersBsEq) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsEq['default'];
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsEq.eq;
    }
  });
});
define('super-rentals/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('super-rentals/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('super-rentals/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'super-rentals/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _superRentalsConfigEnvironment) {
  var _config$APP = _superRentalsConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('super-rentals/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('super-rentals/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('super-rentals/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('super-rentals/initializers/emberfire', ['exports', 'emberfire/initializers/emberfire'], function (exports, _emberfireInitializersEmberfire) {
  exports['default'] = _emberfireInitializersEmberfire['default'];
});
define('super-rentals/initializers/export-application-global', ['exports', 'ember', 'super-rentals/config/environment'], function (exports, _ember, _superRentalsConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_superRentalsConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _superRentalsConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_superRentalsConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('super-rentals/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('super-rentals/initializers/load-bootstrap-config', ['exports', 'super-rentals/config/environment', 'ember-bootstrap/config'], function (exports, _superRentalsConfigEnvironment, _emberBootstrapConfig) {
  exports.initialize = initialize;

  function initialize() /* container, application */{
    _emberBootstrapConfig['default'].load(_superRentalsConfigEnvironment['default']['ember-bootstrap'] || {});
  }

  exports['default'] = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});
define('super-rentals/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('super-rentals/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("super-rentals/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('super-rentals/models/rental', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    owner: _emberData['default'].attr(),
    city: _emberData['default'].attr(),
    type: _emberData['default'].attr(),
    bedrooms: _emberData['default'].attr(),
    image: _emberData['default'].attr(),
    reviews: _emberData['default'].hasMany('review', { async: true })
  });
});
define('super-rentals/models/review', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    author: _emberData['default'].attr(),
    rating: _emberData['default'].attr(),
    content: _emberData['default'].attr(),
    rental: _emberData['default'].belongsTo('rental', { async: true })
  });
});
define('super-rentals/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('super-rentals/router', ['exports', 'ember', 'super-rentals/config/environment'], function (exports, _ember, _superRentalsConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _superRentalsConfigEnvironment['default'].locationType,
    rootURL: _superRentalsConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('about');
    this.route('contact');
    this.route('rental', { path: '/rental/:rental_id' });
  });

  exports['default'] = Router;
});
define('super-rentals/routes/about', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('super-rentals/routes/contact', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('super-rentals/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return _ember['default'].RSVP.hash({
        rentals: this.store.findAll('rental'),
        reviews: this.store.findAll('review')
      });
    },

    actions: {
      saveRental3: function saveRental3(params) {
        var newRental = this.store.createRecord('rental', params);
        newRental.save();
        this.transitionTo('index');
      },

      destroyRental: function destroyRental(rental) {
        rental.destroyRecord();
        this.transitionTo('index');
      }
    }
  });
});
define('super-rentals/routes/rental', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      return this.store.findRecord('rental', params.rental_id);
    },

    actions: {

      saveNewReview: function saveNewReview(params) {
        console.log('youre saving again');
        var newReview = this.store.createRecord('review', params);
        var rental = params.rental;
        rental.get('reviews').addObject(newReview);
        newReview.save().then(function () {
          return rental.save();
        });
        this.transitionTo('rental', rental);
      },

      update: function update(rental, params) {
        Object.keys(params).forEach(function (key) {
          if (params[key] !== undefined) {
            rental.set(key, params[key]);
          }
        });
        rental.save();
        this.transitionTo('index');
      }
    }
  });
});
define('super-rentals/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('super-rentals/services/firebase-app', ['exports', 'emberfire/services/firebase-app'], function (exports, _emberfireServicesFirebaseApp) {
  exports['default'] = _emberfireServicesFirebaseApp['default'];
});
define('super-rentals/services/firebase', ['exports', 'emberfire/services/firebase'], function (exports, _emberfireServicesFirebase) {
  exports['default'] = _emberfireServicesFirebase['default'];
});
define("super-rentals/templates/about", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "tn9CQF/D", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"About Super Rentals\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"The Super Rentals website was created to explore the wonderful world of Ember.js. This project allows us to imagine traveling the world while simultaneously traversing the pathways of the Ember framework!\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"link-to\"],[\"contact\"],null,0],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Contact Us\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "super-rentals/templates/about.hbs" } });
});
define("super-rentals/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "p5zb35NF", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"nav\",[]],[\"static-attr\",\"class\",\"navbar navbar-default\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container-fluid\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"comment\",\" Brand and toggle get grouped for better mobile display \"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"navbar-header\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"navbar-toggle collapsed\"],[\"static-attr\",\"data-toggle\",\"collapse\"],[\"static-attr\",\"data-target\",\"#bs-example-navbar-collapse-1\"],[\"static-attr\",\"aria-expanded\",\"false\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"sr-only\"],[\"flush-element\"],[\"text\",\"Toggle navigation\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"block\",[\"link-to\"],[\"index\"],[[\"class\"],[\"navbar-brand\"]],2],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"comment\",\" Collect the nav links, forms, and other content for toggling \"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"collapse navbar-collapse\"],[\"static-attr\",\"id\",\"bs-example-navbar-collapse-1\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"nav navbar-nav navbar-right\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"about\"],null,1],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"contact\"],null,0],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"comment\",\" /.navbar-collapse \"],[\"text\",\"\\n  \"],[\"close-element\"],[\"comment\",\" /.container-fluid \"],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Contact Us\"]],\"locals\":[]},{\"statements\":[[\"text\",\"About\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Super Rentals\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "super-rentals/templates/application.hbs" } });
});
define("super-rentals/templates/components/new-rental", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "6wvD9w+c", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"addNewRental\"]]],null,1,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-info\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"rentalFormShow\"]],[\"flush-element\"],[\"text\",\"New Rental\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"New Rental\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"form\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"owner\"],[\"flush-element\"],[\"text\",\"Owner\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"id\"],[[\"get\",[\"owner\"]],\"owner\"]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"type\"],[\"flush-element\"],[\"text\",\"Type\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"id\"],[[\"get\",[\"type\"]],\"type\"]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"city\"],[\"flush-element\"],[\"text\",\"City\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"is\"],[[\"get\",[\"city\"]],\"city\"]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"bedrooms\"],[\"flush-element\"],[\"text\",\"Number of Bedrooms\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"is\"],[[\"get\",[\"bedrooms\"]],\"id\"]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"image\"],[\"flush-element\"],[\"text\",\"Image URL\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"id\"],[[\"get\",[\"image\"]],\"image\"]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"button\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"saveRental1\"]],[\"flush-element\"],[\"text\",\"Save\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "super-rentals/templates/components/new-rental.hbs" } });
});
define("super-rentals/templates/components/new-review", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "MMkNAOAV", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"createNewReview\"]]],null,1,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"btn btn-info\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"reviewFormShow\"]],[\"flush-element\"],[\"text\",\"Create New Review\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Create New Review\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"form\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"input\"],null,[[\"class\",\"value\",\"id\",\"placeholder\"],[\"form-control\",[\"get\",[\"author\"]],\"author\",\"author\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"input\"],null,[[\"class\",\"value\",\"id\",\"placeholder\"],[\"form-control\",[\"get\",[\"rating\"]],\"rating\",\"rating\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"textarea\"],null,[[\"row\",\"cols\",\"class\",\"value\",\"id\",\"placeholder\"],[\"20\",\"100\",\"form-control\",[\"get\",[\"content\"]],\"content\",\"content\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"class\",\"btn btn-info\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"saveNewReview\"]],[\"flush-element\"],[\"text\",\"Submit\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "super-rentals/templates/components/new-review.hbs" } });
});
define("super-rentals/templates/components/rental-detail", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Tj4luqup", "block": "{\"statements\":[[\"text\",\"Located in \"],[\"append\",[\"unknown\",[\"rental\",\"city\"]],false],[\"text\",\", this \"],[\"append\",[\"unknown\",[\"rental\",\"bedrooms\"]],false],[\"text\",\" bedroom \"],[\"append\",[\"unknown\",[\"rental\",\"type\"]],false],[\"text\",\" is\\navailable by arrangement through \"],[\"append\",[\"unknown\",[\"rental\",\"owner\"]],false],[\"text\",\".\\n\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"unknown\",[\"rental\",\"image\"]],null],[\"dynamic-attr\",\"alt\",[\"unknown\",[\"rental\",\"type\"]],null],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Reviews\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"rental\",\"reviews\"]]],null,0],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"delete\",[\"get\",[\"rental\"]]]],[\"flush-element\"],[\"text\",\"Delete\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"append\",[\"helper\",[\"review-tile\"],null,[[\"review\"],[[\"get\",[\"review\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[\"review\"]}],\"hasPartials\":false}", "meta": { "moduleName": "super-rentals/templates/components/rental-detail.hbs" } });
});
define("super-rentals/templates/components/rental-tile", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "BvfMAp0x", "block": "{\"statements\":[[\"open-element\",\"h5\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"block\",[\"link-to\"],[\"rental\",[\"get\",[\"rental\",\"id\"]]],null,2],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"isImageShowing\"]]],null,1,0],[\"text\",\"  \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-sm btn-danger\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"delete\",[\"get\",[\"rental\"]]]],[\"flush-element\"],[\"text\",\"X\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-info\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"imageShow\"]],[\"flush-element\"],[\"text\",\"Image\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"unknown\",[\"rental\",\"image\"]],null],[\"dynamic-attr\",\"alt\",[\"unknown\",[\"rental\",\"type\"]],null],[\"modifier\",[\"action\"],[[\"get\",[null]],\"imageHide\"]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"append\",[\"unknown\",[\"rental\",\"owner\"]],false],[\"text\",\"'s \"],[\"append\",[\"unknown\",[\"rental\",\"type\"]],false],[\"text\",\" in \"],[\"append\",[\"unknown\",[\"rental\",\"city\"]],false],[\"text\",\" \"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "super-rentals/templates/components/rental-tile.hbs" } });
});
define("super-rentals/templates/components/review-tile", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "HVAQUNEh", "block": "{\"statements\":[[\"open-element\",\"li\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"review\",\"rating\"]],false],[\"text\",\" - \"],[\"append\",[\"unknown\",[\"review\",\"content\"]],false],[\"text\",\" - by \"],[\"append\",[\"unknown\",[\"review\",\"author\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "super-rentals/templates/components/review-tile.hbs" } });
});
define("super-rentals/templates/components/update-rental", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "NerddBmI", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"updateRentalForm\"]]],null,1,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-info\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"updateRentalForm\"]],[\"flush-element\"],[\"text\",\"Update\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"text\",\"Update \"],[\"append\",[\"unknown\",[\"rental\",\"owner\"]],false],[\"text\",\"'s \"],[\"append\",[\"unknown\",[\"rental\",\"type\"]],false],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"form\",[]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"owner\"],[\"flush-element\"],[\"text\",\"Owner\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"id\",\"placeholder\"],[[\"get\",[\"owner\"]],\"owner\",[\"get\",[\"rental\",\"owner\"]]]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"type\"],[\"flush-element\"],[\"text\",\"Type\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"id\",\"placeholder\"],[[\"get\",[\"type\"]],\"type\",[\"get\",[\"rental\",\"type\"]]]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"city\"],[\"flush-element\"],[\"text\",\"City\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"id\",\"placeholder\"],[[\"get\",[\"city\"]],\"city\",[\"get\",[\"rental\",\"city\"]]]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"bedrooms\"],[\"flush-element\"],[\"text\",\"Bedrooms\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"id\",\"placeholder\"],[[\"get\",[\"bedrooms\"]],\"bedrooms\",[\"get\",[\"rental\",\"bedrooms\"]]]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"image\"],[\"flush-element\"],[\"text\",\"Image URL\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"id\",\"placeholder\"],[[\"get\",[\"image\"]],\"image\",[\"get\",[\"rental\",\"image\"]]]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\\n      \"],[\"open-element\",\"button\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"update\",[\"get\",[\"rental\"]]]],[\"flush-element\"],[\"text\",\"Save\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "super-rentals/templates/components/update-rental.hbs" } });
});
define("super-rentals/templates/contact", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "YO8JLDgD", "block": "{\"statements\":[[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Super Rentals Representatives would love to help you choose a destination or answer any burning questions you may have.\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Contact us today!\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n  Super Rentals Headquarters\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  1212 Test Address Avenue\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  TestyMcTestington, OR 97233\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"(503) 555-1212\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"superrentalsrep@superrentals.com\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"link-to\"],[\"about\"],null,0],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"About\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "super-rentals/templates/contact.hbs" } });
});
define("super-rentals/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "1rwdwaDD", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Welcome to Super Rentals\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"We hope you find exactly what you're looking for in a place to stay.\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"rentals\"]]],null,1],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"helper\",[\"new-rental\"],null,[[\"saveRental2\"],[\"saveRental3\"]]],false],[\"text\",\"\\n\\n\"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"All Reviews\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"reviews\"]]],null,0],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"bold\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"review\",\"rental\"]],false],[\"close-element\"],[\"append\",[\"unknown\",[\"review\",\"rating\"]],false],[\"text\",\" - \"],[\"append\",[\"unknown\",[\"review\",\"content\"]],false],[\"text\",\" - by \"],[\"append\",[\"unknown\",[\"review\",\"author\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"review\"]},{\"statements\":[[\"text\",\"    \"],[\"append\",[\"helper\",[\"rental-tile\"],null,[[\"rental\",\"destroyRental\"],[[\"get\",[\"rental\"]],\"destroyRental\"]]],false],[\"text\",\"\\n\"]],\"locals\":[\"rental\"]}],\"hasPartials\":false}", "meta": { "moduleName": "super-rentals/templates/index.hbs" } });
});
define("super-rentals/templates/rental", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "mqeSHpC5", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"More information about \"],[\"append\",[\"unknown\",[\"model\",\"owner\"]],false],[\"text\",\"'s \"],[\"append\",[\"unknown\",[\"model\",\"type\"]],false],[\"text\",\":\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"helper\",[\"update-rental\"],null,[[\"rental\",\"update\"],[[\"get\",[\"model\"]],\"update\"]]],false],[\"text\",\"\\n\\n\"],[\"append\",[\"helper\",[\"rental-detail\"],null,[[\"rental\",\"destroyRental\"],[[\"get\",[\"model\"]],\"destroyRental\"]]],false],[\"text\",\"\\n\\n\"],[\"append\",[\"helper\",[\"new-review\"],null,[[\"saveNewReview\",\"rental\"],[\"saveNewReview\",[\"get\",[\"model\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "super-rentals/templates/rental.hbs" } });
});
define('super-rentals/torii-providers/firebase', ['exports', 'emberfire/torii-providers/firebase'], function (exports, _emberfireToriiProvidersFirebase) {
  exports['default'] = _emberfireToriiProvidersFirebase['default'];
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('super-rentals/config/environment', ['ember'], function(Ember) {
  var prefix = 'super-rentals';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("super-rentals/app")["default"].create({"name":"super-rentals","version":"0.0.0+0b2d847b"});
}

/* jshint ignore:end */
//# sourceMappingURL=super-rentals.map
