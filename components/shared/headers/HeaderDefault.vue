<template lang="html">
  <header class="header header--1" data-sticky="true" id="headerSticky">
      <div class="header__top">
          <div class="ps-container">
              <div class="header__left mr-5">
                  <a href="/" class="ps-logo">
                      <img src="https://d34e6224thkkna.cloudfront.net/retool-upload/5211e4d3-13b4-40cc-bcf4-d908fb2959a2.webp" alt="Happimobiles Logo" title="Happimobiles" />
                  </a>
                  <div class="menu--product-categories">
                      <div class="menu__toggle">
                          <i class="icon-menu"></i>
                          <span>Shop by Department</span>
                      </div>
                      <div class="menu__content">
                          <menu-categories />
                      </div>
                  </div>
                  
              </div>
              <div class="header__center desktop-hide">
                  <search-header />
              </div>
              <div class="header__center mob-hide">
                  <search-header-desktop />
              </div>
              <div class="header__right">
                  <header-actions />
              </div>
          </div>
      </div>
      <div data-sticky="true" v-if="isToast != null && isToast.show" class="success-top-toast " style="background-color: green;">
        <div class="text-block" v-html="isToast.htmlTag" >
        </div>
        <span  @click.prevent="closeSuccessPopup()"> X </span>
      </div>
      <navigation-default />
  </header>
</template>
<script>
import SearchHeader from './modules/SearchHeader';
import SearchHeaderDesktop from './modules/SearchHeaderDesktop';
import HeaderActions from './modules/HeaderActions';
import NavigationDefault from './modules/NavigationDefault';
import MenuCategories from '~/components/shared/menu/MenuCategories';
import { stickyHeader } from '~/utilities/common-helpers';
import {mapState} from "vuex";
export default {
  name: 'HeaderDefault',
  components: {
      MenuCategories,
      NavigationDefault,
      HeaderActions,
      SearchHeader,
      SearchHeaderDesktop
  },
computed: {
  ...mapState({
    isToast: state => state.cart.isToast,
  })
},
methods: {
  closeSuccessPopup() {
    this.$store.dispatch('cart/toastView',{
      show:false,
      itemName : ''
    });
  }
},
  mounted() {
      window.addEventListener('scroll', stickyHeader);
  },
  async created() {
      let userData = this.$cookies.get('userDetails');
      if (userData) {
          this.$store.dispatch('wishlist/getWishlist', {
              user_id: this.$cookies.get('userDetails').phone
          });
      } else {
          await this.$store.dispatch('auth/setUserLogout');
      }
  }
};
</script>
<style lang="scss" scoped>
.ps-container{
  background-color: #FFFFFF00 !important;
}
.header--1 {
  
  .header__top {
      background-color: $color-1st;
      .ps-logo {
        width:142px !important;
        margin-right:1.5rem;
          img {
              // width:50%;
              // float: right;
          }
      }
  }
// .ps-logo.active{
//     display:block;
// }
}
.success-top-toast {
padding: 0 1rem;
height: 70px;
color: #fff;
display: flex;
justify-content: space-around;
align-items: center;
font-size: 13px;
letter-spacing: 1px;
position: absolute;
width: 100%;
z-index: 99999;
top: 0;
position: fixed;
.text-block {
}
.checkout-class {
  text-decoration: none;
  color: #fff;
}
span {
  font-weight: bold;
}
}
@media (max-width: 767px) {
.success-top-toast {
  height: 110px;
  .text-block  {
    width: 100%;
    span:last-child {
      cursor: pointer;
      background-color: #fff;
      color: #000;
      padding: 5px;
      border-radius: 5px;
      font-weight: 500;
      font-size: 14px;
    }
  }
}
}
</style>
`