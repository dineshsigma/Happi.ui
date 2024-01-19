<template>
    <section class="body">
        <div class="col-lg-12 col-md-12 text-center align-center">
            <div
              class="ps-carousel landingpage-sliders"
              v-swiper:mySwiper="swiperOption"
                >
                <div class="swiper-wrapper" v-if="!isMobile">
                    <div
                        class="swiper-slide"
                        style="cursor: pointer"
                        v-for="(item, index) in bannersDesk"
                        :key="index"
                    >
                        <a href="#smf">
                          <img alt="happi" :src="item.pictures"/>
                        </a>
                    </div>
                </div>
                <div class="swiper-wrapper" v-if="isMobile">
                    <div
                        class="swiper-slide mob-offer-hide"
                        style="cursor: pointer"
                        v-for="(item, index) in bannersMobile"
                        :key="index"
                    >
                        <a href="#smf">
                          <img alt="happi" :src="item.pictures"/>
                        </a>
                    </div>
                </div>
                <div class="swiper-nav">
                    <span class="swiper-arrow swiper-prev"
                      ><i class="icon-chevron-left"></i
                    ></span>
                    <div class="swiper-arrow swiper-next">
                      <i class="icon-chevron-right"></i>
                      </div>
                </div>
            </div>
            <!-- <a href="#smf">
                <img :src="`${image_url}`" alt="" style="width: 100%" class="desk-offer-hide" />
                <img :src="`${image_urlm}`" alt="" style="width: 100%" class="mob-offer-hide" />
            </a> -->
        </div>
        <section class="form cid-sN6DERkjXB" id="smf">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 mx-auto mbr-form" data-form-type="formoid">
                        <form id="leads" action="https://dev-services.happimobiles.com/laptop-leads" method="post"
                            class="mbr-form form-with-styler" data-form-title="Diwali Dhamaka">
                            <div class="form-row">
                                <div hidden="hidden" data-form-alert="" class="alert alert-success col-12">
                                    Thanks for filling out the form!
                                </div>
                                <div hidden="hidden" data-form-alert-danger="" class="alert alert-danger col-12">
                                    Oops...! some problem!
                                </div>
                            </div>
                            <div class="dragArea form-row">
                                <div class="
                                        col-lg-12 col-md-12 col-sm-12
                                        text-center
                                    ">
                                    <p class="first-txt">
                                      Get exclusive offers on the new Samsung Galaxy S23 series
                                    </p>
                                    <p class="second-txt">
                                        Please enter your details to receive the
                                        latest update
                                    </p>
                                    <p class="third-txt">
                                        All fields marked (*) are mandatory
                                    </p>
                                </div>

                                <input type="hidden" name="utm_source" id="utm_source" value="" />
                                <input type="hidden" name="utm_medium" id="utm_medium" value="" />
                                <input type="hidden" name="utm_campaign" id="utm_campaign" value="" />
                                <input type="hidden" name="type" value="samsung-s23" />
                                <input type="hidden" name="token" id="token" value="" />
                                <div class="Prebookdiv">
                                    <h6 style="margin: 10px">
                                        Enter Your Name
                                    </h6>
                                    <div data-for="name" class="
                                            col-lg-12 col-md-12 col-sm-12
                                            form-group
                                            p-0
                                            ttbox
                                        " style="margin-bottom: 0 !important">
                                        <input type="text" name="name" id="name" placeholder="Name*"
                                            data-form-field="name" class="form-control display-7 inside-text" required
                                            v-model="nameReq"
                                            minlength="3" value="" v-on:keypress="isLetter($event)"/>
                                    </div>
                                    <h6 style="margin: 10px">
                                        Enter Your Phone Number
                                    </h6>
                                    <div data-for="phone" class="
                                            col-lg-12 col-md-12 col-sm-12
                                            form-group
                                            p-0
                                            ttbox
                                        " style="margin-bottom: 0 !important">
                                        <input type="tel" name="phone" id="phone" placeholder="Phone*"
                                            pattern="[0-9]{10}" maxlength="10" minlength="10" required
                                            data-form-field="phone" class="form-control display-7 inside-text"
                                            v-model="phoneNo"
                                            value="" 
                                            v-on:keypress="phoneValidate($event)"/>
                                    </div>
                                    <h6 style="margin: 10px">Enter Email</h6>
                                    <div data-for="email" class="
                                            col-lg-12 col-md-12 col-sm-12
                                            form-group
                                            p-0
                                            ttbox
                                        " style="margin-bottom: 0 !important">
                                        <input type="email" name="email" id="email" placeholder="Email (optional)"
                                            data-form-field="email" class="form-control display-7 inside-text"
                                            v-model="email"
                                            value="" />
                                    </div>
                                    <div data-for="model" class="
                                            col-lg-12 col-md-12 col-sm-12
                                            form-group
                                            p-0
                                        ">
                                        <h6 style="margin: 10px">
                                            Select Model
                                        </h6>
                                        <aside class="ttbox">
                                            <div class="form-group">
                                                <select name="Brand" data-form-field="Brand" required value=""
                                                    class="form-control inside-text" @change="
                                                        changeModel($event)
                                                    ">
                                                    <option value="0">
                                                        Select Model 
                                                    </option>
                                                    <option value="samsungs23">
                                                        Samsung Galaxy S23
                                                    </option>
                                                    <option value="samsungs23plus">
                                                        Samsung Galaxy S23 +
                                                    </option>
                                                    <option value="samsungs23Ultra">
                                                        Samsung Galaxy S23 Ultra
                                                    </option>
                                                </select>
                                            </div>
                                        </aside>
                                    </div>

                                    <div class="form-group p-0 captchcls">
                                        <recaptcha id="captcha" />&nbsp;&nbsp;
                                    </div>

                                    <div>
                                        <button class="btn btncss" @click="validate">
                                            <b>Submit</b>
                                        </button>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <!-- <hr /> -->
                                </div>
                            </div>
                        </form>
                        <br><br>
                        <div v-if="
                            block == 'samsungs23' ||
                            block == 'samsungs23plus'
                        ">
                            <div id="u_body" class="u_body" style="min-height: 100vh;">

    <div id="u_row_3" class="u_row" style="padding: 0px;">
      <div class="container" style="max-width: 1000px;margin: 0 auto;background-color: #fffffd;">
        <div class="u-row">

          <div id="u_column_4" class="u-col u-col-100 u_column" style="display:flex;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;">
            <div style="width: 100%;padding:0px;">

              <div id="u_content_image_2" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center" >
                  <a href="#smf">
                   <img alt="" src="https://assets.unlayer.com/projects/123867/1675397796461-happi_mobiles_samsung_galaxy_s23_banner1.jpg" style="width: 100%;max-width: 1464px;" title="" />
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

    <div id="u_row_4" class="u_row" style="padding: 0px;">
      <div class="container" style="max-width: 1000px;margin: 0 auto;">
        <div class="u-row">

          <div id="u_column_5" class="u-col u-col-50 u_column" style="display:flex;align-items:center;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;">
            <div style="width: 100%;padding:0px;">

              <div id="u_content_image_3" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">
                  <a href="#smf">
                  <img alt="" src="https://assets.unlayer.com/projects/123867/1675398019137-happi_mobiles_samsung_galaxy_s23_3.png" style="width: 100%;max-width: 1000px;" title="" />
                  </a>
                </div>

              </div>

            </div>
          </div>

          <div id="u_column_6" class="u-col u-col-50 u_column" style="display:flex;align-items:center;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;">
            <div style="width: 100%;padding:0px;">

              <div id="u_content_image_4" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1675398024932-happi_mobiles_samsung_galaxy_s23_4.png" style="width: 100%;max-width: 1000px;" title="" />

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

    <div id="u_row_5" class="u_row" style="padding: 0px;">
      <div class="container" style="max-width: 1000px;margin: 0 auto;background-color: #ffffff;">
        <div class="u-row">

          <div id="u_column_7" class="u-col u-col-50 u_column" style="display:flex;align-items:center;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;">
            <div style="width: 100%;padding:0px;">

              <div id="u_content_image_5" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">
                  <a href="#smf">
                  <img alt="" src="https://assets.unlayer.com/projects/123867/1675398040131-happi_mobiles_samsung_galaxy_s23_5.png" style="width: 100%;max-width: 1000px;" title="" />
                  </a>
                </div>

              </div>

            </div>
          </div>

          <div id="u_column_8" class="u-col u-col-50 u_column" style="display:flex;align-items:center;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;">
            <div style="width: 100%;padding:0px;">

              <div id="u_content_image_6" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">
                  <a href="#smf">
                  <img alt="" src="https://assets.unlayer.com/projects/123867/1675398067864-happi_mobiles_samsung_galaxy_s23_6.png" style="width: 100%;max-width: 1000px;" title="" />
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

    <div id="u_row_6" class="u_row" style="padding: 0px;">
      <div class="container" style="max-width: 1000px;margin: 0 auto;background-color: #000001;">
        <div class="u-row">

          <div id="u_column_9" class="u-col u-col-50 u_column" style="display:flex;align-items:center;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;">
            <div style="width: 100%;padding:0px;">

              <div id="u_content_image_7" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">
                  <a href="#smf">
                  <img alt="" src="https://assets.unlayer.com/projects/123867/1675398090935-happi_mobiles_samsung_galaxy_s23_8.png" style="width: 100%;max-width: 1000px;" title="" />
                  </a>
                </div>

              </div>

            </div>
          </div>

          <div id="u_column_10" class="u-col u-col-50 u_column" style="display:flex;align-items:center;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;">
            <div style="width: 100%;padding:0px;">

              <div id="u_content_image_8" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">
                  <a href="#smf">
                  <img alt="" src="https://assets.unlayer.com/projects/123867/1675398094261-happi_mobiles_samsung_galaxy_s23_10.png" style="width: 100%;max-width: 1000px;" title="" />
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

    <div id="u_row_7" class="u_row" style="padding: 0px;">
      <div class="container" style="max-width: 1000px;margin: 0 auto;background-color: #e8d6e4;">
        <div class="u-row">

          <div id="u_column_11" class="u-col u-col-50 u_column" style="display:flex;align-items:center;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;">
            <div style="width: 100%;padding:0px;">

              <div id="u_content_image_9" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">
                  <a href="#smf">
                  <img alt="" src="https://assets.unlayer.com/projects/123867/1675398148110-happi_mobiles_samsung_galaxy_s23_12.png" style="width: 100%;max-width: 1000px;" title="" />
                  </a>
                </div>

              </div>

            </div>
          </div>

          <div id="u_column_12" class="u-col u-col-50 u_column" style="display:flex;align-items:center;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;">
            <div style="width: 100%;padding:0px;">

              <div id="u_content_image_10" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">
                  <a href="#smf">
                  <img alt="" src="https://assets.unlayer.com/projects/123867/1675398151820-happi_mobiles_samsung_galaxy_s23_13.png" style="width: 100%;max-width: 1000px;" title="" />
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

    <div id="u_row_8" class="u_row" style="padding: 0px;">
      <div class="container" style="max-width: 1000px;margin: 0 auto;background-color: #ebe8f9;">
        <div class="u-row">

          <div id="u_column_13" class="u-col u-col-50 u_column" style="display:flex;align-items:center;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;">
            <div style="width: 100%;padding:0px;">

              <div id="u_content_image_11" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">
                  <a href="#smf">
                  <img alt="" src="https://assets.unlayer.com/projects/123867/1675398188938-happi_mobiles_samsung_galaxy_s23_14.png" style="width: 100%;max-width: 1000px;" title="" />
                  </a>
                </div>

              </div>

            </div>
          </div>

          <div id="u_column_14" class="u-col u-col-50 u_column" style="display:flex;align-items:center;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;">
            <div style="width: 100%;padding:0px;">

              <div id="u_content_image_12" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">
                  <a href="#smf">
                  <img alt="" src="https://assets.unlayer.com/projects/123867/1675398191958-happi_mobiles_samsung_galaxy_s23_15.png" style="width: 100%;max-width: 1000px;" title="" />
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

    <div id="u_row_9" class="u_row" style="padding: 0px;">
      <div class="container" style="max-width: 1000px;margin: 0 auto;background-color: #f1eae0;">
        <div class="u-row">

          <div id="u_column_15" class="u-col u-col-50 u_column" style="display:flex;align-items:center;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;">
            <div style="width: 100%;padding:0px;">

              <div id="u_content_image_13" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">
                  <a href="#smf">
                  <img alt="" src="https://assets.unlayer.com/projects/123867/1675398224442-happi_mobiles_samsung_galaxy_s23_16.png" style="width: 100%;max-width: 1000px;" title="" />
                  </a>
                </div>

              </div>

            </div>
          </div>

          <div id="u_column_16" class="u-col u-col-50 u_column" style="display:flex;align-items:center;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;">
            <div style="width: 100%;padding:0px;">

              <div id="u_content_image_14" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">
                  <a href="#smf">
                  <img alt="" src="https://assets.unlayer.com/projects/123867/1675398232278-happi_mobiles_samsung_galaxy_s23_18.png" style="width: 100%;max-width: 1000px;" title="" />
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

    <div id="u_row_10" class="u_row" style="padding: 0px;">
      <div class="container" style="max-width: 1000px;margin: 0 auto;background-color: #f3e1df;">
        <div class="u-row">

          <div id="u_column_17" class="u-col u-col-50 u_column" style="display:flex;align-items:center;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;">
            <div style="width: 100%;padding:0px;">

              <div id="u_content_image_15" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">
                  <a href="#smf">
                  <img alt="" src="https://assets.unlayer.com/projects/123867/1675398522329-happi_mobiles_samsung_galaxy_s23_19.png" style="width: 100%;max-width: 1000px;" title="" />
                  </a>
                </div>

              </div>

            </div>
          </div>

          <div id="u_column_18" class="u-col u-col-50 u_column" style="display:flex;align-items:center;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;">
            <div style="width: 100%;padding:0px;">

              <div id="u_content_image_16" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">
                  <a href="#smf">
                  <img alt="" src="https://assets.unlayer.com/projects/123867/1675398419804-happi_mobiles_samsung_galaxy_s23_20.png" style="width: 100%;max-width: 1000px;" title="" />
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

    <div id="u_row_12" class="u_row" style="padding: 0px;">
      <div class="container" style="max-width: 1000px;margin: 0 auto;background-color: #fbf9ed;">
        <div class="u-row">

          <div id="u_column_21" class="u-col u-col-50 u_column" style="display:flex;align-items:center;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;">
            <div style="width: 100%;padding:0px;">

              <div id="u_content_image_19" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">
                  <a href="#smf">
                  <img alt="" src="https://assets.unlayer.com/projects/123867/1675398531048-happi_mobiles_samsung_galaxy_s23_22.png" style="width: 100%;max-width: 1000px;" title="" />
                  </a>
                </div>

              </div>

            </div>
          </div>

          <div id="u_column_22" class="u-col u-col-50 u_column" style="display:flex;align-items:center;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;">
            <div style="width: 100%;padding:0px;">

              <div id="u_content_image_20" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">
                  <a href="#smf">
                  <img alt="" src="https://assets.unlayer.com/projects/123867/1675398538214-happi_mobiles_samsung_galaxy_s23_23.png" style="width: 100%;max-width: 1000px;" title="" />
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
                        </div>

                        <div v-else>
                             <div id="u_body" class="u_body" style="min-height: 100vh; background-color: #fffffd;">

    <div id="u_row_4" class="u_row" style="padding: 0px;">
      <div class="container" style="max-width: 1000px;margin: 0 auto;">
        <div class="u-row">

          <div id="u_column_7" class="u-col u-col-100 u_column" style="display:flex;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;">
            <div style="width: 100%;padding:0px;">

              <div id="u_content_image_7" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">
                  <a href="#smf">
                  <img alt="" src="https://assets.unlayer.com/projects/123867/1675346171033-happi_mobiles_samsung_galaxy_s23_ultra_banner1.jpg" style="width: 100%;max-width: 1464px;" title="" />
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

    <div id="u_row_5" class="u_row" style="padding: 0px;">
      <div class="container" style="max-width: 1000px;margin: 0 auto;background-color: #000001;">
        <div class="u-row">

          <div id="u_column_8" class="u-col u-col-50 u_column" style="display:flex;align-items:center;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;">
            <div style="width: 100%;padding:0px;">

              <div id="u_content_image_8" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">
                  <a href="#smf">
                  <img alt="" src="https://assets.unlayer.com/projects/123867/1675346330404-happi_mobiles_samsung_galaxy_s23_ultra_4.png" style="width: 100%;max-width: 1000px;" title="" />
                  </a>
                </div>

              </div>

            </div>
          </div>

          <div id="u_column_9" class="u-col u-col-50 u_column" style="display:flex;align-items:center;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;">
            <div style="width: 100%;padding:0px;">

              <div id="u_content_image_9" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">
                  <a href="#smf">
                  <img alt="" src="https://assets.unlayer.com/projects/123867/1675346338936-happi_mobiles_samsung_galaxy_s23_ultra_5.png" style="width: 100%;max-width: 1000px;" title="" />
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

    <div id="u_row_6" class="u_row" style="padding: 0px;">
      <div class="container" style="max-width: 1000px;margin: 0 auto;background-color: #000001;">
        <div class="u-row">

          <div id="u_column_10" class="u-col u-col-50 u_column" style="display:flex;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;">
            <div style="width: 100%;padding:0px;">

              <div id="u_content_image_10" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">
                  <a href="#smf">
                  <img alt="" src="https://assets.unlayer.com/projects/123867/1675346359726-happi_mobiles_samsung_galaxy_s23_ultra_6.png" style="width: 100%;max-width: 1000px;" title="" />
                  </a>
                </div>

              </div>

            </div>
          </div>

          <div id="u_column_11" class="u-col u-col-50 u_column" style="display:flex;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;">
            <div style="width: 100%;padding:0px;">

              <div id="u_content_image_11" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">
                  <a href="#smf">
                  <img alt="" src="https://assets.unlayer.com/projects/123867/1675346390420-happi_mobiles_samsung_galaxy_s23_ultra_8.png" style="width: 100%;max-width: 1000px;" title="" />
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

    <div id="u_row_8" class="u_row" style="padding: 0px;">
      <div class="container" style="max-width: 1000px;margin: 0 auto;background-color: #000001;">
        <div class="u-row">

          <div id="u_column_14" class="u-col u-col-50 u_column" style="display:flex;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;">
            <div style="width: 100%;padding:0px;">

              <div id="u_content_image_14" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">
                  <a href="#smf">
                  <img alt="" src="https://assets.unlayer.com/projects/123867/1675346562287-happi_mobiles_samsung_galaxy_s23_ultra_9.png" style="width: 100%;max-width: 1000px;" title="" />
                  </a>
                </div>

              </div>

            </div>
          </div>

          <div id="u_column_15" class="u-col u-col-50 u_column" style="display:flex;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;">
            <div style="width: 100%;padding:0px;">

              <div id="u_content_image_15" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">
                  <a href="#smf">
                  <img alt="" src="https://assets.unlayer.com/projects/123867/1675346567944-happi_mobiles_samsung_galaxy_s23_ultra_11.png" style="width: 100%;max-width: 1000px;" title="" />
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

    <div id="u_row_10" class="u_row" style="padding: 0px;">
      <div class="container" style="max-width: 1000px;margin: 0 auto;background-color: #000001;">
        <div class="u-row">

          <div id="u_column_18" class="u-col u-col-50 u_column" style="display:flex;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;">
            <div style="width: 100%;padding:0px;">

              <div id="u_content_image_18" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">
                  <a href="#smf">
                  <img alt="" src="https://assets.unlayer.com/projects/123867/1675346637753-happi_mobiles_samsung_galaxy_s23_ultra_12.png" style="width: 100%;max-width: 1000px;" title="" />
                  </a>
                </div>

              </div>

            </div>
          </div>

          <div id="u_column_19" class="u-col u-col-50 u_column" style="display:flex;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;">
            <div style="width: 100%;padding:0px;">

              <div id="u_content_image_19" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">
                  <a href="#smf">
                  <img alt="" src="https://assets.unlayer.com/projects/123867/1675346641636-happi_mobiles_samsung_galaxy_s23_ultra_13.png" style="width: 100%;max-width: 1000px;" title="" />
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

    <div id="u_row_11" class="u_row" style="padding: 0px;">
      <div class="container" style="max-width: 1000px;margin: 0 auto;background-color: #000001;">
        <div class="u-row">

          <div id="u_column_20" class="u-col u-col-50 u_column" style="display:flex;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;">
            <div style="width: 100%;padding:0px;">

              <div id="u_content_image_20" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">
                  <a href="#smf">
                  <img alt="" src="https://assets.unlayer.com/projects/123867/1675346648156-happi_mobiles_samsung_galaxy_s23_ultra_14.png" style="width: 100%;max-width: 1000px;" title="" />
                  </a>
                </div>

              </div>

            </div>
          </div>

          <div id="u_column_21" class="u-col u-col-50 u_column" style="display:flex;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;">
            <div style="width: 100%;padding:0px;">

              <div id="u_content_image_21" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">
                  <a href="#smf">
                  <img alt="" src="https://assets.unlayer.com/projects/123867/1675346652716-happi_mobiles_samsung_galaxy_s23_ultra_15.png" style="width: 100%;max-width: 1000px;" title="" />
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

    <div id="u_row_12" class="u_row" style="padding: 0px;">
      <div class="container" style="max-width: 1000px;margin: 0 auto;background-color: #000001;">
        <div class="u-row">

          <div id="u_column_22" class="u-col u-col-50 u_column" style="display:flex;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;">
            <div style="width: 100%;padding:0px;">

              <div id="u_content_image_22" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">
                  <a href="#smf">
                  <img alt="" src="https://assets.unlayer.com/projects/123867/1675346659375-happi_mobiles_samsung_galaxy_s23_ultra_16.png" style="width: 100%;max-width: 1000px;" title="" />
                </a>
                </div>

              </div>

            </div>
          </div>

          <div id="u_column_23" class="u-col u-col-50 u_column" style="display:flex;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;">
            <div style="width: 100%;padding:0px;">

              <div id="u_content_image_23" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">
                  <a href="#smf">
                  <img alt="" src="https://assets.unlayer.com/projects/123867/1675346725954-happi_mobiles_samsung_galaxy_s23_ultra_18.png" style="width: 100%;max-width: 1000px;" title="" />
                </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

    <div id="u_row_13" class="u_row" style="padding: 0px;">
      <div class="container" style="max-width: 1000px;margin: 0 auto;background-color: #000001;">
        <div class="u-row">

          <div id="u_column_24" class="u-col u-col-50 u_column" style="display:flex;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;">
            <div style="width: 100%;padding:0px;">

              <div id="u_content_image_24" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">
                  <a href="#smf">
                  <img alt="" src="https://assets.unlayer.com/projects/123867/1675346746529-happi_mobiles_samsung_galaxy_s23_ultra_19.png" style="width: 100%;max-width: 1000px;" title="" />
                  </a>
                </div>

              </div>

            </div>
          </div>

          <div id="u_column_25" class="u-col u-col-50 u_column" style="display:flex;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;">
            <div style="width: 100%;padding:0px;">

              <div id="u_content_image_25" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">
                  <a href="#smf">
                  <img alt="" src="https://assets.unlayer.com/projects/123867/1675346752270-happi_mobiles_samsung_galaxy_s23_ultra_20.png" style="width: 100%;max-width: 1000px;" title="" />
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

    <div id="u_row_14" class="u_row" style="padding: 0px;">
      <div class="container" style="max-width: 1000px;margin: 0 auto;background-color: #000001;">
        <div class="u-row">

          <div id="u_column_26" class="u-col u-col-50 u_column" style="display:flex;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;">
            <div style="width: 100%;padding:0px;">

              <div id="u_content_image_26" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">
                <a href="#smf">
                  <img alt="" src="https://assets.unlayer.com/projects/123867/1675346770617-happi_mobiles_samsung_galaxy_s23_ultra_21.png" style="width: 100%;max-width: 1000px;" title="" />
                </a>
                </div>

              </div>

            </div>
          </div>

          <div id="u_column_27" class="u-col u-col-50 u_column" style="display:flex;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;">
            <div style="width: 100%;padding:0px;">

              <div id="u_content_image_27" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">
                  <a href="#smf">
                  <img alt="" src="https://assets.unlayer.com/projects/123867/1675346781499-happi_mobiles_samsung_galaxy_s23_ultra_211.png" style="width: 100%;max-width: 1000px;" title="" />
                </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

    <div id="u_row_17" class="u_row" style="padding: 0px;">
      <div class="container" style="max-width: 1000px;margin: 0 auto;background-color: #000001;">
        <div class="u-row">

          <div id="u_column_32" class="u-col u-col-50 u_column" style="display:flex;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;">
            <div style="width: 100%;padding:0px;">

              <div id="u_content_image_32" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">
                  <a href="#smf">
                  <img alt="" src="https://assets.unlayer.com/projects/123867/1675346972519-happi_mobiles_samsung_galaxy_s23_ultra_22.png" style="width: 100%;max-width: 1000px;" title="" />
                </a>
                </div>

              </div>

            </div>
          </div>

          <div id="u_column_33" class="u-col u-col-50 u_column" style="display:flex;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;">
            <div style="width: 100%;padding:0px;">

              <div id="u_content_image_33" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">
                  <a href="#smf">
                  <img alt="" src="https://assets.unlayer.com/projects/123867/1675346977122-happi_mobiles_samsung_galaxy_s23_ultra_23.png" style="width: 100%;max-width: 1000px;" title="" />
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
                        </div> 
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>

