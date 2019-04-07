
<template>
  <div id='app'>
    <div id='nav' v-if='showNav'>
      <router-link to='/'>Home</router-link>|
      <router-link to='/login'>Login</router-link>|
      <router-link to='/main'>Main</router-link>|
      <router-link to='/selection'>Final Selection</router-link>|
      <router-link to='/settings'>Settings</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components: {
  },
  data: function () {
    return {
      showNav: false,
      results: {
        restaurants: [
          {
            id: 1,
            name: 'Tables',
            address: '2267 Kearney St',
            city: 'Denver',
            state: 'Colorado',
            geo_lat: 39.7504572,
            geo_long: -104.9178084,
            schedule: {
              monday: 'closed',
              tuesday: '1700-2130',
              wednesday: '1700-2130',
              thursday: '1700-2130',
              friday: '1700-2130',
              saturday: '1700-2130',
              sunday: 'closed'
            },
            phone_number: '(303) 388-0299',
            url: 'tablesonkearney.com',
            price_rank: 2,
            description: 'text',
            images: ['url_1', 'url_2', 'url_3', 'url_4', 'url_5']
          },
          {
            id: 2,
            name: 'Root Down',
            address: '1600 W 33rd Ave',
            city: 'Denver',
            state: 'Colorado',
            geo_lat: 39.7630808,
            geo_long: -105.0056028,
            schedule: {
              monday: '1600-2200',
              tuesday: '1600-2200',
              wednesday: '1600-2200',
              thursday: '1600-2200',
              friday: '1100-1400, 1600-2300',
              saturday: '1000-1430, 1700-2300',
              sunday: '1000-1430, 1700-2200'
            },
            phone_number: '(303) 993-4200',
            url: 'rootdowndenver.com',
            price_rank: 3,
            description: 'text',
            images: ['url_1', 'url_2', 'url_3', 'url_4', 'url_5']
          },
          {
            id: 3,
            name: 'Ambli Mexico',
            address: '600 S Holly St',
            city: 'Denver',
            state: 'Colorado',
            geo_lat: 39.70592,
            geo_long: -104.920772,
            schedule: {
              monday: '1600-2100',
              tuesday: '1600-2100',
              wednesday: '1600-2100',
              thursday: '1600-2100',
              friday: '1600-2200',
              saturday: '1700-2200',
              sunday: 'closed'
            },
            phone_number: '(303) 355-9463',
            url: 'amblidenver',
            price_rank: 2,
            description: 'text',
            images: ['url_1', 'url_2', 'url_3', 'url_4', 'url_5']
          },
          {
            id: 4,
            name: 'Izakaya Den',
            address: '1487A S Pearl St',
            city: 'Denver',
            state: 'Colorado',
            geo_lat: 39.6896802,
            geo_long: -104.980587,
            schedule: {
              monday: 'closed',
              tuesday: '1700-2200',
              wednesday: '1700-2200',
              thursday: '1700-2200',
              friday: '1700-2300',
              saturday: '1130-1430, 1700-2300',
              sunday: 'closed'
            },
            phone_number: '(303) 777-0691',
            url: 'izakayaden.net',
            price_rank: 3,
            description: 'text',
            images: ['url_1', 'url_2', 'url_3', 'url_4', 'url_5']
          },
          {
            id: 5,
            name: 'Snooze an AM Eatery',
            address: '1701 Wynkoop St #150',
            city: 'Denver',
            state: 'Colorado',
            geo_lat: 39.752966,
            geo_long: -105.000256,
            schedule: {
              monday: '0630-1430',
              tuesday: '0630-1430',
              wednesday: '0630-1430',
              thursday: '0630-1430',
              friday: '0630-1430',
              saturday: '0630-1430',
              sunday: '0630-1430'
            },
            phone_number: '(303) 825-3536',
            url: 'snoozeeatery.com',
            price_rank: 2,
            description: 'text',
            images: ['url_1', 'url_2', 'url_3', 'url_4', 'url_5']
          },
          {
            id: 6,
            name: 'Park Burger Highlands',
            address: '2643 W 32nd Ave',
            city: 'Denver',
            state: 'Colorado',
            geo_lat: 39.752945,
            geo_long: -105.0657576,
            schedule: {
              monday: '1100-2100',
              tuesday: '1100-2100',
              wednesday: '1100-2100',
              thursday: '1100-2100',
              friday: '1100-2200',
              saturday: '1100-2200',
              sunday: '1100-2100'
            },
            phone_number: '(303) 862-8461',
            url: 'parkburger.com',
            price_rank: 1,
            description: 'text',
            images: ['url_1', 'url_2', 'url_3', 'url_4', 'url_5']
          },
          {
            id: 7,
            name: 'Sushi Den',
            address: '1487 S Pearl St',
            city: 'Denver',
            state: 'Colorado',
            geo_lat: 39.6895673,
            geo_long: -104.9827873,
            schedule: {
              monday: '1130-1430, 1645-2230',
              tuesday: '1130-1430, 1645-2230',
              wednesday: '1130-1430, 1645-2230',
              thursday: '1130-1430, 1645-2230',
              friday: '1130-1430, 1645-2300',
              saturday: '1630-2300',
              sunday: '1700-2230'
            },
            phone_number: '(303) 777-0826',
            url: 'sushiden.net',
            price_rank: 3,
            description: 'text',
            images: ['url_1', 'url_2', 'url_3', 'url_4', 'url_5']
          },
          {
            id: 8,
            name: 'Highland Tap and Burger',
            address: '2219 W 32nd Ave',
            city: 'Denver',
            state: 'Colorado',
            geo_lat: 39.7622205,
            geo_long: -105.0133391,
            schedule: {
              monday: '1100-0000',
              tuesday: '1100-0000',
              wednesday: '1100-0000',
              thursday: '1100-0000',
              friday: '1100-0000',
              saturday: '1000-0000',
              sunday: '1000-0000'
            },
            phone_number: '(720) 287-4493',
            url: 'highlandtapdenver.com',
            price_rank: 2,
            description: 'text',
            images: ['url_1', 'url_2', 'url_3', 'url_4', 'url_5']
          },
          {
            id: 9,
            name: 'Maci Cafe',
            address: '1575 Boulder St Suite B',
            city: 'Denver',
            state: 'Colorado',
            geo_lat: 39.7590769,
            geo_long: -105.0131463,
            schedule: {
              monday: '0600-1700',
              tuesday: '0600-1700',
              wednesday: '0600-1700',
              thursday: '0600-1700',
              friday: '0600-1700',
              saturday: '0700-1700',
              sunday: '0800-1500'
            },
            phone_number: '(720) 855-7585',
            url: 'macicafedenver.com',
            price_rank: 1,
            description: 'text',
            images: ['url_1', 'url_2', 'url_3', 'url_4', 'url_5']
          },
          {
            id: 10,
            name: 'Columbine Steak House & Lounge',
            address: '300 Federal Blvd',
            city: 'Denver',
            state: 'Colorado',
            geo_lat: 39.7213067,
            geo_long: -105.0269484,
            schedule: {
              monday: '1000-0000',
              tuesday: '1000-0000',
              wednesday: '1000-0000',
              thursday: '1000-0000',
              friday: '1000-0000',
              saturday: '1000-0000',
              sunday: '1000-0000'
            },
            phone_number: '(303) 936-9110',
            url: 'restaurantwebexpert.com',
            price_rank: 2,
            description: 'text',
            images: ['url_1', 'url_2', 'url_3', 'url_4', 'url_5']
          }
        ]
      }
    }
  },
  methods: {
    yeet: function () {
      console.log('yeeet')
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 5vmin;
}

#app {
  font-family: 'Helvetica', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
