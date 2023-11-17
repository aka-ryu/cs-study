import {Text, View, SafeAreaView} from 'react-native';
import Header from '../../components/Header';

const Home = () => {
  return (
    <SafeAreaView>
      <Header goBack={false} />
      <View>
        <Text>홈페이지 ㅎㅇ</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
