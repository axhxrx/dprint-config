/**
 @module

 This module itself is not very useful. The package itself contains config that can be extended. The main entry point of the application just prints out the recommended dprint config to stdout.
 */
import * as dprintConfig from './dprint.json' with { type: 'json' };

/**
 The main entry point of the application just prints out the recommended dprint config to stdout.
 */
export * from './main.ts'

/**
 The recommended dprint config is also available as a JSON module, although it this may not be useful. Instead the normal way of using it is to have your own config extend the `.jsonc` (or `.json`) file contained within the package. (See [README.md](./README.md) for more details.)
 */
export { dprintConfig };
