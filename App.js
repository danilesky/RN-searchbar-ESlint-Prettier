import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Search from "./src/components/Search";
import CardItem from "./src/components/CardItem";
import SearchContent from "./src/components/SearchContent";

const animeList = [
  {
    id: 0,
    title: "Naruto",
    picture:
      "https://cdn-images.win.gg/resize/w/1000/format/webp/type/progressive/fit/cover/path/wp/uploads/2022/05/naruto.jpg",
  },
  {
    id: 2,
    title: "Demon Slayer",
    picture:
      "https://i0.wp.com/www.monstersandcritics.com/wp-content/uploads/2020/05/Demon-Slayer-Season-3-How-the-Kimetsu-no-Yaiba-mangas-ending-affects-the-animes-final-season.jpg?resize=780%2C439&ssl=1",
  },
  {
    id: 3,
    title: "Death Note",
    picture:
      "https://refstatic.sk/article/death-note-je-nesmierne-napinavym-a-genialne-napisanym-anime-ktore-ta-dostane-svojim-prepracovanym-pribehom~8cde3dfbab565cf1e8d1.jpg?is=919x570c&ic=0x8x1680x1041&c=2w&s=d8d4592bdf90fa78dcafeec5820dc5d05567f46f60be1679ead3f69cdd39ac99",
  },
  {
    id: 4,
    title: "My Hero Academia",
    picture:
      "https://i.kinja-img.com/gawker-media/image/upload/c_scale,f_auto,fl_progressive,pg_1,q_80,w_800/10e1b6c2c0023dd56a5284470be57c70.jpg",
  },
  {
    id: 5,
    title: "Attack on Titans",
    picture:
      "https://refstatic.sk/article/fb84b8ec063a975072fe.jpg?ic=69x0x1741x1080&is=1200x630c&c=2w&s=f469452709a383c328e6213e8be473851ad6a52eb813c87cc5ba99a4ed6faea6",
  },
];

export default function App() {
  const [searchQuery, setQuery] = useState("");
  return (
    <>
      <SafeAreaView>
        <View style={styles.search}>
          <Search setQuery={setQuery} />
        </View>
      </SafeAreaView>
      <View style={styles.bodyWrapper}>
        <View style={styles.body}>
          <ScrollView style={styles.cardWrapper}>
            <SearchContent data={animeList} query={searchQuery} />
          </ScrollView>
        </View>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  bodyWrapper: {
    flex: 1,
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  search: {
    alignSelf: "stretch",
    padding: 10,
  },
  cardWrapper: {
    alignSelf: "stretch",
    padding: 10,
  },
});
