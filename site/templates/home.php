<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,height=device-height,user-scalable=no,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0">
    <meta name="description" content="<?= $site->metaDescription()->html() ?>">
    <link rel="icon" href="/dist/favicon.ico">
    <title><?= $site->title()->html() ?></title>
    <meta property="og:url" content="<?= $site->url() ?>">
    <meta property="og:title" content="<?= $site->title()->html() ?>">
    <meta property="og:description" content="<?= $site->metaDescription()->html() ?>">
    <meta property="og:image" content="/dist/favicon.ico">
  <link href="/dist/0.js" rel="prefetch"><link href="/dist/1.js" rel="prefetch"><link href="/dist/app.js" rel="preload" as="script"></head>
  <body>
    <noscript>
      <strong>We're sorry but this website doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
  <script type="text/javascript" src="/dist/app.js"></script></body>
</html>
