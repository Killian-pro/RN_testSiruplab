import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {chapterType} from '../screens/ChapterScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useAppStore} from '../store/Appstore';

export const CardChapter = ({chapter}: {chapter: chapterType}) => {
  const {chapterShow, toggleChapterStatus} = useAppStore.getState();
  const [_, setRefresh] = useState(false);

  return (
    <View style={styles.body}>
      {!chapter?.url ? (
        <Image
          style={{width: 100, height: 100}}
          source={require('../assets/noImage.png')}
        />
      ) : (
        <Image source={{uri: chapter?.url}} width={100} height={100} />
      )}
      <Text style={styles.textColor}> {chapter.title}</Text>
      <TouchableOpacity
        disabled={chapterShow.includes(chapter.id)}
        onPress={() => {
          toggleChapterStatus(chapter.id);
          setRefresh(prev => !prev);
        }}>
        {chapterShow.includes(chapter.id) ? (
          <Text style={{color: 'green'}}>Lu</Text>
        ) : (
          <Text style={{color: 'red'}}>Non Lu</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'grey',
    padding: 15,
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textColor: {
    color: 'white',
    alignSelf: 'center',
    marginHorizontal: 15,
    flex: 1,
  },
});
