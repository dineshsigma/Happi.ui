<template>
    <div class="sidenavcategories-mobile">
        <div class="navigation-content">
          <div class="ps-logo pt-5">
              <img 
              src='https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/01408631-c58e-4c67-a578-b2b656948bf1.png'
              alt='Happi Mobiles' />
          </div>
          <p class="navigate-disc" v-if="!userData">Don't have an account yet ? Click here to 
              <span @click="handleSignUp"> Signup
                </span>
          </p>
          <p v-else class="navigate-disc" @click="handleMyAccount">
            <i class="icon-user p-3"></i>My Account
          </p>
        </div>

        <hr class="line-break"></hr>
<div class="height-control" >
  
        <div class="pl-2">
        <h4 class="nav-sub-header pl-2">
            Navigation
        </h4>
            <ul class="pl-4">
                <li v-for="(item, index) in navigationList"
                
                :key="index">
                    <nuxt-link :to="`${item.url}`" >
                        <p class="nav-list-link">{{item.name}}</p>
                    </nuxt-link>
                </li>
            </ul>
        </div>

        <div class="pl-2">
        <h4 class="nav-sub-header pl-2">
            Other Pages
        </h4>
            <ul class="pl-4">
                <li v-for="(item, index) in otherPages"
                
                :key="index">
                  <nuxt-link :to="`${item.url}`" v-if="item.name != 'Careers'">
                      <p class="nav-list-link">{{item.name}}</p>
                  </nuxt-link>
                  <a href="https://careers.happimobiles.com" v-if="item.name == 'Careers'">
                      <p class="nav-list-link">{{item.name}}</p>
                  </a>
                </li>
            </ul>
        </div>

        <div class="pl-2">
        <h4 class="nav-sub-header pl-2">
            Categories
        </h4>
            <ul class="pl-4">
                <li v-for="(item, index) in categoryList"
                
                :key="index">
                    <nuxt-link :to="`${item.url}`" >
                        <p class="nav-list-link">{{item.name}}</p>
                    </nuxt-link>
                </li>
            </ul>
        </div>

        <div class="pl-2">
        <h4 class="nav-sub-header pl-2">
            Best Deals
        </h4>
            <ul class="pl-4">
                <li v-for="(item, index) in bestDeals"
                
                :key="index">
                    <nuxt-link :to="`${item.url}`" >
                        <p class="nav-list-link">{{item.name}}</p>
                    </nuxt-link>
                </li>
            </ul>
        </div>

        <div class="pl-2">
        <h4 class="nav-sub-header pl-2">
            Policy
        </h4>
            <ul class="pl-4">
                <li v-for="(item, index) in policies"
                
                :key="index">
                    <nuxt-link :to="`${item.url}`" >
                        <p class="nav-list-link">{{item.name}}</p>
                    </nuxt-link>
                </li>
            </ul>
        </div>
      </div>
        

        <!-- <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item>
              <v-list-item-title>Foo</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-title>Bar</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-title>Fizz</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-title>Buzz</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Foo</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-title>Bar</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-title>Fizz</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-title>Buzz</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Foo</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-title>Bar</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-title>Fizz</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-title>Buzz</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Foo</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-title>Bar</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-title>Fizz</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-title>Buzz</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Foo</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-title>Bar</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-title>Fizz</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-title>Buzz</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list> -->
    </div>
</template>
<script>
export default {
    name: 'MobileNavLeft',
    data() {
        return {
          userData: [],
        navigationList: [
                {
                    name: 'About Us',
                    url: '/about-us',
                },
                {
                    name: 'Contact Us',
                    url: '/contact-us',
                },
                {
                    name: 'Our Store',
                    url: '/our-stores',
                },
                {
                    name: 'Blogs',
                    url: '/latest-mobile-blogs',
                },
                {
                  name:'Site map',
                  url: '/sitemap'
                }
        
            ],
        otherPages: [
            {
                name: 'FAQs',
                url: '/faqs',
            },
            {
                name: 'Blood Donations',
                url: '/blood-donation',
            },
            {
                name: 'My account',
                url: '/account/user-information',
            },
            {
                name: 'Assured by Back',
                url: '/assured_by_back',
            },
            {
                name: 'Akshaya Patra',
                url: '/akshaya-patra',
            },
            {
                name: 'Careers',
                url: 'https://careers.happimobiles.com',
            }
        ],
        categoryList: [
            {
                name: 'Smart Phones',
                url: '/mobiles/all',
            },
            {
                name: 'Accessories',
                url: '/accessories/all',
            },
            {
                name: 'Tablets',
                url: '/tablets/all',
            },
            {
                name: 'TVs',
                url: '/tvs/all',
            },
            {
                name: 'Laptops',
                url: '/laptops/all',
            }
        ],
        bestDeals: [
            {
                name: 'Super Deals',
                url: '/about-us',
            },
            {
                name: 'Best Selling Products',
                url: '/contact-us',
            },
            {
                name: 'Exclusive offers',
                url: '/our-stores',
            }
        ],
        policies: [
            {
                name: 'Privacy Policy',
                url: '/privacy_policy',
            },
            // {
            //     name: 'Return & Refund Policy',
            //     url: '/return_refund_policy',
            // },
            {
                name: 'Cancellation-policy',
                url: '/cancellation-policy',
            },
            {
              name: 'Terms and Conditions',
              url:'/terms-and-conditions'
            }
        ]
    }
},

methods: {
  handleSignUp(){
    this.$router.push('/account/login');
  },
  handleMyAccount(){
    this.$router.push('/account/user-information');
  }
},

    mounted() {
      this.userData = this.$cookies.get('userDetails');
    },

    // async created(){
    //   console.log("HERE____________")
    //   let userData = this.$cookies.get('userDetails');
    //   console.log(userData, 'userData')
    // }

}
</script>
<style lang="scss" scoped>
.height-control{
  height:80vh;
  overflow: hidden;
  overflow-y:auto;
}
.v-navigation-drawer__content {
    height: 100%;
    overflow-y: hidden !important;
    overflow-x: hidden !important;
}
.sidenavcategories-mobile{
  overflow: none !important;
}
.nav-list-link{
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  /* or 200% */


  color: rgba(0, 0, 0, 0.5);
}
.nav-sub-header{
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  padding: 3%;
  /* identical to box height */


  color: #000000;
}
.line-break{
    color:#FB9013;
}
.navigate-disc{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    color: #000000;
    padding-top:5%;
        span{
            color:#FB9013;
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 600;
            font-size: 15px;
            line-height: 20px;
        }
}
.navigation-content{
    margin:4%;
    padding-top:3%;

}
</style>
