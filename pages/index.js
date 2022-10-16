<!doctype html><html lang="en"><head><meta charset="utf-8"/><title>Netlify App</title><meta name="viewport" content="width=device-width,initial-scale=1"/><meta name="theme-color" content="#ffffff"/><meta name="google-site-verification" content="G4JqDTXMHpDyWoqIRwgw8PBqg-AncXqtdkHehcOR7kc"/><link rel="preconnect" href="https://api.commandbar.com" crossorigin/><link rel="preconnect" href="https://screenshot-proxy.netlify.app" crossorigin/><link rel="apple-touch-icon" sizes="180x180" href="https://www.netlify.com/v3/static/favicon/apple-touch-icon.png"/><link rel="icon" type="image/x-icon" href="/favicon.ico"/><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/><link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png"/><link href="/style/app.css" rel="stylesheet"/></head><body><svg style="bottom: 0; position: absolute; z-index: -1" aria-hidden="true"><defs><radialGradient id="netlify-logo-gradient" cx="0%" cy="0%" r="100%" fx="0%" fy="0%"><stop offset="0%" stop-color="#20C6B7"/><stop offset="100%" stop-color="#4D9ABF"/></radialGradient><path id="netlify-logomark" d="m297 88-8 50c3 1 5 2 7 5l39-17-38-38zm-34 69c-.5-2-.5-2.9 0-5l-58-25c-4 7-14 11-22 9l-49 76 129-55zm-59-54c2 2 4 7 4 11l62 27c2-2 3-3 6-4l10-60-40-40-42 66zm-98-18-47 47 51 74c4-1 8-2 13 0l48-76c-5-5-7-13-5-20l-60-25zm160 190-12 80 75.9-75.9L276 268c-2 4-6 6-10 7zm36-121 98 41.9a9 9 0 0 0-.6-2.2c-1.5-4.9-6-9.3-14.4-17.7l-40-41-43 19zm-59 107-105.1-21c-.9 2-.9 2-1.9 3l94 136 8-8 16-96c-6-3-10-8-11-14zM74 282l23-36c-1-1-1-1-2-3l-43 18 22 21zm223-116c-3 5-8 7-13 7l-12 71c4 3 6 6 7 12l62 12 44-44a76.7 76.7 0 0 0 13-15l-101-43zM91 230 4.8 212.9c2.3 2.9 5.6 6.5 10.2 11.1l27 27 49-21zm35 21c-5 3-13 3-18 1l-25 40 94 93c8.4 8.4 12.1 12.5 17 14 4.1 1.3 8.4 1.3 12.5 0s7.3-3.9 13.5-10l-94-138zm142.5-82.5L140 223c1 2 1 3 1 5l104 21c3-6 9-9 15-9l11-70c-1 0-2-1-2.5-1.5zM94 218c2-4 1-3 5-6l-49-71-34.9 35.2C6.7 184.6 2.5 188.8.9 193.7c-.5 1.7-.8 3.5-.9 5.3l94 19zm79-118c5-5 14-6 21-4l43-68-13-12.9C215.6 6.7 211.4 2.5 206.5 1a20.8 20.8 0 0 0-12.6 0c-4.9 1.5-9.5 6.6-17.9 15l-60 59 57 25z"/><symbol id="netlify-logo" viewBox="0 0 400 400"><use xlink:href="#netlify-logomark" fill="url(#netlify-logo-gradient)"/></symbol><symbol id="netlify-logo-mono" viewBox="0 0 400 400"><use xlink:href="#netlify-logomark" fill="inherit"/></symbol></defs></svg><div id="root" tabindex="-1"></div><script>// preload the critical path fetch requests that the app
      // loads (some in a serial fashion) during bootstrap
      (() => {
        // we are confident the user is authenticated
        // if we have the auth cookie hint.
        if (document.cookie.includes('_nf-auth-hint')) {
          // ParallelData allows for async loading and handoff to the app. It also
          // allows us to pull data from a parallel loaded request to use to make other
          // parallel requests.
          // This is the fetch-only version (does not include XHR parallel loading)
          // ParallelData v1.3.0 - https://github.com/sean-roberts/parallel-data
          // prettier-ignore
          !function(){"use strict";var e="ParallelData";function t(){try{for(var t,r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];(t=console).error.apply(t,[e].concat(n))}catch(e){}}function r(e,t){return Object.assign.apply(Object,arguments)}var n={},o={},a={},c=function(e,t){return e.toUpperCase()+"-"+t},i=function(){};i=function(e,n,i){var l=c(e,n);if(!o[l])var u=o[l]=fetch(n,r({},i,{__PDFetch__:!0,method:e,headers:r({},a.headers,i.headers||{}),credentials:i.credentials||"include",redirect:i.redirect||"follow"})).then(function(e){return i&&i.onParallelDataResponse&&i.onParallelDataResponse(e.clone(),{transferredToApp:!!u.__PDConsumed__}),e}).catch(function(e){throw t("fetch request failed",e),e})},window.ParallelData={version:"1.3.0",configure:function(e){var t;(e=e||{}).allRequests&&(t=e.allRequests,a=r({},a,t||{}))}},window.ParallelData.getForFetch=function(e,r){r=r||{};try{"fetch"in window&&"Promise"in window&&i("GET",e,r)}catch(e){t("fetch request failed",e)}},function(){try{var e=window.fetch;if(!e||!window.Promise)return;window.fetch=function(t,r){t=t||{},r=r||{};var a=void 0;"string"==typeof t?a=t:t.url&&(a=t.url);var i=function(e,t){if(e&&e.method&&e.url){var r=c(e.method,e.url);return"xhr"===t?n[r]:o[r]}}({method:r.method?r.method:t.method?t.method:"GET",url:a},"fetch");return r.__PDFetch__||!i||i.__PDConsumed__?e.apply(window,arguments):(i.__PDConsumed__=!0,i)}}catch(e){t("failed to run fetchInterceptor",e)}}()}();
          // These requests were chosen because they were the most common critical path
          // requests across all pages
          ParallelData.getForFetch('/access-control/bb-api/api/v1/user');
          ParallelData.getForFetch('/access-control/bb-api/api/v1/accounts');
          ParallelData.getForFetch(
            '/access-control/bb-api/api/v1/organizations'
          );
          ParallelData.getForFetch(
            '/.netlify/functions/notifications?page=1&per_page=10'
          );
        }
      })();</script><script>if (
        window.location.host === 'app.netlify.com' ||
        window.location.search.includes('force-load-segment')
      ) {
        // Segment snippet
        // running snippet here because it will set up the initial mocked
        // methods/properties for immediate use but we call analytics.load() later after the
        // page has loaded so that segment is out of the critical path
        // prettier-ignore
        !function () {
          var analytics = window.analytics = window.analytics || []; if (!analytics.initialize) if (analytics.invoked) window.console && console.error && console.error("Segment snippet included twice."); else {
            analytics.invoked = !0; analytics.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "page", "once", "off", "on"]; analytics.factory = function (t) { return function () { var e = Array.prototype.slice.call(arguments); e.unshift(t); analytics.push(e); return analytics } }; for (var t = 0; t < analytics.methods.length; t++) { var e = analytics.methods[t]; analytics[e] = analytics.factory(e) } analytics.load = function (t) { var e = document.createElement("script"); e.async = !0; e.src = ("https:" === document.location.protocol ? "https://" : "http://") + "cdn.segment.com/analytics.js/v1/" + t + "/analytics.min.js"; var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(e, n) }; analytics.SNIPPET_VERSION = "3.1.0";
          }
        }();

        window._asyncScriptsWaitingLoad = window._asyncScriptsWaitingLoad || [];
        window._asyncScriptsWaitingLoad.push(() => {
          // load Segment
          if (window.analytics) {
            analytics.load("bHbADSxnRvrpFMYP6pMNP38JC4J7Av75");
          }
        });
      }</script><script>(() => {
        // Snippet modified! Modifications: make the fn addressable and load it async
        // prettier-ignore
        function loadQualtrics(){var g=function(e,h,f,g){
          this.get=function(a){for(var a=a+"=",c=document.cookie.split(";"),b=0,e=c.length;b<e;b++){for(var d=c[b];" "==d.charAt(0);)d=d.substring(1,d.length);if(0==d.indexOf(a))return d.substring(a.length,d.length)}return null};
          this.set=function(a,c){var b="",b=new Date;b.setTime(b.getTime()+6048E5);b="; expires="+b.toGMTString();document.cookie=a+"="+c+b+"; path=/; "};
          this.check=function(){var a=this.get(f);if(a)a=a.split(":");else if(100!=e)"v"==h&&(e=Math.random()>=e/100?0:100),a=[h,e,0],this.set(f,a.join(":"));else return!0;var c=a[1];if(100==c)return!0;switch(a[0]){case "v":return!1;case "r":return c=a[2]%Math.floor(100/c),a[2]++,this.set(f,a.join(":")),!c}return!0};
          this.go=function(){if(this.check()){var a=document.createElement("script");a.src=g;document.body&&document.body.appendChild(a)}};
          this.start=function(){var t=this;"complete"!==document.readyState?window.addEventListener?window.addEventListener("load",function(){t.go()},!1):window.attachEvent&&window.attachEvent("onload",function(){t.go()}):t.go()};};
          try{(new g(100,"r","QSI_S_ZN_2fUBCKrIaC7UPsi","https://zn2fubckriac7upsi-netlify.siteintercept.qualtrics.com/SIE/?Q_ZID=ZN_2fUBCKrIaC7UPsi")).start()}catch(i){}
        }

        window._asyncScriptsWaitingLoad = window._asyncScriptsWaitingLoad || [];
        window._asyncScriptsWaitingLoad.push(() => {
          // This variable is used to determine if the script was
          // invoked by the downstream logic that waits for it to load
          window._qualtricsLoadInvoked = true;
          loadQualtrics();
        });
      })();</script><div id="ZN_2fUBCKrIaC7UPsi"></div><script src="/runtime.bundle.js"></script><script src="/graphql.vendor.bundle.js"></script><script src="/lib.bundle.js"></script><script src="/actions.bundle.js"></script><script src="/ui.bundle.js"></script><script src="/helpers.bundle.js"></script><script src="/lodash.vendor.bundle.js"></script><script src="/monitoring.vendor.bundle.js"></script><script src="/markdown.vendor.bundle.js"></script><script src="/relayRouterRedux.vendor.bundle.js"></script><script src="/containers.bundle.js"></script><script src="/reactUiUtilities.vendor.bundle.js"></script><script src="/react.vendor.bundle.js"></script><script src="/reactVirtualized.vendor.bundle.js"></script><script src="/4963.bundle.js"></script><script src="/app.bundle.js"></script><noscript><div class="app"><div class="tw-flex tw-z-overlay tw-inset-0 tw-fixed tw-items-center tw-justify-center tw-m-0 tw-text-center tw-w-full tw-min-h-screen tw-bg-white"><div class="container"><h1>The Netlify dashboard needs JavaScript :(</h1><p>You can enable JavaScript in <a href="https://enable-javascript.com/" class="highlight-link" target="_blank">your browser settings</a>.</p></div></div></div></noscript><div id="netlify-rum-container" data-netlify-rum-site-id="5f9562c1-be9c-4898-bc6a-5b40de4e1450" data-netlify-deploy-branch="main" data-netlify-deploy-context="production" style="position:fixed">
  <!-- This div is automatically inserted by Netlify for Real User Monitoring (RUM). -->
  <script async src="https://netlify-rum.netlify.app/netlify.js"></script>
</div>
<script>
// netlify - assessment. Speak to Sean Roberts if there are issues
(function() {
    try{
        if(document.head.getAttribute('sensitive-content-page')) { return; }
       
        if(location.search.includes('force-otto-on') || localStorage.getItem('otto')){
            localStorage.setItem('otto', '1');

            const s = document.createElement('script'); 
            s.type = "text/javascript";               
            s.async = true;                           
            s.src = "//d3plfjw9uod7ab.cloudfront.net/a037d524-d5e3-4900-aa54-9f43f9789de7.js"; 
            const fs = document.getElementsByTagName('script')[0];
            fs.parentNode.insertBefore(s, fs);   
        }else if(location.search.includes('force-otto-off')){
            localStorage.removeItem('otto');          
        }
    }catch(e){}
})();
</script></body></html>
