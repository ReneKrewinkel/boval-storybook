import tokens from '../../../resources/style/tokens'

const ButtonStyle = {

    default: {
        borderRadius: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // width: "100%",
        height: 40,

    },

    primary: {
        backgroundColor: tokens.colors.colorBrandDark,
        borderWidth: 0,
        color: tokens.colors.colorWhite,
        text: {
            color: tokens.colors.colorWhite,
            textAlign: "center",
            fontWeight: tokens.fontWeight.bold,
        }
    },

    secondary: {
        backgroundColor: tokens.colors.colorTransparent,
        borderColor: tokens.colors.colorBrandDark,
        borderWidth: 1,
        color: tokens.colors.colorWhite,
        text: {
            color: tokens.colors.colorBrandDark,
            textAlign: "center",
            fontWeight: tokens.fontWeight.bold,
        }
    }

}

export default ButtonStyle