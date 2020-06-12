import React from 'react';

import {View, ImageBackground} from 'react-native';

import GlobalStyles from '../GlobalStyles';

// Components
import Title from '../Components/Title/Title';

const Dashboard = () => {
  return (
    <ImageBackground
      style={GlobalStyles.container}
      source={require('../assets/Home.png')}>
      <View>
        <Title title={'Dashboard'} />
      </View>
    </ImageBackground>
  );
};

export default Dashboard;
