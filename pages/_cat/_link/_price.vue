<template>
    <div class='martfury ps-container p-0'>
        <bread-crumb :breadcrumb='breadCrumb' layout='fullwidth' />
        <div class='ps-page--shop price-page-bg'>
            <div class='ps-layout--shop'>
                <div class="col-lg-3 col-3 filters">
                    <div class=" filt">
                        <div class="card col-12" v-if="filteredList().length">
                            <div>
                                <h4 style="float: left;padding-top: 8px;" class="filt-word">Brand</h4>
                                <span
                                    style="background-color: #fb9013;width: 20px;text-align: center;color: white;font-size: 15px;border: 1px solid #fb9013;cursor: pointer;font-weight: 800;float: right;"
                                    class="toggle float-right" @click="brandVisible = !brandVisible"
                                    v-text="toggletText[brandVisible * 1]">
                                </span>
                            </div>
                            <br>
                            <div class="search-wrapper" v-if="brandVisible">
                                <i class="fa fa-search"></i> &nbsp;<input type="text" id="search" v-model="search"
                                    placeholder="Search brand" />
                                <hr>
                            </div>

                            <div style="overflow-y: scroll; height: 180px;" v-if="brandVisible">
                                <ul id="brands" style="list-style-type: none;max-height: 180px;"
                                    v-for="brand in filteredList().sort((a, b) => (a.value > b.value) ? 1 : -1)">
                                    <li v-if="brand.value != ''">
                                        <!-- <input :value="brand" type="checkbox" @click="applyBrandFilter(brand)"> -->
                                        <label :style="{'color': selectedBrands.includes(brand.value) ? '#fb9013' : 'black'}" @click="applyBrandFilter(brand)" class="filt-label filterClick">{{ brand.value }}</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr class="divider" v-if="PriceList.length">

                        <div class="card col-12" v-if="PriceList.length">
                            <!-- <div class="search-wrapper">
                        <input type="text" v-model="search" placeholder="Search RAM Size"/>
                    </div> -->
                            <div>
                                <h4 class="filt-word" style="float: left;">Price Range</h4>
                                <span
                                    style="background-color: #fb9013;width: 20px;text-align: center;color: white;font-size: 15px;border: 1px solid #fb9013;cursor: pointer;font-weight: 800;float: right;"
                                    class="toggle float-right" @click="priceVisible = !priceVisible"
                                    v-text="toggletText[priceVisible * 1]"></span>
                            </div>
                            <div class="search-wrapper" v-if="priceVisible">
                                <hr>
                            </div>
                            <div style="overflow-y: scroll; height: 180px;" v-if="priceVisible">
                                <ul id="prices" style="list-style-type: none;max-height: 180px;"
                                    v-for="price in PriceList">
                                    <li v-if="price.from == 1 && price.count != 0">
                                        <label :style="{'color': priceFrom == price.from && priceTo == price.to ? '#fb9013' : 'black'}" @click="applyPriceFilter(price)" class="filt-label filterClick">Below ₹{{
                                                mrpPriceFormat(price.to)
                                        }}</label>
                                    </li>
                                    <li v-if="price.value != '' && price.from != 1 && price.from != 60000 && price.count != 0">
                                        <!-- <input :value="price" type="checkbox" @click="applyPriceFilter(price)"> -->
                                        <label :style="{'color': priceFrom == price.from && priceTo == price.to ? '#fb9013' : 'black'}" @click="applyPriceFilter(price)" class="filt-label filterClick">₹{{ mrpPriceFormat(price.from) }} - ₹{{
                                                mrpPriceFormat(price.to)
                                        }}</label>
                                    </li>
                                    <li v-if="price.from == 60000 && price.count != 0">
                                        <label :style="{'color': priceFrom == price.from && priceTo == price.to ? '#fb9013' : 'black'}" @click="applyPriceFilter(price)" class="filt-label filterClick">₹{{mrpPriceFormat(price.from)}} & Above</label>
                                    </li>
                                </ul>
                                ₹<input type="number" v-model="priceFrom" placeholder="min" id="min"> - ₹<input type="number" v-model="priceTo" placeholder="max" id="max"> &nbsp; <input style="background:#fb9013;border: 1px solid #fb9013" type="submit" @click="customPriceRange()" id="submit" value="Go">

                            </div>
                        </div>
                        <hr class="divider" v-if="RamList.length">
                        <div class="card col-12" v-if="RamList.length">
                            <!-- <div class="search-wrapper">
                        <input type="text" v-model="search" placeholder="Search RAM Size"/>
                    </div> -->
                            <div>
                                <h4 style="float: left;" class="filt-word">RAM Size</h4>
                                <span
                                    style="background-color: #fb9013;width: 20px;text-align: center;color: white;font-size: 15px;border: 1px solid #fb9013;cursor: pointer;font-weight: 800;float: right;"
                                    class="toggle float-right" @click="ramVisible = !ramVisible"
                                    v-text="toggletText[ramVisible * 1]"></span>
                            </div>
                            <div class="search-wrapper" v-if="ramVisible">
                                <hr>
                            </div>
                            <div style="height: 180px;" v-if="ramVisible">
                                <ul id="brands" style="list-style-type: none;max-height: 180px;" v-for="ram in RamList">
                                    <li v-if="ram.value != ''">
                                        <!-- <input :value="ram" type="checkbox" @click="applyRamFilter(ram)"> -->
                                        <label :style="{'color': selectedRams.includes(ram.value) ? '#fb9013' : 'black'}" @click="applyRamFilter(ram)" class="filt-label filterClick">{{ ram.value }}</label>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <hr class="divider" v-if="ScreenList.length">
                        <div class="card col-12" v-if="ScreenList.length">
                            <div>
                                <h4 class="filt-word" style="float: left;">Display Size</h4>
                                <span
                                    style="background-color: #fb9013;width: 20px;text-align: center;color: white;font-size: 15px;border: 1px solid #fb9013;cursor: pointer;font-weight: 800;float: right;"
                                    class="toggle float-right" @click="displayVisible = !displayVisible"
                                    v-text="toggletText[displayVisible * 1]"></span>
                            </div>
                            <div class="search-wrapper" v-if="displayVisible">
                                <hr>
                            </div>
                            <div style="overflow-y: scroll; height: 180px;" v-if="displayVisible">
                                <ul id="screens" style="list-style-type: none;max-height: 180px;"
                                    v-for="screen in ScreenList">
                                    <li v-if="screen.value != ''">
                                        <!-- <input :value="screen" type="checkbox" @click="applyDisplayFilter(screen)"> -->
                                        <label :style="{'color': selectedScreens.includes(screen.value) ? '#fb9013' : 'black'}" @click="applyDisplayFilter(screen)" class="filt-label filterClick">{{ screen.value }}</label>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <hr class="divider" v-if="CamList.length">
                        <div class="card col-12" v-if="CamList.length">
                            <div>
                                <h4 class="filt-word" style="float: left;">Camera</h4>
                                <span
                                    style="background-color: #fb9013;width: 20px;text-align: center;color: white;font-size: 15px;border: 1px solid #fb9013;cursor: pointer;font-weight: 800;float: right;"
                                    class="toggle float-right" @click="camVisible = !camVisible"
                                    v-text="toggletText[camVisible * 1]"></span>
                            </div>
                            <div class="search-wrapper" v-if="camVisible">
                                <hr>
                            </div>
                            <div style="overflow-y: scroll; height: 180px;" v-if="camVisible">
                                <ul id="cams" style="list-style-type: none;max-height: 180px;" v-for="cam in CamList">
                                    <li v-if="cam.value != ''">
                                        <!-- <input :value="cam" type="checkbox" @click="applyCamFilter(cam)"> -->
                                        <label :style="{'color': selectedCams.includes(cam.value) ? '#fb9013' : 'black'}" @click="applyCamFilter(cam)" class="filt-label filterClick">{{ cam.value }}</label>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <hr class="divider" v-if="NetworkList.length">
                        <div class="card col-12" v-if="NetworkList.length">
                            <div>
                                <h4 class="filt-word" style="float: left;">Network</h4>
                                <span
                                    style="background-color: #fb9013;width: 20px;text-align: center;color: white;font-size: 15px;border: 1px solid #fb9013;cursor: pointer;font-weight: 800;float: right;"
                                    class="toggle float-right" @click="networkVisible = !networkVisible"
                                    v-text="toggletText[networkVisible * 1]"></span>
                            </div>
                            <div class="search-wrapper" v-if="networkVisible">
                                <hr>
                            </div>
                            <div style="overflow-y: scroll; height: 180px;" v-if="networkVisible">
                                <ul id="networks" style="list-style-type: none;max-height: 180px;"
                                    v-for="network in NetworkList">
                                    <li v-if="network.value != ''">
                                        <!-- <input :value="network" type="checkbox" @click="applyNetworkFilter(network)"> -->
                                        <label :style="{'color': selectedNetworks.includes(network.value) ? '#fb9013' : 'black'}" @click="applyNetworkFilter(network)" class="filt-label filterClick">{{ network.value }}</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-9 col-sm-12">
                    <!-- <div class='ps-shopping mt-0'>
                        <div class='ps-shopping__header mb-0 card-layout'>
                            <h1 style='font-size: 14px;'>{{h1}}</h1>
                        </div>
                    </div>

                    <br /> -->
                    <br>
                    <div class="row">
                        <div class="col-12 d-flex align-item-center justify-content-start">
                            <div id="categoryPrice">
                                <span title="Category" class="selectedFilters" v-if="this.searchPrice.split('-')[1] == '0'">
                                    Price Range: &nbsp;₹25 - ₹{{ this.searchPrice.split("-")[2] }} &nbsp;
                                    <span class="remove" @click="removePriceCat()"> <b>x</b> </span>
                                </span>
                            </div>
                            <div  v-for="brand in this.selectedBrands">
                                <span title="Brand" class="selectedFilters">
                                    Brand: {{ brand }} &nbsp;<span class="remove" @click="removeBrand(brand)"> <b>x</b> </span>
                                </span>
                            </div>
                            <div  v-if="this.priceFrom > 20 ">
                                <span title="Price Range" class="selectedFilters">
                                    <!-- Brand: {{ brand }} &nbsp;<span class="remove" @click="removeBrand(brand)"> <b>x</b> </span> -->
                                    Price Range: &nbsp;₹{{ this.priceFrom }} - ₹{{ this.priceTo }} &nbsp;<span class="remove" @click="removePrice()"> <b>x</b> </span>
                                </span>
                            </div>
                            <div  v-for="ram in this.selectedRams">
                                <span title="Ram" class="selectedFilters">
                                    Ram: &nbsp;{{ ram }} &nbsp;<span class="remove" @click="removeRam(ram)"> <b>x</b> </span>
                                </span>
                            </div>
                            <div  v-for="cam in this.selectedCams">
                                <span title="Camera" class="selectedFilters">
                                    Camera: &nbsp;{{ cam }} &nbsp;<span class="remove" @click="removeCam(cam)"> <b>x</b> </span>
                                </span>
                            </div>
                            <div  v-for="network in this.selectedNetworks">
                                <span title="Network" class="selectedFilters">
                                    Network: &nbsp;{{ network }} &nbsp;<span class="remove" @click="removeNetwork(network)"> <b>x</b> </span>
                                </span>
                            </div>
                            <div  v-for="screen in this.selectedScreens">
                                <span title="Screen" class="selectedFilters">
                                    Screen: &nbsp;{{ screen }} &nbsp;<span class="remove" @click="removeScreen(screen)"> <b>x</b> </span>
                                </span>
                            </div> 
                        </div>
                    </div>
                    <br>
                    <br>
                    <div class="row">
                        <div class="col-12">
                            <div class="sortContainer">
                                <v-row class="sortRow">
                                    <v-col class="col-lg-6 col-md-6 col-2">
                                        <label></label>
                                    </v-col>
                                    <v-col class="d-flex col-lg-3 col-md-3 col-5">
                                        <v-select class="selectSort" v-model="stockDetail" :items="sortStocks"
                                            label="Stock Status: " @input="filterFetch()"></v-select>
                                    </v-col>
                                    <v-col class="d-flex col-lg-3 col-md-3 col-5">
                                        <v-select class="selectSort" v-model="sortDetail" :items="sortPrices"
                                            label="Sort By: " @input="filterFetch()"></v-select>
                                    </v-col>
                                </v-row>
                            </div>
                        </div>
                    </div>
                    <br>

                    <div class="price-range d-flex" >
                        <div class='price-ranges'>

                        <a class="price-range-each" href="/mobiles/all/price-0-10000" title="Below - Rs.10,000">
                            Below - Rs.10,000
                        </a>
                        <a class="price-range-each" href="/mobiles/all/price-10001-14999" title="Rs.10,001 - Rs.14,999">
                            Rs.10,001 - Rs.14,999
                        </a>
                        <a  class="price-range-each" href="/mobiles/all/price-15000-19999" title="Rs.15,000 - Rs.19,999">
                            Rs.15,000 - Rs.19,999
                        </a>
                        <a class="price-range-each" href="/mobiles/all/price-20000-24999" title="Rs.20,000 - Rs.24,999">
                            Rs.20,000 - Rs.24,999
                        </a>
                        <a class="price-range-each" href="/mobiles/all/price-25000-29999" title="Rs.25,000 - Rs.29,000">
                            Rs.25,000 - Rs.29,000
                        </a>
                        <a class="price-range-each" href="/mobiles/all/price-30000-200000" title="Rs.30,000 and above">
                            Rs.30,000 and Above
                        </a>
                        </div>

                    </div>
                    
                    <div class='row' style='padding:10px' v-if='items.length != 0'>
                        <div class='col-lg-3 col-md-3 col-6' v-for="(item, index) in items" style='padding-bottom: 15px !important; padding-top: 10px!important'>
                            <div class='ps-product' style='padding: 15px !important;'>
                                <div>              
                                    <p v-if='item.stock.raw != 0' style='cursor:pointer;float:left;' class='icons' title='Add to cart'
                                                    @click.prevent='addItemToCart(item)'>
                                                    <i class='icon-bag2'></i>
                                    </p>
                                    <p style='cursor:pointer;float:right;' class='icons' title='Add to wishlist'
                                            @click.prevent='handleAddItemToWishlist(item)'>
                                        <i class='icon-heart'></i>
                                    </p>
                                </div>
                                <div class='ps-product__thumbnail'>
                                    <nuxt-link
                                        :to='`/${item.linker.raw}`'
                                    >
                                        <div class='image-b'>
                                          <img v-if='item.image_url != undefined'
                                               class='hit-image'
                                               v-lazy-load
                                               :src='`${url(item.image_url.raw)}`'
                                               :alt='`${item.name.raw}`'
                                          />

