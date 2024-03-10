var mi_version = '8.25.0';
var mi_track_user = !0;
var mi_no_track_reason = '';
var MonsterInsightsDefaultLocations = {
    "page_location": "https:\/\/bananakingdom.com\/"
};
if (typeof MonsterInsightsPrivacyGuardFilter === 'function') {
    var MonsterInsightsLocations = (typeof MonsterInsightsExcludeQuery === 'object') ? MonsterInsightsPrivacyGuardFilter(MonsterInsightsExcludeQuery) : MonsterInsightsPrivacyGuardFilter(MonsterInsightsDefaultLocations)
} else {
    var MonsterInsightsLocations = (typeof MonsterInsightsExcludeQuery === 'object') ? MonsterInsightsExcludeQuery : MonsterInsightsDefaultLocations
}
var disableStrs = ['ga-disable-G-QVY52ER5WW', ];

function __gtagTrackerIsOptedOut() {
    for (var index = 0; index < disableStrs.length; index++) {
        if (document.cookie.indexOf(disableStrs[index] + '=true') > -1) {
            return !0
        }
    }
    return !1
}
if (__gtagTrackerIsOptedOut()) {
    for (var index = 0; index < disableStrs.length; index++) {
        window[disableStrs[index]] = !0
    }
}

function __gtagTrackerOptout() {
    for (var index = 0; index < disableStrs.length; index++) {
        document.cookie = disableStrs[index] + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
        window[disableStrs[index]] = !0
    }
}
if ('undefined' === typeof gaOptout) {
    function gaOptout() {
        __gtagTrackerOptout()
    }
}
window.dataLayer = window.dataLayer || [];
window.MonsterInsightsDualTracker = {
    helpers: {},
    trackers: {},
};
if (mi_track_user) {
    function __gtagDataLayer() {
        dataLayer.push(arguments)
    }

    function __gtagTracker(type, name, parameters) {
        if (!parameters) {
            parameters = {}
        }
        if (parameters.send_to) {
            __gtagDataLayer.apply(null, arguments);
            return
        }
        if (type === 'event') {
            parameters.send_to = monsterinsights_frontend.v4_id;
            var hookName = name;
            if (typeof parameters.event_category !== 'undefined') {
                hookName = parameters.event_category + ':' + name
            }
            if (typeof MonsterInsightsDualTracker.trackers[hookName] !== 'undefined') {
                MonsterInsightsDualTracker.trackers[hookName](parameters)
            } else {
                __gtagDataLayer('event', name, parameters)
            }
        } else {
            __gtagDataLayer.apply(null, arguments)
        }
    }
    __gtagTracker('js', new Date());
    __gtagTracker('set', {
        'developer_id.dZGIzZG': !0,
    });
    if (MonsterInsightsLocations.page_location) {
        __gtagTracker('set', MonsterInsightsLocations)
    }
    __gtagTracker('config', 'G-QVY52ER5WW', {
        "forceSSL": "true",
        "link_attribution": "true"
    });
    window.gtag = __gtagTracker;
    (function() {
        var noopfn = function() {
            return null
        };
        var newtracker = function() {
            return new Tracker()
        };
        var Tracker = function() {
            return null
        };
        var p = Tracker.prototype;
        p.get = noopfn;
        p.set = noopfn;
        p.send = function() {
            var args = Array.prototype.slice.call(arguments);
            args.unshift('send');
            __gaTracker.apply(null, args)
        };
        var __gaTracker = function() {
            var len = arguments.length;
            if (len === 0) {
                return
            }
            var f = arguments[len - 1];
            if (typeof f !== 'object' || f === null || typeof f.hitCallback !== 'function') {
                if ('send' === arguments[0]) {
                    var hitConverted, hitObject = !1,
                        action;
                    if ('event' === arguments[1]) {
                        if ('undefined' !== typeof arguments[3]) {
                            hitObject = {
                                'eventAction': arguments[3],
                                'eventCategory': arguments[2],
                                'eventLabel': arguments[4],
                                'value': arguments[5] ? arguments[5] : 1,
                            }
                        }
                    }
                    if ('pageview' === arguments[1]) {
                        if ('undefined' !== typeof arguments[2]) {
                            hitObject = {
                                'eventAction': 'page_view',
                                'page_path': arguments[2],
                            }
                        }
                    }
                    if (typeof arguments[2] === 'object') {
                        hitObject = arguments[2]
                    }
                    if (typeof arguments[5] === 'object') {
                        Object.assign(hitObject, arguments[5])
                    }
                    if ('undefined' !== typeof arguments[1].hitType) {
                        hitObject = arguments[1];
                        if ('pageview' === hitObject.hitType) {
                            hitObject.eventAction = 'page_view'
                        }
                    }
                    if (hitObject) {
                        action = 'timing' === arguments[1].hitType ? 'timing_complete' : hitObject.eventAction;
                        hitConverted = mapArgs(hitObject);
                        __gtagTracker('event', action, hitConverted)
                    }
                }
                return
            }

            function mapArgs(args) {
                var arg, hit = {};
                var gaMap = {
                    'eventCategory': 'event_category',
                    'eventAction': 'event_action',
                    'eventLabel': 'event_label',
                    'eventValue': 'event_value',
                    'nonInteraction': 'non_interaction',
                    'timingCategory': 'event_category',
                    'timingVar': 'name',
                    'timingValue': 'value',
                    'timingLabel': 'event_label',
                    'page': 'page_path',
                    'location': 'page_location',
                    'title': 'page_title',
                    'referrer': 'page_referrer',
                };
                for (arg in args) {
                    if (!(!args.hasOwnProperty(arg) || !gaMap.hasOwnProperty(arg))) {
                        hit[gaMap[arg]] = args[arg]
                    } else {
                        hit[arg] = args[arg]
                    }
                }
                return hit
            }
            try {
                f.hitCallback()
            } catch (ex) {}
        };
        __gaTracker.create = newtracker;
        __gaTracker.getByName = newtracker;
        __gaTracker.getAll = function() {
            return []
        };
        __gaTracker.remove = noopfn;
        __gaTracker.loaded = !0;
        window.__gaTracker = __gaTracker
    })()
} else {
    console.log("");
    (function() {
        function __gtagTracker() {
            return null
        }
        window.__gtagTracker = __gtagTracker;
        window.gtag = __gtagTracker
    })()
}