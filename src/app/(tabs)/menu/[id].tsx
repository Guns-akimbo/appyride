import Button from "@/components/Button";
import { products } from "@/utilities/product";
import { Stack, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

const sizes = ["S", "M", "L", "XL"];

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams();
  const [selectedSize, setSelectedSize] = useState("");

  const product = products.find((i) => i.id.toString() == id);

  if (!product) {
    return <Text>Product 724484not found </Text>;
  }

  const addToCart = () => {
    if (!product) return;
    console.log("Add to carts");
  };

  return (
    <View className="gap- flex-1 p-6 bg-white  ">
      <Stack.Screen options={{ title: product?.name }} />
      <Image
        source={{ uri: product.image || "loading" }}
        className="w-full aspect-square "
        resizeMode="contain"
      />
      <Text className="text-[28px] ">Select Sizes</Text>
      <View className="flex-row  justify-around mt-2">
        {sizes.map((size) => (
          <Pressable
            onPress={() => {
              setSelectedSize(size);
            }}
            className={`${
              selectedSize === size ? "bg-slate-500" : "bg-white"
            } w-14  items-center justify-center aspect-square rounded-full bg-gray-200 `}
            key={size}
          >
            <Text
              className={` ${
                selectedSize === size ? "text-white " : ""
              } text-[20px] font-medium`}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text className="text-bold text-[25px] mt-auto">${product.price}</Text>

      <View className=" ">
        <Button onPress={addToCart} text="Add to cart" />
      </View>
    </View>
  );
}
