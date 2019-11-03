const mix = require('laravel-mix');

mix.setPublicPath('public_html/compiled/')
    .setResourceRoot('../');

mix.react('resources/js/app.js', 'js')
   .sass('resources/sass/app.scss', 'css');

mix.extract([
    'react',
    'react-dom',
    'react-router-dom',
    'element-react',
    'bootstrap',
    '@fortawesome/fontawesome-free',
    'axios',
    'lodash'
]);

mix.sourceMaps();