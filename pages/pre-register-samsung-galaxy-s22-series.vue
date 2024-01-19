<template>
    <section class='body'>
        <nav class='breadcrumb'></nav>

        <section class='header1 cid-sN6GjcAMxA' id='header01-3m'>


            <div class='container'>
                <div class='row justify-content-md-center'>
                    <div class='col-md-10 align-center'></div>
                    <div class='pt-4 align-center'><img
                        :src='`${image_url}`'
                        alt='' style='width: 100%;' class=''></div>
                    <!--          <div class='pt-4 align-center'><img-->
                    <!--              :src='homepageData.mobileurl'-->
                    <!--              alt='Happi Mobile' style='width: 100%;' class=''></div>-->
                </div>
            </div>
        </section>
        <section class='form cid-sN6DERkjXB' id='formbuilder-3l'>
            <div class='container'>
                <div class='row'>
                    <div class='col-lg-8 mx-auto mbr-form' data-form-type='formoid'>
                        <form id="leads" action='https://dev-services.happimobiles.com/laptop-leads' method='post'
                              class='mbr-form form-with-styler'
                              data-form-title='Diwali Dhamaka' >

                            <div class='form-row'>
                                <div hidden='hidden' data-form-alert='' class='alert alert-success col-12'>Thanks for
                                    filling out the form!
                                </div>
                                <div hidden='hidden' data-form-alert-danger='' class='alert alert-danger col-12'>
                                    Oops...! some problem!
                                </div>
                            </div>
                            <div class='dragArea form-row'>

                                <div class='col-lg-12 col-md-12 col-sm-12 text-center'>
                                    <p class='first-txt'>Pre Book your interest for the New Galaxy S22 series</p>
                                    <p class='second-txt'>
                                        Please enter your details to receive the latest update
                                    </p>
                                    <p class='third-txt'>
                                        All fields marked (*) are mandatory
                                    </p>
                                </div>

                                <input type='hidden' name='utm_source' id='utm_source' value=''>
                                <input type='hidden' name='utm_medium' id='utm_medium' value=''>
                                <input type='hidden' name='utm_campaign' id='utm_campaign' value=''>
                                <input type='hidden' name='type' value='mobile'>
                                <input type='hidden' name='token' id='token' value=''>
                                <div class='Prebookdiv'>
                                    <h6 style='margin: 10px'>Enter Your Name</h6>
                                    <div data-for='name' class='col-lg-12 col-md-12 col-sm-12 form-group p-0 ttbox'
                                         style='margin-bottom:0 !important'>
                                        <input type='text'
                                               name='name'
                                               id='name'
                                               placeholder='Name*'
                                               data-form-field='name'
                                               class='form-control display-7'
                                               required
                                               minlength='3'
                                               value=''>
                                    </div>
                                    <h6 style='margin: 10px'>Enter Your Phone Number</h6>
                                    <div data-for='phone' class='col-lg-12 col-md-12 col-sm-12 form-group p-0 ttbox'
                                         style='margin-bottom:0 !important'><input type='tel'
                                                                                   name='phone'
                                                                                   id='phone'
                                                                                   placeholder='Phone*'
                                                                                   pattern='[0-9]{10}'
                                                                                   maxlength='10'
                                                                                   minlength='10'
                                                                                   required
                                                                                   data-form-field='phone'
                                                                                   class='form-control display-7'
                                                                                   value=''>
                                    </div>
                                    <h6 style='margin: 10px'>Enter Email</h6>
                                    <div data-for='email' class='col-lg-12 col-md-12 col-sm-12 form-group p-0 ttbox'
                                         style='margin-bottom:0 !important'><input type='email'
                                                                                   name='email'
                                                                                   id='email'
                                                                                   placeholder='Email (optional)'
                                                                                   data-form-field='email'
                                                                                   class='form-control display-7'
                                                                                   value=''>
                                    </div>
                                    <div data-for='model' class='col-lg-12 col-md-12 col-sm-12 form-group p-0'>
                                        <h6 style='margin: 10px'>Select Model</h6>
                                        <aside class=' ttbox'>
                                            <div class='form-group'>
                                                <select name='Brand' data-form-field='Brand' required value=''
                                                        class='form-control' @change='changeModel($event)'>
                                                    <option value='0'>Select Model *</option>
                                                    <option value='samsungs22'>Galaxy S22</option>
                                                    <option value='samsungs22plus'>Galaxy S22 +</option>
                                                    <option value='samsungs22Ultra'>Galaxy S22 Ultra</option>
                                                </select>
                                            </div>
                                        </aside>
                                    </div>

                                    <div class='form-group p-0 captchcls'>
                                        <recaptcha id='captcha' />&nbsp;&nbsp;
                                    </div>

                                    <div>

                                        <button class='btn btncss' @click='formValidations'><b>Submit</b></button>
                                    </div>

                                </div>
                                <div class='col-lg-12 col-md-12 col-sm-12'>
                                    <hr>
                                </div>


                            </div>
                        </form>
                        <div v-if="block =='samsungs22' || block =='samsungs22plus'">
                            <div id='u_body' class='u_body'
                                 style='min-height: 100vh; color: #000000; background-color: #ffffff; font-family: arial,helvetica,sans-serif;'>

                                <div id='u_row_1' class='u_row' style='padding: 0px;'>
                                    <div class='container'
                                         style='max-width: 1000px;margin: 0 auto;background-color: #f6f6f6;'>
                                        <div class='u-row' style='align-items: center;'>

                                            <div id='u_column_1' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;'>

                                                    <div id='u_content_heading_1' class='u_content_heading'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <h1 style='margin: 0px; line-height: 140%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: arial,helvetica,sans-serif; font-size: 26px;'>
                                                            <strong>Galaxy S22｜S22+</strong>
                                                        </h1>

                                                    </div>

                                                </div>
                                            </div>

                                            <div id='u_column_2' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>
                                                    <div id='u_content_image_1' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 10px;'>
                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>
                                                            <img alt=''
                                                                 src='https://images.samsung.com/in/smartphones/galaxy-s22/images/galaxy-s22_highlights_kv_img.jpg'
                                                                 style='width: 100%;max-width: 1920px;' title='' />
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_2' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_3' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_2' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 0px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://s3.amazonaws.com/unroll-images-production/projects%2F51455%2F1644815983122-2.PNG'
                                                                 style='width: 100%;max-width: 1403px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_3' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_4' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_3' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 0px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://s3.amazonaws.com/unroll-images-production/projects%2F51455%2F1644816136693-3.PNG'
                                                                 style='width: 100%;max-width: 953px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_4' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row' style='align-items: center;'>

                                            <div id='u_column_5' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_4' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 0px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://s3.amazonaws.com/unroll-images-production/projects%2F51455%2F1644816164239-4.PNG'
                                                                 style='width: 100%;max-width: 451px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                            <div id='u_column_6' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_heading_2' class='u_content_heading'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <h1 style='margin: 0px; line-height: 140%; text-align: left; word-wrap: break-word; font-weight: normal; font-family: arial,helvetica,sans-serif; font-size: 22px;'>
                                                            The slim bezels flow into a symmetrical polished frame for
                                                            an expansive, balanced display. As a finishing touch, the
                                                            monochromatic camera housing surrounds a linear camera
                                                            system. Oh so beautiful.
                                                        </h1>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_5' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row' style='align-items: center;'>

                                            <div id='u_column_7' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_heading_3' class='u_content_heading'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <h1 style='margin: 0px; line-height: 140%; text-align: left; word-wrap: break-word; font-weight: normal; font-family: arial,helvetica,sans-serif; font-size: 22px;'>
                                                            COLORS<br /><strong>Throwing shade at conventional
                                                            colors</strong>
                                                        </h1>

                                                    </div>

                                                </div>
                                            </div>

                                            <div id='u_column_8' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_heading_4' class='u_content_heading'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <h1 style='margin: 0px; line-height: 140%; text-align: left; word-wrap: break-word; font-weight: normal; font-family: arial,helvetica,sans-serif; font-size: 22px;'>
                                                            Sleek design in a range of colors lets you express yourself
                                                            how you like &mdash; the choice isn't easy, but you can't go
                                                            wrong.2
                                                        </h1>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_6' class='u_row' style='padding: 0px;'>
                                    <div class='container'
                                         style='max-width: 1000px;margin: 0 auto;background-color: #f4f6f8;'>
                                        <div class='u-row' style='align-items: center;'>

                                            <div id='u_column_9' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_5' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 0px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://s3.amazonaws.com/unroll-images-production/projects%2F51455%2F1644816742895-5.PNG'
                                                                 style='width: 100%;max-width: 708px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                            <div id='u_column_10' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_6' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 0px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://s3.amazonaws.com/unroll-images-production/projects%2F51455%2F1644816750077-6.PNG'
                                                                 style='width: 100%;max-width: 629px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_7' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_11' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_7' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 0px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://s3.amazonaws.com/unroll-images-production/projects%2F51455%2F1644816774161-8.PNG'
                                                                 style='width: 100%;max-width: 743px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_8' class='u_row' style='padding: 0px;'>
                                    <div class='container'
                                         style='max-width: 1000px;margin: 0 auto;background-color: #000000;'>
                                        <div class='u-row'>

                                            <div id='u_column_12' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;background-color:#000000;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_heading_5' class='u_content_heading'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <h1 style='margin: 0px; color: #ffffff; line-height: 140%; text-align: left; word-wrap: break-word; font-weight: normal; font-family: arial,helvetica,sans-serif; font-size: 29px;'>
                                                            CAMERA<br /><strong>Make nights epic with
                                                            Nightography</strong><br /><br />GALAXY PRO-GRADE
                                                            CAMERA<br /><strong>Be the group chat's official
                                                            photographer</strong>
                                                        </h1>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_9' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_13' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_8' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 0px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://images.samsung.com/in/smartphones/galaxy-s22/images/galaxy-s22_highlights_pro-grade-camera_img.jpg'
                                                                 style='width: 100%;max-width: 926px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_10' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_14' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_9' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 0px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://s3.amazonaws.com/unroll-images-production/projects%2F51455%2F1644817043661-9.PNG'
                                                                 style='width: 100%;max-width: 1039px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_11' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_15' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_10' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 0px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://s3.amazonaws.com/unroll-images-production/projects%2F51455%2F1644817078358-10.PNG'
                                                                 style='width: 100%;max-width: 1213px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_12' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_16' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_11' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 0px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://s3.amazonaws.com/unroll-images-production/projects%2F51455%2F1644817121052-11.PNG'
                                                                 style='width: 100%;max-width: 902px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_13' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row' style='align-items: center;'>

                                            <div id='u_column_17' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_heading_6' class='u_content_heading'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <h1 style='margin: 0px; line-height: 140%; text-align: left; word-wrap: break-word; font-weight: normal; font-family: arial,helvetica,sans-serif; font-size: 22px;'>
                                                            <strong>VIDEO AT NIGHT</strong><br />Nightography captures
                                                            way past closing time
                                                        </h1>

                                                    </div>

                                                </div>
                                            </div>

                                            <div id='u_column_18' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_heading_7' class='u_content_heading'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <h3 style='margin: 0px; line-height: 140%; text-align: left; word-wrap: break-word; font-weight: normal; font-family: arial,helvetica,sans-serif; font-size: 18px;'>
                                                            Inspiration doesn't wait for optimal lighting &mdash; and
                                                            now you don't have to, either. The biggest leap in our video
                                                            technology, auto framerate matches the fps speed to your
                                                            surroundings and Super Night Solution clears up the noise in
                                                            each frame for
                                                            high-quality, vivid footage whether you're in the sun or
                                                            under the stars.
                                                        </h3>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_14' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_19' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_heading_8' class='u_content_heading'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <h1 style='margin: 0px; line-height: 140%; text-align: left; word-wrap: break-word; font-weight: normal; font-family: arial,helvetica,sans-serif; font-size: 22px;'>
                                                            <strong>PORTRAIT AT NIGHT</strong><br />Nightography puts
                                                            portraits in a new light
                                                        </h1>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_15' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_20' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_12' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 0px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://s3.amazonaws.com/unroll-images-production/projects%2F51455%2F1644817297214-12.PNG'
                                                                 style='width: 100%;max-width: 1232px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_16' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_21' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_13' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 0px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://s3.amazonaws.com/unroll-images-production/projects%2F51455%2F1644817374962-13.PNG'
                                                                 style='width: 100%;max-width: 900px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_17' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row' style='align-items: center;'>

                                            <div id='u_column_22' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_heading_9' class='u_content_heading'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <h1 style='margin: 0px; line-height: 140%; text-align: left; word-wrap: break-word; font-weight: normal; font-family: arial,helvetica,sans-serif; font-size: 22px;'>
                                                            <strong>SMOOTH VIDEO</strong><br />You&rsquo;ve got all the
                                                            smooth moves now
                                                        </h1>

                                                    </div>

                                                </div>
                                            </div>

                                            <div id='u_column_23' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_heading_10' class='u_content_heading'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <h4 style='margin: 0px; line-height: 140%; text-align: left; word-wrap: break-word; font-weight: normal; font-family: arial,helvetica,sans-serif; font-size: 16px;'>
                                                            Life doesn't stand still. But your video will. Our Pro-grade
                                                            Camera records blurless, stable videos that stay smooth even
                                                            as you bust a move.<br />How&rsquo;d we do it? The OIS
                                                            correction angle has been improved by 58% and works with
                                                            faster motion sampling to stabilize your shots. And your
                                                            everyday just got more epic and colorful with Super HDR
                                                            captures it with 64x more color information, even if the
                                                            scene is backlit.
                                                        </h4>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_19' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row' style='align-items: center;'>

                                            <div id='u_column_27' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_15' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://images.samsung.com/in/smartphones/galaxy-s22/images/galaxy-s22_highlights_smooth-video_quick-share.jpg'
                                                                 style='width: 100%;max-width: 400px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                            <div id='u_column_28' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_heading_12' class='u_content_heading'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <h4 style='margin: 0px; line-height: 140%; text-align: left; word-wrap: break-word; font-weight: normal; font-family: arial,helvetica,sans-serif; font-size: 16px;'>
                                                            Share photos, videos and files between devices with a tap
                                                            using Quick Share.4 Pull up the sharing panel, point your
                                                            phone and hit send.<br /><br />*Image simulated for
                                                            illustration purposes. Actual UI may be different.
                                                        </h4>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_20' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_29' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_16' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://s3.amazonaws.com/unroll-images-production/projects%2F51455%2F1644817543434-14.PNG'
                                                                 style='width: 100%;max-width: 1068px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_21' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row' style='align-items: center;'>

                                            <div id='u_column_30' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_17' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 0px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://s3.amazonaws.com/unroll-images-production/projects%2F51455%2F1644817581402-15.PNG'
                                                                 style='width: 100%;max-width: 330px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                            <div id='u_column_32' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_heading_13' class='u_content_heading'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <h3 style='margin: 0px; line-height: 140%; text-align: left; word-wrap: break-word; font-weight: normal; font-family: arial,helvetica,sans-serif; font-size: 18px;'>
                                                            <strong>OBJECT ERASER</strong><br /><strong>Photobombs be
                                                            gone</strong> Keep the focus where it belongs &mdash; on
                                                            your talent. Manually remove people or objects from the
                                                            background of your snaps, leaving behind only what you want
                                                            your
                                                            followers to see.<br /><br />*Image simulated for
                                                            illustration purposes. Actual UI may be different.
                                                        </h3>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_50' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_71' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_video_1' class='u_content_video'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <div
                                                            style='position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%;'>


                                                            <iframe
                                                                style='position: absolute; top: 0; left: 0; width: 100%; height: 100%;'
                                                                width='480' height='270'
                                                                src='https://www.youtube.com/embed/GaF3pH1bPg4'
                                                                frameBorder='0' allow='autoplay; encrypted-media'
                                                                allowfullscreen></iframe>


                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_23' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row' style='align-items: center;'>

                                            <div id='u_column_33' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_18' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://s3.amazonaws.com/unroll-images-production/projects%2F51455%2F1644817669369-16.PNG'
                                                                 style='width: 100%;max-width: 321px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                            <div id='u_column_34' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_19' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://s3.amazonaws.com/unroll-images-production/projects%2F51455%2F1644817671647-18.PNG'
                                                                 style='width: 100%;max-width: 344px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_24' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_35' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_20' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 0px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://s3.amazonaws.com/unroll-images-production/projects%2F51455%2F1644817750194-19.PNG'
                                                                 style='width: 100%;max-width: 544px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_25' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_36' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_heading_14' class='u_content_heading'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <h1 style='margin: 0px; line-height: 140%; text-align: left; word-wrap: break-word; font-weight: normal; font-family: arial,helvetica,sans-serif; font-size: 22px;'>
                                                            <strong>DISPLAY</strong><br />Goodbye, glare
                                                        </h1>

                                                    </div>

                                                </div>
                                            </div>

                                            <div id='u_column_37' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_heading_15' class='u_content_heading'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <h4 style='margin: 0px; line-height: 140%; text-align: left; word-wrap: break-word; font-weight: normal; font-family: arial,helvetica,sans-serif; font-size: 16px;'>
                                                            Sunlight, meet Galaxy S22's bright display and Galaxy S22+'s
                                                            brightest display.9 The stunning 120Hz Infinity-O Displays
                                                            are built with Dynamic AMOLED 2X with Vision Booster
                                                            technology for high outdoor visibility, keeping the view
                                                            clear in bright daylight
                                                            or at night.10 Now the only glare you'll get is from jealous
                                                            strangers.
                                                        </h4>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_26' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_38' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_22' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 0px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://s3.amazonaws.com/unroll-images-production/projects%2F51455%2F1644817830197-21.PNG'
                                                                 style='width: 100%;max-width: 944px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_27' class='u_row' style='padding: 0px;'>
                                    <div class='container'
                                         style='max-width: 1000px;margin: 0 auto;background-color: #edf7ee;'>
                                        <div class='u-row' style='align-items: center;'>

                                            <div id='u_column_39' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_23' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 0px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://s3.amazonaws.com/unroll-images-production/projects%2F51455%2F1644817873122-23.PNG'
                                                                 style='width: 100%;max-width: 407px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                            <div id='u_column_40' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_24' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 0px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://s3.amazonaws.com/unroll-images-production/projects%2F51455%2F1644817884512-24.PNG'
                                                                 style='width: 100%;max-width: 353px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_28' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_41' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_25' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 0px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://s3.amazonaws.com/unroll-images-production/projects%2F51455%2F1644817953487-26.PNG'
                                                                 style='width: 100%;max-width: 871px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_29' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_42' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_26' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 0px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://s3.amazonaws.com/unroll-images-production/projects%2F51455%2F1644817984739-28.PNG'
                                                                 style='width: 100%;max-width: 848px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_30' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row' style='align-items: center;'>

                                            <div id='u_column_43' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_text_1' class='u_content_text'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <div
                                                            style='line-height: 140%; text-align: left; word-wrap: break-word;'>
                                                            <p style='font-size: 14px; line-height: 140%;'>Bring the
                                                                crew together with Google Duo.13 It's simple to put
                                                                together a way to watch the big game with your besties
                                                                and stream high-quality video just like IRL.14 Call your
                                                                friends and cast it onto your TV to see the whole
                                                                squad.15</p>
                                                            <p style='font-size: 14px; line-height: 140%;'>*Image
                                                                simulated for illustration purposes. Actual UI may be
                                                                different.</p>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                            <div id='u_column_44' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_27' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://s3.amazonaws.com/unroll-images-production/projects%2F51455%2F1644818027719-30.PNG'
                                                                 style='width: 100%;max-width: 293px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_31' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row' style='align-items: center;'>

                                            <div id='u_column_45' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_heading_16' class='u_content_heading'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <h4 style='margin: 0px; line-height: 140%; text-align: left; word-wrap: break-word; font-weight: normal; font-family: arial,helvetica,sans-serif; font-size: 16px;'>
                                                            <strong>APP CAST</strong><br />Multitask through your big
                                                            screen debutGive your night videos the big TV break they
                                                            deserve. Use Smart View to cast to your TV and either mirror
                                                            your phone, or keep using other apps without interrupting
                                                            the show.17<br /><br />*Image simulated for illustration
                                                            purposes. Actual UI may be different.<br /><br />CHECK IT
                                                            OUT
                                                        </h4>

                                                    </div>

                                                </div>
                                            </div>

                                            <div id='u_column_46' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_28' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://s3.amazonaws.com/unroll-images-production/projects%2F51455%2F1644818269467-32.PNG'
                                                                 style='width: 100%;max-width: 789px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_32' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_47' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_29' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://s3.amazonaws.com/unroll-images-production/projects%2F51455%2F1644818299533-34.PNG'
                                                                 style='width: 100%;max-width: 1194px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_33' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_48' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_30' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 0px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://s3.amazonaws.com/unroll-images-production/projects%2F51455%2F1644818328538-35.PNG'
                                                                 style='width: 100%;max-width: 789px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_34' class='u_row' style='padding: 0px;'>
                                    <div class='container'
                                         style='max-width: 1000px;margin: 0 auto;background-color: #edf7ee;'>
                                        <div class='u-row' style='align-items: center;'>

                                            <div id='u_column_49' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_heading_17' class='u_content_heading'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <h1 style='margin: 0px; line-height: 140%; text-align: left; word-wrap: break-word; font-weight: normal; font-family: arial,helvetica,sans-serif; font-size: 22px;'>
                                                            <strong>4NM PROCESSOR</strong><br />The fastest chip ever on
                                                            Galaxy
                                                        </h1>

                                                    </div>

                                                </div>
                                            </div>

                                            <div id='u_column_50' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_text_2' class='u_content_text'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <div
                                                            style='line-height: 140%; text-align: left; word-wrap: break-word;'>
                                                            <p style='font-size: 14px; line-height: 140%;'>Whether
                                                                you're vlogging your day, gaming all night or simply
                                                                scrolling your feed, the 4nm processor makes for an
                                                                incredibly smooth experience.</p>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_36' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_52' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_31' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 0px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://s3.amazonaws.com/unroll-images-production/projects%2F51455%2F1644818565521-36.PNG'
                                                                 style='width: 100%;max-width: 1051px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_37' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_53' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_32' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 0px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://s3.amazonaws.com/unroll-images-production/projects%2F51455%2F1644818637239-38.PNG'
                                                                 style='width: 100%;max-width: 617px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_38' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_54' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_33' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 0px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://s3.amazonaws.com/unroll-images-production/projects%2F51455%2F1644818662169-39.PNG'
                                                                 style='width: 100%;max-width: 860px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_39' class='u_row' style='padding: 0px;'>
                                    <div class='container'
                                         style='max-width: 1000px;margin: 0 auto;background-color: #edf7ee;'>
                                        <div class='u-row' style='align-items: center;'>

                                            <div id='u_column_55' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_34' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 0px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://s3.amazonaws.com/unroll-images-production/projects%2F51455%2F1644818698943-40.PNG'
                                                                 style='width: 100%;max-width: 364px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                            <div id='u_column_56' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_35' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 0px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://s3.amazonaws.com/unroll-images-production/projects%2F51455%2F1644818709710-41.PNG'
                                                                 style='width: 100%;max-width: 410px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_40' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_57' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_36' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 0px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://s3.amazonaws.com/unroll-images-production/projects%2F51455%2F1644818813357-44.PNG'
                                                                 style='width: 100%;max-width: 846px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_42' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row' style='align-items: center;'>

                                            <div id='u_column_59' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_text_3' class='u_content_text'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <div
                                                            style='line-height: 140%; text-align: left; word-wrap: break-word;'>
                                                            <p style='font-size: 14px; line-height: 140%;'>Worry less as
                                                                you pick up a fallen phone with Corning&reg; Gorilla&reg;
                                                                Glass Victus&reg;+ on the screen and back panels. The
                                                                phone is surrounded by a polished, protective Armor
                                                                Aluminum frame, and with its IP68 water resistance
                                                                rating,
                                                                it can take a splash, too.24</p>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                            <div id='u_column_60' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_37' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://s3.amazonaws.com/unroll-images-production/projects%2F51455%2F1644820672333-46.PNG'
                                                                 style='width: 100%;max-width: 414px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_43' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_61' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_38' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://s3.amazonaws.com/unroll-images-production/projects%2F51455%2F1644820761104-48.PNG'
                                                                 style='width: 100%;max-width: 980px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_44' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row' style='align-items: center;'>

                                            <div id='u_column_62' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_heading_18' class='u_content_heading'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <h1 style='margin: 0px; line-height: 140%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: arial,helvetica,sans-serif; font-size: 22px;'>
                                                            <strong>PRIVACY</strong><br />Your privacy. Secured.
                                                        </h1>

                                                    </div>

                                                </div>
                                            </div>

                                            <div id='u_column_63' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_text_4' class='u_content_text'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <div
                                                            style='line-height: 140%; text-align: left; word-wrap: break-word;'>
                                                            <p style='font-size: 14px; line-height: 140%;'>Secure your
                                                                private data from the second you turn your phone on with
                                                                Samsung Knox. Knox Vault keeps your biometric
                                                                information safe, while Secure Folder locks down your
                                                                private data. And the new Permission Usage dashboard
                                                                lets you see
                                                                which apps are sharing your data or tracking you, and
                                                                allows you to grant or deny access on your terms.25</p>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_45' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_64' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_39' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://s3.amazonaws.com/unroll-images-production/projects%2F51455%2F1644820879274-50.PNG'
                                                                 style='width: 100%;max-width: 1224px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_46' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row' style='align-items: center;'>

                                            <div id='u_column_65' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_40' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://s3.amazonaws.com/unroll-images-production/projects%2F51455%2F1644820916819-501.PNG'
                                                                 style='width: 100%;max-width: 633px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                            <div id='u_column_66' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_heading_19' class='u_content_heading'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <h4 style='margin: 0px; line-height: 140%; text-align: left; word-wrap: break-word; font-weight: normal; font-family: arial,helvetica,sans-serif; font-size: 16px;'>
                                                            Make the smart switchUnbox. Setup. Create. Smart Switch
                                                            makes transferring data from your current phone seamless
                                                            &mdash; bringing over your gallery, notes, contacts and
                                                            more. Even if you're coming from another OS.26<br /><br />*Image
                                                            simulated for illustration purposes. Actual UI may be
                                                            different.<br /><br />Go to Smart Switch
                                                        </h4>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_47' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_67' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_heading_20' class='u_content_heading'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <h1 style='margin: 0px; line-height: 140%; text-align: left; word-wrap: break-word; font-weight: normal; font-family: arial,helvetica,sans-serif; font-size: 22px;'>
                                                            <strong>We know what you need</strong>
                                                        </h1>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_48' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row' style='align-items: center;'>

                                            <div id='u_column_68' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_41' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 0px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://s3.amazonaws.com/unroll-images-production/projects%2F51455%2F1644821062320-52.PNG'
                                                                 style='width: 100%;max-width: 454px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                            <div id='u_column_69' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_42' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 0px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://s3.amazonaws.com/unroll-images-production/projects%2F51455%2F1644821066818-53.PNG'
                                                                 style='width: 100%;max-width: 483px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_49' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_70' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_heading_21' class='u_content_heading'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <h1 style='margin: 0px; line-height: 140%; text-align: left; word-wrap: break-word; font-weight: normal; font-family: arial,helvetica,sans-serif; font-size: 22px;'>
                                                            <strong>The revolution will be accessorized</strong>
                                                        </h1>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_52' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_73' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_43' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 0px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://s3.amazonaws.com/unroll-images-production/projects%2F51455%2F1644821244390-54.PNG'
                                                                 style='width: 100%;max-width: 1110px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_53' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_74' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_44' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://s3.amazonaws.com/unroll-images-production/projects%2F51455%2F1644821299178-56.PNG'
                                                                 style='width: 100%;max-width: 858px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_54' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_75' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_45' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://s3.amazonaws.com/unroll-images-production/projects%2F51455%2F1644821331042-58.PNG'
                                                                 style='width: 100%;max-width: 833px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_55' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_76' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_46' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://s3.amazonaws.com/unroll-images-production/projects%2F51455%2F1644821392257-59.PNG'
                                                                 style='width: 100%;max-width: 906px;' title='' />

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
                            <div id='u_body' class='u_body'
                                 style='min-height: 100vh; color: #000000; background-color: #ffffff; font-family: arial,helvetica,sans-serif;'>

                                <div id='u_row_1' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_1' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;'>

                                                    <div id='u_content_image_1' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 0px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://img.poorvika.com/data/description/Mobile/Samsung/Samsung-Galaxy-S22-Ultra/Samsung-Galaxy-S22-Ultra.png'
                                                                 style='width: 100%;max-width: 1559px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_2' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_2' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_2' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 0px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://img.poorvika.com/data/description/Mobile/Samsung/Samsung-Galaxy-S22-Ultra/Samsung-Galaxy-S22-Ultra-specs.png'
                                                                 style='width: 100%;max-width: 1500px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_3' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row' style='align-items: center;'>

                                            <div id='u_column_3' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_heading_1' class='u_content_heading'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <h2 style='margin: 0px; line-height: 140%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: arial,helvetica,sans-serif; font-size: 20px;'>
                                                            <strong>A Note-worthy new look</strong><br />Meet Galaxy S22
                                                            Ultra, with the power of Note. Slim and bold, a polished
                                                            frame surrounds the extruded shape for elegant symmetry. And
                                                            the linear camera, accented by mirrored lens rings, seems
                                                            to float in place.
                                                        </h2>

                                                    </div>

                                                </div>
                                            </div>

                                            <div id='u_column_4' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_3' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://s3.amazonaws.com/unroll-images-production/projects%2F51455%2F1645506727893-2.PNG'
                                                                 style='width: 100%;max-width: 705px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_4' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row' style='align-items: center;'>

                                            <div id='u_column_5' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_4' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://img.poorvika.com/data/description/Mobile/Samsung/Samsung-Galaxy-S22-Ultra/Samsung-Galaxy-S22-Ultra-pen.png'
                                                                 style='width: 100%;max-width: 228px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                            <div id='u_column_6' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_heading_2' class='u_content_heading'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <h2 style='margin: 0px; line-height: 140%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: arial,helvetica,sans-serif; font-size: 20px;'>
                                                            <strong>The first Galaxy S with built-in S
                                                                Pen</strong><br />S Pen fits right into S for the first
                                                            time. Eject it from the bottom of the phone to write, sketch
                                                            or control your phone. Improved latency in Samsung Notes
                                                            makes every pen
                                                            stroke feel as natural as ink on paper &mdash; and you can
                                                            convert those hastily written ideas into legible text.
                                                        </h2>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_5' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row' style='align-items: center;'>

                                            <div id='u_column_7' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_heading_3' class='u_content_heading'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <h1 style='margin: 0px; line-height: 140%; text-align: left; word-wrap: break-word; font-weight: normal; font-family: arial,helvetica,sans-serif; font-size: 22px;'>
                                                            <strong>Leave your mark with color</strong>
                                                        </h1>

                                                    </div>

                                                </div>
                                            </div>

                                            <div id='u_column_8' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_heading_4' class='u_content_heading'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <h4 style='margin: 0px; line-height: 140%; text-align: left; word-wrap: break-word; font-weight: normal; font-family: arial,helvetica,sans-serif; font-size: 16px;'>
                                                            Be a trendsetter and embrace the bold tones of Galaxy S22
                                                            Ultra. The sophisticated and timeless colors amplify the
                                                            sleek design.
                                                        </h4>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_6' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_9' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_5' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 0px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://img.poorvika.com/data/description/Mobile/Samsung/Samsung-Galaxy-S22-Ultra/Samsung-Galaxy-S22-Ultra-color.png'
                                                                 style='width: 100%;max-width: 1037px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_7' class='u_row' style='padding: 0px;'>
                                    <div class='container'
                                         style='max-width: 1000px;margin: 0 auto;background-color: #000000;'>
                                        <div class='u-row'>

                                            <div id='u_column_10' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_heading_5' class='u_content_heading'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <h1 style='margin: 0px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: arial,helvetica,sans-serif; font-size: 22px;'>
                                                            <strong>4NM Processor - The fastest chip ever on
                                                                Galaxy</strong><br />The 4nm chip works its world-class
                                                            power into nearly every aspect of your phone &mdash;
                                                            resulting in epic night shots, incredibly clear photos from
                                                            day to night and
                                                            an optimized mobile gaming experience to lead you to
                                                            victory.
                                                        </h1>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_8' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_11' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_6' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 0px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://img.poorvika.com/data/description/Mobile/Samsung/Samsung-Galaxy-S22-Ultra/Samsung-Galaxy-S22-Ultra-pros.jpg'
                                                                 style='width: 100%;max-width: 1920px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_9' class='u_row' style='padding: 0px;'>
                                    <div class='container'
                                         style='max-width: 1000px;margin: 0 auto;background-color: #000000;'>
                                        <div class='u-row'>

                                            <div id='u_column_12' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_heading_6' class='u_content_heading'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <h1 style='margin: 0px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: arial,helvetica,sans-serif; font-size: 26px;'>
                                                            <strong>Our brightest display for the brightest day</strong>
                                                        </h1>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_10' class='u_row' style='padding: 0px;'>
                                    <div class='container'
                                         style='max-width: 1000px;margin: 0 auto;background-color: #000000;'>
                                        <div class='u-row'>

                                            <div id='u_column_13' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_heading_7' class='u_content_heading'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <h3 style='margin: 0px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: arial,helvetica,sans-serif; font-size: 18px;'>
                                                            The Dynamic AMOLED 2X display with Vision Booster is glare's
                                                            worst nightmare, hitting 1750 nits at its peak.3 And the
                                                            120Hz adaptive refresh rate keeps the scroll smooth,
                                                            adjusting to what's on screen for an optimized view.
                                                        </h3>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_11' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_14' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_7' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 0px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://img.poorvika.com/data/description/Mobile/Samsung/Samsung-Galaxy-S22-Ultra/Samsung-Galaxy-S22-Ultra-display.jpg'
                                                                 style='width: 100%;max-width: 1283px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_13' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_16' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_8' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 0px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://img.poorvika.com/data/description/Mobile/Samsung/Samsung-Galaxy-S22-Ultra/Samsung-Galaxy-S22-Ultra-battery.png'
                                                                 style='width: 100%;max-width: 1500px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_14' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_17' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_heading_8' class='u_content_heading'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <h2 style='margin: 0px; line-height: 140%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: arial,helvetica,sans-serif; font-size: 20px;'>
                                                            <strong>Get the big picture</strong><br />With the massive
                                                            pixel sensors and shape-shifting pixels, this phone has our
                                                            most advanced Pro-grade Camera yet, packing the power of a
                                                            professional's kit in one handheld device. Shoot into the
                                                            night without sacrificing quality.
                                                        </h2>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_15' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_18' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_9' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 0px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://img.poorvika.com/data/description/Mobile/Samsung/Samsung-Galaxy-S22-Ultra/Samsung-Galaxy-S22-Ultra-picture.jpg'
                                                                 style='width: 100%;max-width: 1920px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_16' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_19' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_10' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 0px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://img.poorvika.com/data/description/Mobile/Samsung/Samsung-Galaxy-S22-Ultra/Samsung-Galaxy-S22-Ultra-Camera.png'
                                                                 style='width: 100%;max-width: 1294px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_17' class='u_row' style='padding: 0px;'>
                                    <div class='container'
                                         style='max-width: 1000px;margin: 0 auto;background-color: #000000;'>
                                        <div class='u-row'>

                                            <div id='u_column_20' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_heading_9' class='u_content_heading'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <h1 style='margin: 0px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: arial,helvetica,sans-serif; font-size: 24px;'>
                                                            <strong>Good light is now any light with
                                                                Nightography</strong>
                                                        </h1>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_18' class='u_row' style='padding: 0px;'>
                                    <div class='container'
                                         style='max-width: 1000px;margin: 0 auto;background-color: #000000;'>
                                        <div class='u-row'>

                                            <div id='u_column_21' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_heading_10' class='u_content_heading'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <h3 style='margin: 0px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: arial,helvetica,sans-serif; font-size: 18px;'>
                                                            AI brilliance brings light to dark photos on both the 108MP
                                                            Wide-angle Camera and the 40MP Selfie Camera. Super Night
                                                            Solution intelligently brightens up the scene so you can use
                                                            the night to style your Portrait mode shots without losing
                                                            details.
                                                        </h3>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_19' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_22' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;background-color:black;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_11' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 0px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://img.poorvika.com/data/description/Mobile/Samsung/Samsung-Galaxy-S22-Ultra/Samsung-Galaxy-S22-Ultra-portrait.jpg'
                                                                 style='width: 100%;max-width: 652px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_20' class='u_row' style='padding: 0px;'>
                                    <div class='container'
                                         style='max-width: 1000px;margin: 0 auto;background-color: #000000;'>
                                        <div class='u-row'>

                                            <div id='u_column_23' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_heading_11' class='u_content_heading'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <h1 style='margin: 0px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: arial,helvetica,sans-serif; font-size: 26px;'>
                                                            <strong>A pro studio in your pocket</strong>
                                                        </h1>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_21' class='u_row' style='padding: 0px;'>
                                    <div class='container'
                                         style='max-width: 1000px;margin: 0 auto;background-color: #000000;'>
                                        <div class='u-row'>

                                            <div id='u_column_24' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_heading_12' class='u_content_heading'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <h3 style='margin: 0px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: arial,helvetica,sans-serif; font-size: 18px;'>
                                                            We're taking Pro mode to the next level. Download Expert RAW
                                                            for full control over your shots, saving the RAW files
                                                            directly to the Gallery.9 Fine-tune your frames on your
                                                            phone or send them to your PC or tablet and edit on a bigger
                                                            screen. Or you can
                                                            share the RAW files directly to another phone and have your
                                                            teammate take a look.
                                                        </h3>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_22' class='u_row' style='padding: 0px;'>
                                    <div class='container'
                                         style='max-width: 1000px;margin: 0 auto;background-color: #000000;'>
                                        <div class='u-row'>

                                            <div id='u_column_25' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_12' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 0px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://img.poorvika.com/data/description/Mobile/Samsung/Samsung-Galaxy-S22-Ultra/Samsung-Galaxy-S22-Ultra-pro.jpg'
                                                                 style='width: 100%;max-width: 340px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_23' class='u_row' style='padding: 0px;'>
                                    <div class='container'
                                         style='max-width: 1000px;margin: 0 auto;background-color: #000000;'>
                                        <div class='u-row'>

                                            <div id='u_column_26' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_heading_13' class='u_content_heading'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <h1 style='margin: 0px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: arial,helvetica,sans-serif; font-size: 26px;'>
                                                            <strong>Power to do what fingers can't</strong>
                                                        </h1>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_24' class='u_row' style='padding: 0px;'>
                                    <div class='container'
                                         style='max-width: 1000px;margin: 0 auto;background-color: #000000;'>
                                        <div class='u-row'>

                                            <div id='u_column_27' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_heading_14' class='u_content_heading'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <h3 style='margin: 0px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: arial,helvetica,sans-serif; font-size: 18px;'>
                                                            S Pen precision transforms your notes and messages into
                                                            masterpieces. Turn handwriting into text for ultra legible
                                                            outlines in Samsung Notes, or add animations to videos to
                                                            flex your creativity. Then take a step back (or a couple
                                                            steps) for wireless control
                                                            via Air Actions.
                                                        </h3>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_25' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_28' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_13' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 0px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://img.poorvika.com/data/description/Mobile/Samsung/Samsung-Galaxy-S22-Ultra/Samsung-Galaxy-S22-Ultra-draw.png'
                                                                 style='width: 100%;max-width: 1325px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_33' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_39' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_video_1' class='u_content_video'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <div
                                                            style='position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%;'>


                                                            <iframe
                                                                style='position: absolute; top: 0; left: 0; width: 100%; height: 100%;'
                                                                width='480' height='270'
                                                                src='https://www.youtube.com/embed/GaF3pH1bPg4'
                                                                frameBorder='0' allow='autoplay; encrypted-media'
                                                                allowfullscreen></iframe>


                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_26' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_29' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_14' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 0px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://img.poorvika.com/data/description/Mobile/Samsung/Samsung-Galaxy-S22-Ultra/Samsung-Galaxy-S22-Ultra-amazing.png'
                                                                 style='width: 100%;max-width: 1260px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_27' class='u_row' style='padding: 0px;'>
                                    <div class='container'
                                         style='max-width: 1000px;margin: 0 auto;background-color: #000000;'>
                                        <div class='u-row'>

                                            <div id='u_column_30' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_heading_15' class='u_content_heading'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <h1 style='margin: 0px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: arial,helvetica,sans-serif; font-size: 26px;'>
                                                            <strong>Amazing alone. Better together</strong>
                                                        </h1>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_28' class='u_row' style='padding: 0px;'>
                                    <div class='container'
                                         style='max-width: 1000px;margin: 0 auto;background-color: #000000;'>
                                        <div class='u-row'>

                                            <div id='u_column_31' class='u-col u-col-100 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_heading_16' class='u_content_heading'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <h3 style='margin: 0px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: arial,helvetica,sans-serif; font-size: 18px;'>
                                                            Streamline your space with Galaxy Tab S8 Ultra. Your Samsung
                                                            Notes are synced in real time to allow you to continue edits
                                                            from one Galaxy to another. Start on the big screen and move
                                                            to an ultra spacious one as your ideas grow, or pair them
                                                            together for
                                                            a dual screen experience.
                                                        </h3>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_29' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row' style='align-items: center;'>

                                            <div id='u_column_32' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_15' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://img.poorvika.com/data/description/Mobile/Samsung/Samsung-Galaxy-S22-Ultra/Samsung-Galaxy-S22-Ultra-communicate.png'
                                                                 style='width: 100%;max-width: 752px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                            <div id='u_column_33' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_heading_17' class='u_content_heading'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <h3 style='margin: 0px; line-height: 140%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: arial,helvetica,sans-serif; font-size: 18px;'>
                                                            <strong>Communication that goes the distance</strong><br />Bring
                                                            the crew together with Google Duo.18 Catch up with your
                                                            family and friends over video call, and even share your
                                                            screen to watch videos together, just like IRL.19 Call them
                                                            up and cast it onto your TV to see the everyone all at once.
                                                        </h3>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_31' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row' style='align-items: center;'>

                                            <div id='u_column_35' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_16' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://img.poorvika.com/data/description/Mobile/Samsung/Samsung-Galaxy-S22-Ultra/Samsung-Galaxy-S22-Ultra-blur.png'
                                                                 style='width: 100%;max-width: 802px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                            <div id='u_column_36' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_heading_18' class='u_content_heading'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <h3 style='margin: 0px; line-height: 140%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: arial,helvetica,sans-serif; font-size: 18px;'>
                                                            <strong>Blur the lines between phone and PC</strong><br />Open
                                                            apps directly on your desktop and move seamlessly between
                                                            phone and computer. Recent App even shows your three most
                                                            recently used apps, for quick access and continuity.
                                                        </h3>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div id='u_row_32' class='u_row' style='padding: 0px;'>
                                    <div class='container' style='max-width: 1000px;margin: 0 auto;'>
                                        <div class='u-row'>

                                            <div id='u_column_37' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_image_17' class='u_content_image'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <div
                                                            style='position:relative;line-height:0px;text-align:center'>

                                                            <img alt=''
                                                                 src='https://img.poorvika.com/data/description/Mobile/Samsung/Samsung-Galaxy-S22-Ultra/Samsung-Galaxy-S22-Ultra-Privacy.png'
                                                                 style='width: 100%;max-width: 492px;' title='' />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                            <div id='u_column_38' class='u-col u-col-50 u_column'>
                                                <div
                                                    style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;'>

                                                    <div id='u_content_heading_19' class='u_content_heading'
                                                         style='overflow-wrap: break-word;padding: 10px;'>

                                                        <h3 style='margin: 0px; line-height: 140%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: arial,helvetica,sans-serif; font-size: 18px;'>
                                                            <strong>Your privacy. Secured.</strong><br />Secure your
                                                            private data from the second you turn your phone on with
                                                            Samsung Knox. Knox Vault keeps your biometric information
                                                            safe, while Secure Folder locks down your private data. And
                                                            the
                                                            new Permission Usage dashboard lets you see which apps are
                                                            sharing your data or tracking you, and allows you to grant
                                                            or deny access on your terms.
                                                        </h3>

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
            image_url: 'https://d34e6224thkkna.cloudfront.net/homepage/Happi%20Mobile%20-%20Samsung%20Galaxy%20S22%20Series%20-%20M%20Banner.png',
            homepageData: {},
            block: 'samsungs22'
        };
    },

    async created() {
        this.homepageData = await this.$http.$get('/api/homepage');
        this.$nextTick(() => {
            console.log('this.$refs["utm_campaign"]', document.getElementById('utm_campaign').value);
            document.getElementById('utm_campaign').value = this.$route.query.utm_campaign;
            document.getElementById('utm_medium').value = this.$route.query.utm_medium;
            document.getElementById('utm_source').value = this.$route.query.utm_source;
        });
    },


    methods: {
        changeModel(event) {
            if (event.target.value === 'samsungs22') {
                this.image_url = 'https://d34e6224thkkna.cloudfront.net/homepage/Happi%20Mobile%20-%20Samsung%20Galaxy%20S22%20-%20L%20Banner.png';
            }
            if (event.target.value === 'samsungs22plus') {
                this.image_url = 'https://d34e6224thkkna.cloudfront.net/homepage/Happi%20Mobile%20-%20Samsung%20Galaxy%20S22%20%2B%20-%20L%20Banner.png';
            }
            if (event.target.value === 'samsungs22Ultra') {
                this.image_url = 'https://d34e6224thkkna.cloudfront.net/homepage/Happi%20Mobile%20-%20Samsung%20Galaxy%20S22%20Ultra%20-%20L%20Banner.png';
            }
            this.block = event.target.value;
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
            console.log("token", token);
            if (token !== null) {
                document.getElementById('leads').submit();
            } else {
                return false;
            }

        }
    }
};
</script>

<style scoped>
a {
    color: #0000ee;
    text-decoration: underline;
}

a:hover {
    color: #0000ee;
    text-decoration: underline;
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

body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    color: #373a3c;
    background-color: #fff
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
    border-color: #a94442 !important;
    color: #a94442 !important
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

form .spinner > div {
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

@media only screen and (max-width: 480px) {
    .container {
        max-width: 100% !important
    }
}

.container {
    width: 100%;
    padding-right: 0;
    padding-left: 0;
    margin-right: auto;
    margin-left: auto
}

@media (min-width: 576px) {
    .container {
        max-width: 540px
    }
}

@media (min-width: 768px) {
    .container {
        max-width: 720px
    }
}

@media (min-width: 992px) {
    .container {
        max-width: 960px
    }
}

@media (min-width: 1200px) {
    .container {
        max-width: 1140px
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
    background-color: #FB9013;
    border: 0;
    color: white;
    font-family: 'Open Sans', sans-serif;
    transform: translateY(-50%);
}

.img {
    background-color: #FB9013;
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
                                        margin-bottom: 50PX !important;

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

