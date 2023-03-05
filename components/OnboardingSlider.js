import React, { useRef, useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    Animated,
    useWindowDimensions,
    Image,

    Pressable,
    Modal,
    TextInput,
} from 'react-native';
import { RectangleGroupIcon } from 'react-native-heroicons/solid';
import { sliderData } from '../utils/sliderData';
import { Colors } from '../utils/colors';



const OnboardingSlider = ( {navigation} ) => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const { width: windowWidth } = useWindowDimensions();
    const [OpenLoginModal, setOpenLoginModal] = useState(false)
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [incorrect, setIncorrect] = useState(false)
    
    const login = (navigation, user, pass) => {
        if ((user.toLowerCase()) === 'admin' && pass === '123') {
            navigation.navigate('HomeScreen')
        } else {
            setIncorrect('true')
        }
    }
    return (
        <View>
            <View className='w-screen flex-row items-center absolute justify-center top-9' style={{ zIndex: 4 }}>
                <Text className=' text-4xl text-slate-800 mr-2' style={{ fontFamily: 'Raleway-Black' }}>Fedello</Text>
                <RectangleGroupIcon fill={Colors['slate-800']} size={42} />
            </View>

            <View style={styles.container}>

                <View className='top-48 flex-row items-center '>
                    <RectangleGroupIcon fill={Colors['slate-800']} size={88} />
                </View>
                <View style={styles.scrollContainer}>
                    <Animated.FlatList
                        horizontal={true}
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        onScroll={Animated.event([
                            {
                                nativeEvent: {
                                    contentOffset: {
                                        x: scrollX,
                                    },
                                },
                            },
                        ],
                            { useNativeDriver: false }
                        )}
                        scrollEventThrottle={1}
                        data={sliderData}
                        keyExtractor={(item) => `img${item.id}`}
                        renderItem={({ item, imageIndex }) => {
                            return (
                                <View className='w-screen items-center justify-center' style={{ width: windowWidth, }} key={imageIndex}>
                                    <Image source={{ uri: item.url }} style={styles.img} />
                                    <View className='w-10/12 items-center justify-center'>
                                        <Text className='text-lg text-slate-800 mt-4' style={{ fontFamily: 'Raleway-Black' }}>{item.title}</Text>
                                        <Text className='text-base text-slate-700 text-center' style={{ fontFamily: 'Raleway-Medium' }}>{item.text}</Text>
                                    </View>
                                </View>

                            )
                        }}>



                    </Animated.FlatList>
                    <View style={styles.indicatorContainer}>
                        {sliderData.map((image, imageIndex) => {

                            const inputRange = [
                                windowWidth * (imageIndex - 1),
                                windowWidth * imageIndex,
                                windowWidth * (imageIndex + 1),
                            ]
                            const width = scrollX.interpolate({
                                inputRange,
                                outputRange: [8, 16, 8],
                                extrapolate: 'clamp',
                            });

                            const opacity = scrollX.interpolate({
                                inputRange,
                                outputRange: [0.3, 1, 0.3],
                                extrapolate: 'clamp'
                            })
                            return (
                                <View className='bottom-6' key={imageIndex}>
                                    <Animated.View
                                        style={[styles.normalDot, { width }, { opacity }]}
                                    />
                                </View>
                            );
                        })}

                    </View>
                    <View
                        style={{
                            zIndex: -1,
                            position: 'absolute',
                            width: windowWidth,
                            flexDirection: 'row',
                            flexWrap: 'nowrap',
                            justifyContent: 'space-evenly',
                            opacity: .7

                        }}
                    >
                        {sliderData.map((image, index) => {
                            const inputRange = [
                                (index - 1) * windowWidth,
                                index * windowWidth,
                                (index + 1) * windowWidth
                            ]
                            const opacity = scrollX.interpolate({
                                inputRange,
                                outputRange: [0, 1, 0]
                            })
                            return (
                                <View
                                    key={`img-${image.id}`}>
                                    <Animated.Image
                                        key={`img-${image.id}`}
                                        source={{ uri: image.url }}
                                        style={[{ width: 1600, height: 900 }, { opacity }]}
                                        blurRadius={10}
                                    />
                                </View>
                            )
                        })}

                    </View>
                </View>

            </View>
            <View className='flex-row justify-center items-center' style={{ zIndex: 5 }}>
                <Pressable className='rounded-lg px-5 py-1 items-center justify-center bg-slate-800'
                    onPress={() => setOpenLoginModal(true)}
                >
                    <Text style={{ fontFamily: 'Raleway-Medium' }} className='text-lg mb-2 text-slate-100'>Iniciar sesión</Text>
                </Pressable>

            </View>
            <View className='w-screen justify-center items-center top-11'>
                <Text>para iniciar sesión ingresar: </Text>
                <Text>Usuario: admin </Text>
                <Text>Pass: 123</Text>
            </View>
            {OpenLoginModal &&
                <Modal
                    animationType='slide'
                    transparent={true}
                    onRequestClose={() => setOpenLoginModal(!modalOpen)}
                    statusBarTranslucent
                >
                    <Pressable className='w-screen h-[1900] justify-start items-center py-64 bg-cyan-100/80'
                        onPress={() => setOpenLoginModal(false)}
                    >
                        <View className='justify-center items-center w-10/12 h-1/4'>
                            <TextInput
                                className='text-md text-slate-200 pb-1 pl-3 w-10/12 bg-gradientc flex-none h-10 mr-3 rounded border-solid border mb-4 border-slate-600'
                                style={{ fontFamily: 'Raleway-Medium' }}
                                onChangeText={(text) => setUser(text)}
                                placeholder='Usuario'
                                placeholderTextColor='#D9D9D9'

                            />
                            <TextInput
                                className='text-md text-slate-200 pb-1 pl-3 w-10/12 bg-gradientc flex-none h-10 mr-3 rounded border-solid border border-slate-600'
                                style={{ fontFamily: 'Raleway-Medium' }}
                                onChangeText={(text) => setPass(text)}
                                placeholder='Contraseña'
                                placeholderTextColor='#D9D9D9'
                                secureTextEntry={true}
                            />
                            <View className='w-24'>
                                <Pressable className='py-2 px-3 mb-2 bg-gradientb rounded-lg items-center justify-center mt-3 w-100 h-10'
                                    onPress={() => login(navigation, user, pass)}
                                >
                                    <Text className='text-md text-slate-200 pb-1' style={{ fontFamily: 'Raleway-Black' }}>Entrar</Text>
                                </Pressable>
                                {incorrect&&
                                    <Text>datos incorrectos, comuniquese con Fedello para recibir las credenciales de acceso</Text>
                                }
                            </View>
                        </View>
                    </Pressable>
                </Modal>}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        top: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollContainer: {
        zIndex: 2,
        height: 450,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        height: 250,
        width: 350,
        shadowColor: '#000',
        shadowOpacity: 1,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 20,
        resizeMode: 'cover',
        borderRadius: 10
    },

    normalDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: '#334155',
        marginHorizontal: 4,
        opacity: .7
    },
    indicatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default OnboardingSlider;