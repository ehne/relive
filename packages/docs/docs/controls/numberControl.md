# numberControl()
The numberControl is an input field with the type set to number, so you get the up and down buttons on the side.
And on mobile, there will be the number pad entry.

```ts
const numberControl: (
  defaultNumber?: number
) => NumberControlType
```

## Arguments

### `defaultNumber` (optional)
An optional field that sets the default value of the numberControl. It prefills the control UI, but does not automatically push it to render on the scene. You still have to press send.

## Output
In the `data` object provided by `useRelive()`, the numberControl returns a numerical value with the type `number`.