# stringControl()

The most basic of controls, the string control is just a normal input field where some text can go.

```ts
const stringControl: (
  name: string, 
  defaultString?: string
) => Record<string, StringControl>
```

## Arguments

### `name`
This is the name of field, it is what shows up next to it in the control UI.

:::warning

Each name for every control must be unique, otherwise you will run into issues

:::

### `defaultString` (optional)
An optional field that sets the default value of the stringControl. It prefills the control UI, but does not automatically push it to render on the scene. You still have to press send.

## What it returns in `useRelive()`
The string value can be found under `data.name`. So if there was a control that had a name of `hello` and a value of `"hi"`, the result would be `data.hello === "hi"`.

```ts
type Record<string, string>
```