<!--                                            <img v-if='item.pictures_new != null && item.pictures_new.length > 0'-->
<!--                                                 class='hit-image-1'-->
<!--                                                 :src='`${item.pictures_new[0]}`'-->
<!--                                                 :alt='`${item.name}`'-->
<!--                                            />-->
                                        </div>
                                    </nuxt-link>
                                    <div v-if='isSale === true' class='ps-product__badge'>
                                        sale
                                    </div>
                                    <!-- <ul class='ps-product__actions'>
                                        <li v-if='item.stock.raw != 0'>
                                            <a to='#' data-toggle='tooltip' data-placement='top' title='Add to cart' @click.prevent='addItemToCart(item)'>
                                                <i class='icon-bag2'></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href='#' data-toggle='tooltip' data-placement='top' title='Add to wishlist' @click.prevent='handleAddItemToWishlist(item)'>
                                                <i class='icon-heart'></i>
                                            </a>
                                        </li>
                                    </ul> -->
                                </div>
                                <div class='ps-product__container'>
                                  <div class='ps-product__content'>
                                    <nuxt-link
                                        :to='`/${item.linker.raw}`'
                                        class='ps-product__title'
                                    >
                                      {{ item.name.raw }}
                                    </nuxt-link>
                                    <div class='ps-product__rating'></div>

                                    <br>
                                    <div class="">
                                                <div class="row">
                                                    <div v-if="item.mrp && calcPriceMrpPercentage(item.mrp.raw,item.payprice.raw)" class="mrp-products col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                        <p>
                                                        <s>₹{{ mrpPriceFormat(item.mrp.raw) }}</s> 
                                                        </p>
                                                    </div>
                                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 display_price">
                                                        
                                                        <p style="color:#fb9013;font-size: 13px;"><b>
                                                            {{ priceFormat(item.display_price.raw) }}
                                                        </b></p>
                                                        
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-lg-4 col-md-6 col-sm-1" style="padding-bottom:30px">
                                                        <strong v-if="calcPriceMrpPercentage(item.mrp.raw,item.payprice.raw)" style="font-size: 12px; padding:2px;border-radius:4px;background-color:#CC4600; color:#fff">{{ (( (parseInt(item.mrp.raw) - parseInt(item.payprice.raw)) / (item.mrp.raw) ) * 100 ).toFixed(0) }}%</strong>    
                                                    </div>
                                                    <div class="col-lg-8 col-md-6 col-sm-11">
                                                        <p v-if='item.stock.raw == 0' class='mb-0'
                                                        style='color:red;font-size:12px;'>
                                                            Out of stock
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                  </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='no-data text-center' v-else>
                        No Products Found
                    </div>


                    <br />
                    <br />

                    <v-container>
                        <v-row justify='center'>
                            <v-col cols='12'>
                                <v-container class='max-width'>
                                    <v-pagination
                                        v-model='page'
                                        class='my-4'
                                        :length='pages'
                                        @input="onPageChange"
                                        prev-icon="icon-chevron-left icon-slug"
                                        next-icon="icon-chevron-right icon-slug"
                                    ></v-pagination>
                                </v-container>
                            </v-col>
                        </v-row>
                    </v-container>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import { mapState } from 'vuex';
