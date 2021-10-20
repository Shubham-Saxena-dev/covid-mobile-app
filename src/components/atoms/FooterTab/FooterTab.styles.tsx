import { StyleSheet } from "react-native";
import config from '../../../config/colors'

export default StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        marginRight: 0,
        marginLeft: 0,
        bottom: 0,
        marginBottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.2,
        borderColor: config.BORDER_GREY,
        
    },
    tabView: {
        backgroundColor: config.WHITE,
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        justifyContent: "space-around",

    },
    iconView: {
        width: 55,
        height: '100%',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',

        backgroundColor: config.WHITE

    },
    iconViewSelect: {
        width: 55,
        height: '100%',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',

        backgroundColor: config.WHITE

    },
    addButton: {
        height: '100%',
        width: '18%',
        marginRight: 0,
        right: 0,
        position: 'absolute'
    },
    noTabView: {
        height: '100%',
        width: '18%',
        marginRight: 0,
        right: 0,
        backgroundColor: config.NAVY_BLUE,
        position: 'absolute'
    },

    roundButton1: {
        width: 38,
        height: 38,
        justifyContent: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: config.NAVY_BLUE,
    },

})