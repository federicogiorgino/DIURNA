import React, { useContext, FC, useState } from "react";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";

import SafeArea from "../../components/SafeArea";
import CustomText from "../../components/CustomText";
import Row from "../../components/Row";
import Page from "../../components/Page";

import { CategoriesContext } from "../../context/Categories.context";
import CategoryCard from "./CategoryCard";
import Spacer from "../../components/Spacer";

import { styles } from "./styles";

interface SearchScreenProps {
  navigation: any;
}

const SearchScreen: FC<SearchScreenProps> = ({ navigation }) => {
  const { selectedCategories } = useContext(CategoriesContext);
  const [query, setQuery] = useState("");
  return (
    <SafeArea>
      <Page>
        <Row marginBottom={30}>
          <CustomText variant="title">Search</CustomText>
        </Row>
        <Searchbar
          placeholder="Looking for something specific?"
          value={query}
          onChangeText={(e) => setQuery(e)}
          onEndEditing={() => {
            if (query === "") return;
            navigation.navigate("SearchResultsScreen", { category: query });
          }}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <Spacer height={30} />
        <FlatList
          data={selectedCategories}
          renderItem={({ item }) => <CategoryCard category={item} />}
          keyExtractor={(item) => item.name.toString()}
          showsVerticalScrollIndicator={false}
        />
      </Page>
    </SafeArea>
  );
};

export default SearchScreen;
