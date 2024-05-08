import styled from "styled-components/native";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
const PostImage = styled.Image`
  height: 300px;
  width: 300px;
  border-radius: 12px;
  margin-right: 12px;
`;

const PostText = styled.Text`
  font-size: 30px;
  font-weight: 700;
  color: rgb(77, 44, 7);
`;

const FullPostView = styled.View`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;

export const FullPost = ({ route }) => {
  const { img, date, title } = route.params;
  return (
    <FullPostView>
      <PostImage
        source={{
          uri: img,
        }}
      />
      <PostText>{title}</PostText>
    </FullPostView>
  );
};
