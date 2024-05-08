import { FlatList, View, Text, TouchableOpacity } from "react-native";
import { Post } from "./Post";

const items = [
  "cat",
  "pizza",
  "programming",
  "flower",
  "knif",
  "tie",
  "kill",
  "dog",
  "hot",
  "car",
  "mem",
  "kill",
  "dog",
  "hot",
  "car",
  "mem",
  "programming",
  "flower",
  "knif",
  "tie",
  "kill",
  "dog",
  "hot",
  "car",
  "mem",
  "kill",
  "dog",
  "hot",
  "car",
  "mem",
];

export const Home = ({ navigation }) => {
  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("FullPost", {
                date: new Date() + "",
                title: item + "",
                img: "https://cataas.com/cat/cute/says/cat" + item,
              })
            }
          >
            <Post
              key={item}
              date={new Date() + ""}
              title={item + ""}
              img={"https://cataas.com/cat/cute/says/cat" + item}
            />
          </TouchableOpacity>
        )}
      />
      {/*  */}
    </View>
  );
};
