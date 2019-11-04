const mix = require('laravel-mix');

const public_compiled_path = 'public_html/compiled/';

mix.setPublicPath(public_compiled_path)
    .setResourceRoot('../');

mix.react('resources/js/app.js', 'js')
    .less('resources/less/app.less', 'css/less.css')
    .sass('resources/sass/app.scss', 'css/scss.css');

mix.styles([
    public_compiled_path + 'css/less.css',
    public_compiled_path + 'css/scss.css'
], public_compiled_path + 'css/all.css');

mix.extract([
    'react',
    'react-dom',
    'react-router-dom',
    'antd',
    'bootstrap',
    '@fortawesome/fontawesome-free',
    'axios',
    'lodash'
]);

mix.sourceMaps();