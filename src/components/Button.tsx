import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import { forwardRef } from "react";

type ButtonProps = {
  text: string;
} & React.ComponentPropsWithoutRef<typeof Pressable>;

const Button = forwardRef<View | null, ButtonProps>(
  ({ text, ...pressableProps }, ref) => {
    return (
      <Pressable
        className="p-4 items-center rounded-lg bg-blue-500 "
        ref={ref}
        {...pressableProps}
      >
        <Text className="text-white font-bold text-xl ">{text}</Text>
      </Pressable>
    );
  }
);

export default Button;
