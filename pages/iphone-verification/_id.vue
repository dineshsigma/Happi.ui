<template>
    <div class="body iphone_app">
        <div class="row d-flex align-items-center justify-content-center">
            <div class="col-md-5">
                <div class="row d-flex align-items-center justify-content-center">
                    <div class="col-md-8 col-10">
                        <div class="image">
                            <img
                                src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/529e02e4-d262-4c54-980d-9cf4f3581df5.png" />
                        </div>
                    </div>

                    <div class="col-md-12">
                        <div class="iphone-head p-5 text-center">
                            <h2>Upload the IMEI screenshot and verify your iPhone purchase now.</h2>
                            <p>Note that the uploaded image will be directly sent to the Apple for Warrenty verification and Fraud Detection.</p>
                        </div>
                        <div class="iphone-upload p-5">
                            <label for="file" class="file-style">
                                <i class="icon-cloud-upload icon-newupload"></i>
                                <p>Upload Photo</p>
                            </label>
                            <input type="file" id="file" @change="uploadSS" ref="file">
                        </div>
                        <!-- <div v-if="uploadLoader" class="text-center">
                            <p>Uploading...</p>
                            <div class="colsm2">
                                <div class="sp sp-sphere"></div>
                            </div>
                        </div> -->
                        <!-- <div v-if="buttonActive" class="text-center">
                            <p class="success-upload">Uploaded successfully, please submit</p>
                        </div> -->
                    </div>

                    <!-- <div class="col-md-10 text-center">
                        <button @click="submitForm"
                            :class="buttonActive == false ? 'btn submit-button' : 'btn submit-button submit-active'"
                            :disabled="buttonActive == false">Submit</button>
                    </div> -->

                    <v-dialog v-model="modelShow" max-width="360" persistent>
                        <div class="text-center alert-card">
                            <div v-if="modelLoader" class="colsm2">
                                <div class="sp sp-sphere"></div>
                                <p>Verification in progress..</p>
                                <p>Do Not Refresh the page</p>
                            </div>
                            <div v-if="successCard">
                                <div class="alert-card_icon">
                                    <i class="icon-checkmark-circle icon-success"></i>
                                </div>
                                <p>Verification Successfull</p>
                                <button class="btn btn-success model-button" @click="successClicked">OK</button>
                            </div>
                            <div v-if="retryCard">
                                <div class="alert-card_icon">
                                    <i class="icon-cross-circle icon-cross"></i>
                                </div>
                                <p>Verification Failed</p>
                                <button class="btn btn-danger model-button" @click="retryClicked">Retry</button>
                            </div>
                        </div>
                    </v-dialog>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'index.vue',
    data() {
        return {
            file: null,
            id: null,
            base64: '',
            fileName: '',
            fileType: '',
            formDataFinal: '',
            imageApiResponse: null,
            uploadLoader: false,
            buttonActive: false,
            successCard: false,
            retryCard: false,
            uploadFinished: false,
            modelShow: false,
            modelLoader: true,
            progressDone: false,
        }
    },
    created() {
        window.addEventListener('beforeunload', this.handlePageRefresh);
        // console.log('HERE', this.$route.params.id)
        this.id = this.$route.params.id;
    },

    beforeDestroy() {
        window.removeEventListener('beforeunload', this.handlePageRefresh);
    },

    methods: {

        handlePageRefresh(event) {
            if (!this.progressDone) {
                const confirmationMessage = 'You have unsaved changes. Are you sure you want to leave?';
                (event || window.event).returnValue = confirmationMessage;
                return confirmationMessage;
            }
        },

        async uploadSS() {
            this.file = this.$refs.file.files[0]
            this.fileName = this.file.name;
            this.fileType = this.file.type;
            this.modelShow = true;
            let formData = new FormData();
            formData.append('file', this.file);
            var resp;
            this.uploadLoader = true;

            try {
                resp = await axios.post(`https://dev-services.happimobiles.com/api/emp/getQRCodeUploadIMEINumber`, formData)
                this.uploadFinished = true;
            } catch (error) {
                console.log('error', error);
            }
            if (resp?.data?.status) {
                this.uploadLoader = false;
                this.buttonActive = true;
            }
            this.imageApiResponse = resp?.data;
            setTimeout(() => {
                this.submitForm()
            }, 500)
        },

        async submitForm() {
            this.modelShow = true;
            let body = {
                "id": this.id,
                "filename": this.fileName,
                "type": this.fileType,
                "imageResponse": this.imageApiResponse
            }
            console.log("body",body);
            var response;
            try {
                response = await axios.post(`https://dev-services.happimobiles.com/api/emp/checkUploadIMEINumberScreenShoot`, body)
            } catch (error) {
                console.log('error', error);
            }
            this.progressDone = true;
            if (response?.data?.status) {
                this.successCard = true
                this.modelLoader = false
                setTimeout(() => {
                    this.successClicked();
                }, 200)
            } else {
                this.retryCard = true
                this.modelLoader = false
            }

        },

        async retryClicked() {
            this.modelShow = false;
            this.file = null;
            window.location.reload();
        },

        async successClicked() {
            window.location.href = 'https://www.happimobiles.com/'
        }
    }
}

