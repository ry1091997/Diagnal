//import liraries
import React, {Component, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import Header from '../Components/Header';
import {widthToDp} from '../Config/Responsive';
import Page1 from '../Config/API/PAGE1.json';
import Page3 from '../Config/API/PAGE3.json';
import Page2 from '../Config/API/PAGE2.json';
import ItemCard from '../Sections/ItemCard';
import TextInputComponent from '../Components/TextInputComponent';
import {makeUrl} from '../Shared/Utils';

// create a component
const Home = props => {
  const [data, setData] = useState({
    title: '',
    item: [],
    nextPageNo: 1,
  });
  const originalData = useRef([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    _fetchApi();
  }, []);

  const _fetchApi = async isHardRefresh => {
    let fetchData = async () => {
      const pages = {
        Page1,
        Page2,
        Page3,
      };
      let temp = 'Page' + data.nextPageNo;
      let tempPageData = pages?.[temp];
      if (tempPageData?.page) {
        console.log('pageData=>', tempPageData, temp);
        setData(prev => {
          return {
            ...prev,
            ...{
              title: tempPageData?.page?.title,
              item: [
                ...prev.item,
                ...tempPageData.page['content-items']?.content,
              ],
              nextPageNo: Number(tempPageData.page['page-num-requested']) + 1,
            },
          };
        });
      }
    };
    if (isHardRefresh) {
      setData({
        title: Page1?.page?.title,
        item: Page1?.page['content-items']?.content,
        nextPageNo: Number(Page1?.page['page-num-requested']) + 1,
      });
      return;
    }
    setLoading(true);
    await fetchData();
    setLoading(false);
  };

  // top pull refresh the page
  const onRefresh = async () => {
    if (!showSearch) {
      setRefreshing(true);
      _fetchApi(true);
      setRefreshing(false);
    }
  };

  // onPress Search icon
  const _onPressSearch = () => {
    if (!showSearch) {
      originalData.current = data?.item;
    } else {
      setData(prev => {
        return {...prev, ...{item: originalData.current}};
      });
    }
    setShowSearch(!showSearch);
  };

  // filter data as per user input
  const _filterData = searchText => {
    if (searchText === '') {
      setData(prev => {
        return {...prev, ...{item: originalData.current}};
      });
    } else {
      const pattern = `^${searchText}`;
      const regex = new RegExp(pattern, 'i');
      const filterData = originalData.current.filter(item =>
        regex.test(item.name.toLowerCase()),
      );
      setData(prev => {
        return {...prev, ...{item: filterData}};
      });
    }
  };

  //  renderItem List
  const renderItem = ({item, index}) => {
    return (
      <View>
        <ItemCard imageName={makeUrl(item)} itemName={item?.name} />
      </View>
    );
  };
  const renderFooter = () => {
    if (!loading) {
      return null;
    }
    return <ActivityIndicator color={'#000'} size="large" />;
  };
  // when there is no data then this component runs
  const ListEmptyComponent = () => {
    return (
      <View style={{alignItems: 'center', marginTop: widthToDp(5)}}>
        <Text style={{color: '#fff'}}>No Data</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header
        headerText={'Romantic Comedy'}
        onPressSearch={() => _onPressSearch()}
        _onBackClick={() => props.navigation.navigate('landing')}
      />
      {showSearch && (
        <View style={styles.textWrapper}>
          <TextInputComponent
            _onChangeText={text => _filterData(text)}
            placeholder="Search..."
            placeholderTextColor={'#fff'}
            autoFocus={false}
            showClearBUtton={true}
            _onClickClearButton={() => {
              setShowSearch(false);
              setData(prev => {
                return {...prev, ...{item: originalData.current}};
              });
            }}
          />
        </View>
      )}
      <View style={styles.flatWrapper}>
        <FlatList
          data={data?.item}
          renderItem={renderItem}
          keyExtractor={(item, index) => item?.name + index.toString()}
          numColumns={3}
          columnWrapperStyle={styles.columStyle}
          contentContainerStyle={styles.contentStyle}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.6}
          onEndReached={() => !showSearch && _fetchApi()}
          ListFooterComponent={renderFooter}
          refreshControl={
            <RefreshControl
              refreshing={!showSearch && refreshing}
              onRefresh={onRefresh}
              colors={['green']}
            />
          }
          ListEmptyComponent={ListEmptyComponent}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  textWrapper: {marginHorizontal: widthToDp(2)},
  flatWrapper: {paddingHorizontal: widthToDp(2), flex: 1},
  columStyle: {
    gap: widthToDp(2),
  },
  contentStyle: {gap: widthToDp(6)},
});

export default Home;