import BreadCrumb from '~/components/elements/BreadCrumb';
// import Rating from '~/components/elements/Rating';
import ProductQuickview from '~/components/elements/detail/ProductQuickview';


export default {
    transition: 'zoom',
    layout: 'layout-default-ssr',
    ssr: true,
    data() {
        return {
            categoryId: this.$route.params.cat + '-' + this.$route.params.link,
            h1:"",
            description:"",
            pageLoading: true,
            items : [],
            quickviewDialog: false,
            productRating: 5,
            widgetLoading: true,
            breadCrumb: null,
            pathName: '',
            page: 1,
            min: 0,
            max: 0,
            pages: 0,
            totalCounts: 0,
            selectedBrands: [],
            selectedRams: [],
            selectedNetworks: [],
            selectedScreens: [],
            selectedPrices: [],
            selectedCams: [],
            BrandList: [],
            CamList: [],
            NetworkList: [],
            RamList: [],
            PriceList: [],
            ScreenList: [],
            search: '',
            searchItem: this.$route.params.cat + ' / ' + this.$route.params.slug,
            searchText: this.$route.params.cat,
            searchPrice: this.$route.params.price,
            brandVisible: true,
            ramVisible: true,
            priceVisible: true,
            displayVisible: false,
            camVisible: false,
            networkVisible: false,
            toggletText: ['+', '-'],
            sortDetail: 'Price - Low to High',
            stockDetail: 'In Stock',
            sortPrices: ['Price - High to low', 'Price - Low to High'],
            sortStocks: ['In Stock', 'Out of Stock', 'All'],
            priceFrom: 20,
            priceTo: 250000,
            
            type:"",
            meta: [
                {
                    'Url': 'mobiles/apple',
                    'Title': 'Buy  Apple Mobiles Online',
                    'Description': 'Buy Mobile Online. Read Product Specifications, Features And Customer Reviews. *One Year Of Brand Warranty * Emi Available',
                    'Keyword': 'latest Apple mobiles, Apple mobiles online, Apple mobile price, Apple mobiles offers'
                },
                {
                    'Url': 'mobiles/samsung',
                    'Title': 'Buy Samsung Mobiles Online in India | Best Samsung Mobiles at Best Prices',
                    'Description': 'Explore the full range of Samsung Mobile devices and android smartphones. Buy samsung mobiles online at best prices in India.',
                    'Keyword': 'latest SAMSUNG mobiles, SAMSUNG mobiles online, SAMSUNG mobile price, SAMSUNG mobiles offers'
                },
                {
                    'Url': 'mobiles/xiaomi',
                    'Title': 'Buy Mi Mobiles Online in India | Xiaomi MI Mobiles at Best Prices',
                    'Description': 'Buy Xiaomi MI Mobiles online from a variety of choices depending on colors, features, specifications, design and much more.',
                    'Keyword': 'latest MI mobiles, MI mobiles online, MI mobile price, MI mobiles offers, Xiaomi mobiles'
                },
                {
                    'Url': 'mobiles/vivo',
                    'Title': 'Buy Vivo Mobiles Online in India | Vivo Mobiles at Best Prices',
                    'Description': 'Buy Vivo latest smartphones and accessories online at Happi Mobiles at best prices and exciting offers',
                    'Keyword': 'latest vivo mobiles, vivo mobiles online, vivo mobile price, vivo mobiles offers'
                },
                {
                    'Url': 'mobiles/oppo',
                    'Title': 'Buy Oppo Mobiles Online in India | Best Oppo Mobiles at Best Prices',
                    'Description': 'Explore the range of Oppo Mobile devices which has great features and specifications. Buy Oppo mobiles online at best prices in India.',
                    'Keyword': 'latest oppo mobiles, oppo mobiles online, oppo mobile price, oppo mobiles offers'
                },
                {
                    'Url': 'mobiles/realme',
                    'Title': 'Buy Realme Mobiles Online in India | Realme Smartphones at Best Prices',
                    'Description': 'Buy Realme Mobiles online at best prices in India. Read Product Specifications, Features and much more.',
                    'Keyword': 'realme oppo mobiles, realme mobiles online, realme mobile price, realme mobiles offers'
                },
                {
                    'Url': 'mobiles/buy-realme-mobiles-online',
                    cat: 'mobiles/realme',
                    'Title': 'Buy Realme Mobiles Online in India | Realme Smartphones at Best Prices',
                    'Description': 'Buy Realme Mobiles online at best prices in India. Read Product Specifications, Features and much more.',
                    'Keyword': 'realme oppo mobiles, realme mobiles online, realme mobile price, realme mobiles offers'
                },
                {
                    'Url': 'mobiles/buy-oppo-mobiles-online',
                    cat: 'mobiles/oppo',
                    'Title': 'Buy Oppo Mobiles Online in India | Best Oppo Mobiles at Best Prices',
                    'Description': 'Explore the range of Oppo Mobile devices which has great features and specifications. Buy Oppo mobiles online at best prices in India.',
                    'Keyword': 'latest oppo mobiles, oppo mobiles online, oppo mobile price, oppo mobiles offers'
                },
                {
                    'Url': 'mobiles/nokia',
                    'Title': 'Nokia Mobiles: Buy Online at Discounted Prices | Offers in India',
                    'Description': 'Buy Latest Nokia mobile phones online at the best price in india with multiple payment options, home delivery, emi option from happimobiles.',
                    'Keyword': 'latest nokia mobiles, nokia mobiles online, nokia mobile price, nokia mobiles offers'
                },
                {
                    'Url': 'mobiles/oneplus',
                    'Title': 'OnePlus Mobiles: Buy Online at Discounted Prices | Offers in India',
                    'Description': 'Buy latest oneplus mobile phones online at the best price in india with multiple payment options, home delivery, emi option from happimobiles.',
                    'Keyword': 'latest oneplus mobiles, oneplus mobiles online, oneplus mobile price, oneplus mobiles offers'
                },
                {
                    'Url': 'mobiles/buy-vivo-mobiles-online',
                    cat: 'mobiles/vivo',
                    'Title': 'Buy Vivo Mobiles Online in India | Vivo Mobiles at Best Prices',
                    'Description': 'Buy Vivo latest smartphones and accessories online at Happi Mobiles at best prices and exciting offers',
                    'Keyword': 'latest vivo mobiles, vivo mobiles online, vivo mobile price, vivo mobiles offers'
                },
                {
                    'Url': 'mobiles/buy-mi-mobiles-online',
                    cat: 'mobiles/xiaomi',
                    'Title': 'Buy Mi Mobiles Online in India | Xiaomi MI Mobiles at Best Prices',
                    'Description': 'Buy Xiaomi MI Mobiles online from a variety of choices depending on colors, features, specifications, design and much more.',
                    'Keyword': 'latest MI mobiles, MI mobiles online, MI mobile price, MI mobiles offers, Xiaomi mobiles'
                },
                {
                    'Url': 'mobiles/buy-samsung-mobiles-online',
                    cat: 'mobiles/samsung',
                    'Title': 'Buy Samsung Mobiles Online in India | Best Samsung Mobiles at Best Prices',
                    'Description': 'Explore the full range of Samsung Mobile devices and android smartphones. Buy samsung mobiles online at best prices in India.',
                    'Keyword': 'latest SAMSUNG mobiles, SAMSUNG mobiles online, SAMSUNG mobile price, SAMSUNG mobiles offers'
                },
                {
                    'Url': 'mobiles/motorola',
                    'Title': 'Motorola Mobiles | Buy Online at Best Prices in India',
                    'Description': 'Buy motorola mobile phones online at the best price in india with multiple payment options, home delivery, emi option from happimobiles.',
                    'Keyword': 'latest MOTOROLA mobiles, motorola mobiles online, motorola mobile price, motorola mobiles offers'
                },
                {
                    'Url': 'mobiles/honor',
                    'Title': 'Honor Mobiles: Buy Online at Discounted Prices | Offers in India',
                    'Description': 'Buy honor mobile phones online at the best price in india with multiple payment options, home delivery, emi option from happimobiles.',
                    'Keyword': 'latest honor mobiles, honor mobiles online, honor mobile price, honor mobiles offers'
                },
                {
                    'Url': 'mobiles/lg',
                    'Title': 'LG Mobiles: Buy Online at Discounted Prices | Offers in India',
                    'Description': 'Buy LG mobile phones online at the best price in india with multiple payment options, home delivery, emi option from happimobiles.',
                    'Keyword': 'LG honor mobiles, LG mobiles online, LG mobile price, LG mobiles offers'
                },
                {
                    'Url': 'mobiles/all',
                    'Title': 'Buy Latest Mobiles Online at best prices only at Happi Mobiles',
                    'Description': 'Shop latest mobiles, android mobiles, branded mobiles online at best prices in India. Read product specifications and offers before purchase.',
                    'Keyword': 'latest mobiles, best mobiles, online mobile store, android mobiles'
                },
                {
                    'Url': 'accessories/headset',
                    'Title': 'Headsets | Buy Headphones | Earphones Online at Happi Mobiles',
                    'Description': 'Buy headset online at best prices. Shop all branded wired and wireless headphones and earphones in India at happi mobiles.',
                    'Keyword': 'headset, headphones, earphones, earbuds, latest headphones, wireless earphones'
                },
                {
                    'Url': 'accessories/storage-drivers',
                    'Title': 'Storage Drivers | Buy Storage Devices Online at Best Prices',
                    'Description': 'Get latest storage drivers online at discounted prices. Shop from all top brands accessories with best offers at happi mobiles.',
                    'Keyword': 'storage driver, happi mobiles, storage devices'
                },
                {
                    'Url': 'accessories/data-cables',
                    'Title': 'Data Cable | Buy Mobile Cables Online at best prices in India',
                    'Description': 'Buy data cable online at happimobiles. Read product specifications, features and customer reviews. one year of brand warranty emi available.',
                    'Keyword': 'data cables, mobile cable, mobile dat cable. best data cable'
                },
                {
                    'Url': 'accessories/bluetooth',
                    'Title': 'Bluetooth | Buy Bluetooth Devices, Accessories Online at Happi Mobiles',
                    'Description': 'Get latest bluetooth devices online at discounted prices. Shop from all top brands accessories with best offers at happi mobiles.',
                    'Keyword': 'bluetooth earphone, bluetooth devices, bluetooth'
                },
                {
                    'Url': 'accessories/projectors',
                    'Title': 'Projectors | Buy HD Led Projector at best prices | Happi Mobiles',
                    'Description': 'Buy latest LED projectors online at the best price in india with multiple payment options, home delivery, emi option from happimobiles.',
                    'Keyword': 'projector, hd projector, led projector'
                },
                {
                    'Url': 'accessories/smart-watches',
                    'Title': 'Smart Watch | Buy Premium Watches for Men | Women',
                    'Description': 'Buy latest smart watches online at the best price in india with multiple payment options, home delivery, emi option from happimobiles.',
                    'Keyword': 'smart watch, health watch, android watch, latest smart watch, mens smart watch, womens smart watches'
                },
                {
                    'Url': 'accessories/chargers',
                    'Title': 'Buy Chargers Online at Best Prices only at Happi Mobiles',
                    'Description': 'Buy mobile chargers online at happimobiles. Read product specifications, features and customer reviews. one year of brand warranty emi available.',
                    'Keyword': 'chargers,mobile chargers, best charger, online charger store'
                },
                {
                    'Url': 'accessories/all',
                    'Title': 'Buy All type Accessories Chargers Headsets Storage Drivers Happi Mobiles',
                    'Description': 'Buy mobile chargers online at happimobiles. Read product specifications, features and customer reviews. one year of brand warranty emi available.',
                    'Keyword': 'chargers,mobile chargers, best charger, online charger store'
                },
                {
                    'Url': 'tablets/all',
                    'Title': 'Buy Tablets Online at Best Prices in India | Happi Mobiles',
                    'Description': 'Get latest tablets online at best | discounted prices. Shop all top brands tablets with free home delivery at happi mobiles.',
                    'Keyword': 'latest tablets , buy tablet online, tablet online store'
                },
                {
                    'Url': 'tvs/mi',
                    'Title': 'Mi TV | Buy Xiaomi LED Televisions Online at Best Prices',
                    'Description': 'Buy mi tv online at best | discounted prices at happi mobiles. Read product specifications, features and customer reviews.',
                    'Keyword': 'mi tv, mi tv online, best mi tv for home, latest mi tv, mi televisions'
                },
                {
                    'Url': 'tvs/lg',
                    'Title': 'LG TV |  Buy Smart HD LED TV\'s Online at Best Prices | Happi Mobiles',
                    'Description': 'Buy lg tv online at best | discounted prices at happi mobiles. Read product specifications, features and customer reviews.',
                    'Keyword': 'lg tv, lg tv online, best lg tv for home, latest lg tv, lg televisions'
                },
                {
                    'Url': 'tvs/tcl',
                    'Title': 'Buy TCL Smart TV\'s Online at Best Prices | Happi Mobiles',
                    'Description': 'Buy tcl tv hd smart online at best | discounted prices at happi mobiles. Read product specifications, features and customer reviews.',
                    'Keyword': 'tcl tv, tcl tv online, best tcl tv for home, latest tcl tv, tcl televisions'
                },
                {
                    'Url': 'tvs/all',
                    'Title': 'Latest | Smart Android TV\'s Online at Best Prices | Happi Mobiles',
                    'Description': 'Buy latest | smart android tv online at best | discounted prices. Shop all brands televisions with free home delivery at happi mobiles.',
                    'Keyword': 'smart tv, latest tv, led tv, android tv, hd tv, best tv, televisions'
                },
                {
                    'Url': 'laptops/all',
                    'Title': 'Buy Laptops Online at Best Prices in India | Happi Mobiles',
                    'Description': 'Get latest laptops online at best | discounted prices. Shop all top brands laptop with free home delivery at happi mobiles.',
                    'Keyword': 'branded laptops, latest laptops, laptop'
                },
                {
                    'Url': 'pages/blood-donation',
                    'Title': 'Blood Donation - Your donation can make a family Happi',
                    'Description': 'At Happi we encouraged customers to share their blood group. We Believe this noble cause, we need more people to help us',
                    'Keyword': 'blood donation, donation, happi customers'
                },
                {
                    'Url': 'akshaya-patra',
                    'Title': 'Akshaya Patra\'s Mid Day Meal Scheme | Happi Mobiles',
                    'Description': 'At Happi Mobiles with our Motto to spread Happiness took an initiative to be a part of Akshaya Patra s Mid Day Meal Scheme.',
                    'Keyword': 'akshaya patra, mid day meal scheme at happi mobiles'
                }
            ],
          priceRangeList : []
        };
    },
    watch: {
        "pagination.page": (newPage) => {
            this.onPageChange(newPage);
        }
    },
    async created() {
        this.pages = parseInt(this.totalCounts / 16);
        if(process.client){
            if (window != null) {
                console.log(window.location.pathname.split('/')[2]);
                this.pathName = window.location.pathname.split('/')[2];
            }
            // this.$fire.analytics.logEvent('products-listing', {
            //     id: this.$route.params.cat + '-' + this.$route.params.link
            // });
            let userData = this.$cookies.get('userDetails');
            if (userData) {
                // const result = await this.$store.dispatch('wishlist/getWishlist', {
                //     user_id: userData.phone
                // });
                //return;
            } else {
                await this.$store.dispatch('auth/setUserLogout');
            }
        }
        var searchText = this.$route.params.cat;
        searchText = searchText.split("/")[0]
        searchText = searchText.replace('buy-', '');
        searchText = searchText.replace('-mobiles-online', '');

        this.selectedBrands = this.$route.query?.brand?.split(",")||[]
        this.selectedCams = this.$route.query?.cam?.split(",")||[]
        
        this.selectedNetworks = this.$route.query?.network?.split(",")||[]

        if(this.$route.query.page){
            this.page = this.$route.query.page || 1
        }
        else{
            this.page = 1
        }

        if(this.$route.query.price){
            var URLprice = this.$route.query?.price?.split("to")
            this.priceFrom = parseInt(URLprice[0])||25
            this.priceTo = parseInt(URLprice[1])||250000
        }

        if(this.$route.query.ram === "8 GB - above" || this.$route.query.ram === "8 GB "){
            this.selectedRams.push("8 GB & above")
        } else if(this.$route.query.ram === "3.9 GB - below" || this.$route.query.ram === "3.9 GB ") {
            this.selectedRams.push("3.9 GB & below")
        } else {
            this.selectedRams = this.$route.query?.ram?.split(",")||[]
        }
     
        if(this.$route.query.screen === "5.5 in "){
            this.selectedScreens.push("5.5 in & above")
        } else {
            this.selectedScreens = this.$route.query?.network?.split(",")||[]
        }

        this.sortDetail = this.$route.query?.sort||'Price - Low to High'
        this.stockDetail = this.$route.query?.stock||'In Stock'
        
        var filter = [];
        // console.log("filter",filter.length)
                
                if (this.selectedBrands.length > 0) {
                    filter.push({ "brand": this.selectedBrands });   
                }
                if (this.selectedCams.length > 0) {
                    filter.push({ "cam": this.selectedCams });
                }
                if (this.selectedNetworks.length > 0) {
                    filter.push({ "network": this.selectedNetworks });
                }
                if (this.selectedRams.length > 0) {
                    filter.push({ "ram": this.selectedRams });
                    
                }
                if (this.selectedScreens.length > 0) {
                    filter.push({ "screen": this.selectedScreens });  
                }
                if (this.priceFrom > 0) {
                    filter.push({ "payprice": { "from": this.priceFrom, "to": this.priceTo } });
                }

                
                var sort = [];
                if (this.sortDetail == "Price - Low to High") {
                    sort.push({ "payprice": "asc" })
                } else {
                    sort.push({ "payprice": "desc" })
                }
                

                if (this.stockDetail == "Out of Stock") {
                    filter.push({ stock: 0 })
                } else if(this.stockDetail == "In Stock") {
                    filter.push({ stock: { from: 1 } })
                } else {
                    filter.push({stock:{from: 0}})
                }

        if (this.$route.params.price) {
            let price = this.$route.params.price.split('-');
            this.priceFrom = parseInt(price[1]);
            this.priceTo = parseInt(price[2]);
        }

        this.breadCrumb = [
            {
                text: 'Home',
                url: '/'
            },
            {
                text: this.$route.params.cat + ' / ' + this.$route.params.link
            }
        ];
        var catSearch = ''
        if(this.$route.params.link == 'all'){
            catSearch = 'mobile'
        } else {
            catSearch = this.$route.params.link
        }
        
        var elasticApiResult = await this.ElasticApiFilters(searchText,sort,filter,this.page)
        var totalAPI = await this.ElasticApiFilters(searchText,sort,[],this.page)
        var result2 = await this.$axios(totalAPI);
        var result = await this.$axios(elasticApiResult);
        this.totalCounts = result.data.meta.page.total_results || 0,
        this.pages = parseInt(this.totalCounts / 16);
        // console.log("result facets", result.data.facets)
        this.BrandList = result2.data.facets.brand[0].data
        this.CamList = result2.data.facets.cam[0].data
        this.NetworkList = result2.data.facets.network[0].data
        this.RamList = result2.data.facets.ram[0].data
        this.ScreenList = result2.data.facets.screen[0].data
        this.PriceList = result2.data.facets.payprice[0].data
    },
    computed: {
        ...mapState({
            cartItems: state => state.cart.cartItems,
            currency: state => '₹',
            wishlistItems: state => state.wishlist.wishlistItems
        }),

        isSale() {
            // if (this.product.is_sale) {
            //     return true;
            // }
            return false;
        }
    },


    components: {
        ProductQuickview,
        //Rating,
        BreadCrumb
    },
    async asyncData({ params, redirect, $axios, route,$http }) {

        console.log('route', route);
        var price_path = route.params.price;
        //console.log('price_path', price_path.split("-"));
        price_path = price_path.split("-");
        if(price_path[1] == '0'){
            price_path[1] = '25'
        }
        var latest_filter = {
            from:0,
            size:16,
            'query': {
                'bool': {
                    'must': [{
                        'match_phrase': {
                            'ispublished': true
                        }
                    }, {
                        'match_phrase': {
                            'category.keyword': 'mobiles'
                        }
                    },{
                        'range': {
                            'stock': {
                                'gte': 1,
                                'lt': null
                            }
                        }
                    },{
                        'range': {
                            'payPrice': {
                                'gte': parseInt(price_path[1]),
                                'lt': parseInt(price_path[2])
                            }
                        }
                    }]
                }
            },
            'sort': [
                { 'stock': { 'order': 'desc' } },
                { 'sortWeight': { 'order': 'desc' } }
            ]
        };

      var config_es = {
        method: 'post',
        url: 'https://happi-mobile.ent.us-central1.gcp.cloud.es.io/api/as/v1/engines/happi-meta/search',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer search-fhf8xsbbzyadbi9vj4ne3avr'
        },
        data: JSON.stringify({
              "query": "",
              "filters": {
                "category": route.query.cat
              },
              filters: {
                        stock: {
                            from: 1,
                            to: 1000,
                        },
                    },
                "sort": [
                    { "payprice": "asc" }
                ],
              "page": {
                "size": 16, "current": 1
              },
              "facets": {
                "payprice": [
                  {
                    "type": "range",
                    "name": "min-and-max-range",
                    "ranges": [
                      {
                        "from": 1,
                        "to": 10000
                      },
                      {
                        "from": 10001,
                        "to": 14999
                      },
                      {
                        "from": 15000,
                        "to": 19999
                      },
                      { "from": 20000, "to": 24999 },
                      { "from": 25000, "to": 30000 },
                      { "from": 30000, "to": 300000 }
                    ]
                  }
                ]
              },
            }
        )
      };
      var result = await $axios(config_es);
      var config_es_data = {
        method: 'post',
        url: 'https://happi-mobile.ent.us-central1.gcp.cloud.es.io/api/as/v1/engines/happi-meta/search',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer search-fhf8xsbbzyadbi9vj4ne3avr'
        },
        data: JSON.stringify({
              "query": "",
              "filters": {
                "all": [
                  {
                    "payprice": {
                      "from": parseInt(price_path[1]),
                      "to": parseInt(price_path[2])
                    }
                  },
                  {
                    "category": "mobile"
                  },
                  { stock: { from: 1 } }
                ]
              },
              
              "sort": { "payprice": "asc" }, 
              "page": {
                "size": 16, "current": 1
              },

            }
        )
      };
      var result_data = await $axios(config_es_data);
      //console.log("PRICE RANGE Data", result_data);
      var h1 = '';
      var seoData =  await $http.$get(`/api/cat-fetch?url=/${route.params.cat}/${route.params.link}/${route.params.price}`);
      if(seoData.status){
        h1 = seoData.data.h1
      }
      return {
        pricePath : price_path,
        priceRangeList  : result.data.facets.payprice[0].data,
        items: result_data.data.results || [],
        totalCounts: result_data.data.meta.page.total_results || 0,
        h1:h1
      };
        //this.items =



        //var response = $axios()

    },
    head() {
        const result = this.meta.filter(e => e['Url'] === this.$route.params.cat + '/' + this.$route.params.link);
        if (result.length !== 0) {
            return {
                title: result[0]['Title'],
                meta: [
                    { hid: 'og-title', property: 'og:title', content: result[0]['Title'] },
                    { hid: 'og-description', property: 'og:description', content: result[0]['Description'] },
                    { hid: 'description', property: 'description', content: result[0]['Description'] },
                    { hid: 'keywords', property: 'keywords', content: result[0]['Keyword'] }
                ]
            };
        }

    },
    methods: {
        getRedirectVal(obj) {

            return `/mobiles/all/price-${obj.from}-${obj.to}`;
        },

        async ElasticApiFilters(searchText,sort,filter,page){
            var config_es = {
            method: 'post',
            url: 'https://happi-mobile.ent.us-central1.gcp.cloud.es.io/api/as/v1/engines/happi-meta/search',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer search-fhf8xsbbzyadbi9vj4ne3avr'
            },
            data: JSON.stringify({
                'query': searchText,
                "sort": sort,
                page:
                    {
                        size: 16, current: parseInt(page)
                    },
                "filters": {
                    "all": filter
                },
                "facets": {
                    "brand": [
                        {
                            "type": "value",
                            "name": "brand"
                        }
                    ],
                    "cam": [
                        {
                            "type": "value",
                            "name": "cam"
                        }
                    ],
                    "screen": [
                        {
                            "type": "value",
                            "name": "screen"
                        }
                    ],
                    "network": [
                        {
                            "type": "value",
                            "name": "network"
                        }
                    ],
                    "ram": [
                        {
                            "type": "value",
                            "name": "ram"
                        }
                    ],
                    "product_type": [
                        {
                            "type": "value",
                            "name": "product_type"
                        }
                    ],
                    "payprice": [
                        {
                            "type": "range",
                            "name": "display_price",
                            "ranges": [
                                { "from": 1, "to": 10000 },
                                { "from": 10000, "to": 20000 },
                                { "from": 20000, "to": 30000 },
                                { "from": 30000, "to": 40000 },
                                { "from": 40000, "to": 50000 },
                                { "from": 50000, "to": 60000 },
                                { "from": 60000 }
                            ]
                        }
                    ]
                }
            }
            )
        };
        return config_es;
        },

        removePriceCat(){
            this.priceFrom = 25;
            this.priceTo = 250000;
            this.page = 1
            document.getElementById("categoryPrice").style.display = "none";
            this.filterFetch()
        },

        async applyPriceFilter(price) {
            if (price.from == 1) {
                this.priceFrom = 25;
            } else {
                this.priceFrom = price.from;
            }
            document.getElementById("min").innerHTML = price.from 
            document.getElementById("max").innerHTML = price.to 
            this.priceTo = price.to || 250000;
            this.page = 1
            this.filterFetch()
        },

        async removePrice(){
            this.priceFrom = 20;
            this.priceTo = 250000;
            this.page = 1
            this.filterFetch();
        },
        async applyBrandFilter(brand) {
            if (this.selectedBrands.includes(brand.value) === false) {
                this.selectedBrands.push(brand.value)
            } else {
                // this.selectedBrands.pop(brand.value)
                for( var i = 0; i < this.selectedBrands.length; i++){ 
                    if ( this.selectedBrands[i] === brand.value) { 
                        this.selectedBrands.splice(i, 1); 
                    }
                }
            }
            this.page = 1
            this.filterFetch()
        },
        async removeBrand(brand){
            // this.selectedBrands = this.selectedBrands.filter(brand => !this.selectedBrands.includes(brand))
            //this.selectedBrands.pop(brand)
            for( var i = 0; i < this.selectedBrands.length; i++){ 
                if ( this.selectedBrands[i] === brand) { 
                    this.selectedBrands.splice(i, 1); 
                }
            }
            this.page = 1
            this.filterFetch()
        },
        async applyDisplayFilter(display) {
            if (this.selectedScreens.includes(display.value) === false) {
                this.selectedScreens.push(display.value)
            } else {
                // this.selectedScreens.pop(display.value)
                for( var i = 0; i < this.selectedScreens.length; i++){ 
                    if ( this.selectedScreens[i] === display.value) { 
                        this.selectedScreens.splice(i, 1); 
                    }
                }
            }
            this.page = 1
            this.filterFetch()
        },
        async removeScreen(screen){
            //this.selectedScreens.pop(screen)
            for( var i = 0; i < this.selectedScreens.length; i++){ 
                if ( this.selectedScreens[i] === screen) { 
                    this.selectedScreens.splice(i, 1); 
                }
            }
            this.page = 1
            this.filterFetch()
        },
        async applyNetworkFilter(network) {
            if (this.selectedNetworks.includes(network.value) === false) {
                this.selectedNetworks.push(network.value)
            } else {
                // this.selectedNetworks.pop(network.value)
                for( var i = 0; i < this.selectedNetworks.length; i++){ 
                    if ( this.selectedNetworks[i] === network.value) { 
                        this.selectedNetworks.splice(i, 1); 
                    }
                }
            }
            this.page = 1
            this.filterFetch()
        },
        async removeNetwork(network){
            //this.selectedNetworks.pop(network)
            for( var i = 0; i < this.selectedNetworks.length; i++){ 
                if ( this.selectedNetworks[i] === network) { 
                    this.selectedNetworks.splice(i, 1); 
                }
            }
            this.page = 1
            this.filterFetch()
        },
        async applyRamFilter(ram) {
            // var andIncludeRam;
            // if(ram.value.includes('&')){
            //     andIncludeRam = [...this.selectedRams,ram.value.replace('&','-')]
            // }
            if (this.selectedRams.includes(ram.value) === false) {
                this.selectedRams.push(ram.value)
            } else {
                // this.selectedRams.pop(ram.value)
                for( var i = 0; i < this.selectedRams.length; i++){ 
                    if ( this.selectedRams[i] === ram.value) { 
                        this.selectedRams.splice(i, 1); 
                    }
                }
            }
            this.page = 1
            this.filterFetch()
            // if(andIncludeRam.length){
            //     this.filterFetch(andIncludeRam)
            // }else{
            //     this.filterFetch()
            // }   
        },
        async removeRam(ram){
            //this.selectedRams.pop(ram)
            for( var i = 0; i < this.selectedRams.length; i++){ 
                if ( this.selectedRams[i] === ram) { 
                    this.selectedRams.splice(i, 1); 
                }
            }
            this.page = 1
            this.filterFetch()
        },
        async applyCamFilter(cam) {
            if (this.selectedCams.includes(cam.value) === false) {
                this.selectedCams.push(cam.value)
            } else {
                // this.selectedCams.pop(cam.value)
                for( var i = 0; i < this.selectedCams.length; i++){ 
                    if ( this.selectedCams[i] === cam.value) { 
                        this.selectedCams.splice(i, 1); 
                    }
                }
            }
            this.page = 1
            this.filterFetch()
        },
        async removeCam(cam){
            //this.selectedCams.pop(cam)
            for( var i = 0; i < this.selectedCams.length; i++){ 
                if ( this.selectedCams[i] === cam) { 
                    this.selectedCams.splice(i, 1); 
                }
            }
            this.page = 1
            this.filterFetch()
        },
        async customPriceRange() {
            this.priceFrom = parseInt(this.priceFrom) || 25;
            this.priceTo = parseInt(this.priceTo) || 250000;
            this.page = 1
            this.filterFetch()
        },
        async onPageChange(pageNo){
            this.page = pageNo;
            this.filterFetch();
        },

        async filterFetch() {
            let self = this;
            let query = {};
            if (this.searchItem.trim() == '') query.query = ''
            else query.query = this.searchItem.trim()
            let url = ''
            if(this.page){
                url += `&page=${this.page}` 
            }

            setTimeout(async () => {
                var filter = [];
                if (this.selectedBrands.length > 0) {
                    filter.push({ "brand": this.selectedBrands });
                    url += `&brand=${this.selectedBrands}`
                }
                if (this.selectedCams.length > 0) {
                    filter.push({ "cam": this.selectedCams });
                    url += `&cam=${this.selectedCams}`
                }
                if (this.selectedNetworks.length > 0) {
                    filter.push({ "network": this.selectedNetworks });
                    url += `&network=${this.selectedNetworks}`
                }
                if (this.selectedRams.length > 0) {
                    filter.push({ "ram": this.selectedRams });
                    url += `&ram=${this.selectedRams}`
                    // if(andIncludeRam.length){
                    //     url += `&ram=${andIncludeRam}`
                    // } else {
                    //     url += `&ram=${this.selectedRams}`
                    // }   
                }
                if (this.selectedScreens.length > 0) {
                    filter.push({ "screen": this.selectedScreens });
                    url += `&screen=${this.selectedScreens}`
                }

                if(this.type="priceFilter") {
                    filter.push({ "payprice": { "from": this.priceFrom, "to": this.priceTo } });
                    url += `&price=${this.priceFrom}to${this.priceTo}`
                }

                var sort = [];
                if (this.sortDetail == "Price - Low to High") {
                    sort.push({ "payprice": "asc" }, { "_score": "desc" })
                } else {
                    sort.push({ "payprice": "desc" }, { "_score": "desc" })
                }
                url += `&sort=${this.sortDetail}`

                if (this.stockDetail == "Out of Stock") {
                    filter.push({ stock: 0 })
                } else if(this.stockDetail == "In Stock") {
                    filter.push({ stock: { from: 1 } })
                } else {
                    filter.push({stock:{from: 0}})
                }
                url += `&stock=${this.stockDetail}`

                var config_es = {
                    method: 'post',
                    url: 'https://happi-mobile.ent.us-central1.gcp.cloud.es.io/api/as/v1/engines/happi-meta/search',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer search-fhf8xsbbzyadbi9vj4ne3avr'
                    },
                    data: JSON.stringify({
                        "query": this.$route.params.cat,
                        page:
                        {
                            size: 16, current: this.page
                        },
                        "sort": sort,
                        "filters": {
                            "all": filter
                        },

                        "facets": {
                            "brand": [
                                {
                                    "type": "value",
                                    "name": "brand"
                                }
                            ],
                            "cam": [
                                {
                                    "type": "value",
                                    "name": "cam"
                                }
                            ],
                            "screen": [
                                {
                                    "type": "value",
                                    "name": "screen"
                                }
                            ],
                            "network": [
                                {
                                    "type": "value",
                                    "name": "network"
                                }
                            ],
                            "ram": [
                                {
                                    "type": "value",
                                    "name": "ram"
                                }
                            ],
                            "payprice": [
                                {
                                    "type": "range",
                                    "name": "display_price",
                                    "ranges": [
                                        { "from": 1, "to": 10000 },
                                        { "from": 10000, "to": 20000 },
                                        { "from": 20000, "to": 30000 },
                                        { "from": 30000, "to": 40000 },
                                        { "from": 40000, "to": 50000 },
                                        { "from": 50000, "to": 60000 },
                                        { "from": 60000 }
                                    ]
                                }
                            ]
                        }
                    })
                };
                var result = await self.$axios(config_es);
                // console.log("filter API log", result);
                // this.BrandList = result.data.facets.brand[0].data
                // this.CamList = result.data.facets.cam[0].data
                // this.NetworkList = result.data.facets.network[0].data
                // this.RamList = result.data.facets.ram[0].data
                // this.ScreenList = result.data.facets.screen[0].data
                // this.PriceList = result.data.facets.payprice[0].data
                this.items = result.data.results || [];
                this.totalCounts = result.data.meta.page.total_results || 0;
                this.pages = parseInt(this.totalCounts / 16);

                if (process.client) {
                    if (window != null) {
                        window.scroll({
                            top: 0,
                            left: 0,
                            behavior: 'smooth'
                        });
                    }
                }
                if (url != '') {
                    history.pushState(`/${this.$route.params.cat}/${this.$route.params.link}/?q=${url}`,`/${this.$route.params.cat}/${this.$route.params.link}/?q=${url}`,`/${this.$route.params.cat}/${this.$route.params.link}/?q=${url}`);
                }
            }, 1000)
        },

        filteredList() {
            return this.BrandList.filter(brand => {
                return brand.value.toLowerCase().includes(this.search.toLowerCase())
            })
        },

        mrpPriceFormat(item) {
            // var mrp = item.toLocaleString('en-IN', {
            //     style: 'currency',
            //     currency: 'INR'
            // });
            // return mrp;
            let val = (item / 1).toFixed(2).replace('', '')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        },

        priceFormat(item) {
            item = item.toLocaleString('en-IN', {
                style: 'currency',
                currency: 'INR'
            });
            return item;
        },

        calcPriceMrpPercentage(mrp,payprice){
            if(parseInt(mrp) != parseInt(payprice)){
                return true;
            } else {
                return false;
            }
        },

        toValue(value, range) {
            return [
                typeof value.min === 'number' ? value.min : range.min,
                typeof value.max === 'number' ? value.max : range.max
            ];
        },

        async addItemToCart(payload) {
            //console.log('PAYLOAD', payload);
            let item = {
                id: payload.id.raw,
                quantity: 1,
                payPrice: payload.payprice.raw
            };
            this.$gtm.push({
                event: 'addToCart', 'ecommerce': {
                    'currencyCode': 'INR',
                    'add': {                                // 'add' actionFieldObject measures.
                        'products': [{                        //  adding a product to a shopping cart.
                            'name': payload.name.raw,
                            'id': payload.id.raw,
                            'price': payload.payprice.raw + '.00',
                            'brand': '',
                            'category': '',
                            'variant': '',
                            'quantity': 1
                        }]
                    }
                }
            });
            await this.$store.dispatch('cart/addProductToCart', item);
             this.$store.dispatch('cart/toastView', {
            show: true,
            htmlTag : `<span> Success : Your have added </span> <span style="padding: 0 0 9px;">${payload.name.raw} </span>
                        <span style="padding: 0 0 9px;">to your shopping cart.</span>
                         <span><a href="/cart" class="checkout-class" style=" cursor: pointer;
                                   background-color: #fb9013;
                            color: #fff;
                            padding: 5px;
                            text-decoration: none;
                            border-radius: 5px;
                            font-weight: 500;
                            font-size: 13px;">Proceed to Checkout</a> </span>`
          });
          setTimeout(() => {
            //console.log("AFTER SEO");
            this.$store.dispatch('cart/toastView', {
              show: false,
              itemName: `${payload.name.raw}`
            })
          }, 15000);
            await this.$store.dispatch('cart/getCartItems');
            let userData = this.$cookies.get('userDetails');
            if (userData) {
                await this.$store.dispatch(
                    'algolia/fireEvent',
                    {
                        'eventType': 'conversion',
                        'eventName': 'Add to Cart',
                        'index': 'dev_products',
                        'userToken': 'user-' + userData.phone,
                        'timestamp': new Date().getTime(),
                        'objectIDs': [item.id.raw]
                        // "queryID": "43b15df305339e827f0ac0bdc5ebcaa7",
                        // "positions": [7, 6]
                    }
                );
            }

        },
        async handleAddItemToWishlist(product) {
            let userData = this.$cookies.get('userDetails');
            if (userData) {
                let item = {
                    product_id: product.id.raw,
                    user_id: userData.phone,
                    id: userData.phone + '-' + product.id.raw
                };
                await this.$store.dispatch(
                    'algolia/fireEvent',
                    {
                        'eventType': 'click',
                        'eventName': 'Add to Wishlist',
                        'index': 'dev_products',
                        'userToken': 'user-' + userData.phone,
                        'timestamp': new Date().getTime(),
                        'objectIDs': [product.id.raw]

                    }
                );
                await this.$store.dispatch(
                    'wishlist/addItemToWishlist',
                    item
                );

                setTimeout(() => {
                    this.$store.dispatch('wishlist/getWishlist', {
                        user_id: this.$cookies.get('userDetails').phone
                    });
                }, 2000);

                return;
            } else {
                this.$router.push('/account/login');
            }
        },

        async getCartProduct(products) {
            console.log('=====', products);
            let listOfIds = [];
            products.forEach(item => {
                listOfIds.push(item.id);
            });
            const response = await this.$store.dispatch(
                'product/getCartProducts',
                listOfIds
            );
            if (response) {
                this.$store.commit('cart/setLoading', false);
            }
        },

        async getAlogioEvent(url) {
            let temp = await this.$store.dispatch('insights/algolioEvent', {});
            // this.$router.push(`${url}`);
            console.log('TEEEEEEEM', temp);
        },
        url(url) {
            return url.replace('https://happimobiles.s3.ap-south-1.amazonaws.com/', 'https://d1pf9mdy4w0oq4.cloudfront.net/fit-in/200x150/')
            // https://happimobiles.s3.ap-south-1.amazonaws.com/happi/MGSCDOMF-1626534271867.jpg
            // https://d1pf9mdy4w0oq4.cloudfront.net/fit-in/200x150/happi/ZFHKKZMT-1629098175058.jpg
        }
    }
};
</script>

