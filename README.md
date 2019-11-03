# React-Native Seven Segment Display

React Native Component to create Seven Segment Display

## Install
`
yarn add rn-seven-segment-display
`
or
`
npm install rn-seven-segment-display
` 

![display](https://raw.githubusercontent.com/z0h4n/react-seven-segment-display/HEAD/image.png)

```
    <View style={{ flexDirection: "row", backgroundColor: "black", alignSelf : "center" }}>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "F", "a", "b", "c"].map(value => (
        <SevenSegmentDisplay
          key={value}
          value={String(value)}
          onColor="green"
        />
      ))}
    </View>
```

Thanks to [react-seven-segment-display](https://www.npmjs.com/package/react-seven-segment-display)

## Avaible characters
See segmentMap from `import {segmentMap} from 'rn-seven-segment-display'`
## NOTE: 
Its work on react(web) using react-native-web