<script>
export default {
    name: 'laptop-offers.vue',
    data() {
        return {
            image_url:
                'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/064e518e-3625-4846-88b2-74b6d9fe5a05.jpg',
            image_urlm:
                'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/3acec844-7f2c-4054-96da-32cdb8b150df.jpg',
            homepageData: {},
            block: 'samsungs23',
            phoneNo: '',
            nameReq: '',
            email: '',
            bannersMobile: [
              {pictures: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/265ef213-3410-4eb1-91bb-c7f978fe863c.png'},
              {pictures: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/e85fbc93-8a36-498b-ac7e-409cf43de42c.png'},
              {pictures: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/c8513c2a-608a-444a-9472-f170010e8c42.png'}
            ],
            bannersDesk: [
              {pictures: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/66807c6d-f2ca-4a2f-8a61-2e7acc747805.png'},
              {pictures: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/277480c7-473a-451b-ba27-91a9502ce406.png'},
              {pictures: 'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/afeaa1b3-2983-4aa7-a885-a6d4144f37ce.png'}
            ],
            pagination: {
                    el: '.swiper-pagination',
                    dynamicBullets: true
                },
            swiperOption: {
                loop: false,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false
                },
                slidesPerView: 1,
                spaceBetween: 1,
                navigation: {
                    nextEl: '.swiper-next',
                    prevEl: '.swiper-prev'
                }
            },
        settings: {
          arrows: true,
          dots: true,
        },
        isMobile: false
        };
    },

    async created() {
      // window.replace('/samsung-galaxy-s23-series/d/index.html');
        this.homepageData = await this.$http.$get('/api/homepage');
        if (process.client && screen !== undefined) {
            if (screen.width <= 760) {
              this.isMobile = true;
            } else {
              this.isMobile = false
            }
        }
        this.$nextTick(() => {
            console.log(
                'this.$refs["utm_campaign"]',
                document.getElementById('utm_campaign').value
            );
            document.getElementById('utm_campaign').value =
                this.$route.query.utm_campaign;
            document.getElementById('utm_medium').value =
                this.$route.query.utm_medium;
            document.getElementById('utm_source').value =
                this.$route.query.utm_source;
        });
    },

    async asyncData({ $http, $seo }) {
        var homepageData = await $http.$get(
            'https://dev-services.happimobiles.com/api/homepage'
        );
        $seo({
            title: 'Samsung Galaxy S23 | Galaxy S23 Plus | Galaxy S23 Ultra | Pre-Book Now',
            templateTitle: 'Samsung Galaxy S23 | Galaxy S23 Plus | Galaxy S23 Ultra | Pre-Book Now',
            description:
                'The future is here! To all the tech junkies, we’ve got news for you, the Samsung Galaxy S23, S23 Plus, and S23 Ultra are available for pre-booking at Happi.',
            keywords:
                'airpods pro 2,airpods pro 2 price,airpods pro 2 cost,airpods pro 2 price,airpods pro 2 features.',
            openGraph: {
                site: 'Happi Mobiles',
                type: 'website',
                title: 'Buy APPLE Airpods Pro 2 at the best price - Happi mobiles ',
                description:
                    'Buy the new AirPods Pro 2. Richer audio quality, up to 2x more Active Noise Cancellation, Adaptive Transparency, and Personalised Spatial Audio.',
            },
            twitter: {
                site: 'Happi Mobiles',
                type: 'website',
                title: 'Buy APPLE Airpods Pro 2 at the best price - Happi mobiles ',
                description:
                    'Buy the new AirPods Pro 2. Richer audio quality, up to 2x more Active Noise Cancellation, Adaptive Transparency, and Personalised Spatial Audio.',
            },
            facebook: {
                appId: '826575227724107',
                pageId: '',
            },
        });
        return {
            homepageData: homepageData,
        };
    },

    methods: {
        changeModel(event) {
            if (event.target.value === 'samsungs23plus') {
                this.image_url =
                    'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/064e518e-3625-4846-88b2-74b6d9fe5a05.jpg';
            }
            if (event.target.value === 'samsungs23Ultra') {
                this.image_url =
                    'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/064e518e-3625-4846-88b2-74b6d9fe5a05.jpg';
            }
            if (event.target.value === 'samsungs23') {
                this.image_url =
                    'https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/064e518e-3625-4846-88b2-74b6d9fe5a05.jpg';
            }
            this.block = event.target.value;
        },
        async validate() {
            // console.log(1, this.nameReq, this.phoneNo)
            if (this.nameReq != '' && this.phoneNo.length == 10 && (/^\d+$/.test(this.phoneNo)) && (/^[a-zA-Z\s.,]+$/.test(this.nameReq))) {
                // console.log('True')
                this.formValidations()
            } else {
                // console.log('false')
                alert('Enter Valid Details')
            }
        },

        async formValidations() {
            let token = null;

            try {
                token = await this.$recaptcha.getResponse();
                document.getElementById('token').value = token;
                await this.$recaptcha.reset();
            } catch (error) {
                console.log('Login error:', error);
            }
            // console.log('token', token);
            if (token !== null) {
                document.getElementById('leads').submit();
            } else {
                return false;
            }
        },
        isLetter(e) {
            let char = String.fromCharCode(e.keyCode); // Get the character
            if(/^[A-Za-z ]+$/.test(char)) return true; // Match with regex 
            else e.preventDefault(); // If not match, don't add to input text
        },
        phoneValidate(e){
          let char = String.fromCharCode(e.keyCode); // Get the character
            if(/^[0-9]+$/.test(char)) return true; // Match with regex 
            else e.preventDefault(); // If not match, don't add to input text
        }
    },
};
</script>

<style lang="scss">
.landingpage-sliders{
  .swiper-arrow {
        display: inline-block;
        vertical-align: top;
        position: relative;
        font-size: 10px !important;
        width: 30px;
        height: 30px;
        border: none;
        background-color: #fff;
        border-radius: 50px !important;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100;
        cursor: pointer;
        transition: all 0.25s ease;
        outline: none;

        i {
            font-size: 20px;
        }

        &:hover {
            background-color:#f39700;
            color: #fff;
        }

        &.swiper-prev {
            left: 0;
        }

        &.swiper-next {
            right: 0;
        }

        &.simple {
            color: #ccc;
            background-color: transparent;

            i {
                font-size: 30px;
            }

            &:hover {
                background-color: transparent;
                color: $color-heading;
            }
        }
    }

    .swiper-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 99;
        left: 0;
        width: 100%;
        height: 0;
        
        @include vertical-align();
    }
}
.inside-text {
    padding: 3px 12px !important;
}

@media (max-width: 767px) {
    .desk-offer-hide {
        display: none;
    }
}

@media (min-width: 768px) {
    .mob-offer-hide {
        display: none;
    }
}

a {
    color: #0000ee;
}

a:hover {
    color: #0000ee;
}

.u-row {
    display: flex;
    flex-wrap: nowrap;
    margin-left: 0;
    margin-right: 0;
}

.u-row .u-col {
    position: relative;
    width: 100%;
    padding-right: 0;
    padding-left: 0;
}

.u-row .u-col.u-col-50 {
    flex: 0 0 50%;
    max-width: 50%;
}

.u-row .u-col.u-col-100 {
    flex: 0 0 100%;
    max-width: 100%;
}

@media (max-width: 767px) {
    .u-row:not(.no-stack) {
        flex-wrap: wrap;
    }

    .u-row:not(.no-stack) .u-col {
        flex: 0 0 100% !important;
        max-width: 100% !important;
    }
}

body,
html {
    padding: 0;
    margin: 0;
}

html {
    box-sizing: border-box;
}

*,
:after,
:before {
    box-sizing: inherit;
}

html {
    font-size: 14px;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    color: #373a3c;
    background-color: #fff;
}

p {
    margin: 0;
}

form .error-field {
    -webkit-animation-name: shake;
    animation-name: shake;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}

form .error-field input,
form .error-field textarea {
    border-color: #a94442 !important;
    color: #a94442 !important;
}

form .field-error {
    padding: 5px 10px;
    font-size: 14px;
    font-weight: 700;
    position: absolute;
    top: -20px;
    right: 10px;
}

form .field-error:after {
    top: 100%;
    left: 50%;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(136, 183, 213, 0);
    border-top-color: #ebcccc;
    border-width: 5px;
    margin-left: -5px;
}

form .spinner {
    margin: 0 auto;
    width: 70px;
    text-align: center;
}

form .spinner>div {
    width: 12px;
    height: 12px;
    background-color: hsla(0, 0%, 100%, 0.5);
    margin: 0 2px;
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

form .spinner .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
}

form .spinner .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {

    0%,
    80%,
    to {
        -webkit-transform: scale(0);
    }

    40% {
        -webkit-transform: scale(1);
    }
}

@keyframes sk-bouncedelay {

    0%,
    80%,
    to {
        -webkit-transform: scale(0);
        transform: scale(0);
    }

    40% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}

@-webkit-keyframes shake {

    0%,
    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }

    10%,
    30%,
    50%,
    70%,
    90% {
        -webkit-transform: translate3d(-10px, 0, 0);
        transform: translate3d(-10px, 0, 0);
    }

    20%,
    40%,
    60%,
    80% {
        -webkit-transform: translate3d(10px, 0, 0);
        transform: translate3d(10px, 0, 0);
    }
}

@keyframes shake {

    0%,
    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }

    10%,
    30%,
    50%,
    70%,
    90% {
        -webkit-transform: translate3d(-10px, 0, 0);
        transform: translate3d(-10px, 0, 0);
    }

    20%,
    40%,
    60%,
    80% {
        -webkit-transform: translate3d(10px, 0, 0);
        transform: translate3d(10px, 0, 0);
    }
}

@media only screen and (max-width: 480px) {
    .container {
        max-width: 100% !important;
    }
}

.container {
    width: 100%;
    padding-right: 0;
    padding-left: 0;
    margin-right: auto;
    margin-left: auto;
}

@media (min-width: 576px) {
    .container {
        max-width: 540px;
    }
}

@media (min-width: 768px) {
    .container {
        max-width: 720px;
    }
}

@media (min-width: 992px) {
    .container {
        max-width: 960px;
    }
}

@media (min-width: 1200px) {
    .container {
        max-width: 1140px;
    }
}

a[onclick] {
    cursor: pointer;
}

.new_img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    /* height: 30px;  */
    width: 50px;
}

