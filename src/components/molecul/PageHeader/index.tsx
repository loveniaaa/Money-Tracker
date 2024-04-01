import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import { DummyPhoto } from '../../../assets/image';
import { Button } from '../..';

const PageHeader = ({label, backButton, text, onPress, type}) => {
  if (type === 'withPhoto') {
    return (
      <View style={styles.containerWithPhoto}>
        <View>
          <Text style={styles.appTitle}>Money Tracker</Text>
          <Text style={styles.appSubTitle}>Track Your Money</Text>
        </View>
        <Image source={DummyPhoto} style={styles.photo}/>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {backButton && (<Button type="icon-only" icon="icon-back" onPress={onPress}/>)}
      <View>
        <Text style={styles.label}>{label}</Text>
        {text && <Text style={styles.text}>{text}</Text>}
      </View>
    </View>
  );
};

export default PageHeader;

const styles = StyleSheet.create({
  containerWithPhoto: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 37,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    backgroundColor: '#FFFFFF',
    paddingLeft: 24,
    paddingVertical: 37,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#020202',
    marginLeft: 26,
  },
  appTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#020202',
  },
  appSubTitle: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: '#8D92A3',
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});
