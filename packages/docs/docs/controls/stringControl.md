# stringControl()

The most basic of controls, the string control is just a normal input field where some text can go.

```ts
const stringControl: (
  defaultString?: string
) => StringControlType
```

## Arguments

### `defaultString` (optional)
An optional field that sets the default value of the stringControl. It prefills the control UI, but does not automatically push it to render on the scene. You still have to press send.

## Output
In the `data` object provided by `useRelive()`, the stringControl just returns a string that has been entered.