// 2024-06-09: can't make this work — maybe Deno doesn't support? or maybe TS itself? whatever, just use .json for the moment
// import * as jsonc  from './dprint.jsonc' with { type: "json" }

import * as json from './dprint.json' with { type: 'json' };
import { dateToIS08601WithTimeZoneOffset } from 'jsr:@axhxrx/date@0.1.5';

/**
 Prints the recommended dprint configuration to the console.
 */
export const printDprintConfig = (): string =>
{
  const now = dateToIS08601WithTimeZoneOffset(new Date());
  const contents = JSON.stringify(json, null, 2);
  console.log('// A righteous dprint.jsonc config:');
  console.log(contents);
  return contents;
};

if (import.meta.main)
{
  printDprintConfig();
}
