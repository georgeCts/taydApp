import React from 'react';
import {StyleSheet, Image, Dimensions, StatusBar, TouchableWithoutFeedback, Keyboard, View, Alert} from 'react-native';
import { Block, Checkbox, Text, Button, theme } from 'galio-framework';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import { Icon, Input } from '../components';
import PropertyType from '../components/PropertyTypes';
import { Images, nowTheme } from '../constants';

const { width, height } = Dimensions.get('screen');

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={{flex : 1}}>
      <StatusBar barStyle={'dark-content'} />
      {children}
    </View>
  </TouchableWithoutFeedback>
);

class PropertyLocationScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading       : true,
            markers         : [],
            location        : null,
            locationSelected: false,
            errorMessage    : null,

            
            propertyTypeValue : null,
            address           : ''
        };

        this._getLocationAsync();
    }

    _getLocationAsync = async () => {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
        this.setState({
          errorMessage: 'No se ha concedido permiso para acceder a la localización.',
        });
      }

      let location = await Location.getCurrentPositionAsync({});
      this.setState({ location });
    }

    updatePropertyType = (value) => {
      this.setState({ propertyTypeValue: value });
    }

    handleBottomButton = () => {
      if(this.state.locationSelected) {
        this.props.navigation.navigate('PropertyInfo', {
          address   : this.state.address,
          location  : this.state.location.coords
        });
      } else if(this.state.address != '') {
        this.setState({locationSelected : true});
      } else {
        Alert.alert("Upps!", "No se ha colocado la dirección de la propiedad.");
      }
    }

    render() {
      let { location, locationSelected, address } = this.state;
        return (
        <DismissKeyboard>
          {
            (location != null) ?
            (
              <View style={styles.container}>
                {
                  locationSelected && (
                    <View style={[styles.overlay, { height: height }]} />
                  )
                }

                <MapView 
                    style={styles.mapStyle}
                    pitchEnabled={!locationSelected ? true : false}
                    rotateEnabled={!locationSelected ? true : false}
                    scrollEnabled={!locationSelected ? true : false}
                    zoomEnabled={!locationSelected ? true : false}
                    initialRegion={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01
                    }}
                >
                  <MapView.Marker
                    key={0}
                    draggable={!locationSelected ? true : false}
                    onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
                    coordinate={{
                      latitude: location.coords.latitude,
                      longitude: location.coords.longitude,
                    }}
                    title={'Mi ubicación'}
                    description={'Esta ubicación será registrada en tayd'}
                  />
                </MapView>
                
                <View style={[styles.bottomContainer, !locationSelected ? { height: 160 } : {height: 250}]}>
                  <View style={[{ justifyContent: 'center', alignContent: 'center', paddingTop: 15 }, locationSelected ? styles.titleBorder : null]}>
                    <Text style={{fontFamily: 'montserrat-regular', textAlign: 'center', fontWeight: '700', paddingBottom: 10}} color={nowTheme.COLORS.SECONDARY} size={25}>
                      { locationSelected ? 'Confirmar dirección' : 'Dirección' }
                    </Text>
                  </View>

                  {
                    !locationSelected
                      ? (
                        <View>
                          <View style={{justifyContent: 'center', alignContent: 'center', paddingTop: 5}}>
                            <Text style={{fontFamily: 'montserrat-regular', textAlign: 'center', fontWeight: '500'}} color={nowTheme.COLORS.SECONDARY} size={12}>
                              Usa el PIN para verificar tu domicilio en el mapa.
                            </Text>
                          </View>

                          <View style={{ marginBottom: 5, justifyContent: 'center', alignContent: 'center', paddingTop: 10, }}>
                            <Input
                              placeholder="Av. Paseo Tabasco #457"
                              onChangeText={(text) => this.setState({address : text})}
                              style={styles.inputs}
                              iconContent={
                                <Image style={styles.inputIcons} source={Images.Icons.Ubicacion} />
                              }
                              />
                          </View>
                        </View>
                      )
                      : (
                        <View>
                          <View style={{justifyContent: 'center', alignContent: 'center', padding: 10, borderBottomWidth: 1, borderBottomColor: '#E3E3E3' }}>
                            <Text style={{ fontFamily: 'montserrat-regular', textAlign: 'center', fontWeight: '600' }} color={'#E3E3E3'} size={18}>
                              { address }
                            </Text>
                          </View>

                          <View style={{ justifyContent: 'center', alignContent: 'center', paddingTop: 5 }}>
                            <Text style={{ fontFamily: 'montserrat-regular', textAlign: 'center', fontWeight: '500' }} color={nowTheme.COLORS.SECONDARY} size={12}>
                              El domicilio es:
                            </Text>
                          </View>

                          <View style={{ justifyContent: 'center', alignContent: 'center', paddingTop: 5 }}>
                            <PropertyType value={this.state.propertyTypeValue} updateValue={this.updatePropertyType} />
                          </View>
                        </View>
                      )
                    }
                </View>

                <Block center style={{zIndex : 2}}>
                  <Button color={nowTheme.COLORS.BASE} round style={styles.createButton} onPress={() => this.handleBottomButton()}>
                    <Text style={{ fontFamily: 'montserrat-bold' }} size={14} color={nowTheme.COLORS.WHITE}>
                          { locationSelected ? 'CONFIRMAR' : 'SIGUIENTE' }
                    </Text>
                  </Button>
                </Block>
              </View>
            ) : (
              <Text>Cargando...</Text>
            )
          }
        </DismissKeyboard>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.5,
    backgroundColor: 'black',
    width: width,
    zIndex: 1
  },
  mapStyle: {
    zIndex: -1,
    ...StyleSheet.absoluteFillObject,
  },

  titleBorder: {
    borderBottomWidth : 1,
    borderBottomColor: '#E3E3E3'
  },

  inputIcons: {
    marginRight: 25,
    width: 25,
    height: 25,
  },
  inputs: {
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 21.5
  },

  bottomContainer: {
    zIndex: 2,
    backgroundColor: nowTheme.COLORS.WHITE,
    borderRadius: 50,
    width: width * 0.88,
    paddingHorizontal: 20,
    shadowColor: nowTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.6,
    elevation: 1,
    justifyContent: 'center',
    alignContent : 'center',
    marginBottom: 10,
  },

  createButton: {
    width: width * 0.4,
    marginTop: 15,
    marginBottom: 40
  },
});

export default PropertyLocationScreen;
