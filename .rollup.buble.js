'use strict';

import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';
import nodeResolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss';
import nano from 'cssnano';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/codemirror.js',
        format: 'umd',
    },
    name: 'CodeMirror',
    plugins: [
        postcss({
            extenstions: ['.css'],
                plugins: [
                    nano
               ],
        }),
        buble(),
        uglify(),
        nodeResolve({
            preferBuiltins: true,
            browser: true,
        }),
    ]
};

