import React from 'react';
import { Image } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import { Block, GalioProvider } from 'galio-framework';

import Screens from './navigation/Screens';
import { Images, nowTheme } from './constants';

// cache app images
const assetImages = [
  Images.Onboarding,
  Images.Logo,
  Images.ProfilePicture,
  Images.RegisterBackground,
  Images.ProfileBackground
];

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    fontLoaded: false
  };

  async componentDidMount() {
    Font.loadAsync({
      'montserrat-regular': require('./assets/font/Montserrat-Regular.ttf'),
      'montserrat-bold'   : require('./assets/font/Montserrat-Bold.ttf'),
      'trueno-extrabold'  : require('./assets/font/TruenoExBd.ttf'),
      'trueno-semibold'   : require('./assets/font/TruenoSBd.ttf'),
      'trueno'            : require('./assets/font/TruenoRg.ttf'),
      'trueno-light'      : require('./assets/font/TruenoLt.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <GalioProvider theme={nowTheme}>
          <Block flex>
            <Screens />
          </Block>
        </GalioProvider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([...cacheImages(assetImages)]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    if (this.state.fontLoaded) {
      this.setState({ isLoadingComplete: true });
    }
  };
}
