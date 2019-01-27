import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    Animated,
    LayoutAnimation,
    TouchableOpacity,
    UIManager
} from 'react-native';

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

export default class FrontPage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            anim: new Animated.Value(0),
            swipe: true
        }
    }
    
    animateLayout = {
        duration: 1000,
        create: {
            property: 'scaleXY',
            type: 'easeInEaseOut',
            duration: 400,
            springDamping: 0.2
        },
        update: {
            property: 'scaleXY',
            type: 'easeInEaseOut',
            duration: 400,
            springDamping: 0.7,
            initialVelocity: .1
        },
        delete: {
            property: 'scaleXY',
            type: 'spring',
            duration: 300,
            springDamping: 0.5
        }
    };
    
    swipeUp = () => {
        LayoutAnimation.configureNext(this.animateLayout);
        this.setState({swipe: !this.state.swipe})
    };
    
    
    render() {
        return (
            <Animated.View style={styles.frontPage}>
                <Animated.View style={styles.backgroundImageView}>
                    <Animated.Image
                        source={require('../Assets/image/backGround.png')}
                        style={styles.backgroundImage}
                    />
                    
                </Animated.View>
                <Animated.View style={this.state.swipe ? styles.viewAll : styles.viewAllFalse}>
                    <Animated.Image
                        source={require('../Assets/image/coin2.png')}
                        style={{position: 'absolute',width:400,height:400}}
                    />
                    <Animated.View style={styles._header}>
                        <Animated.Text style={styles.titleText}>B$D</Animated.Text>
                        
                    </Animated.View>
                    
                    <Animated.View style={this.state.swipe ? styles._footer : styles._footerScaled}>
                        <Animated.View style={styles.sliderContainerStyle}>
                            {!this.state.swipe &&
                            <View style={styles.loginItems}>
                                <Animated.View>
                                    <Animated.Text style={[styles.fontSize4,styles.loginStyle]}>Login</Animated.Text>
                                </Animated.View>
                                <View style={[styles.flex1]}>
                                    <View style={styles.userName}>
                                        <View style={{flex:1}}>
                                            <Image
                                                source={require('../Assets/image/user.png')}
                                                style={styles.smallImage}
                                            />
                                        </View>
                                        <View style={styles.boxes}>
                                            <Animated.Text style={styles.fontSize3}>Full name</Animated.Text>
                                        </View>
                                    </View>
                                    <View style={styles.userName}>
                                        <View style={{flex:1}}>
                                            <Image
                                                source={require('../Assets/image/message.png')}
                                                style={styles.smallImage}
                                            />
                                        </View>
                                        <View style={styles.boxes}>
                                            <Animated.Text style={styles.fontSize3}>Email address</Animated.Text>
                                        </View>
                                    </View>
                                    <View style={styles.userName}>
                                        <View style={{flex:1}}>
                                            <Image
                                                source={require('../Assets/image/padlock.png')}
                                                style={styles.smallImage}
                                            />
                                        </View>
                                        <View style={styles.boxes}>
                                            <Animated.Text style={styles.fontSize3}>Password</Animated.Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{width:deviceWidth/6,height:deviceHeight/8}}>
                                    <TouchableOpacity style={styles.swipeButton} onPress={this.swipeUp}>
                                        <Animated.Image
                                            source={require('../Assets/image/pointing-up-arrow.png')}
                                            style={styles.smallImage}
                                        />
                                        <Animated.Text style={styles.fontSize4}>Swipe Down</Animated.Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            }
                            
                            
                            <TouchableOpacity style={styles.swipeButton} onPress={this.swipeUp}>
                                <Animated.Image
                                    source={require('../Assets/image/pointing-up-arrow.png')}
                                    style={styles.smallImage}
                                />
                                <Animated.Text style={styles.fontSize4}>Swipe Up</Animated.Text>
                            </TouchableOpacity>
                        </Animated.View>
                    </Animated.View>
                </Animated.View>
            </Animated.View>
        );
    }
}
const styles = StyleSheet.create({
    frontPage: {
        flex: 1,
        backgroundColor: 'pink',
    },
    flex1: {
        flex: 1
    },
    backgroundImageView: {
        position: 'absolute'
    },
    backgroundImage: {
        width: deviceWidth,
        height: deviceHeight,
    },
    viewAll: {
        backgroundColor: 'rgba(73, 44, 165,.6)',
        flex: 1,
        alignItems: 'center'
    },
    viewAllFalse: {
        backgroundColor: 'rgba(255, 53, 102,.8)',
        flex: 1,
        alignItems: 'center'
    },
    _header: {
        flex: 2,
        width: deviceWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    _footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        marginTop: 20,
        width: deviceWidth / 4,
        justifyContent: 'center',
        transform: [
            {scaleX: 5},
            {scaleY: 2}
        ]
    },
    _footerScaled: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        marginTop: 20,
        width: deviceWidth / 4,
        justifyContent: 'center',
        transform: [
            {scaleX: 5},
            {scaleY: 2}
        ]
    },
    sliderContainerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        transform: [
            
            {scaleY: 2}
        ]
    },
    titleText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#fff'
    },
    swipeButton: {
        alignItems: 'center'
    },
    fontSize4: {fontSize: 4},
    fontSize3: {fontSize: 3},
    loginItems: {
        width: deviceWidth,
        height: deviceHeight / 3.5,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    smallImage: {
        width: 5,
        height: 5
    },
    userName: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width:deviceWidth/6,
        marginTop:5,
        paddingVertical:3
    },
    boxes:{
        flex:4,
        backgroundColor:'#f3e6e6',
        paddingVertical:2,
        paddingHorizontal:5,
        borderRadius:20
    },
    loginStyle:{
        backgroundColor:'#fff',
        elevation:2,
        paddingVertical:6,
        paddingHorizontal:3,
        borderRadius: 50,
    }
});