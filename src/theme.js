const colorName = {
    mineShaft: "#252525",
    slateGray: "#6E7E91",
    scienceBlue: "#0366D6",
    white: "#FFFFFF",
    mercury: "#E5E5E5",
    whiteLilac: "#FBFBFE",
    iron: "#D1D5DA",
    dodgerBlue: "#2188FF",
    mineShaftLighter: "#313131",
};

const commonTheme = {
    breakpoint: {
        mobileMax: 776,
        tabletMax: 1124,
        tabletMin: 777,
    },
};

export const lightTheme = {
    ...commonTheme,
    colors: {
        primary: colorName.scienceBlue,
        textPrimary: colorName.mineShaft,
        site: {
            background: colorName.whiteLilac,
            text: colorName.slateGray
        },
        buttonLink: {
            background: colorName.scienceBlue,
            text: colorName.white,
        },
        headerLine: colorName.mercury,
        boxBackground: colorName.white,
        themeSwitch: {
            background: colorName.mercury,
            backgroundIcon: colorName.slateGray,
            colorIcon: colorName.white,
        },
    },
};

export const darkTheme = {
    ...commonTheme,
    colors: {
        primary: colorName.dodgerBlue,
        textPrimary: colorName.white,
        site: {
            background: colorName.mineShaft,
            text: colorName.white,
        },
        buttonLink: {
            background: colorName.dodgerBlue,
            text: colorName.white,
        },
        headerLine: colorName.iron,
        boxBackground: colorName.mineShaftLighter,
        themeSwitch: {
            background: colorName.mineShaftLighter,
            backgroundIcon: colorName.white,
            colorIcon: colorName.mineShaft,
        },
    },
};