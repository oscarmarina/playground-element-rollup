/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import { importMetaAssets } from '@web/rollup-plugin-import-meta-assets';

export default [
  {
    input: './index.js',
    output: {
      file: 'dist/index-playground.js',
      format: 'esm',
    },
    plugins: [resolve(), importMetaAssets(), terser()],
  },
];
