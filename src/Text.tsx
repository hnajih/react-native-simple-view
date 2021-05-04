import React, { Component } from 'react';
import { Text as ReactText, TextProps } from 'react-native';

import { ThemeContext } from './themes-context';

type MyTextProps = TextProps & {
  bold?: boolean;
  [x: string]: any;
};

export default class Text extends Component<MyTextProps> {
  static contextType = ThemeContext;

  render() {
    const { style, bold, ...dprops } = this.props;

    let props: { [k: string]: any } = {};

    const int_props = ['size'];

    Object.entries(dprops)
      .filter((prop) => prop[1])
      .map(([key]) => {
        const s = key.split('-');
        const prop = s[0];
        const value = s[1];

        props[prop] = int_props.includes(prop) ? parseInt(value) : value;
      });

    const { size: fontSize = this.context.theme.text.default, color } = props;

    return (
      <ReactText
        {...this.props}
        style={[
          style,
          color !== undefined && { color },
          fontSize !== undefined && { fontSize },
          {
            fontWeight: bold
              ? this.context.theme.text.bold
              : this.context.theme.text.boldness,
          },
        ]}
      ></ReactText>
    );
  }
}