<style>
.ps-breadcrumb {
    padding: 20px 0;
    background-color: #ffff !important;
}
.price-page-bg{
    background-color: #f3f6f9;
}
.v-application .mt-0 {
    margin-top: 0px !important;
    display: none;
}


#min{
    width: 70px;
    border: 1px solid black;
    border-radius: 8px;
    font-size: 12px;
    text-align: center;
}

#max{
    width: 70px;
    border: 1px solid black;
    border-radius: 8px;
    font-size: 12px;
    text-align: center;
}

#submit{
    width: 45px;
    border: 1px solid black;
    border-radius: 8px;
    font-size: 12px;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
}

.selectedFilters{
    background: #FBA643;
    color: #fff;
    border-radius: 3px;
    margin: 0 7px 8px 0;
    display: inline-flex;
    border: 1px solid #fb9013;
    padding: 2px 6px;
    font-size: 12px;
    font-weight: 400;
    align-items: center;
}

.filterClick{
    cursor: pointer;
}

.remove {
    color: #000;
    border:1px solid white;
    text-align: center;
    cursor: pointer;
    width: 20px;
    border-radius: 20px;
    background-color: #fff;
}

.selectSort {
    font-size: 13px;
    color: #fb9013 !important;
}

.sortContainer {
    max-width: 100% !important;
    background-color: #fff;
    border-radius: 8px;
    position: relative;
    padding: 20px 20px 0;
    border: 1px solid transparent;
}


