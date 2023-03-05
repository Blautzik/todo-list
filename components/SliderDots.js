
import React from 'react'
import { View, StyleSheet, Animated, useWindowDimensions } from 'react-native'

const SliderDots = ({ sliderData, scrollX, windowWidth }) => {

    const width = windowWidth 


    return (
        <View className='flex-row h-16 absolute bottom-16 w-[400px] flex-1'>
            {sliderData.map((_, i) => {
                console.log('width', width)

                const inputRange = [
                    (i - 1) * width,
                    i * width,
                    (i + 1) * width
                ];
                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [8, 16, 8],
                    extrapolate: 'clamp'
                })
                return <Animated.View
                    key={i}
                    style={[styles.normalDot, {dotWidth}]}
                    />
            })}
        </View>
    )
}

export default SliderDots

const styles = StyleSheet.create({
    dot: {
        height: 1,
        width: 1,
        borderRadius: 5,
        backgroundColor: '#493d8a',
        marginHorizontal: 9,
    },
    normalDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: 'silver',
        marginHorizontal: 4,
      },
})