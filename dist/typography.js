export const fontFamily = {
    primary: 'Source Sans Pro, sans-serif',
    secondary: 'Montserrat, sans-serif',
};

export const fontSize = {
    100: 'var(--font-size-100)',
    200: 'var(--font-size-200)',
    300: 'var(--font-size-300)',
    400: 'var(--font-size-400)',
    500: 'var(--font-size-500)',
    600: 'var(--font-size-600)',
    700: 'var(--font-size-700)',
    800: 'var(--font-size-800)',
};

export const lineHeight = {
    tight: '120%',
    medium: '140%',
    spaced: '160%',
    distant: '180%',
};

export const fontWeight = {
    light: '300',
    regular: '400',
    semiBold: '600',
    bold: '700',
};

export const fontBase = `${fontWeight.regular} ${fontSize[200]}/${lineHeight.medium} ${fontFamily.secondary}`;
