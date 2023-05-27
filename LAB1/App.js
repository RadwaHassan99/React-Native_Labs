import { StatusBar } from 'expo-status-bar';
import { ScrollView,StyleSheet,Image, Text, View } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsVerticalScrollIndicator={false} >
   <Image style={styles.container} source={{uri:"https://i.pinimg.com/564x/2a/eb/f0/2aebf09d5802fce5d5c6815f3fd60d21.jpg",
        }}></Image>
           <Image style={styles.image} source={{uri:"https://i.pinimg.com/564x/b0/f6/f8/b0f6f818dac0e4d048a0cc00815f37a7.jpg",
        }}></Image>
           <Image  style={styles.image} source={{uri:"https://i.pinimg.com/564x/f7/89/34/f789345b74773001768ac7dd04e208ac.jpg",
        }}></Image>
          <Image style={styles.image} source={{uri:"https://i.pinimg.com/564x/d0/8f/74/d08f74eb2361110a3ed1cb70f34ee310.jpg",
        }}></Image>
          <Image style={styles.image} source={{uri:"https://i.pinimg.com/564x/a1/f6/f3/a1f6f3f83e029bacb06c191e1401b5f0.jpg",
         }}></Image>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width:450,
    height:850,
  }
});
