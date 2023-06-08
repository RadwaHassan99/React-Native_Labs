import React from "react";
import { View,Text,SectionList,Image,} from "react-native";
import styles from "../../styles";
const Contact = () => {
  const sections = [
    {
      id: "0",
      title: "A",
      data: [
        { id: "0", text: "Alaa", img: require("../../assets/avatar2.png") },
        { id: "1", text: "Ahmed", img: require("../../assets/avatar1.png") },
        { id: "2", text: "Amr", img: require("../../assets/user.png") },
      ],
    },
    {
      id: "1",
      title: "B",
      data: [
        { id: "3", text: "Bassant", img: require("../../assets/avatar2.png") },
        { id: "4", text: "Belal", img: require("../../assets/avatar1.png") },
      ],
    },
    {
      id: "2",
      title: "C",
      data: [
        { id: "5", text: "Candy", img: require("../../assets/avatar2.png") },
        { id: "6", text: "Cela", img: require("../../assets/avatar2.png") },
      ],
    },
    {
      id: "3",
      title: "D",
      data: [
        { id: "7", text: "Doha", img: require("../../assets/avatar2.png") },
        { id: "8", text: "Dany", img: require("../../assets/user.png") },
      ],
    },
    {
        id: "4",
        title: "R",
        data: [
          { id: "9", text: "Radwa", img: require("../../assets/avatar2.png") },
          { id: "10", text: "Ramy", img: require("../../assets/avatar1.png") },
        ],
      },
  ];

  return (
    <View>
      <SectionList
        sections={sections}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
        renderItem={({ item: { text, img } }) => (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              paddingVertical: 6,
              paddingHorizontal: 6,
            }}
          >
            <Image
              source={img}
              style={{
                width: 32,
                height: 32,
                borderRadius: 50,
              }}
            />
            <Text style={[styles.itemStyle, { flexGrow: 2 }]}>{text}</Text>
          </View>
        )}
        keyExtractor={(props) => props.id}
      ></SectionList>
    </View>
  );
};

export default Contact;