import { View, Text, Pressable } from 'react-native'
import React from 'react'

const FilterBar = ({ onHandleFilter }) => {
    return (
        <View className='flex-row w-10/12 items-center justify-between'>
            <Pressable className='py-2 px-3 mb-2 bg-gradientb rounded-full items-center justify-center mt-3'
                onPress={()=>onHandleFilter('all')}
            >
                <Text className='text-md text-slate-200 pb-1' style={{ fontFamily: 'Raleway-Black' }}>Todas</Text>
            </Pressable>
            <Pressable className='py-2 px-3 mb-2 bg-gradientb rounded-full items-center justify-center mt-3'
                onPress={() => onHandleFilter('pending')}
            >
                <Text className='text-md text-slate-200 pb-1' style={{ fontFamily: 'Raleway-Black' }}>Completadas</Text>
            </Pressable>
            <Pressable className='py-2 px-3 mb-2 bg-gradientb rounded-full items-center justify-center mt-3'
                onPress={() => {
                    onHandleFilter('completed')
                }}
            >
                <Text className='text-md text-slate-200 pb-1' style={{ fontFamily: 'Raleway-Black' }}>Pendientes</Text>
            </Pressable>
        </View>
    )
}

export default FilterBar