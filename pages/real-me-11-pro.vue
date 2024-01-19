<template>
    <div class="body">
        <div>
            <a href="#smf">
                <img src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/efe30720-9ecb-487c-9cc9-0182963c2e84.jpg"
                    alt="happi_earphones" width="100%" class="d-none d-sm-block"/>
                <img src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/1cf52489-4f23-4975-8526-9c135c25c70d.png"
                    alt="happi_earphones" width="100%" class="d-block d-sm-none" />
            </a>
        </div>
        <form class="form_reset_lp" id="leads" action="https://dev-services.happimobiles.com/laptop-leads" method="post">
            <div class="formbody" id="smf">
                <div class="row">
                    <div class="col-12 text-center">
                        <div class="header">
                            <h2>Get Offer Details, Enquire Now!</h2>
                            <p>All fields marked (*) are mandatory</p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12 col-sm-4">
                        <div class="form-group">
                            <input type='hidden' name='utm_source' id='utm_source' value=''>
                            <input type='hidden' name='utm_medium' id='utm_medium' value=''>
                            <input type='hidden' name='utm_campaign' id='utm_campaign' value=''>
                            <input type='hidden' name='type' value='realme-11pro-series-5g'>
                            <input type="text" name="name" id="name" v-model="nameReq" placeholder="Name*"
                                data-form-field="name" class="form-control" required minlength="3"
                                v-on:keypress="isLetter($event)">
                        </div>
                    </div>
                    <div class="col-12 col-sm-4">
                        <div class="form-group">
                            <input type="tel" name="phone" id="phone" placeholder="Phone Number*" data-form-field="phone"
                                class="form-control" v-model="phoneNo" pattern="[0-9]{10}" maxlength="10" minlength="10"
                                required v-on:keypress="phoneValidate($event)">
                        </div>
                    </div>
                    <div class="col-12 col-sm-4">
                        <div class="form-group">
                            <input type="email" name="email" id="email" placeholder="Email Id (Optional)"
                                data-form-field="email" class="form-control" v-model="email" maxlength="25" minlength="5">
                        </div>
                    </div>
                </div>

                <div class="row d-flex align-item-center justify-content-center">
                    <div class="col-12 col-sm-4  col-md-4">
                        <div class="form-group align-item-center justify-content-center text-center">
                            <div
                                class="captchcls d-flex align-item-center justify-content-center justify-content-sm-between">
                                <div class="text"> {{ numberOne }} + {{ numberTwo }} &nbsp;= &nbsp;</div>
                                <input type="number" name="captcha" id="captcha" class="form-control captcha-form"
                                    v-model="userSum" maxlength="3" minlength="1" required />
                                <button type="button" class="refresh-button" @click="refreshCaptcha"><i
                                        class="fa fa-refresh"></i> Refresh</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-4 col-md-4">
                        <div class="form-group align-item-center justify-content-center text-center">
                            <button class="btn btn-success success_btn btn_fwidth" @click="validate">Submit</button>
                        </div>
                        <!-- <div class="form-group align-item-center justify-content-center text-center" v-if="submitting">
                            <button class="btn btn-success success_btn"  disabled >Submiting</button>
                        </div> -->
                    </div>
                </div>
            </div>
        </form>
        <div>
        <div id="u_body" class="u_body" style="min-height: 100vh; background-color: #fffffd;">

    <div id="u_row_1" class="u_row" style="padding: 0px;">
      <div class="container_manufacturer" style="max-width: 1000px;margin: 0 auto;">
        <div class="u-row">

          <div id="u_column_1" class="u-col u-col-100 u_column" style="display:flex;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
            <div style="width: 100%;padding:0px;">

              <div id="u_content_image_1" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686393866841-happi_mobiles_realme_11_pro_.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

    <div id="u_row_2" class="u_row" style="padding: 0px;">
      <div class="container_manufacturer" style="max-width: 1000px;margin: 0 auto;">
        <div class="u-row">

          <div id="u_column_2" class="u-col u-col-100 u_column" style="display:flex;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;">
            <div style="width: 100%;padding:0px;">

              <div id="u_content_image_2" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686393923725-happi_mobiles_realme_11_pro_1.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_3" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686393930219-happi_mobiles_realme_11_pro_2.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_4" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394153775-happi_mobiles_realme_11_pro_3.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_5" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394159482-happi_mobiles_realme_11_pro_4.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_6" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394168440-happi_mobiles_realme_11_pro_5.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_7" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394173374-happi_mobiles_realme_11_pro_8.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_8" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394190298-happi_mobiles_realme_11_pro_9.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_9" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394195252-happi_mobiles_realme_11_pro_10.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_10" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394199092-happi_mobiles_realme_11_pro_11.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_11" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394253988-1686209954089d70cf53991ea426e87082ef9b3a74c6c.jpg.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_12" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394267344-happi_mobiles_realme_11_pro_12.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_13" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394277770-happi_mobiles_realme_11_pro_13.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_14" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394309258-happi_mobiles_realme_11_pro_15.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_15" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394315432-happi_mobiles_realme_11_pro_16.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_16" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394326294-happi_mobiles_realme_11_pro_19.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_17" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394332736-happi_mobiles_realme_11_pro_20.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_18" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394338507-happi_mobiles_realme_11_pro_21.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_19" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394352509-happi_mobiles_realme_11_pro_22.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_20" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394358456-happi_mobiles_realme_11_pro_23.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_21" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394362806-happi_mobiles_realme_11_pro_24.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>
              
              <div id="u_content_image_22" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394369150-happi_mobiles_realme_11_pro_25.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_23" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394375313-happi_mobiles_realme_11_pro_26.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_24" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394379713-happi_mobiles_realme_11_pro_28.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_25" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394388057-happi_mobiles_realme_11_pro_29.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_26" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394395458-happi_mobiles_realme_11_pro_30.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_27" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394401853-happi_mobiles_realme_11_pro_31.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_28" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394406568-happi_mobiles_realme_11_pro_32.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_29" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394421403-happi_mobiles_realme_11_pro_34.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_30" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394428428-happi_mobiles_realme_11_pro_35.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_31" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394435207-happi_mobiles_realme_11_pro_36.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_32" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394441308-happi_mobiles_realme_11_pro_38.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_33" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394453266-happi_mobiles_realme_11_pro_39.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_34" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394460767-happi_mobiles_realme_11_pro_40.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_35" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394492853-happi_mobiles_realme_11_pro_42.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_37" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394511813-happi_mobiles_realme_11_pro_43.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_38" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394534101-happi_mobiles_realme_11_pro_44.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_39" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394573539-16862100756715df525db42e7406f9c2179e6df36275c.jpg.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_40" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394578468-happi_mobiles_realme_11_pro_46.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_41" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394588511-happi_mobiles_realme_11_pro_49.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_42" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394596889-happi_mobiles_realme_11_pro_50.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_43" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394603249-happi_mobiles_realme_11_pro_51.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_44" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394699042-happi_mobiles_realme_11_pro_52.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_45" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394705924-happi_mobiles_realme_11_pro_53.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_46" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394711433-happi_mobiles_realme_11_pro_54.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_47" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394790005-happi_mobiles_realme_11_pro_55.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_48" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394876658-happi_mobiles_realme_11_pro_56.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_49" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394882902-happi_mobiles_realme_11_pro_58.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_50" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394889523-happi_mobiles_realme_11_pro_59.webp" style="width: 100%;max-width: 2280px;" title="" />

                </div>

              </div>

              <div id="u_content_image_51" class="u_content_image" style="overflow-wrap: break-word;padding: 0px;">

                <div style="position:relative;line-height:0px;text-align:center">

                  <img alt="" src="https://assets.unlayer.com/projects/123867/1686394895129-happi_mobiles_realme_11_pro_60.webp" style="width: 100%;max-width: 2280px;" title="" />

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
</template>

