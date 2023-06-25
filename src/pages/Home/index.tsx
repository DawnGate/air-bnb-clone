import React from 'react';

// react native component
import {SafeAreaView, View} from 'react-native';
import HeadingSearchBox from '../../components/organisms/HeaderSearchBox';

const Home = () => {
  return (
    <SafeAreaView>
      <View>
        <HeadingSearchBox />
      </View>
    </SafeAreaView>
  );
};

export default Home;