.heading {
    font-size: 45px;
    text-align: center;
    color: whitesmoke;
    font-family: 'Open Sans', sans-serif;
    top: 20px;
}

.btn1 {
    margin: 0;
    position: relative;
    top: 56px;
    font-size: 1.25vw;
    left: 300px;
    margin-bottom: 90px;
    background-color: #fb9013;
    border: 0;
    color: white;
    font-family: 'Open Sans', sans-serif;
    transform: translateY(-50%);
}

.img {
    background-color: #fb9013;
    position: relative;
}

.get_offr {
    text-align: center;
}

.ofrbtn {
    background-color: #333333;
    border-radius: 20px;
    color: white;
    font-size: 7vw;
    bottom: 17px;
}

/* .display-5{
    text-align: center;
} */
/* .ltd-offr{
    color: rgba(255, 255, 255, 0.966);
    padding-top:20px;
     font-family: Arial, Helvetica, sans-serif;
      font-family: "Times New Roman", Times, serif;
} */
/* .othr-offr{
    color: rgba(255, 255, 255, 0.966);
    padding-top:390px;
    font-family: "Times New Roman", Times, serif;
}  */

.first-txt {
    margin-top: 2rem;
    font-size: 30px;
    color: #000;
    font-weight: bold;
    margin-bottom: 0px;
}

