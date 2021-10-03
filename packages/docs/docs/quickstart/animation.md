---
sidebar_position: 3
---

# Animating Properties
Because animation is just changing some value over time, Relive can animate really anything you want. As an example, let's animate some text fading in to the screen.

If we wanted to have the text fade in over 30 frames, we have to gradually change the `opacity` style over time.

```tsx {5,10}
import React from 'react'
import { registerRelive, useRelive, controls } from '@relivecg/core'

const AlertScene = () => {
  const { data, currentFrame } = useRelive()
  const opacity = currentFrame >= 30 ? 1 : (currentFrame / 30)
  return (
    <div
      style={{
        fontSize: '3em',
        opacity: opacity
      }}
    >
      Hello {data.personName}
    </div>
  )
}

registerRelive({
  alertScene: {
    component: AlertScene,
    controls: {
      personName: controls.stringControl()
    }
  }
})
```

Notice that the text now fades in when you load the scene.
But if you send a new name via the remote, the animation doesn't play again.
This is because the `currentFrame` variable starts as soon as the scene window opens and doesn't change at any point.
To get around this, we can create the "delta" frame. 
That is, the frame it is since the last update.

```tsx {2, 4}
const AlertScene = () => {
  const { data, currentFrame, frameLastUpdated } = useRelive()
  const delta = currentFrame - frameLastUpdated

  const opacity = delta >= 30 ? 1 : (delta / 30)
  return (
    <div
      style={{
        fontSize: '3em',
        opacity: opacity
      }}
    >
      Hello {data.personName}
    </div>
  )
}
```

Now when you update the `personName` variable via the remote, the animation replays. 
Fading in the new text each time.

## The interpolate() helper function
By using the `interpolate` helper function, it can make your animations more understandable in code.
The function takes in four arguments:

1. The input value.
2. The input interval (input range).
3. The output interval (output range).
4. And an optional options object.

So the fading in over 0–20 frames from before would become:

```tsx {0, 6}
import { registerRelive, useRelive, controls, interpolate } from '@relivecg/core'

const AlertScene = () => {
  const { data, currentFrame, frameLastUpdated } = useRelive()
  const delta = currentFrame - frameLastUpdated

  const opacity = interpolate(delta, [0, 30], [0, 1])
  return (
    <div
      style={{
        fontSize: '3em',
        opacity: opacity
      }}
    >
      Hello {data.personName}
    </div>
  )
}
```

:::note

`interpolate` clamps values to the left and right of the input interval.
Meaning that if your input value is lesser than the minimum value of the input interval it will just use whatever value was the lowest value in the input interval.
The same goes for the maximum value.

:::
