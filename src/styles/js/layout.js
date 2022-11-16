import colors from './colors';

export const borderRadiusSize = {
    xs: '2px',
    sm: '8px',
    md: '10px',
    lg: '15px',
    xl: '20px',
    xxl: '50px',
};

export const spacingSize = {
    xs: '8px',
    sm: '10px',
    md: '15px',
    lg: '20px',
    xl: '40px',
    xxl: '80px',
};

export const spacing = {
    contentPadding: '20px',
    contentMargin: '80px',
    global: '20px',
};

export const boxShadow = {
    1: '0px 3px 15px rgba(0, 0, 0, 0.05)',
    2: '0 4px 4px rgba(0, 0, 0, 0.02), 0 0px 9px rgba(0, 0, 0, 0.09)',
    3: '0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22)',
};

export const zIndex = {
    base: '1',
    navigation: '10',
    dropDown: '100',
    page: '1000',
};

export const border = {
    normal: `1px solid ${colors.grey[300]}`,
    focus: `1px solid ${colors.secondary.base}`,
    success: `1px solid ${colors.success.base}`,
    error: `1px solid ${colors.error.base}`,
    warning: `1px solid ${colors.warning.base}`,
};

export const transition = {
    default: `all 0.3s ease`,
    property: 'all',
    duration: 0.3,
    timingFunction: 'ease',
    delay: 0.3,
};
