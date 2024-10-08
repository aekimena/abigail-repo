import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "react-native-collapsible-tab-view";
import _styles from "../../utils/_styles";
import spacing from "../../utils/spacing";
import { ProductView } from "./ProductView";
import { ListLoader } from "../loadingDisplay/ListLoader";

export const ProductFlatList = ({
  data,
  isDataAvailable,
  loading,
  error,
  onEndReached,
}: {
  isDataAvailable: boolean;
  data: Array<ProductProps>;
  loading: boolean;
  error: boolean;
  onEndReached: () => void;
}) => {
  return (
    <Tabs.FlatList
      contentContainerStyle={{
        marginTop: 20,
        paddingBottom: 50,
        paddingHorizontal: spacing.padding_horizontal,
      }}
      data={data}
      numColumns={2}
      keyExtractor={(item) => item._id}
      renderItem={({ item, index }) => (
        <ProductView item={item} index={index} />
      )}
      ListFooterComponent={loading ? <ListLoader /> : <View />}
      onEndReached={() => {
        if (isDataAvailable == true && !loading) {
          onEndReached();
        }
      }}
    />
  );
};

const styles = StyleSheet.create({});
