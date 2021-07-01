// Generating an ad and tracking engine with filters

const { writeFileSync } = require('fs');

const fetch = require('node-fetch');
const { FiltersEngine } = require('@cliqz/adblocker');
const {
  WebExtensionBlocker,
  fullLists,
} = require('@cliqz/adblocker-webextension');


(async () => {
  console.log('Generate pre-built adblocker engine...');

  writeFileSync(
    'engine.bin',
    (
      await WebExtensionBlocker.fromLists(fetch, fullLists, {
        debug: false,
        enableCompression: true,
        enableHtmlFiltering: true,
        enableMutationObserver: true,
        enableOptimizations: true,
        guessRequestTypeFromUrl: false,
        integrityCheck: true,
        loadCosmeticFilters: true,
        loadExtendedSelectors: true,
        loadGenericCosmeticsFilters: true,
        loadNetworkFilters: true,
      }
      )
    ).serialize(),
    (
       await FiltersEngine.fromLists(fetch, [
        'https://secure.fanboy.co.nz/fanboy-cookiemonster.txt'
       ])
    ).serialize(),
    (
      await FiltersEngine.fromLists(fetch, [
        'https://raw.githubusercontent.com/AdguardTeam/AdguardFilters/master/SpywareFilter/sections/tracking_servers.txt'
       ])
    ).serialize(),
    (
      await FiltersEngine.fromPrebuiltAdsAndTracking(fetch)
    ).serialize(),
    (
      await FiltersEngine.fromLists(fetch, [
        'https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_2_English/filter.txt'
      ])
    ).serialize(),
    (
      await FiltersEngine.fromLists(fetch, [
        'https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_15_DnsFilter/filter.txt'
      ])
    ).serialize()
  );
})();
