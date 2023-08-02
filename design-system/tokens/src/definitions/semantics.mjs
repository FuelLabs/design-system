import { createColor } from '../utils/helpers.mjs';

function inputColor(name) {
  return {
    color: createColor(`{intents.base.12}`),
    placeholder: createColor(`{intents.base.10}`),
    border: createColor(`{intents.${name}.6}`),
    bg: createColor(`{input-bg}`),
    icon: createColor(`{intents.${name}.8}`),
    focus: createColor(`{intents.base.2}`),
  };
}

function isIntentLight(name) {
  return ['primary', 'warning', 'error', 'success'].some((i) => i === name);
}

const categories = {
  solid(name) {
    const isLight = isIntentLight(name);
    return {
      bg: createColor(
        name === 'base' ? '{intents.base.8}' : `{intents.${name}.9}`,
      ),
      border: createColor('transparent'),
      focus: createColor(`{intents.${name}.6}`),
      color: createColor(isLight ? `{black}` : `{white}`),
      icon: createColor(isLight ? `{black}` : `{white}`),
      placeholder: createColor(
        !isLight ? `{intents.${name}.2}` : `{intents.${name}.11}`,
      ),
      'hover-bg': createColor(
        name === 'base' ? '{intents.base.9}' : `{intents.${name}.10}`,
      ),
      'hover-border': createColor('transparent'),
      'hover-color': createColor(isLight ? `{black}` : `{body-inverse}`),
      'hover-icon': createColor(isLight ? `{black}` : `{body-inverse}`),
      'hover-placeholder': createColor(
        !isLight ? `{intents.${name}.3}` : `{intents.${name}.10}`,
      ),
      'disabled-bg': createColor(
        name === 'base' ? '{intents.base.6}' : `{intents.${name}.7}`,
      ),
      'disabled-border': createColor('transparent'),
      'disabled-color': createColor(isLight ? `{blackA.10}` : `{whiteA.10}`),
      'disabled-icon': createColor(isLight ? `{blackA.10}` : `{whiteA.10}`),
    };
  },
  ghost(name) {
    return {
      bg: createColor(
        name === 'base' ? `{intents.base.1}` : `{intents.${name}.6}`,
      ),
      border: createColor(
        name === 'base' ? `{intents.base.1}` : `{intents.${name}.6}`,
      ),
      focus: createColor(
        name === 'base' ? `{intents.base.4}` : `{intents.${name}.6}`,
      ),
      color: createColor(`{intents.${name}.12}`),
      icon: createColor(`{intents.${name}.10}`),
      placeholder: createColor(`{intents.${name}.8}`),
      'hover-bg': createColor(`{intents.${name}.5}`),
      'hover-border': createColor(`{intents.${name}.5}`),
      'hover-color': createColor(`{intents.${name}.12}`),
      'hover-icon': createColor(`{intents.${name}.10}`),
      'hover-placeholder': createColor(`{intents.${name}.9}`),
      'disabled-bg': createColor(`{intents.${name}.3}`),
      'disabled-border': createColor(`{intents.${name}.3}`),
      'disabled-color': createColor(`{intents.${name}.11}`),
      'disabled-icon': createColor(`{intents.${name}.6}`),
    };
  },
  outlined(name) {
    const isLight = isIntentLight(name);
    return {
      bg: createColor('transparent'),
      border: createColor(`{intents.${name}.6}`),
      focus: createColor(`{intents.${name}.6}`),
      color: createColor(
        isLight ? `{intents.${name}.8}` : `{intents.${name}.11}`,
      ),
      icon: createColor(`{intents.${name}.10}`),
      placeholder: createColor(`{intents.${name}.8}`),
      'hover-bg': createColor('transparent'),
      'hover-border': createColor(`{intents.${name}.8}`),
      'hover-color': createColor(
        isLight ? `{intents.${name}.9}` : `{intents.${name}.12}`,
      ),
      'hover-icon': createColor(`{intents.${name}.10}`),
      'hover-placeholder': createColor(`{intents.${name}.9}`),
      'disabled-bg': createColor('transparent'),
      'disabled-border': createColor(`{intents.${name}.6}`),
      'disabled-color': createColor(
        isLight ? `{intents.${name}.6}` : `{intents.${name}.9}`,
      ),
      'disabled-icon': createColor(`{intents.${name}.8}`),
    };
  },
  link(name) {
    const isLight = isIntentLight(name);
    return {
      bg: createColor('transparent'),
      color: createColor(
        isLight ? `{intents.${name}.11}` : `{intents.${name}.9}`,
      ),
      icon: createColor(
        isLight ? `{intents.${name}.11}` : `{intents.${name}.9}`,
      ),
      placeholder: createColor(`{intents.${name}.8}`),
      border: createColor('transparent'),
      focus: createColor('{intents.base.4}'),
      'hover-bg': createColor('transparent'),
      'hover-border': createColor('transparent'),
      'hover-color': createColor(
        isLight ? `{intents.${name}.12}` : `{intents.${name}.10}`,
      ),
      'hover-icon': createColor(
        isLight ? `{intents.${name}.12}` : `{intents.${name}.10}`,
      ),
      'hover-placeholder': createColor(`{intents.${name}.8}`),
      'disabled-bg': createColor('transparent'),
      'disabled-border': createColor('transparent'),
      'disabled-color': createColor(
        isLight ? `{intents.${name}.9}` : `{intents.${name}.7}`,
      ),
      'disabled-icon': createColor(
        isLight ? `{intents.${name}.9}` : `{intents.${name}.7}`,
      ),
    };
  },
};

