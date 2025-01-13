# @axhxrx/dprint-config

This library provides a dprint configuration for formatting TypeScript source code using non-insane brace style.

It requires you to install [dprint](https://dprint.dev/install/) on your own.

Once you do that, you can add this package as a dependency. E.g., if you have an NPM project, you can run:

```text
npx jsr add @axhxrx/dprint-config
```

If you have some other kind of project that can use JSR packages, then you probably already know how to do add one as a dependency. If not, check the [docs](https://jsr.io/@axhxrx/dprint-config).

## How to adopt the config

If it is installed into `node_modules`, then you can create a `dprintrc.jsonc` file in the root of your project with the following contents:

```jsonc
{
  "extends": "node_modules/@axhxrx/dprint-config/dprint.jsonc"
  // Of course, you are free to add any additional config here, if you want...
}
```

If the JSR package is installed somewhere else, or you are using one of the other kinds of `dprint` configs, then you will have to figure out where the local `@axhxrx/dprint-config` package actually exists on disk, and then use that path in the `extends` property of whatever kind of `dprint` config you are using.

## About non-insane brace style

Non-insane brace style, also known as "correct brace style", or sometimes "[Allman style](https://en.wikipedia.org/wiki/Indentation_style#Allman_style)", was a staple back in the times of the graybeards of yore. But as humanity has regressed toward barbarism in recent decades, it's seldom seen, especially in the outer wilds of TypeScriptland.

But it looks like this:

```ts
export class ArrayUtils
{
  /**
   Returns a new array with the elements from `input` sorted with the outermost elements first.
   
   E.g.: `[1, 2, 3, 4, 5, 6]` becomes `[1, 6, 2, 5, 3, 4]`.
   */
  static outsideIn<T>(input: T[]): T[]
  {
    if (!input?.length)
    {
      return [];
    }

    let low = 0;
    let high = input.length - 1;
    const result = new Array<T>(input.length);

    while (result.length < input.length)
    {
      result.push(input[low]);
      if (high > low)
      {
        result.push(input[high]);
      }
      low++;
      high--;
    }

    return result;
  }
}
```

If you don't like that, well... then you don't need this! 😁

## Happenings

🎅 2025-01-13: code moved to public repo

🤖 2025-01-13: repo initialized by Bottie McBotface bot@axhxrx.com

## License

MIT FTW
