import styled from "styled-components/native";

const PostView = styled.View`
  flex-direction: row;

  margin-top: 15px;
  padding: 15px;
  border-bottom-style: solid;
  border-bottom-color: gray;
  border-bottom-width: 1px;
`;

const PostImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  margin-right: 12px;
`;

const PostTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
`;

const PostDetails = styled.View`
  display: flex;
  //justify-content: space-between;
`;

const PostDate = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`;

export const Post = ({ img, title, date }) => {
  return (
    <PostView>
      <PostImage
        source={{
          uri: img,
        }}
      />
      <PostDetails>
        <PostTitle>{title}</PostTitle>
        <PostDate>{date}</PostDate>
      </PostDetails>
    </PostView>
  );
};
