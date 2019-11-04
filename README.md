# React Native [Web] Seven Segment Display

React Native Component to create Seven Segment Display with typescript support

## Install
`
yarn add rn-seven-segment-display
`

or

`
npm install rn-seven-segment-display
` 

![display](https://raw.githubusercontent.com/z0h4n/react-seven-segment-display/HEAD/image.png)

```js
import SevenSegmentDisplay, { segmentMap } from 'rn-seven-segment-display';
...
      <View style={{ flexDirection: "row", backgroundColor: "black", alignSelf : "center" }}>
      {Object.keys(segmentMap).slice(0,10).map(value => (
        <SevenSegmentDisplay
          key={value}
          value={String(value)}
        />
      ))}
    </View>
...
```

Thanks to [react-seven-segment-display](https://www.npmjs.com/package/react-seven-segment-display)

## Available characters
See segmentMap from `import {segmentMap} from 'rn-seven-segment-display'`

## NOTE: 
Its work on reactjs using react-native-web