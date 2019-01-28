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

import {widthPercentage, heightPercentage} from "./Dimen";

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;


export default class FrontPage2 extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            anim: new Animated.Value(0),
            swipe: false,
            loginLogoff: true,
            screen: Dimensions.get('window'),
        }
    }
    
    animateLayout = {
        duration: 1000,
        create: {
            property: 'scaleXY',
            type: 'easeInEaseOut',
            duration: 700,
        },
        update: {
            property: 'opacity',
            type: 'easeInEaseOut',
            duration: 700,
            // initialVelocity: .1
        },
        delete: {
            property: 'opacity',
            type: 'easeIn',
            duration: 400,
        }
    };
    
    
    karim = () => {
        LayoutAnimation.configureNext(this.animateLayout);
        this.setState({swipe: !this.state.swipe})
    };
    
    logIn = () => {
        LayoutAnimation.configureNext(this.animateLayout);
        this.setState({loginLogoff: true})
    };
    logOff = () => {
        LayoutAnimation.configureNext(this.animateLayout);
        this.setState({loginLogoff: false})
    };
    
    
    render() {
        return (
            
            <Animated.View style={styles.frontPage}>
                
                <Animated.Text style={styles.backgroundImageView}>
                    <Animated.Image
                        source={require('../Assets/image/backGround.png')}
                        style={styles.backgroundImage}
                    />
                </Animated.Text>
                
                
                <Animated.View style={this.state.swipe ? styles.viewAllScaled : styles.viewAll}>
                    <Animated.View style={this.state.swipe ? styles.coinView : styles.coinViewMoved}>
                        <Animated.Image
                            source={require('../Assets/image/coin2.png')}
                            style={styles.coin}
                        />
                    </Animated.View>
                    <Animated.View style={!this.state.swipe ? styles._header : styles._headerScaled}>
                        {!this.state.swipe && <Animated.Text style={styles.titleText}>B$D</Animated.Text>}
                    </Animated.View>
                    
                    
                    {this.state.swipe ?
                        <Animated.View style={!this.state.swipe ? styles._footer : styles._footerScaled}>
                            <View style={styles.box}>
                                <View style={styles.imageBoxName}>
                                    <Image
                                        source={require('../Assets/image/user.png')}
                                    />
                                </View>
                                <View style={styles.boxInside}>
                                    <Text>Full name</Text>
                                </View>
                            </View>
                            <View style={styles.box}>
                                <View style={styles.imageBoxName}>
                                    <Image
                                        source={require('../Assets/image/message.png')}
                                    />
                                </View>
                                <View style={styles.boxInside}>
                                    <Text>Email</Text>
                                </View>
                            </View>
                            <View style={styles.box}>
                                <View style={styles.imageBoxName}>
                                    <Image
                                        source={require('../Assets/image/padlock.png')}
                                    />
                                </View>
                                <View style={styles.boxInside}>
                                    <Text>Password</Text>
                                </View>
                            </View>
                            <View style={styles.swipeButton}>
                                <TouchableOpacity style={styles.swipeButton} onPress={this.karim}>
                                    <Image
                                        source={require('../Assets/image/down-arrow.png')}
                                    />
                                    <Text style={{fontWeight: 'bold'}}>Swipe Down</Text>
                                </TouchableOpacity>
                            </View>
                        </Animated.View>
                        :
                        <Animated.View style={!this.state.swipe ? styles._footer : styles._footerScaled}>
                            <View style={styles.swipeButton}>
                                <TouchableOpacity style={styles.swipeButton} onPress={this.karim}>
                                    <Image
                                        source={require('../Assets/image/pointing-up-arrow.png')}
                                    />
                                    <Text style={{fontWeight: 'bold'}}>Swipe Up</Text>
                                </TouchableOpacity>
                            </View>
                        </Animated.View>
                        
                    }
                
                
                </Animated.View>
            </Animated.View>
        );
    }
}


const styles = StyleSheet.create({
    frontPage: {
        flex: 1,
    },
    flex1: {
        flex: 1
    },
    backgroundImageView: {
        position: 'absolute',
        flex: 1
    },
    backgroundImage: {
        width: deviceWidth,
        height: deviceHeight,
    },
    titleText: {
        fontSize: 40,
        color: '#fff',
        fontWeight: 'bold'
    },
    coin: {
        width: 400,
        height: 400,
    },
    coinView: {
        position: 'absolute',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    coinViewMoved: {
        position: 'absolute',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
    },
    viewAll: {
        backgroundColor: 'rgba(82, 52, 168,.7)',
        flex: 1,
    },
    viewAllScaled: {
        backgroundColor: 'rgba(255, 50, 103,.8)',
        flex: 1,
    },
    _header: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    _headerScaled: {
        // backgroundColor:'pink',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    _footer: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 130,
        borderTopRightRadius: 130,
        // alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40
    },
    _footerScaled: {
        backgroundColor: '#fff',
        flex: 3,
        // alignItems: 'center',
        // justifyContent: 'center',
        borderTopLeftRadius: 130,
        borderTopRightRadius: 130,
        paddingTop: 40
    },
    swipeButton: {
        flex: 4,
        alignItems: 'center',
        // backgroundColor: 'red',
        justifyContent: 'center'
    },
    box: {
        flex: 1,
        // backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingHorizontal: 40
    },
    boxInside: {
        backgroundColor: '#e7e7e7',
        padding: 10,
        borderRadius: 20,
        flex: 6
    },
    imageBoxName: {
        marginRight: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
});