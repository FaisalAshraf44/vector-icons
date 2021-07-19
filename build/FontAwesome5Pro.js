import { createFA5iconSet } from './createIconSetFromFontAwesome5';
import glyphMap from './vendor/react-native-vector-icons/glyphmaps/FontAwesome5Pro.json';
import metadata from './vendor/react-native-vector-icons/glyphmaps/FontAwesome5Pro_meta.json';
const fontMap = {
    Regular: require('../../../../assets/fonts/FontAwesome5_Pro_Regular.ttf'),
    Light: require('../../../../assets/fonts/Font Awesome 5 Pro-Light-300.otf'),
    Solid: require('../../../../assets/fonts/FontAwesome5_Pro_Solid.ttf'),
    Brand: require('../../../../assets/fonts/FontAwesome5_Pro_Brands.ttf'),
    Duotone: require('../../../../assets/fonts/FontAwesome5_Pro_Duotone.ttf')
};
export const FA5Style = {
    regular: 'regular',
    light: 'light',
    solid: 'solid',
    brand: 'brand',
    duotone: 'duotone'
};
const iconSet = createFA5iconSet(glyphMap, metadata, fontMap, true);
export default iconSet;
//# sourceMappingURL=FontAwesome5Pro.js.map