.mrp-products p{
font-size:1.2rem !important;
color: rgba(0,0,0,0.5);
}

.mrp-products{
    height: 25px;
}

.row + .row {
    margin-top: 0px;
}



.ps-product {
    max-width: 100% !important;
    background-color: #fff;
    border-radius: 8px;
}

.ps-page--shop .ps-layout__left .card-lay {
    background-color: #fff;
    border-radius: 8px;
    padding: 10px;

}

.ps-shopping .ps-shopping__header .card-layout {
    background-color: #fff;
    border-radius: 8px;
}


.hit-image {
    height: 125px !important;
    width: auto !important;
}

.image-b {
    text-align: center;
}

.ps-product__actions a i {
    font-size: 1.5rem !important;
}


.ps-product .ps-product__title {
    color: #000 !important;
}

.ps-product:hover .ps-product__title {
    color: #fb9013 !important;
}

.ais-RefinementList-item label span {
    font-size: 1.3rem;
}

.ais-HierarchicalMenu-count,
.ais-Menu-count,
.ais-RefinementList-count,
.ais-ToggleRefinement-count {
    font-size: 1rem !important;
}

.ais-PoweredBy-text,
.ais-Stats-text,
.rheostat-tooltip,
.rheostat-value {
    font-size: 1rem !important;
}

