import { Product } from "@/types";
import { Link } from "expo-router";
import React from "react";
import { Text, View, Image, Pressable } from "react-native";

type ProductListItemProps = {
  product: Product;
};

const ProductList = ({ product }: ProductListItemProps) => {

  return (
    <Link href={`/menu/${product.id}`}  asChild >
      <Pressable className="bg-white p-4 rounded  max-w-[50%] flex-1 flex justify-center items-center  space-y-4">
        <Image
          source={{ uri: product.image || "loading" }}
          className="w-full aspect-square "
          resizeMode="contain"
        />
        <Text className="text-xl">{product.name}</Text>
        <Text className="text-base">${product.price}</Text>
      </Pressable>
    </Link>
  );
};

export default ProductList;
