if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"cf58f25a1d7b8141b55467b395a470ea","url":"404.html"},{"revision":"0c209acdd19f6732370568f7a6ae0bdf","url":"ece08537062c28a2a7c1.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"cf58f25a1d7b8141b55467b395a470ea","url":"index.html"},{"revision":"3a9110ae9e9919cf864852f316e8e086","url":"static/css/2.1432c553.chunk.css"},{"revision":"1139c7f91659b8d1e1f13fd2fdfdf753","url":"static/css/21.f5f9d973.chunk.css"},{"revision":"fa58b34f703b8f212cb370759f77815a","url":"static/css/22.abf343ae.chunk.css"},{"revision":"038a830223503314180873a2c08b9a52","url":"static/js/0.3d2b55ab.chunk.js"},{"revision":"99e2d7f020d1446d4652eaa3e7d341f5","url":"static/js/1.7258f650.chunk.js"},{"revision":"d27913dc8bbb0ce6e92393c5d2546db4","url":"static/js/12.74899673.chunk.js"},{"revision":"44511d7cf6e291524287e18df3f895f6","url":"static/js/13.8a687ad4.chunk.js"},{"revision":"5cf0d08b98fd6def99b7ef94d9b94701","url":"static/js/14.1b1a7b43.chunk.js"},{"revision":"89d524f21e39ce7d0816d557489df086","url":"static/js/15.b87661dc.chunk.js"},{"revision":"41891a7eecca793407228a9748aac6c7","url":"static/js/16.ff48d2af.chunk.js"},{"revision":"2e4090c24227e817ad9f4952972b7538","url":"static/js/17.d7450161.chunk.js"},{"revision":"09f55b6b08c8175637ac6b1390413146","url":"static/js/18.e2ac2e33.chunk.js"},{"revision":"382465b1841d4926df8219384c85eaf4","url":"static/js/19.e382ed57.chunk.js"},{"revision":"9e1d7b65707ab45fc810945d17a1cee4","url":"static/js/2.366b601a.chunk.js"},{"revision":"512ac6d980b4c00225bff034ffd0031e","url":"static/js/20.cba7fbaa.chunk.js"},{"revision":"0f0b58dd3b9dd83e54d117b9d051de73","url":"static/js/21.1cef9991.chunk.js"},{"revision":"6f01d21df41b7fcdce799e15e5d16c85","url":"static/js/22.efc8c233.chunk.js"},{"revision":"16acacbb88ec5c22ce01d42cafedf43c","url":"static/js/23.d0ecd270.chunk.js"},{"revision":"a83cbfde787eae264695c2c9b9a2c53f","url":"static/js/24.4503402e.chunk.js"},{"revision":"2c73b303141c95b09433c1910813ac99","url":"static/js/25.ba337a84.chunk.js"},{"revision":"84e06464d14cc2906d75de280a32aa65","url":"static/js/26.b913ba41.chunk.js"},{"revision":"cf183f07e81e18764a2c45c6a4997770","url":"static/js/27.741aa2b3.chunk.js"},{"revision":"0781d2320ce5663d175392b3df908ba0","url":"static/js/28.38092025.chunk.js"},{"revision":"eef4c2cd98292e9277b8419896728f91","url":"static/js/29.777749f6.chunk.js"},{"revision":"9f7acdc06a897ba9e92533c9dd8cf547","url":"static/js/3.ae3fa1d8.chunk.js"},{"revision":"2e23e1e234240f92d450e9de90bde5a1","url":"static/js/30.c4d7ce42.chunk.js"},{"revision":"b1451e5332f14140ba952a0811aeede2","url":"static/js/31.2eb4a85e.chunk.js"},{"revision":"b152da9a16849e7b9df646e979678466","url":"static/js/32.02b2960c.chunk.js"},{"revision":"349e7ad2fc08f8054629b563468f6bc4","url":"static/js/33.bc66a3bd.chunk.js"},{"revision":"fc3a250314b80b86a60d7a121c151fc7","url":"static/js/34.fa4bf22d.chunk.js"},{"revision":"e5c1530d6d8e41fbc5fea217225441ff","url":"static/js/35.c9986e2d.chunk.js"},{"revision":"f9919cc0fff8ad0531bda172bbcea757","url":"static/js/36.20a88ce8.chunk.js"},{"revision":"248959f2465136fd54bb99b46c883799","url":"static/js/37.15889fc0.chunk.js"},{"revision":"ae499d4daef23512d1eb1522620d9e1d","url":"static/js/38.30d28207.chunk.js"},{"revision":"3078cdf9ab5602d8a919587cf94f2891","url":"static/js/39.623c5c80.chunk.js"},{"revision":"790e1d33656c2ae278bd35043eca2682","url":"static/js/4.de3e7cc2.chunk.js"},{"revision":"6da77e0a430103504495ca710464c2d2","url":"static/js/40.bf18dba5.chunk.js"},{"revision":"de460faf91ac397cb85893246143e7c7","url":"static/js/41.6460660a.chunk.js"},{"revision":"0a0a27ab5a4c3d785518dd85b3bcf0b7","url":"static/js/42.3a616d0f.chunk.js"},{"revision":"bc18479121c3392db386264face43db4","url":"static/js/43.d0848aa6.chunk.js"},{"revision":"5a6335c2c06f6ea6d20f0b7e1113aa8b","url":"static/js/44.90c2322f.chunk.js"},{"revision":"8fd985c0bc9ae388350997558cc45429","url":"static/js/45.e9b2d3f9.chunk.js"},{"revision":"a5483a5bb0b0a98302cf07d2452f7244","url":"static/js/46.8c39b76b.chunk.js"},{"revision":"fe3156fed30837a3df4ee65a8c1c9d7b","url":"static/js/5.c5ce36d5.chunk.js"},{"revision":"d05458b0ce18afcbbd19a8a30763773f","url":"static/js/6.1981dc32.chunk.js"},{"revision":"23afd2f4fcd9571d0827fc5f79600801","url":"static/js/7.d3661f2d.chunk.js"},{"revision":"54f08e34f847d7cf041071fce0222546","url":"static/js/8.d5173883.chunk.js"},{"revision":"3504d30aaf2770e6b4d91aba3266e420","url":"static/js/9.6a558fda.chunk.js"},{"revision":"ad95526a87d59b824d8c3354d7c1a332","url":"static/js/main.41d49152.chunk.js"},{"revision":"33f2b760b3ce485f219ce9e1c72de606","url":"static/js/runtime-main.93435c8f.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://data\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