.ais-Panel-header {
    font-size: 1.2rem !important;
    border: none !important;
}

.clear-filters {
    font-size: 16px !important;
}

.flex {
    display: flex;
}

.ais-ClearRefinements button {
    opacity: 1;
    padding: 1rem 1.5rem;
    background-color: #fb9013 !important;
    color: #000;

}

.ais-NumericMenu-item .ais-NumericMenu-labelText {
    font-size: 14px !important;
}

.ais-Stats span {
    font-size: 1.4rem !important;
    font-weight: bold;
}

.ps-shopping__header .ais-panel {
    width: 100%;
}

.container-option.ais-SortBy select {
    width: 200px;
    border-radius: 0;
    padding: 1rem;
    font-size: 14px;
}

.container-option.ais-SortBy select option {
    padding: 1rem;
    font-size: 14px;
}
.price-range-each{
  margin: 0 10px;
  padding: 5px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  font-weight: bold;
  width: fit-content;

}
.price-range-each:hover {
  background: #fb9013;
  cursor: pointer;
}
 .price-range-each span {
  font-weight: bold!important;
}
@media (max-width: 767px) {
    .ais-Hits-item,
    .ais-InfiniteHits-item,
    .ais-InfiniteResults-item,
    .ais-Results-item {
        width: calc(50% - 1rem) !important;
    }

    .ps-shopping .ps-shopping__header > * {
        width: 100%;
        max-width: 100%;
    }

    .ais-Panel .ais-Panel-body .row {
        display: grid;
    }
    .price-ranges {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 96%;
    }
    .price-range-each {
        width : 98%;
    }
    
    .filters {
        display: none;
    }
}

