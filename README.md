<p align="center">
  <img src="./icons/readme-o-icon.png" width="300px" alt="TinyDefender" />
</p>
<h3 align="center">Block ads and creepy trackers with crazy speed and small memory footprint</h3>

<p align="center">
  <em>
    Efficient
    · Minimal
    · Adblocker
    · Privacy
    . Powerful
  </em>
</p>

<p align="center">
  <a href="https://cliqz.com" target="_blank" rel="noopener noreferrer">
    <img alt="powered by Cliqz" src="https://img.shields.io/badge/cliqz-powered-blue?logo=cliqz&style=flat-square">
  </a>

  <a href="#">
  <img alt="awesome" src="https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg">
  </a>
  <a href="#">
    <img alt="awesome typescript" src="https://badges.frapsoft.com/typescript/awesome/typescript.png?v=101">
  </a>

</p>

---

- Blocks ads.
- Blocks tracking.
- Blocks annoyances.
- Very small memory and CPU footprint(\*).
- Fast loading time(\*\*).

This extension is a under the tiny project which aims to be the only modular adblocker in the world.This extension aims to work with the tiny blocker to block ads and trackers with crazy speed but still you can use it individually.

Following Blocklists were used:

- EasyList (ads)
- EasyList Cookies (annoyances)
- Peter Lowe’s Ad server list (ads and tracking)
- EasyPrivacy (tracking)
- uBlock filters (ads + tracking + annoyances)
- Adgaurd Base filters(ads + tracking + spyware + dns + mobileads)
- nocoin minerblocking filter 
- malware lists
- Anti-adblock filters


The Defender is initialized in less than 200ms, even on cold start, which means that ads and trackers are blocked as soon as your browser starts.

## Installation

### Building from source

Building code from https://github.com/sanatg/TinyDefender can be done with:

1. Installing dependencies: `yarn install --frozen-lock`
2. Run the Shell Script:`chmod +x ./build.sh && ./build.sh`
3. Load the build folder in Firefox or Chromium by using the "Load unpacked extension" feature.

### Using prebuild

If you don't want to compile from source i have pre included the build folder to load it in Firefox or Chromium.

You can also find a crx file from the release page.

## FAQ

> It's tiny, does it actually perform like other blocker extensions?

Yes it is small, but it leverages
[@cliqz/adblocker](https://github.com/cliqz-oss/adblocker) to do the
heavy-lifting. This means that the extension is doing as much as any other
content-blocker (if you make abstraction of the UI, of course, which only
consists in a counter of blocked requests). At the time of this writing, this
is still the fastest and most memory efficient adblocker around.

> Which filters lists is it using?

Currently, it is using a pre-built engine distributed on Cliqz' CDN.
This means that no parsing is required client-side to load the engine
(super-fast loading cached between sessions!). The default lists at the
time of this writing are:

- [EasyList](https://easylist.to/easylist/easylist.txt)
- [EasyPrivacy](https://easylist.to/easylist/easyprivacy.txt)
- [Peter Lowe’s Ad and tracking server list](https://pgl.yoyo.org/adservers/serverlist.php?hostformat=adblockplus&showintro=0&mimetype=plaintext)
- [uBlock filters](https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/filters.txt)
- [uBlock filters - Privacy](https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/privacy.txt)
- [uBlock filters - Resource abuse](https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/resource-abuse.txt)
- [uBlock filters - Badware risks](https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/badware.txt)
- [uBlock filters - Unbreak](https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/unbreak.txt)
- [Adgaurd base filters](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_15_DnsFilter/filter.txt)
- [nocoin minerblocking filter ](https://raw.githubusercontent.com/hoshsadiq/adblock-nocoin-list/master/nocoin.txt)
- [malware lists](https://curben.gitlab.io/malware-filter/urlhaus-filter-ag.txt)
- [Anti-adblock filters](https://easylist-downloads.adblockplus.org/antiadblockfilters.txt)


## Updates
> Date 26/7/2021

introducing cross browser support for the extension and adding more blocklists for better cosmetic filtering.

## Credits
 this is a fork of the work of [@remusao](https://github.com/remusao/blockrz) but is enhanced with blocklists and better features.
