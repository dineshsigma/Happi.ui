<template>
    <div class="container">
        <div class="akshaya-heading" >
            <h3>Store Management
            </h3>
        </div>
        
        <br>
        <!-- <div class="akshaya-details">
            <p>At Happi Mobiles with our Motto to spread Happiness took an initiative to be a part of Akshaya Patra’s Mid
                Day Meal Scheme.
            </p>
            <p> We believe in humanity and accordingly, we partnered with Akshaya Patra’s Mid Day Meal Scheme to feed
                children in government and government-aided schools in India.

            </p>
            <p>
                Happi Mobiles is the first of its kind to take an initiative to donate a meal for children in need, on
                behalf of our customers.</p>
            <ul>
                <li> On every purchase of a handset at Happi Mobiles, we will register the customer’s birthday details in
                    our database.</li>
                <li> On the date of their birth, we donate food for a child on behalf of that customer.</li>
            </ul>
            <br>
            <p>Nothing can give better satisfaction than serving food for hunger. Looking at a child filled with happiness
                can make our day. This makes us to partner with Akshaya Patra’s Mid Day Meal Scheme.</p>

            <br> <strong>Mid-Day Meal scheme aims to:

        </strong>
            <ul>
                <li> Avoid classroom hunger</li>
                <li> Increase school enrolment</li>
                <li> Increase school attendance</li>
                <li> Improve socialization among castes</li>
                <li> Address malnutrition</li>
                <li> Empower women through employment </li>
            </ul>
            <br>
            <img src="https://old.happimobiles.com/wp-content/uploads/2020/08/AK_patra.png" alt="Akshaya patra" style="width: 100%;">
        </div> -->
    </div>
</template>

<script>
export default {
    name: 'store-management',
    layout: 'layout-default-ssr',
    head() {
        return {
            title: 'Store Management | Happi Mobiles',
            // meta: [
            //     { hid: 'og-title', property: 'og:title', content: 'Akshaya Patra’s Mid Day Meal Scheme | Happi Mobiles' },
            //     { hid: 'og-description', property: 'og:description', content: 'At Happi Mobiles with our Motto to spread Happiness took an initiative to be a part of Akshaya Patra\'s Mid Day Meal Scheme.' },
            //     { hid: 'description', property: 'description', content: 'At Happi Mobiles with our Motto to spread Happiness took an initiative to be a part of Akshaya Patra\'s Mid Day Meal Scheme.' },
            //     { hid: 'keywords', property: 'keywords', content: 'akshaya patra, mid day meal scheme at happi mobiles' },
            // ],
            // link: [
            //     {
            //         rel: 'stylesheet',
            //         href: 'https://unpkg.com/instantsearch.css@7.1.0/themes/algolia-min.css'
            //     }
            // ]
        };
    },
};
</script>

<style scoped>
.akshaya-heading {
    font-size: 30px;
    color: #fb9013;
    margin: 2rem 0;
    text-align: center;
}

.each-akshaya {
    display: block;
    margin: 1rem 0;
    color: #000;
    background-color: #f9f9f9;
    padding: 1rem;
}

.each-akshaya:hover {
    color: #fff;
    background-color: #fb9013;
    transition: .5s;
}

.each-akshaya:hover .akshaya-title {

    color: #fff;
}

.akshaya-title {
    color: #fb9013;
    font-size: 20px;
}

.akshaya-desc {
    font-size: 14px;
}

.akshaya-city {
    font-size: 22px;
    font-weight: 500;
}

.akshaya-details {
    font-size: 14px;
}

.akshaya-btn {
    background-color: #fb9013;
    color: #fff;
    padding: .5rem;
}

.akshaya-btn {
    text-decoration: none;

}

.akshaya-btn:hover {
    color: #fff;
    text-decoration: none;
}

.akshaya-input {
    width: 200px;
}
.iframe-akshaya iframe{
    width: 100%;
    height: 400px;
}
@media only screen and (max-width: 767px) {
    .iframe-akshaya iframe{
        width: 100%;
        height: 300px;
    }
}
</style>
