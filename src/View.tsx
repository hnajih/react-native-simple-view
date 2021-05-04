import React, { Component } from 'react';
import {
  View as ReactView,
  SafeAreaView,
  ViewProps,
  TouchableOpacity,
} from 'react-native';
import { ThemeContext } from './themes-context';

type MyViewProps = ViewProps & {
  row?: boolean;
  wrap?: boolean;
  center?: boolean | 'vertical' | 'horizontal';
  spread?: boolean;
  right?: boolean;
  left?: boolean;
  top?: boolean;
  bottom?: boolean;
  safe?: boolean;
  onPress?: () => void;
  [x: string]: any;
};

export default class View extends Component<MyViewProps> {
  static contextType = ThemeContext;

  render() {
    const {
      row = false,
      wrap = false,
      center,
      spread,
      right,
      left,
      top,
      bottom,
      safe = false,
      onPress,
      style,
      children,
      ...dprops
    } = this.props;

    let props: { [k: string]: any } = {};

    const int_props = ['margin', 'padding', 'radius'];

    Object.entries(dprops)
      .filter((prop) => prop[1])
      .map(([key]) => {
        const s = key.split('-');
        const prop = s[0];
        const value = s[1];

        props[prop] = int_props.includes(prop) ? parseInt(value) : value;
      });

    // console.warn(props);

    const {
      bg: backgroundColor = this.context.theme.colors.bg,
      margin,
      padding = this.context.theme.layout.padding,
      radius = this.context.theme.layout.radius,
    } = props;

    let content = (
      <ReactView
        {...this.props}
        style={[
          style,
          row && { flexDirection: 'row' },
          wrap && { flexWrap: 'wrap' },
          radius !== undefined && { borderRadius: radius },
          backgroundColor !== undefined && { backgroundColor },
          margin !== undefined && { margin },
          typeof padding == 'object'
            ? {
                paddingTop: padding.top,
                paddingRight: padding.top,
                paddingBottom: padding.bottom,
                paddingLeft: padding.left,
              }
            : { padding },
          center == 'vertical' &&
            (row ? { alignItems: 'center' } : { justifyContent: 'center' }),
          center == 'horizontal' &&
            (row ? { justifyContent: 'center' } : { alignItems: 'center' }),
          center && {
            justifyContent: 'center',
            alignItems: 'center',
          },
          spread && (row ? { justifyContent: 'space-between' } : {}),
          left &&
            (row
              ? { justifyContent: 'flex-start' }
              : { alignItems: 'flex-start' }),
          right &&
            (row ? { justifyContent: 'flex-end' } : { alignItems: 'flex-end' }),
          top &&
            (row
              ? { alignItems: 'flex-start' }
              : { justifyContent: 'flex-start' }),
          bottom &&
            (row ? { alignItems: 'flex-end' } : { justifyContent: 'flex-end' }),
        ]}
      >
        {children}
      </ReactView>
    );

    if (safe) {
      content = <SafeAreaView>{content}</SafeAreaView>;
    }

    if (onPress !== undefined) {
      content = (
        <TouchableOpacity onPress={onPress}>{content}</TouchableOpacity>
      );
    }

    return content;
  }
}