.second-txt {
    margin-bottom: 0px;
}

.third-txt {
    font-size: 16px;
    color: #f39700;
    margin: 0 0 0px 0;
}

@media only screen and (max-width: 600px) {
    .centre {
        left: 28%;
    }

    .display-4 {
        font-size: 5rem !important;
        line-height: 4rem !important;
    }

    .btn1 {
        left: 28%;
        font-size: 7vw !important;
        left: 129px;
        top: 60px;
    }

    .centre {
        left: 28%;
    }

    .s_oppo {
        left: 7px;
        top: 0px;
    }

    .laptop {
        font-size: 5rem;
    }
}

.captchcls {
    display: inline-block;
    text-align: center;
    margin-left: 18% !important;
    margin-top: -6%;
}

.Prebookdiv {
    background-color: #fb9013;
    width: 64%;
    padding-top: 3%;
    padding-left: 3%;
    padding-right: 3%;
    margin-left: 18%;
    padding-bottom: 3%;
    border-radius: 10px;
}

.btncss {
    font-size: 1.1vw !important;
    background-color: #fff !important;
    color: black !important;
    margin-left: 35% !important;
    width: 30% !important;
    margin-top: -7% !important;
    border-radius: 5px;
}

.btncss:hover {
    color: #fb9013 !important;
}

.ttbox input {
    height: 38px !important;
    border-radius: 5px;
}

.ttbox select {
    height: 38px !important;
    border-radius: 5px;
    margin-bottom: 50px !important;
}

@media screen and (max-width: 1200px) {
    .Prebookdiv {
        background-color: #fb9013;
        width: 86%;
        padding-top: 3%;
        padding-left: 3%;
        padding-right: 3%;
        margin-left: 7%;
        padding-bottom: 3%;
        border-radius: 10px;
    }

    .btncss {
        font-size: 4vw !important;
        background-color: #fff !important;
        color: black !important;
        margin-left: 30% !important;
        width: 40% !important;
        margin-top: -7% !important;
    }

    .ttbox input {
        height: 35px !important;
        margin: 0% 4% !important;
        width: 90% !important;
    }

    .ttbox select {
        height: 35px !important;
        margin: 0% 4% !important;
        width: 90% !important;
    }

    .captchcls {
        margin-left: 0% !important;
        margin-top: 2% !important;
    }
}
</style>

