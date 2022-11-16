export const fontFamily = {
    primary: 'var(--font-family-primary)',
    secondary: 'var(--font-family-secondary)',
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
    tight: 'var(--line-height-tight)',
    medium: 'var(--line-height-medium)',
    spaced: 'var(--line-height-spaced)',
    distant: 'var(--line-height-distant)',
};

export const fontWeight = {
    light:'var(--font-weight-light)',
    regular:'var(--font-weight-regular)',
    semiBold:'var(--font-weight-semiBold)',
    bold:'var(--font-weight-bold)',
};

export const fontBase = `${fontWeight.regular} ${fontSize[200]}/${lineHeight.medium} ${fontFamily.secondary}`;
