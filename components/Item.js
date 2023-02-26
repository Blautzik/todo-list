import { View, Text, TouchableOpacity, Pressable, Modal } from 'react-native'
import { useState } from 'react';
import Checkbox from 'expo-checkbox';



const Item = ({ title, completed, handleChange, item, deleteItem }) => {

    const [isChecked, setChecked] = useState(completed);
    const [modalOpen, setModalOpen] = useState(false);

    const pressedItem = (item) => {
        handleChange(item)
        setChecked(!isChecked)
    }

    return (
        <>
        <View className='mt-2 bg-gradientb rounded-full px-5 py-3 w-full '>
            <View className='flex flex-row items-end justify-between'>
                <TouchableOpacity
                    onPress={() => pressedItem(item)}
                    className='flex-row items-end'
                    >
                    <Checkbox
                        value={isChecked}
                        onValueChange={setChecked}
                        disabled
                        />
                    <Text className=' text-white ml-3' style={item.completed ? { fontFamily: 'Raleway-Medium', color: "#ADADAD", textDecorationLine: 'line-through' } : { fontFamily: 'Raleway-Black', color: '#F0F0F0' }} >{title}</Text>
                </TouchableOpacity>

                <TouchableOpacity className='rounded-lg flex-end bg-yellow-400 px-1 items-end flex'
                    onPress={() => setModalOpen(true)}
                    >
                    <Text style={{ fontFamily: 'Raleway-Black' }} className='mb-1'>x</Text>
                </TouchableOpacity>
            </View>
        </View>
            {modalOpen &&
                <Modal 
                    animationType='slide'
                    transparent={true}
                    onRequestClose={()=>setModalOpen(!modalOpen)}
                >
                    <Pressable className='absolute w-screen h-screen justify-center items-center bg-slate-900/80'
                    onPress={()=> setModalOpen(false)}
                    >

                    <Text className='text-lg text-slate-200' style={{ fontFamily: 'Raleway-Medium' }}>Eliminar  {item.title}?</Text>
                    <View className='flex-row justify-around w-1/2 h-1/4'>

                    <Pressable className='py-2 px-3 mb-2 bg-gradientb rounded-full items-center justify-center mt-3 flex-none h-10'
                        onPress={() => deleteItem(item)}
                        >
                        <Text className='text-md text-slate-200 pb-1' style={{ fontFamily: 'Raleway-Black' }}>Eliminar</Text>
                    </Pressable>
                    <Pressable className='py-2 px-3 mb-2 bg-gradientb rounded-full items-center justify-center mt-3 flex-none h-10'
                        onPress={() => setModalOpen(false)}
                        >
                        <Text className='text-md text-slate-200 pb-1' style={{ fontFamily: 'Raleway-Black' }}>Cancelar</Text>
                    </Pressable>
                    
                    </View>
                </Pressable>
                </Modal>}
        </>
    )
}

export default Item