<script>
import axios from 'axios';
export default {
    name: 'laptop-offers.vue',
    data() {
        return {
            cities: [],
            homepageData: {},
            block: 'NOISE COLOR FIT BEAT SMART WATCH',
            NOISEDATA: false,
            BOATDATA: false,
            FIREBOLTTDATA: false,
            DIZODATA: false,
            sendOtpLoading: false,
            prephoneno: '',
            submit_display: false,
            loading: false,
            phoneNo: '',
            nameReq: '',
            name: '',
            email: '',
            otp: '',
            OtpSentMessage: false,
            OtpMessage: '',
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
            isMobile: false,
            numberOne: Number,
            numberTwo: Number,
            captchaSum: Number,
            userSum: '',
            location: '',
            influencer: '',
            nearest_store: '',
            insta_handle: '',
            file: null,
            imageUrl: null,
            upload_response: {},
            button_status: true,
            image_error: false,
            invalid_error: false,
            dotloader: false,
            type: 'influencers',
            influencersData: [],
            influencers: [],
            storeData: [],
            userExits: false,
            termsShow: false,
            submitting: false,
            termsCheck: false
        }
    },


    async created() {
        this.homepageData = await this.$http.$get('/api/homepage');
        if (process.client && screen !== undefined) {
            if (screen.width <= 760) {
                this.isMobile = true;
            } else {
                this.isMobile = false
            }
        }
        this.$nextTick(() => {
            document.getElementById('utm_campaign').value = this.$route.query.utm_campaign;
            document.getElementById('utm_medium').value = this.$route.query.utm_medium;
            document.getElementById('utm_source').value = this.$route.query.utm_source;
        });
        this.numberOne = Math.floor(Math.random() * 10) + 1;
        this.numberTwo = Math.floor(Math.random() * 10) + 1;
        this.captchaSum = this.numberOne + this.numberTwo;

        var listOfCities;
        try {
            await this.$http.$get(`https://dev-services.happimobiles.com/influencercitynames`).then((response) => {
                console.log("response--", response);
                this.cities = response.data
            })
        } catch (error) {
            console.log('error', error);
        }
    },
    async asyncData({ $http, $seo }) {
        var homepageData = await $http.$get(
            'https://dev-services.happimobiles.com/api/homepage'
        );
        $seo({
            title: 'Happi Realme 11 Pro Series 5G',
            templateTitle: 'Happi Realme 11 Pro Series 5G',
            description:
                'Happi Realme 11 Pro Series 5G',
            keywords:
                'Happi Realme 11 Pro Series 5G',
            openGraph: {
                site: 'Happi Mobiles',
                type: 'website',
                title: 'Happi Realme 11 Pro Series 5G',
                description:
                    'Happi Realme 11 Pro Series 5G',
            },
            twitter: {
                site: 'Happi Mobiles',
                type: 'website',
                title: 'Happi Realme 11 Pro Series 5G',
                description:
                    'Happi Realme 11 Pro Series 5G',
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
        async validate() {
            if (Number(this.userSum) === this.captchaSum) {
                if (this.nameReq != '' && this.phoneNo.length == 10 && (/^\d+$/.test(this.phoneNo)) && (/^[a-zA-Z\s.,]+$/.test(this.nameReq)) && Number(this.userSum) === this.captchaSum) {
                    this.formValidations();
                } else {
                    alert('Please Enter valid Name & Phone No');
                    return false;
                }
            } else {
                // console.log('false')
                alert('Please Validate Captcha');
                this.userSum = '';
                return false;
            }
        },
        async formValidations() {
            document.getElementById('leads').submit();
        },
        phoneValidate(e) {
            let char = String.fromCharCode(e.keyCode); // Get the character
            if (/^[0-9]+$/.test(char)) return true; // Match with regex 
            else e.preventDefault(); // If not match, don't add to input text
        },
        isLetter(e) {
            let char = String.fromCharCode(e.keyCode); // Get the character
            if (/^[A-Za-z ]+$/.test(char)) return true; // Match with regex 
            else e.preventDefault(); // If not match, don't add to input text
        },
        async refreshCaptcha() {
            this.numberOne = Math.floor(Math.random() * 10) + 1;
            this.numberTwo = Math.floor(Math.random() * 10) + 1;
            this.captchaSum = this.numberOne + this.numberTwo;
        },
        async SelectedLocation(e) {
            var listOfInfluencernames;
            try {

                await this.$http.$get(`https://dev-services.happimobiles.com/getinfluencernames?city=${e}`).then((response) => {
                    this.influencersData = response.data

                })
            } catch (error) {
                console.log('error', error);
            }

            try {

                await this.$http.$get(`https://dev-services.happimobiles.com/getStorenames?city=${e}`).then((response) => {
                    this.storeData = response.data

                })
            } catch (error) {
                console.log('error', error);
            }
        },
        async uploadSS() {
            console.log(this.file);
            let formData = new FormData();
            formData.append('file', this.file);
            let image = formData;
            var resp;
            this.dotloader = true;
            try {
                resp = await axios.post(`https://dev-services.happimobiles.com/uploadimages`, image)
            } catch (error) {
                console.log('error', error);
            }
            if (resp.data.status) {
                this.dotloader = false;
                this.button_status = false;
                this.image_error = false;
                this.invalid_error = false;
                this.upload_response = resp;
            } else {
                if (resp.data.message == 'Screenshot Already exits') {
                    this.dotloader = false;
                    this.image_error = true;
                    this.button_status = true;
                    this.invalid_error = false;
                    return
                } else if (resp.data.message == 'Invalid Screen Shot') {
                    this.dotloader = false;
                    this.invalid_error = true;
                    this.image_error = false;
                    this.button_status = true;
                    return
                }
                else if (resp.data.message == 'Only .png,.jpeg,.jpg format is allowed') {
                    this.dotloader = false;
                    this.invalid_error = false;
                    this.image_error = true;
                    this.button_status = true;
                    return
                }
            }

        },
        termsAndConditions() {
            this.termsShow = !this.termsShow;
        }
    },
};
</script>



<style lang="scss">
.spinner {
    margin: 100px auto 0;
    width: 70px;
    text-align: center;
}

.spinner>div {
    width: 18px;
    height: 18px;
    background-color: #333;

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.spinner .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
}

.spinner .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {

    0%,
    80%,
    100% {
        -webkit-transform: scale(0)
    }

    40% {
        -webkit-transform: scale(1.0)
    }
}

@keyframes sk-bouncedelay {

    0%,
    80%,
    100% {
        -webkit-transform: scale(0);
        transform: scale(0);
    }

    40% {
        -webkit-transform: scale(1.0);
        transform: scale(1.0);
    }
}

.success-message {
    display: flex;
    justify-content: flex-start;
    margin-top: 0 !important;
    padding: 0 !important;
    color: white;
    font-weight: 400;
    letter-spacing: 1px;
}

.v-application--is-ltr .v-input__prepend-outer {
    margin-right: 0;
}

.v-input__icon {
    position: absolute;
    color: black;
    z-index: 2;
    opacity: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 28%;
}

.v-input__prepend-outer {
    background-color: #fff;
}

.icon-paperclip::before {
    // font-weight: 200;
    color: #000;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.8rem;
}

.v-input .v-label {
    // line-height: 1.5rem !important;
}

.theme--light.v-file-input .v-file-input__text {
    padding: 4px 6% !important;
    height: 50px !important;
}

// .v-input__control>.v-input__slot>.v-text-field__slot {
//     height: 7vh;
// }

// .v-input__prepend-outer {
//     display: none;
// }

.theme--light.v-label {
    padding: 4px 3% !important;
    height: 36px !important;
    // background: #f90;
    // height: auto !important;
}

.v-select__selection--comma {
    padding-left: 5%;
}

.v-select__selections {
    height: 7vh;
}

.v-text-field>.v-input__control>.v-input__slot:before {
    display: none !important;
}

.v-label.v-label--active.theme--light.primary--text,
.v-label--active {
    display: none !important;
}

.v-input {
    padding: 0
}

.v-input__slot {
    background-color: #FFFFFF;
    border-radius: 4px !important;
}

// .number-captcha-block {
//     align-items: center;
//     height: 100%;
//     background-color: #FFFFFF;
//     padding: 4%;
//     font-size: 2.25rem;
//     border-radius: 4px;
//     border-color: #fb9013;
//     gap: 5px;

//     .captcha-form {
//         width: 80px;
//         font-size: 20px;
//     }

//     .refresh-button {
//         font-size: 13px;
//         height: auto;
//         padding: 3px 5px;
//     }
// }

.swiper-slide {
    width: 100% !important;

    .swiper-images {
        width: inherit;
        display: -webkit-box;

        img {
            width: 100%;
        }
    }
}

.landingpage-sliders-anv {
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
        z-index: 99;
        cursor: pointer;
        transition: all 0.25s ease;
        outline: none;

        i {
            font-size: 20px;
        }

        &:hover {
            background-color: #f39700;
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

    // a.landing-image{
    // .img{
    //     min-width: 100% !important;
    //     height: auto !important;
    //     border: 2px solid red !important;
    //     width: 100% !important;
    // }
    // }

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

@media (max-width: 767px) {
    .desk-offer-hide {
        display: none;
    }

    .image-height {
        height: 380px;
    }
}

@media (min-width: 768px) {
    .mob-offer-hide {
        display: none;
    }

    .image-height {
        height: 630px;
    }
}

@media (min-width: 1200px) {
    .image-height {
        height: 510px;
    }
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

.header-text h2,
.header-text h3,
.header-text p {
    font-size: 0.95rem;
    color: #fff;
    margin: 0;
    letter-spacing: 0.075rem;
    font-weight: 400;
}

.header-text h2 {
    font-size: 2.5rem;
    margin: 0.5rem 0;
    font-weight: 600;
}

.header-text h3 {
    font-size: 2rem;
    font-weight: 500;
}

.heading {
    font-size: 45px;
    text-align: center;
    color: whitesmoke;
    font-family: 'Open Sans', sans-serif;
    top: 20px;
}


.captchcls {
    text-align: center;
    width: 100%;
    padding: 2px .5rem;
    border-radius: 4px;
    background: #FFF;
    gap: 0.5rem;
    align-items: center;

    .text {
        white-space: nowrap;
    }

    .captcha-form {
        height: 42px;
        max-width: 90px;
    }

    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
}

.btn_fwidth {
    width: 100%;
}


.Prebookdiv2 {
    background-color: #fb9013;
    width: 100%;
    padding: 3% 14%;
    border-radius: 2px;
    margin: auto;
    // margin: 1%;
}

.Prebookdiv2 .form-control {
    border-radius: 4px;
    margin-bottom: 1%;
}

.horizontal-form {
    background-color: #fb9013;
    width: 100%;
    padding-top: 3%;
    padding-left: 3%;
    padding-right: 3%;
    padding-bottom: 3%;
    border-radius: 10px;
}

.btncss {
    font-size: 1.1vw !important;
    background-color: #fff !important;
    border-color: #fb9013;
    border-radius: 4px;
}

.btncss:hover {
    color: #fb9013 !important;
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

.btn-smartwatches {
    width: 100% !important;
    margin: auto !important;
    padding: 2.25rem;
    letter-spacing: 0.05rem;
    font-size: 2rem !important;
    font-weight: 600;
}

.form-group {
    margin-bottom: 0rem !important;
}

.anchor-tag {
    display: block;
}

// img{
//     width:100%;
// }
@media (max-width: 767px) {
    .btn-smartwatches {
        padding: 1.25rem;
        font-size: 1.5rem !important;
    }
}

.form-control {
    padding: 3px 20px !important;
    border: 1px solid #dddddd;
}


.form_reset_lp {
    background: #F90;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rem 0;
    flex-direction: column;

    .formbody {
        width: 60%;
        margin: auto;
        padding: 2rem;

        .form-group {
            margin-bottom: 2rem !important;

            .form-control {
                border-radius: 4px !important;
            }

            .v-text-field .v-label {
                line-height: 2 !important;
            }

            .v-input__icon {
                top: 20%;
                right: 2.5%;
            }

            .v-input__append-outer {
                margin-left: 0px;
            }
        }
    }

    .header {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-bottom: 1px solid rgba(0, 0, 0, .1);
        margin-bottom: 3rem;

        h2 {
            font-size: 2rem;
            font-weight: 500;
            color: #fff;
            margin: 0;
            letter-spacing: 0.075rem;
        }

        p {
            font-size: 1.25rem;
            color: #fff;
            margin: 5px 0 10px;
        }
    }

    .row {
        display: flex;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
    }

    .success_btn {
        background: white;
        border-color: white;
        color: #000;
        padding: 1.5rem 4rem;
        line-height: 1;
        font-size: 16px;
        font-weight: 600;
    }
}

@media (max-width: 768px) {
    .form_reset_lp {
        .formbody {
            width: 94% !important;
        }
    }
}

.v-text-field__details {
    display: none;
}

.insta-handle {
    height: 54px !important;
}

.ss-upload-condition {
    margin-left: 1rem;
    gap: 1px;
    letter-spacing: 1px;
    color: #fff;
}

.v-label {
    left: 8px !important;
}

.v-file-input .v-label {
    left: 0px !important;
}

.v-select__selections {
    height: 50px !important;
}

.user-exists {
    color: rgb(153, 31, 31);
    font-weight: 400;
    letter-spacing: 1px;
}

.assistance {
    color: white;
    font-weight: 400;
    letter-spacing: 1px;
}

.v-select__slot {
    height: 50px !important;

    input {
        padding: 0 16px !important;
        top: -14px !important;
    }
}

.terms-submit {
    display: flex;
    flex-direction: column;
}

.terms-and-conditions {
    cursor: pointer;
    border-bottom: 1px solid;
}

.checkbox-terms {
    height: 12px;
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
      margin: 0
    }
    
    html {
      box-sizing: border-box
    }
    
    *,
    :after,
    :before {
      box-sizing: inherit
    }
    
    html {
      font-size: 14px;
      -ms-overflow-style: scrollbar;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
    }
    
    p {
      margin: 0
    }
    
    form .error-field {
      -webkit-animation-name: shake;
      animation-name: shake;
      -webkit-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both
    }
    
    form .error-field input,
    form .error-field textarea {
      border-color: #a94442!important;
      color: #a94442!important
    }
    
    form .field-error {
      padding: 5px 10px;
      font-size: 14px;
      font-weight: 700;
      position: absolute;
      top: -20px;
      right: 10px
    }
    
    form .field-error:after {
      top: 100%;
      left: 50%;
      border: solid transparent;
      content: " ";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border-color: rgba(136, 183, 213, 0);
      border-top-color: #ebcccc;
      border-width: 5px;
      margin-left: -5px
    }
    
    form .spinner {
      margin: 0 auto;
      width: 70px;
      text-align: center
    }
    
    form .spinner>div {
      width: 12px;
      height: 12px;
      background-color: hsla(0, 0%, 100%, .5);
      margin: 0 2px;
      border-radius: 100%;
      display: inline-block;
      -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
      animation: sk-bouncedelay 1.4s infinite ease-in-out both
    }
    
    form .spinner .bounce1 {
      -webkit-animation-delay: -.32s;
      animation-delay: -.32s
    }
    
    form .spinner .bounce2 {
      -webkit-animation-delay: -.16s;
      animation-delay: -.16s
    }
    
    @-webkit-keyframes sk-bouncedelay {
      0%,
      80%,
      to {
        -webkit-transform: scale(0)
      }
      40% {
        -webkit-transform: scale(1)
      }
    }
    
    @keyframes sk-bouncedelay {
      0%,
      80%,
      to {
        -webkit-transform: scale(0);
        transform: scale(0)
      }
      40% {
        -webkit-transform: scale(1);
        transform: scale(1)
      }
    }
    
    @-webkit-keyframes shake {
      0%,
      to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
      }
      10%,
      30%,
      50%,
      70%,
      90% {
        -webkit-transform: translate3d(-10px, 0, 0);
        transform: translate3d(-10px, 0, 0)
      }
      20%,
      40%,
      60%,
      80% {
        -webkit-transform: translate3d(10px, 0, 0);
        transform: translate3d(10px, 0, 0)
      }
    }
    
    @keyframes shake {
      0%,
      to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
      }
      10%,
      30%,
      50%,
      70%,
      90% {
        -webkit-transform: translate3d(-10px, 0, 0);
        transform: translate3d(-10px, 0, 0)
      }
      20%,
      40%,
      60%,
      80% {
        -webkit-transform: translate3d(10px, 0, 0);
        transform: translate3d(10px, 0, 0)
      }
    }
    
    @media (max-width:480px) {
      .container_manufacturer {
        max-width: 100%!important
      }
    }
    
    @media (min-width:481px) and (max-width:768px) {
      .hide-tablet {
        display: none!important
      }
    }
    
    .container_manufacturer {
      width: 100%;
      padding-right: 0;
      padding-left: 0;
      margin-right: auto;
      margin-left: auto
    }
    
    @media (min-width:576px) {
      .container_manufacturer {
        max-width: 540px
      }
    }
    
    @media (min-width:768px) {
      .container_manufacturer {
        max-width: 720px
      }
    }
    
    @media (min-width:992px) {
      .container_manufacturer {
        max-width: 960px
      }
    }
    
    @media (min-width:1200px) {
      .container_manufacturer {
        max-width: 1140px
      }
    }
    
    a[onclick] {
      cursor: pointer;
    }
    
    body {
      font-family: arial, helvetica, sans-serif;
      font-size: 1rem;
      line-height: 1.5;
      color: #000000;
      background-color: #e7e7e7;
    }
    
    #u_body a {
      color: #0000ee;
      text-decoration: underline;
    }
    
    #u_body a:hover {
      color: #0000ee;
      text-decoration: underline;
    }
</style>

