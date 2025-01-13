import { assertEquals, assertExists, assertMatch } from 'jsr:@std/assert';
import { printDprintConfig } from './main.ts';

Deno.test('should print dprint.jsonc', () =>
{
  const contents = printDprintConfig();
  // w00t w00t
  assertMatch(contents, /\"bracePosition\": \"nextLine\"/);
});

Deno.test('lame-o .json file is same as righteous .jsonc file', () =>
{
  const pathToMe = import.meta.dirname;
  assertExists(pathToMe);

  const jsonPath = import.meta.resolve('./dprint.json');
  const jsoncPath = import.meta.resolve('./dprint.jsonc');

  const jsonUrl = new URL(jsonPath);
  const jsoncUrl = new URL(jsoncPath);

  const json = Deno.readTextFileSync(jsonUrl.pathname);
  const jsonc = Deno.readTextFileSync(jsoncUrl.pathname);

  const weahWeahWeah = jsonc
    .split('\n')
    .filter(line => !line.startsWith('//'))
    .join('\n');

  assertEquals(json, weahWeahWeah);
});