function semanticCategory(name) {
  return {
    base: categories[name]('base'),
    primary: categories[name]('primary'),
    secondary: categories[name]('secondary'),
    info: categories[name]('info'),
    warning: categories[name]('warning'),
    success: categories[name]('success'),
    error: categories[name]('error'),
  };
}

export function createSemantics(isLight) {
  return {
    white: createColor('#ffffff'),
    black: createColor('#000000'),
    'body-bg': createColor(isLight ? '{white}' : '{black}'),
    'body-inverse': createColor(isLight ? '{black}' : '{white}'),
    'card-bg': createColor('{intents.base.1}'),
    'overlay-bg': createColor('{intents.base.2}'),
    'overlay-text': createColor('{intents.base.11}'),
    'dialog-bg': createColor('{card-bg}'),
    'input-bg': createColor('{intents.base.2}'),
    border: createColor('{scales.gray.6}'),
    borderHover: createColor('{scales.gray.8}'),
    brand: createColor(
      isLight ? '{intents.primary.10}' : '{intents.primary.9}',
    ),
    text: {
      color: createColor('{intents.base.11}'),
      heading: createColor('{intents.base.12}'),
      subtext: createColor('{intents.base.10}'),
      muted: createColor('{intents.base.8}'),
      icon: createColor('{intents.base.9}'),
      inverse: createColor('{intents.base.12}'),
      active: createColor('{intents.base.12}'),
      link: createColor(
        isLight ? '{intents.primary.8}' : '{intents.primary.9}',
      ),
      'link-active': createColor(
        isLight ? '{intents.primary.8}' : '{intents.primary.9}',
      ),
      'link-visited': createColor(
        isLight ? '{intents.primary.8}' : '{intents.primary.9}',
      ),
      'link-hover': createColor('{intents.primary.11}'),
      'link-disabled': createColor('{intents.primary.7}'),
    },
    input: {
      disabled: {
        color: createColor('{intents.base.8}'),
        placeholder: createColor('{intents.base.8}'),
        border: createColor('{intents.base.4}'),
        bg: createColor('{intents.base.1}'),
        icon: createColor('{intents.base.6}'),
        focus: createColor(`{intents.base.2}`),
      },
      active: {
        color: createColor(`{intents.base.12}`),
        placeholder: createColor(`{intents.base.10}`),
        border: createColor(`{borderHover}`),
        bg: createColor(`{input-bg}`),
        icon: createColor(`{intents.base.8}`),
        focus: createColor(`{intents.base.2}`),
      },
      base: inputColor('base'),
      success: inputColor('success'),
      error: inputColor('error'),
    },
    semantic: {
      solid: semanticCategory('solid'),
      ghost: semanticCategory('ghost'),
      outlined: semanticCategory('outlined'),
      link: semanticCategory('link'),
    },
  };
}