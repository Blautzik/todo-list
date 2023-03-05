import { View, Text, TextInput,  Pressable } from 'react-native'
import React from 'react'

const AddItem = ({ onHandleAddItem, onHandleInput, value }) => {

    
    return (
        <View className='flex-row justify-between flex 1 w-10/12 items-center'>
            <TextInput
                className='text-md text-slate-200 pb-1 pl-3 bg-gradientc flex-1 h-10 mr-3 rounded border-solid border border-slate-600'
                style={{ fontFamily: 'Raleway-Medium' }}
                value={value}
                onChangeText={onHandleInput}
                placeholder='Nueva Tarea'
                placeholderTextColor='#D9D9D9'

            />
            <Pressable className='py-2 px-3 mb-2 bg-gradientc rounded-full items-center justify-center mt-3'
                onPress={() => {
                    onHandleAddItem()
                }
                }
            >
                <Text className='text-md text-slate-200 pb-1' style={{ fontFamily: 'Raleway-Black' }} >Agregar</Text>
            </Pressable>
        </View>
    )
}

export default AddItem



