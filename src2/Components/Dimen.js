import {Dimensions,PixelRatio} from "react-native";

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

/*
@param {string} widthPercent

@return {number}
*/
const widthPercentage = widthPercent => {
    const elemWidth =parseFloat(widthPercent);
    return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
};
/*
* @param {string} heightPercent
*
* @return {number}
* */


const heightPercentage = heightPercent => {
    const elemHeight = parseFloat(heightPercent);
    return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
};

/*
* @param {object}
* */

const listenOrientationChange = that => {
    Dimensions.addEventListener('change', newDimensions => {
    screenWidth = newDimensions.window.width;
    screenHeight = newDimensions.window.height;
    
    that.setState({
        orientation: screenWidth < screenHeight ? 'portrait':'landscape'
    });
    });
};

const removeOrientationListener = () => {
    Dimensions.removeEventListener('change', () => {});
};

export {
    widthPercentage,
    heightPercentage,
    listenOrientationChange,
    removeOrientationListener
};