@media (max-width: 767px){
    .ps-page--shop .ps-product .ps-product__content:not(.hover) {
        width: 100%;
        left: 0;
        padding: 0 1px 0px !important;
    }
    .ps-product .ps-product__title {
        color: #000 !important;
        text-align: -webkit-center;
    }
    .ps-product .ps-product__container {
        height: max-content;
        padding-bottom: 20px;
    }
    .ps-product .ps-product__thumbnail {
        position: relative;
        overflow: hidden;
        margin-top: 20%;
    }
    .container {
        width: 100%;
        padding: 2px;
        margin-right: auto;
        margin-left: auto;
    }
    .display_price{
            align-items: flex-end;
        padding-left: 2%;
    }
    .mrp-products p{
    font-size:1.1rem !important;
    color: rgba(0,0,0,0.5);
    }
    .filters {
        display: none;
    }
}
.filt-label {
    padding-left: 5px;
}

.filt-word {
    font-size: 14px;
    font-weight: 600;
}

/* width */
::-webkit-scrollbar {
    width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #fb9013;
    border-radius: 10px;
}



.filt {
    background-color: #fff;
    box-shadow: 1px 1px 1px 1px #E2DED0;
}

.card {
    border-color: #fff;
}

.divider {
    border: 0.5px solid rgba(0, 0, 0, 0.7);
}
</style>

