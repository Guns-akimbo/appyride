import { View, FlatList } from "react-native";
import { products } from "../../../utilities/product";
import ProductList from "@/components/productList";

export default function Menu() {
  return (
    <FlatList
      data={products}
      numColumns={2}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      columnWrapperStyle={{ gap: 10 }}
      renderItem={({ item }) => <ProductList product={item} />}
    />
  );
}


// flatlist help run inifite scrollable list like 