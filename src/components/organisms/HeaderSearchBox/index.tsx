import React from 'react';
import {Pressable, Text, View} from 'react-native';

// icons
import Icon from 'react-native-vector-icons/AntDesign';

// styles
import styles, {bulletUnicode} from './styles';

const HeadingSearchBox = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.searchBoxContainer}>
        {/* Search Button*/}
        <Pressable
          style={({pressed}) => ({
            backgroundColor: pressed ? '#EEEEEE' : 'transparent',
            ...styles.searchIcon,
          })}
          onPress={() => {
            console.warn('click search');
          }}>
          <Icon name="search1" size={24} />
        </Pressable>
        {/* Display text*/}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Where to?</Text>
          <View style={styles.subTitleContainer}>
            <View style={styles.subTitleTextContainer}>
              <Text numberOfLines={1} style={styles.subTitle}>
                Anywhere
              </Text>
            </View>
            <Text style={styles.bulletIcon}>{bulletUnicode}</Text>
            <View style={styles.subTitleTextContainer}>
              <Text numberOfLines={1} style={styles.subTitle}>
                Any week
              </Text>
            </View>
            <Text style={styles.bulletIcon}>{bulletUnicode}</Text>
            <View style={styles.subTitleTextContainer}>
              <Text numberOfLines={1} style={styles.subTitle}>
                Add guests
              </Text>
            </View>
          </View>
        </View>
        {/* Filter Button*/}
        <Pressable
          onPress={e => {
            e.preventDefault();
            e.stopPropagation();
            console.warn('click filter');
          }}
          style={styles.filterIcon}>
          <Icon name="swap" size={24} />
        </Pressable>
      </Pressable>
    </View>
  );
};

export default HeadingSearchBox;
