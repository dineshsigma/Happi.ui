<template>
    <div class='martfury ps-container p-0'>
        <bread-crumb :breadcrumb='breadCrumb' layout='fullwidth' />
        <div class='ps-page--shop price-page-bg'>
            <div class='ps-layout--shop'>
                <div class="col-3 filters">
                    <div class="filt">
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
                                        <label :style="{'color': priceFrom == '25' && priceTo == price.to ? '#fb9013' : 'black'}" @click="applyPriceFilter(price)" class="filt-label filterClick">Below ₹{{
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
                                        <label :style="{'color': priceFrom == price.from && priceTo == '250000' ? '#fb9013' : 'black'}" @click="applyPriceFilter(price)" class="filt-label filterClick">₹{{mrpPriceFormat(price.from)}} & Above</label>
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
                    <br>
                    <div class="row selectcatrow">
                        <div class="col-12">
                            <div class="row selectedFilts">
                            <div>
                                <span title="Category" class="selectedFilters">
                                    Category: {{ this.searchCategory }} &nbsp;
                                    <!-- <span class="remove" @click="removeBrand(brand)"> <b>x</b> </span> -->
                                </span>
                            </div>
                            <div  v-for="brand in this.selectedBrands">
                                <span title="Brand" class="selectedFilters">
                                    Brand: {{ brand }} &nbsp;<span class="remove" @click="removeBrand(brand)"> <b>x</b> </span>
                                </span>
                            </div>
                            <div v-if="this.priceFrom == 25 && this.priceTo == 10000">
                                <span title="Price Range" class="selectedFilters">
                                    <!-- Brand: {{ brand }} &nbsp;<span class="remove" @click="removeBrand(brand)"> <b>x</b> </span> -->
                                    Price Range: Below ₹{{ this.priceTo }} &nbsp;<span class="remove"
                                        @click="removePrice()"> <b>x</b> </span>
                                </span>
                            </div>
                            <div v-if="this.priceFrom > 25 && this.priceTo != 250000"> <span title="Price Range"
                                    class="selectedFilters">
                                    <!-- Brand: {{ brand }} &nbsp;<span class="remove" @click="removeBrand(brand)"> <b>x</b> </span> -->
                                    Price Range: &nbsp;₹{{ this.priceFrom }} - ₹{{ this.priceTo }} &nbsp;<span
                                        class="remove" @click="removePrice()"> <b>x</b> </span>
                                </span> 
                            </div>
                            <div v-if="this.priceFrom == 60000 && this.priceTo == 250000"> <span title="Price Range"
                                    class="selectedFilters">
                                    <!-- Brand: {{ brand }} &nbsp;<span class="remove" @click="removeBrand(brand)"> <b>x</b> </span> -->
                                    Price Range: &nbsp;₹{{ this.priceFrom }} and above &nbsp;<span class="remove"
                                        @click="removePrice()"> <b>x</b> </span>
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
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-12">
                            <div class="sortContainer">
                                <v-row class="sortRow">
                                    <v-col class="col-lg-6 col-md-6 col-2">
                                        <!-- <label></label> -->
                                        <p class="filterMobile" style="color: #fb9013;cursor: pointer;font-size: 25px;margin-top: 10px;" @click="showMobileFilters()"><i class='fa fa-filter happi-filter'></i>&nbsp;</p>
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
                    <v-dialog transition="dialog-bottom-transition" fullscreen v-model="this.EnableMobileFilters" width="600" class="col-sm-12 filterMobile"  >
                        <v-card class="container filt mobileFilterPopup">
                            <div class="mobile-filter-body">
                            <div class="card col-12" v-if="filteredList().length">
                                <div>
                                    <h4 style="float: left;padding-top: 8px;" class="filt-word">Brand</h4>
                                    <span
                                        style="background-color: #fb9013;width: 20px;text-align: center;color: white;font-size: 15px;border: 1px solid #fb9013;cursor: pointer;font-weight: 800;float: right;"
                                        class="toggle float-right" @click="brandVisible = !brandVisible"
                                        v-text="toggletText[brandVisible * 1]">
                                    </span>
                                </div>
                                <!-- <br> -->
                                <div class="search-wrapper" v-if="brandVisible">
                                    <i class="fa fa-search"></i> &nbsp;<input type="text" id="search" v-model="search"
                                        placeholder="Search brand" />
                                    <hr>
                                </div>

                                <div style="overflow-y: scroll; height: 180px;" v-if="brandVisible">
                                    <ul id="brands" style="list-style-type: none;max-height: 180px;"
                                        v-for="brand in filteredList().sort((a, b) => (a.value > b.value) ? 1 : -1)">
                                        <li v-if="brand.value != ''">
                                            <!-- {{selectedBrands.includes(brand.value)}} -->
                                            <!-- <input :value="brand" type="checkbox" @click="applyBrandFilter(brand)"> -->
                                            <label :style="{'color': selectedBrands.includes(brand.value) ? '#fb9013' : 'black'}" @click="applyBrandFilter(brand)" class="filt-label filterClick">{{ brand.value }}</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <hr class="mobileDivider" v-if="PriceList.length">

                            <div class="card col-12" v-if="PriceList.length">
                                <!-- <div class="search-wrapper">
                            <input type="text" v-model="search" placeholder="Search RAM Size"/>
                        </div> -->
                                <div>
                                    <h4 class="filt-word" style="float: left;">Price Range</h4>
                                    <span
                                        style="background-color: #fb9013;width: 20px;text-align: center;color: white;font-size: 15px;border: 1px solid #fb9013;cursor: pointer;font-weight: 800;float: right;"
                                        class="toggle float-right" @click="mobilePriceVisible = !mobilePriceVisible"
                                        v-text="toggletText[mobilePriceVisible * 1]"></span>
                                </div>
                                <div class="search-wrapper" v-if="mobilePriceVisible">
                                    <hr>
                                </div>
                                <div style="overflow-y: scroll; height: 180px;" v-if="mobilePriceVisible">
                                    <ul id="prices" style="list-style-type: none;max-height: 180px;"
                                        v-for="price in PriceList">
                                        <li v-if="price.from == 1 && price.count != 0">
                                            <label :style="{'color': priceFrom == '25' && priceTo == price.to ? '#fb9013' : 'black'}" @click="applyPriceFilter(price)" class="filt-label filterClick">Below ₹{{
                                                    mrpPriceFormat(price.to)
                                            }}
                                            </label>
                                        </li>
                                        <li v-if="price.value != '' && price.from != 1 && price.from != 60000 && price.count != 0">
                                            <!-- <input :value="price" type="checkbox" @click="applyPriceFilter(price)"> -->
                                            <label :style="{'color': priceFrom == price.from && priceTo == price.to ? '#fb9013' : 'black'}" @click="applyPriceFilter(price)" class="filt-label filterClick">₹{{ mrpPriceFormat(price.from) }} - ₹{{
                                                    mrpPriceFormat(price.to)
                                            }}</label>
                                        </li>
                                        <li v-if="price.from == 60000 && price.count != 0">
                                            <label :style="{'color': priceFrom == price.from && priceTo == '250000' ? '#fb9013' : 'black'}" @click="applyPriceFilter(price)" class="filt-label filterClick">₹{{mrpPriceFormat(price.from)}} & Above</label>
                                        </li>
                                    </ul>
                                    ₹<input type="number" v-model="priceFrom" placeholder="min" id="min"> - ₹<input type="number" v-model="priceTo" placeholder="max" id="max"> &nbsp; <input style="background:#fb9013;border: 1px solid #fb9013" type="submit" @click="customPriceRange()" id="submit" value="Go">

                                </div>
                            </div>
                            <hr class="mobileDivider" v-if="RamList.length">
                            <div class="card col-12" v-if="RamList.length">
                                <!-- <div class="search-wrapper">
                            <input type="text" v-model="search" placeholder="Search RAM Size"/>
                        </div> -->
                                <div>
                                    <h4 style="float: left;" class="filt-word">RAM Size</h4>
                                    <span
                                        style="background-color: #fb9013;width: 20px;text-align: center;color: white;font-size: 15px;border: 1px solid #fb9013;cursor: pointer;font-weight: 800;float: right;"
                                        class="toggle float-right" @click="mobileRamVisible = !mobileRamVisible"
                                        v-text="toggletText[mobileRamVisible * 1]"></span>
                                </div>
                                <div class="search-wrapper" v-if="mobileRamVisible">
                                    <hr>
                                </div>
                                <div style="height: 180px;" v-if="mobileRamVisible">
                                    <ul id="brands" style="list-style-type: none;max-height: 180px;" v-for="ram in RamList">
                                        <li v-if="ram.value != ''">
                                            <!-- <input :value="ram" type="checkbox" @click="applyRamFilter(ram)"> -->
                                            <label :style="{'color': selectedRams.includes(ram.value) ? '#fb9013' : 'black'}" @click="applyRamFilter(ram)" class="filt-label filterClick">{{ ram.value }}</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <hr class="mobileDivider" v-if="ScreenList.length">
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

                            <hr class="mobileDivider" v-if="CamList.length">
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

                            <hr class="mobileDivider" v-if="NetworkList.length">
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
                            <v-footer fixed flat style="background: #fb9013;background: white; justify-content: center;">
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        text
                                        @click="closeMobileFilter()"
                                        class="close_filter"
                                    >
                                        APPLY FILTERS
                                    </v-btn>
                                    <v-btn
                                        text
                                        @click="clearMobileFilter()"
                                        class="clear_filter"
                                    >
                                        REMOVE FILTERS
                                    </v-btn>
                                </v-card-actions>
                            </v-footer>
                       
                        </v-card>
                    </v-dialog>
                    <br>
                    <div class='row' style='padding: 10px !important;' v-if='items.length != 0'>

                        <div class='col-lg-3 col-md-3 col-6' v-for='(item, index) in items'
                             style='padding-bottom: 15px !important; padding-top: 10px!important'>

                            <div class='ps-product'  style='padding: 15px !important;'>
                                
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
                                            <!--                                                 :src='`${imageCDN(item.pictures_new[0])}`'-->
                                            <!--                                                 :alt='`${item.name}`'-->
                                            <!--                                            />-->
                                        </div>
                                    </nuxt-link>
                                    <!--                                    <div v-if='isSale === true' class='ps-product__badge'>-->
                                    <!--                                        sale-->
                                    <!--                                    </div>-->
                                    <!-- <ul class='ps-product__actions'>
                                        <li >
                                            
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
                                            <div class="row">
                                                <div v-if="item.mrp && calcPriceMrpPercentage(item.mrp.raw,item.payprice.raw)" class="mrp-products col-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                    <p>
                                                    <s>₹{{ mrpPriceFormat(item.mrp.raw) }}</s> 
                                                    </p>
                                                </div>
                                                <div class="col-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 display_price">
                                                    
                                                    <p style="color:#fb9013;font-size: 13px;"><b>
                                                        {{ priceFormat(item.display_price.raw) }}&nbsp;
                                                    </b></p>
                                                    
                                                </div>
                                            </div>
                                            
                                            <div class="row">
                                                <div v-if="calcPriceMrpPercentage(item.mrp.raw,item.payprice.raw)" class="col-6 col-lg-6 col-md-6 col-sm-1" style="padding-bottom:30px">
                                                    <strong style="font-size: 12px; padding:2px;border-radius:4px;background-color:#CC4600; color:#fff">
                                                        {{ (( (parseInt(item.mrp.raw) - parseInt(item.payprice.raw)) / (item.mrp.raw) ) * 100 ).toFixed(0) }}%&nbsp;OFF</strong> 

                                                </div>
                                                <div v-else class="col-6 col-lg-6 col-md-6 col-sm-1">
                                                    <p> </p>
                                                </div>
                                                <div class=" col-6 col-lg-6 col-md-6 col-sm-11">
                                                    <p v-if='item.stock.raw == 0' class='mb-0'
                                                    style='color:red;font-size:12px;float:right'>
                                                        Out of stock
                                                    </p>
                                                </div>
                                            </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                    <div class='no-data text-center' v-else>
                        <p>No Products Found</p>

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
                                        @input='onPageChange'
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
import Rating from '~/components/elements/Rating';
import ProductQuickview from '~/components/elements/detail/ProductQuickview';


export default {
    transition: 'zoom',
    layout: 'layout-default-ssr',
    ssr: true,
    data() {
        return {
            categoryId: this.$route.params.cat + '-' + this.$route.params.link,
            pageLoading: true,
            items: [],
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
            searchCategory: this.$route.params.slug,
            brandVisible: true,
            mobileRamVisible: false,
            mobilePriceVisible: false,
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
            priceFrom: 25,
            priceTo: 250000,
            minValue: null,
            maxValue: null,
            EnableMobileFilters: false,
        };
    },
    watch: {
        'pagination.page': (newPage) => {
            this.onPageChange(newPage);
        }
    },
    async created() {
        //console.log("items", this.items);
        this.pages = parseInt(this.totalCounts / 16);
        if (process.client) {
            if (window != null) {
                console.log(window.location.pathname.split('/')[2]);
                this.pathName = window.location.pathname.split('/')[2];
            }
        }
        var category = this.$route.params.slug;
        category = category.split("/")[0]


        if (this.$route.params.slug === 'all') {
            category = this.$route.params.cat;
        } else {
            category = this.$route.params.slug;
            category = category.replace('buy-', '');
            category = category.replace('-mobiles-online', '');
        }
        
        var seoData = await this.$http.$get(`/api/cat-fetch?url=/${this.$route.params.cat}/${this.$route.params.slug}`);
        var searchText = seoData.data.id
        
        this.selectedBrands = category
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
        
        this.selectedScreens = this.$route.query?.screen?.split(",")||[]

        this.sortDetail = this.$route.query?.sort||'Price - Low to High'
        this.stockDetail = this.$route.query?.stock||'In Stock'
        
        var filter = [];
        var catFilter = [];
        // console.log("filter",filter.length)

                catFilter.push({'category': searchText})
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
                    sort.push({ "payprice": "asc" }, { "_score": "desc" })
                } else {
                    sort.push({ "payprice": "desc" }, { "_score": "desc" })
                }
                

                if (this.stockDetail == "Out of Stock") {
                    filter.push({ stock: 0 })
                } else if(this.stockDetail == "In Stock") {
                    filter.push({ stock: { from: 1 } })
                } else {
                    filter.push({stock:{from: 0}})
                }
                

        this.breadCrumb = [
            {
                text: 'Home',
                url: '/'
            },
            {
                text: this.$route.params.cat + ' / ' + this.$route.params.slug
            }
        ];

        var elasticApiResult = await this.ElasticApiFilters(category,searchText,sort,filter,catFilter,this.page)
        var totalAPI = await this.ElasticApiFilters(category,searchText,sort,[],catFilter,this.page)
        var result2 = await this.$axios(totalAPI);
        var result = await this.$axios(elasticApiResult);
        this.items = result.data.results
        this.totalCounts = result.data.meta.page.total_results || 0,
        this.pages = parseInt(this.totalCounts / 16);
        // console.log("result facets", result.data.facets)
        this.BrandList = result2.data.facets.brand[0].data
        this.CamList = result2.data.facets.cam[0].data
        this.NetworkList = result2.data.facets.network[0].data
        this.RamList = result2.data.facets.ram[0].data
        this.ScreenList = result2.data.facets.screen[0].data
        this.PriceList = result2.data.facets.payprice[0].data
        // this.ProductList = result.data.facets.brand[0].data

        let userData = this.$cookies.get('userDetails');
        if (userData) {
            const result = await this.$store.dispatch('wishlist/getWishlist', {
                user_id: userData.phone
            });
            return;
        } else {
            await this.$store.dispatch('auth/setUserLogout');
        }
        // this.$fire.analytics.logEvent('products-listing', {
        //     id: this.$route.params.cat + '-' + this.$route.params.slug
        // });
    },
    computed: {
        ...mapState({
            cartItems: state => state.cart.cartItems,
            currency: state => '₹',
            wishlistItems: state => state.wishlist.wishlistItems
        })
    },


    components: {
        ProductQuickview,
        Rating,
        BreadCrumb
    },
    async asyncData({ params, redirect, $axios, route, $http, $seo }) {
        //console.log("ROUTE", route)

        var category = route.params.slug

        if (route.params.slug === 'all') {
            category = route.params.cat;
        } else {
            category = route.params.slug;
            category = category.replace('buy-', '');
            category = category.replace('-mobiles-online', '');
        }
        var pagesize = 16;
        if (route.query.page === 'all') {
            pagesize = 500;
        }

        var seoData = await $http.$get(`/api/cat-fetch?url=/${route.params.cat}/${route.params.slug}`);

        // category = category.replace('buy-', '');
        // category = category.replace('-mobiles-online', '');
        var config_es = {
            method: 'post',
            url: 'https://happi-mobile.ent.us-central1.gcp.cloud.es.io/api/as/v1/engines/happi-meta/search',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer search-fhf8xsbbzyadbi9vj4ne3avr'
            },
            data: JSON.stringify({
                    "query": category,
                    //'query': searchText,

                    'filters': {
                        "all":[{ "category":seoData.data.id  },{"stock": {"from": 1}}],
                        
                    },
                    'page': {
                        'size': pagesize, 'current': 1
                    },
                    // filters: {
                    //     stock: {
                    //         from: 1,
                    //         to: 1000,
                    //     },
                    // },
                    "sort": [
                        { "payprice": "asc" }
                    ],
                    "search_fields": {
                        "modelname": {
                            "weight": 100
                        },
                        "category": {
                            "weight": 10
                        },
                    },
                }
            )
        };
        var result = await $axios(config_es);
        // console.log("result.data.hits.hixts",result.data);
        // $http.$get('/api/cat-fetch?url=/mobiles/apple'')

        $seo({
            title: seoData.data.seo.title.substring(0, 120),
            templateTitle: '%title% - Happi Mobiles',
            description: seoData.data.seo.description,
            openGraph: {
                site: 'Happi Mobiles',
                type: 'website',
                title: seoData.data.seo.title,
                description: seoData.data.seo.description
            },
            twitter: {
                site: 'Happi Mobiles',
                type: 'website',
                title: seoData.data.seo.title,
                description: seoData.data.seo.description
            },
            facebook: {
                appId: '826575227724107',
                pageId: ''
            }
        });
        return {
            catIndex: seoData.data.id,
            items: result.data.results || [],
            totalCounts: result.data.meta.page.total_results || 0

        };

    },
    head() {
        // const result = this.meta.filter(e => e['Url'] === this.$route.params.cat + '/' + this.$route.params.link);
        // if (result.length !== 0) {
        //     return {
        //         title: result[0]['Title'],
        //         meta: [
        //             { hid: 'og-title', property: 'og:title', content: result[0]['Title'] },
        //             { hid: 'og-description', property: 'og:description', content: result[0]['Description'] },
        //             { hid: 'description', property: 'description', content: result[0]['Description'] },
        //             { hid: 'keywords', property: 'keywords', content: result[0]['Keyword'] }
        //         ]
        //     };
        // }

    },
    methods: {
        imageCDN(url) {
            if(url === null){
                return "";
            }
            return url.replace('https://happimobiles.s3.ap-south-1.amazonaws.com/', 'https://d3dfpp6nfjsq5w.cloudfront.net/fit-in/120x250');
        },

        async ElasticApiFilters(category,searchText,sort,filter,catFilter,page){
            var config_es = {
            method: 'post',
            url: 'https://happi-mobile.ent.us-central1.gcp.cloud.es.io/api/as/v1/engines/happi-meta/search',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer search-fhf8xsbbzyadbi9vj4ne3avr'
            },
            data: JSON.stringify({
                'query': category,
                "sort": sort,
                page:
                    {
                        size: 16, current: parseInt(page)
                    },
                "filters": {
                    // {"all": filter} 
                    "all": filter,
                    "any": catFilter,
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

        async clearMobileFilter() {
            this.EnableMobileFilters = false
            this.MobileFilterText = 'Apply Filters'
            this.selectedBrands = [];
            this.selectedCams = [];
            this.selectedRams = [];
            this.selectedScreens = [];
            this.selectedNetworks = [];
            this.priceFrom = 25;
            this.priceTo = 250000;
            this.filterFetch();
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

        async onPageChange(pageNo) {
            this.page = pageNo;

            var category = '';

            if (this.$route.params.slug === 'all') {
                category = this.$route.params.cat;
            } else {
                category = this.$route.params.slug;
            }
            this.filterFetch()
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
            var searchText = this.$route.params.slug

            if (this.$route.params.slug === 'all') {
                searchText = this.$route.params.cat;
            } else {
                searchText = this.$route.params.slug;
            }
            
            var seoData = await this.$http.$get(`/api/cat-fetch?url=/${this.$route.params.cat}/${this.$route.params.slug}`);
            searchText = searchText.replace('buy-', '');
            searchText = searchText.replace('-mobiles-online', '');
            searchText = seoData.data.id ||  searchText,

            setTimeout(async () => {
                var filter = [];
                filter.push({"category": seoData.data.id})
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
                if (this.priceFrom > 0) {
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
                        "query": searchText,
                        
                        page:
                        {
                            size: 16, current: parseInt(this.page)
                        },
                        "sort": sort,
                        "filters": {
                            "all": filter,
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
                    history.pushState(`/${this.$route.params.cat}/${this.$route.params.slug}/?q=${url}`,`/${this.$route.params.cat}/${this.$route.params.slug}/?q=${url}`,`/${this.$route.params.cat}/${this.$route.params.slug}/?q=${url}`);
                }
            }, 1000)
        },

        filteredList() {
            return this.BrandList.filter(brand => {
                if(this.search != ''){
                    return brand.value.toLowerCase().includes(this.search.toLowerCase())
                }else{
                    return brand.value
                }
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
            //console.log("payPrice", item);
            item = item.toLocaleString('en-IN', {
                style: 'currency',
                currency: 'INR'
            });
            return item;
        },

        closeMobileFilter() {
            this.EnableMobileFilters = false
            this.MobileFilterText = 'Apply Filters'
        },

        showMobileFilters(){
            this.EnableMobileFilters = !this.EnableMobileFilters
            console.log(this.EnableMobileFilters)
            this.EnableMobileFilters == true
            this.MobileFilterText = 'Hide Filters'
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
            console.log('PAYLOAD', payload);
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
                htmlTag: `<span> Success : Your have added </span> <span style='padding: 0 0 9px;'>${payload.name.raw} </span>
<span style='padding: 0 0 9px;'>to your shopping cart.</span>
 <span><a href='/cart' class='checkout-class' style=' cursor: pointer;
           background-color: #fb9013;
    color: #fff;
    padding: 5px;
    text-decoration: none;
    border-radius: 5px;
    font-weight: 500;
    font-size: 13px;'>Proceed to Checkout</a> </span>`
            });
            setTimeout(() => {
                console.log('AFTER SEO');
                this.$store.dispatch('cart/toastView', {
                    show: false,
                    itemName: `${payload.name.raw}`
                });
            }, 15000);
            await this.$store.dispatch('cart/getCartItems');
            let userData = this.$cookies.get('userDetails');
        },
        async handleAddItemToWishlist(product) {
            let userData = this.$cookies.get('userDetails');
            let prod_id = product.id.raw.split("|");
            if (userData) {
                let item = {
                    product_id: prod_id[1],
                    user_id: userData.phone,
                    id: userData.phone + '-' + product.id.raw
                };

                let wishStatus = await this.$store.dispatch(
                    'wishlist/addItemToWishlist',
                    item
                );

                if (wishStatus === 'ok') {
                    // this.$notify({
                    //     group: 'addCartSuccess',
                    //     title: 'Add to wishlist!',
                    //     text: `${product.name} has been added to your wishlist !`
                    // });
                } else {
                    // this.$notify({
                    //     group: 'addCartSuccess',
                    //     title: 'Item already added to wishlist!',
                    //     text: ``
                    // });
                }

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
        url(url) {
            if(url === null){
                return "";
            }
            return url.replace('https://happimobiles.s3.ap-south-1.amazonaws.com/', 'https://d1pf9mdy4w0oq4.cloudfront.net/fit-in/200x150/');
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

.ps-page--shop .ps-layout__left .card-layout {
    background-color: #fff;
    border-radius: 8px;
    padding: 10px;

}

.icons:hover{
    color: #fb9013;
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
    width: 5px;
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
.selectedFilts{
    margin-left: 5px;
    margin-bottom: 2px;
}

.close_filter{
    width:170px;
    background: #fb9013;
    color: #ffffff !important;
}

.clear_filter{
    width:170px;
    background: #fff;
    color: #fb9013 !important;
    border: 1px solid #fb9013;
}

.mobileFilterPopup{
    top:30%;
    position:fixed;
    border-radius: 15px !important;
}
.mobile-filter-body{
/* overflow:auto; */
overflow-y: scroll;
    z-index: 999;
    min-height: 331px !important;
    max-height: 500px !important;
}
.mobile-filter-body::-webkit-scrollbar {
    width: 2px;
    min-height: 301px !important; max-height: 400px !important;
    
}

/* Track */
.mobile-filter-body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgb(255, 255, 255);
    border-radius: 10px;
}

/* Handle */
.mobile-filter-body::-webkit-scrollbar-thumb {
    background: #ffffff;
    border-radius: 10px;
}

/* .sortableRow{
    margin-top: 10px !important;
} */

.selectcatrow{
    margin-bottom: 10px !important;
}

@media (min-width: 767px) {
    .filterMobile{
        display: none;
    }
}
</style>

