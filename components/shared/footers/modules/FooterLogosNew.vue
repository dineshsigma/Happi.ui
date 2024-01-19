<template>
    <div class="logos-container">
        <div>
            <a
            class="facebook"
            rel="noreferrer"
            target="_blank"
            href="https://www.facebook.com/HappiMobiles1/"
            >
                <img src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/3f034a96-158b-42b1-bd26-d55c24bd0f39.png"
                class="logo-social"
                alt="happimobiles"/>
                <span class="logo-text">FACEBOOK</span>
            </a>
        </div>
        <div>
            <a
            class="twitter"
            rel="noreferrer"
            target="_blank"
            href="https://twitter.com/happimobiles2"
            >
                <img src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/cc29133c-8a49-44bd-ad38-528118e8d73f.png"
                class="logo-social"
                alt="happimobiles"/>
                <span class="logo-text">TWITTER</span>
            </a>
        </div>
        <div>
            <a
            class="linkedin"
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/company/happi-mobiles-pvt-ltd/"
            >
                <img src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/e9c86f75-94e5-4d41-96e7-4111b5f89a1a.png"
                class="logo-social"
                alt="happimobiles"/>
                <span class="logo-text">LINKEDIN</span>
            </a>
        </div>
        <div>
            <a
            class="instagram"
            rel="noreferrer"
            target="_blank"
            href="https://www.instagram.com/happimobiles/">
                <img src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/7e18d360-2aa5-43c0-98d9-3dcb09556bbe.png"
                class="logo-social"
                alt="happimobiles"/>
                <span class="logo-text">INSTAGRAM</span>
            </a>
        </div>
        <div>
            <a
            class="youtube"
            rel="noreferrer"
            target="_blank"
            href="https://www.youtube.com/c/HappiMobiles">
                <img src="https://s3.ap-south-1.amazonaws.com/happimobiles/retool-upload/6ceef332-c354-4b36-b13f-1725e1eb1f5c.png"
                class="logo-social"
                alt="happimobiles"/>
                <span class="logo-text">YOUTUBE</span>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'FooterLogosNew'
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
.logo-text{
    // width: 184px;
    height: 25px;

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    // line-height: 25px;
    /* identical to box height */

    text-transform: uppercase;

    color: #CACACA;
}
.logo-social{
    width: 24px;
    height: 20px;
    margin-bottom: 4px;
    margin-right:4px;
}
.logos-container{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0px;

    // width: 1420px;
    height: 54px;

    background: #F6F6F6;
}
</style>