</script>
<style lang="scss">
.alert_popup {
    border: 2px dashed #f00;
    width: 350px;
}


.model-button {
    color: #fff;
    padding: 1rem 2rem;
    font-size: 14px;
    font-weight: 500;
    min-width: 80px;
}

.alert-card {
    background: #fff;
    padding: 4rem 2rem;

    .alert-card_icon {
        width: 64px;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 16px;
    }

    .icon-success,
    .icon-cross {
        color: green;
        font-size: 6rem;
    }

    .icon-cross {
        color: red;
    }

    p {
        font-family: "Roboto", sans-serif;
        font-weight: 600;
        opacity: .5;
    }
}


$spCol: #000;

.success-upload {
    color: green;
    font-size: 16px;
}

.colsm2 {
    // padding: 10px;
    border-radius: 4px;
    // height: 125px;
    margin-bottom: 5px;
}

.sp {
    width: 32px;
    height: 32px;
    clear: both;
    margin: 20px auto;
}

/* Spinner Sphere */
.sp-sphere {
    border-radius: 50%;
    border-left: 0px $spCol solid;
    border-right: 0px $spCol solid;
    -webkit-animation: spSphere 1s infinite linear;
    animation: spSphere 1s infinite linear;
    background: orange;
}

@-webkit-keyframes spSphere {
    0% {
        border-left: 0px $spCol solid;
        border-right: 0px $spCol solid;
    }

    33% {
        border-left: 32px $spCol solid;
        border-right: 0px $spCol solid;
    }

    34% {
        border-left: 0px $spCol solid;
        border-right: 32px $spCol solid;
    }

    66% {
        border-left: 0px $spCol solid;
        border-right: 0px $spCol solid;
    }
}

@keyframes spSphere {
    0% {
        border-left: 0px $spCol solid;
        border-right: 0px $spCol solid;
    }

    33% {
        border-left: 32px $spCol solid;
        border-right: 0px $spCol solid;
    }

    34% {
        border-left: 0px $spCol solid;
        border-right: 32px $spCol solid;
    }

    66% {
        border-left: 0px $spCol solid;
        border-right: 0px $spCol solid;
    }
}







.iphone_app {
    width: 100%;
    min-height: 600px;
    display: block;
    padding: 3rem 0;
    background: #fff;
    border-bottom: 1px solid #DDD;
}

.iphone-head {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    width: 100%;
    margin: auto;

    h2 {
        font-size: 3rem;
        margin-bottom: 1rem;
        font-weight: 900;
    }

    p {
        font-size: 1.25rem;
        margin: 0;
        font-weight: 500;
    }
}

#file {
    display: none;
}

.file-style {
    width: 100%;
    display: block;
    background-color: #f5f4f4;
    margin: auto;
    cursor: pointer;
    text-align: center;
    padding: 1.25rem;
    border-radius: 15px;
    border: 2px dashed #cdc8c8;
}

.icon-newupload {
    font-size: 5rem;
}

.submit-button {
    border-radius: 20px;
    background: grey;
    color: #fff;
    padding: 1rem 3rem;
    font-size: 14px;
    font-weight: 500;
    min-width: 180px;
    border-radius: 100px;

    &:hover {
        color: #fff;
        cursor: pointer;
    }
}

.submit-active {
    background: green !important;
}

@media screen and (max-width: 768px) {
    .iphone-head h2 {
        font-size: 1.75rem;
    }
}
</style>