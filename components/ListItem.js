import { StyleSheet, View, Text,Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const ListItem = ({name, symbol, price, change, logo}) => {
const priceChangeColor = change > 0 ? '#34C759' : '#FF3B30'
    return (
    <TouchableOpacity>
        <View style={styles.itemwrapper}>
            <View style={styles.leftWrapper}>
                <Image style={styles.image} source={{uri: logo}}/>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.subTitle}>{symbol.toUpperCase()}</Text>
                </View>
            </View>
            <View style={styles.rightWrapper}>
            <Text style={styles.title}>${price.toLocaleString('en-US', {currency: 'USD'}) }</Text>
                <Text style={[styles.subTitle, {color:priceChangeColor}]}>{change.toFixed(2)}%</Text>
            </View>
        </View>     
        <View style={styles.divider} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    itemwrapper: {
        paddingHorizontal: 16,
        marginTop:20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor:'#ff000000'
    },
    leftWrapper : {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image : {
        height:35,
        aspectRatio: 1,
    },
    rightWrapper : {
        alignItems: 'flex-end'
    },
    title : {
        fontSize: 15,
    },
    subTitle : {
        fontSize: 12,
        marginTop: 4,
        color: '#ABABAB'
    },
    titleWrapper:{
        marginLeft: 8,
        
    },
    divider:{
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#A9ABB155',
        marginHorizontal: 16,
        marginTop: 16,
      },
    
  });

  

export default ListItem