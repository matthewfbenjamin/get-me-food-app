import React from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import FlipCard from 'react-native-flip-card'
import CardView from 'react-native-cardview'
import StarRating from 'react-native-star-rating'
import Communications from 'react-native-communications'
import Icon from 'react-native-vector-icons/Ionicons'
import { Ionicons } from '@expo/vector-icons'

import { globalStyles, peach, purple, H1, H2 } from '../components/Styles'

const createAddress = (location) => {
  let address = ''
  if (location.display_address.length > 0) {
    address = location.display_address.toString()
  } else {
    if (location.address1) address += `${location.address1}`
    if (location.city) address += `${location.city},`
    if (location.state) address += `${location.state}`
    if (location.zip_code) address += `${location.zip_code}`
  }
  return encodeURIComponent(address)
}

const Main = (props) => {
  let { cardToShow, data } = props
  const { searchRadius, location } = data
  /*
  cardToShow = {
    alias: "blue-spoon-coffee-new-york",
    categories: [{ "alias": "delis", "title": "Delis" }],
    coordinates: { latitude: 40.7143174856901, longitude: -74.0067286044359 },
    display_phone: "(212) 619-7230",
    distance: 188.29334458003626,
    id: "jsjJxd8NzEnl19VM94bbGw",
    image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/-k7ibXOrMyz1DSarPzWVYg/o.jpg",
    is_closed: false,
    location: {
      "address1": "373 Columbus Ave",
      "address2": "",
      "address3": "",
      "city": "San Francisco",
      "zip_code": "94133",
      "country": "US",
      "state": "CA",
      "display_address": ["373 Columbus Ave", "San Francisco, CA 94133"]
    },
    name: "Blue Spoon Coffee",
    phone: "+12126197230",
    price: "$",
    rating: 4,
    review_count: 172,
    transactions: [],
    url: "https://www.yelp.com/biz/blue-spoon-coffee-new-york?adjust_creative=AHz3sGxkZjAzv8uu0Q9hqg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=AHz3sGxkZjAzv8uu0Q9hqg",
  }
  */

  let goIcon = ''
  let directionType = ''

  if (searchRadius === 2000) {
    goIcon = 'md-car'
    directionType = 'driving'
  } else if (searchRadius === 1000) {
    goIcon = 'md-bicycle'
    directionType = 'bicycling'
  } else {
    goIcon = 'ios-walk'
    directionType = 'walking'
  }

  console.log(cardToShow.image_url)

  return (
    <View style={globalStyles.viewContainer}>
      {cardToShow.name ?
        <View style={{flex: 1}}>
          <View style={styles.cardContainer}>
            <CardView
              style={styles.card}
              cardElevation={3}
              cardMaxElevation={3}
              cornerRadius={5}>
              <View style={styles.insideCardContainer}>
                <Text style={[{ fontSize: H1 }, styles.topSection]}>{cardToShow.name}</Text>
                <View>
                  {cardToShow.categories.map(category => <Text style={[{ fontSize: H2 }, styles.topSection]} key={category.alias}>{category.title}</Text>)}
                </View>
                <View style={[styles.starContainer, styles.topSection]}>
                  <StarRating
                    buttonStyle={{
                      borderRadius: 8,
                      borderWidth: 3,
                      borderColor: '#d32323',
                      paddingHorizontal: 6,
                      paddingVertical: 4,
                      marginRight: 2,
                    }}
                    disabled
                    emptyStar={'ios-star-outline'}
                    fullStar={'ios-star'}
                    halfStar={'ios-star-half'}
                    iconSet={'Ionicons'}
                    maxStars={5}
                    rating={cardToShow.rating}
                    fullStarColor={'#d32323'}
                    starSize={25}
                  />
                </View>
                <Image
                  resizeMode="contain"
                  style={styles.image}
                  source={{ uri: cardToShow.image_url }}/>
                <View style={styles.linkOutSection}>
                  <TouchableOpacity onPress={() => Communications.phonecall(cardToShow.phone, true)}>
                    <View style={styles.holder}>
                      <Text style={styles.link}>{cardToShow.display_phone}</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => Communications.web(cardToShow.url)}>
                    <View style={styles.holder}>
                      <Text style={styles.link}>See more on Yelp</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </CardView>
          </View>
          <View style={styles.bottomContainer}>
            <TouchableOpacity onPress={props.showNextCard}>
              <View style={{ borderWidth: 4, borderColor: purple, backgroundColor: purple, borderRadius: 50, height: 100, width: 100, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                <Ionicons name="md-close" size={50} color={peach} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Communications.web(`https://www.google.com/maps/dir/?api=1&origin=${location.latitude},${location.longitude}&destination=${createAddress(cardToShow.location)}&travelmode=${directionType}`)}>
              <View style={{ borderWidth: 4, borderColor: peach, backgroundColor: peach, borderRadius: 50, height: 100, width: 100, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                <Ionicons name={goIcon} size={50} color={purple} />
              </View>
            </TouchableOpacity>
          </View>
        </View> :
        <View style={styles.activityIndicator}>
          <ActivityIndicator />
        </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  card: {
    width: '100%',
    height: '100%',
    backgroundColor: peach,
  },
  insideCardContainer: {
    flex: 1,
  },
  topSection: {
    // flex: 1,
    paddingVertical: 5,
  },
  starContainer: {
    width: '50%',
  },
  linkOutSection: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  link: {
    textDecorationLine: 'underline',
    textDecorationColor: '#0000EE',
    color: '#0000EE',
  },
  image: {
    flex: 3,
    height: undefined,
    width: undefined,
    paddingTop: 5,
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
})

export default Main
