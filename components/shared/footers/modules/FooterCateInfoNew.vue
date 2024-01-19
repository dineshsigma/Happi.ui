<template lang="html">
    <div class="ps-footer__links pt-2 pb-2">
      <p v-for="item in footerInfo">
        <strong class="mr-1">  {{item.title}}  </strong> <br>
        <span class="fotterviews">{{item.desc}}</span>
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: "FooterCateInfo.vue",
    data() {
      return {
        footerInfo : [
  
          {
            "title": "Mobiles & Accessories",
            "desc": "Shop for the latest and trending smartphones along with accessories from a wide range of products at the best price. Coupled with exciting offers and deals, Happi Mobiles partners with top brands like Apple, Samsung, OnePlus, Nokia, Oppo, Vivo, Micromax, and realme to offer the best-in-class smartphones that manage to meet your budget and needs. The everyday accessories that simplify and accompany your daily life like Mobile Chargers, Connectors, Headphones etc are also available from a wide variety of brands at an immensely affordable price range."
          },
          {
            "title": "Computers & Tablets",
            "desc": "Solve your WFH woes with Happi Mobiles. Check out our latest laptops, desktops, Macbooks, tablets and iPads too. Also available are other accessories like a mouse, trackpad, keyboard, and external storage devices. Choose your favourite device from the hub of best brands like Apple, Lenovo, Dell, Asus, Mi and HP. Don’t just buy the first laptop you see, compare the excellent features and specifications of various laptops and then make the final choice of the purchase at Happi Mobiles. Guaranteed to give you the best price along with many deals and cashback offers too."
          },
          {
            "title": "TV & Audio",
            "desc": "Is your TV sounding like a hunk of junk? Blurry pictures and audio that bursts? Upgrade your home with uber-cool and the latest Smart LED TVs that add essence to the entertainment. Check out the trending 8K, 4k, Full HD, QLED, and Android Smart TVs from outstanding leaders like Samsung, LG, TCL, OnePlus, Mi and realme. Make your home your entertainment haven with our best-selling audio streaming devices and party speakers delivered straight to your doorstep within 2 hours!"
          },
          {
            "title": "Smart Technology",
            "desc": "Don’t delay your goals and accomplish it all with our advanced smart wearable gadgets from Happi Mobiles. Choose from a variety of fitness trackers, smartwatches, smart trackers, smart lighting and smart speakers from best-selling brands like Apple, Boat, Lenovo, OnePlus, Samsung, Xiaomi, and much more!"
          },
          {
            "title": "No Cost EMI",
            "desc": "Happi Mobiles offers a variety of payment options and extends the possibility of buying your favourite device. You can exclusively avail of the No Cost EMI option on specific products from selected Banks and Debit/Credit Cards."
          },
          {
            "title": "Discounts, Cashbacks & Offers",
            "desc": "At Happi Mobiles, the happiness of our customers is our utmost priority. To ensure our customers always have a smile on their face, we offer the best-in-class products with exciting offers, deals and cashback. Stay tuned for our unbelievable special and festive day deals on our website and grab your favourite products. Happi Shopping!"
          }
        ]
      };
    },
  }
  </script>
  
  <style scoped>
  .fotterviews{
      color: #636363;
      display: inline-block;
      margin-bottom: 0px;
      font-weight: 400;
      line-height: 28px;
  }
  </style>