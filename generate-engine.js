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
       await WebExtensionBlocker.fromLists(fetch, [
        'https://secure.fanboy.co.nz/fanboy-cookiemonster.txt'
       ])
    ).serialize(),
    (
      await WebExtensionBlocker.fromLists(fetch, [
        'https://raw.githubusercontent.com/AdguardTeam/AdguardFilters/master/SpywareFilter/sections/tracking_servers.txt'
       ])
    ).serialize(),
    (
      await WebExtensionBlocker.fromPrebuiltAdsAndTracking(fetch)
    ).serialize(),
    (
      await WebExtensionBlocker.fromLists(fetch, [
        'https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_2_English/filter.txt'
      ])
    ).serialize(),
    (
      await WebExtensionBlocker.fromLists(fetch, [
        'https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_15_DnsFilter/filter.txt'
      ])
    ).serialize(),
    (
      await WebExtensionBlocker.fromLists(fetch, [
        'https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_11_Mobile/filter.txt'
      ])
    ).serialize(),
    (
      await WebExtensionBlocker.fromLists(fetch, [
        'https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_15_DnsFilter/filter.txt'
      ])
    ).serialize(),
    (
      await WebExtensionBlocker.fromLists(fetch, [
        'https://curben.gitlab.io/malware-filter/urlhaus-filter-ag.txt'
      ])
    ).serialize(),
    (
      await WebExtensionBlocker.fromLists(fetch, [
        ' https://raw.githubusercontent.com/hoshsadiq/adblock-nocoin-list/master/nocoin.txt'
      ])
    ).serialize(),
    (
      await WebExtensionBlocker.fromLists(fetch, [
        'https://raw.githubusercontent.com/uBlock-user/uBO-Personal-Filters/master/uPF.txt'
      ])
    ).serialize(),
    (
      await WebExtensionBlocker.fromLists(fetch, [
        'https://easylist-downloads.adblockplus.org/antiadblockfilters.txt'
      ])
    ).serialize(),
    (
      await WebExtensionBlocker.fromLists(fetch, [
        'https://raw.githubusercontent.com/bogachenko/fuckfuckadblock/master/fuckfuckadblock.txt'
      ])
    ).serialize(),
    (
      await WebExtensionBlocker.fromLists(fetch, [
        'https://gitcdn.xyz/cdn/NanoAdblocker/NanoFilters/5e63d1a37cdb3e277f8db30e87df56e816c454c9/NanoMirror/NanoDefender.txt'
      ])
    ).serialize(),
    (
      await WebExtensionBlocker.fromLists(fetch, [
        'https://gitcdn.xyz/cdn/NanoAdblocker/NanoFilters/5e63d1a37cdb3e277f8db30e87df56e816c454c9/NanoFilters/NanoBase.txt'
      ])
    ).serialize(),
    (
      await WebExtensionBlocker.fromLists(fetch, [
        'https://pgl.yoyo.org/adservers/serverlist.php?hostformat=adblockplus&showintro=1'
      ])
    ).serialize(),
    (
      await WebExtensionBlocker.fromLists(fetch, [
        'https://gitlab.com/curben/urlhaus-filter/raw/master/urlhaus-filter-online.txt'
      ])
    ).serialize(),
   
  );
})();
