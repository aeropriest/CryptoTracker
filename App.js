import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import ListItem from './components/ListItem';
import { SAMPLE_DATA } from './assets/data/sampleData';
import { FlatList } from 'react-native';

const ListHeader = () => (
  <>
      <View style={styles.titleWrapper}>
        <Text style={styles.header}>Markets</Text>
      </View>
      <View style={styles.divider} />
  </>
)

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.divider}/>
        <FlatList
          keyExtractor = {(item) => item.id}
          data = {SAMPLE_DATA}
          renderItem={({ item }) => (
            <ListItem
              name={item.name} 
              symbol={item.symbol} 
              price={item.current_price} 
              change={item.price_change_percentage_7d_in_currency} 
              logo={item.image}
            />
          )}
          ListHeaderComponent={<ListHeader/>}

        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleWrapper:{
    marginTop:80,
    marginHorizontal:16,
  },
  header:{
    fontSize: 24,
    fontWeight: 'bold',
  },
  divider:{
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#A9ABB1',
    marginHorizontal: 16,
    marginTop: 16,
  },
});
