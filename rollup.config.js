/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import copy from 'rollup-plugin-copy';
import {importMetaAssets} from '@web/rollup-plugin-import-meta-assets';

const copyConfig = {
  targets: [
    {
      src: 'node_modules/playground-elements/internal/typescript.js',
      dest: 'dist/assets/internal/',
    },
  ],
};

export default {
  input: './index.js',
  output: {
    file: 'dist/playground-ide.js',
    format: 'esm',
  },
  plugins: [resolve(), copy(copyConfig), importMetaAssets(), terser()],
};
