import { View, Text, TouchableOpacity } from 'react-native'
import { useState } from 'react';
import Checkbox from 'expo-checkbox';



const Item = ({ title, id, completed, handleChange, item }) => {

    const [isChecked, setChecked] = useState(completed);

    const pressedItem = (item) => {
        handleChange(item)
        setChecked(!isChecked)
    }

    return (
        <View className='mt-2 bg-gradientb rounded-full px-5 py-3 w-full '>
            <View className='flex flex-row items-end justify-between'>

                <TouchableOpacity
                    onPress={() => pressedItem(item)}
                    className='flex-row items-end'
                >
                    <Checkbox
                        value={isChecked}
                        onValueChange={setChecked}
                    />
                    <Text className=' text-white ml-3' style={item.completed ? { fontFamily: 'Raleway-Medium' , color: "#ADADAD" , textDecorationLine: 'line-through'} : {fontFamily: 'Raleway-Black', color: '#F0F0F0' }} >{title}</Text>
                </TouchableOpacity>

                <TouchableOpacity className='h-5 w-5 border border-gray-500 rounded-full flex-end'>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Item