<template>
    <section class="body">
        <div class="form-container">
            <!-- <div class="row">
            <div class="col-12 text-center">
                <div class="header">
                    <h2>Thirupathi</h2>
                </div>
            </div>
        </div> -->
            <!-- <form id="leads"> -->
            <div class="row">
                <div class="col-12 col-sm-12 text-center">
                    <div class="top-text">
                        <h3>Spin the wheel to win big</h3>
                        <h3>At Happi store launch in Tirupati</h3>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-sm-4">
                    <div class="form-group">
                        <input type='hidden' name='utm_source' id='utm_source' value=''>
                        <input type='hidden' name='utm_medium' id='utm_medium' value=''>
                        <input type='hidden' name='utm_campaign' id='utm_campaign' value=''>
                        <input type='hidden' name='type' id='type' value='tirupathi_launch'>
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
                        <input type="text" name="email" id="email" placeholder="Email*" data-form-field="email"
                            class="form-control" v-model="email" pattern="" required maxlength="50" minlength="5">
                    </div>
                </div>
                <div class="col-12 col-sm-4">
                    <div class="form-group">
                        <button class="success_btn btn_fwidth" @click="validate()">Submit</button>
                    </div>
                </div>
            </div>
            <!-- </form> -->
        </div>
        <div id="app" v-if="uniqueUser">



            <!-- status buttons-->
            <!-- <div class="game-status">
        <div class="toggle" @click="isToggle = !isToggle"></div>
        <transition name="slide-fade">
          <div class="status-container" v-if="isToggle">
            <div class="times">CHANCE <span>{{ time_remaining }}</span></div>
            <div class="buttons">
              <button class="btn btn-primary" :class="{ 'active': current_year === 2017 }"
                @click="setCurrentYear(2017)">2017</button>
              <button class="btn btn-primary" :class="{ 'active': current_year === 2018 }"
                @click="setCurrentYear(2018)">2018</button>
              <button class="btn btn-secondary" @click="restart">Restart</button>
            </div>
          </div>
        </transition>
      </div> -->

            <div class="lucky-wheel">
                <div class="pointer-container">
                    <!-- pointer -->
                    <div class="pointer" ref="pointer" id="pointer"
                        :style="{ 'transform': rotate_deg, 'transition': prize_transition }" @click="rotateHandler(num)">
                    </div>
                </div>
                <!-- lucky wheel -->
                <div :class="containerClass">
                    <div v-for="(item, index) in prizes" :key="item.name" ref="item" :class="itemClass">
                        <div :class="contentClass">
                            <!-- <i class="material-icons">
                {{ item.icon }}
              </i> -->
                            <span>{{ item.name }}
                                <!-- <span :class="countClass">{{ item.count }}</span> -->
                            </span>
                        </div>
                    </div>
                </div>

                <!-- display results -->
                <!-- <transition name="slide-fade">
          <div class="prize" v-if="isShow == isClicked">
            <div class="prize-container">
              <div class="prize-title">WELL</br> DONE!</div>
              <div class="prize-title">YOU GET A FREE...</br>
                <span class="prize-item">{{ prize_name }}</span>
              </div>
              <div class="prize-background">
                <template v-for="(prizeIcon, index) in 9">
                  <i class="material-icons">
                    {{ prize_icon }}
                  </i>
                </template>
              </div>
            </div>
          </div>
        </transition> -->
            </div>
        </div>
        <v-dialog v-model="spinnedWheel" max-width="360" persistent>
            <div class="text-center alert-card">
                <!-- <div v-if="modelLoader" class="colsm2">
                    <div class="sp sp-sphere"></div>
                    <p>Verification in progress..</p>
                    <p>Do Not Refresh the page</p>
                </div> -->
                <div v-if="wonItem != '' && wonItem != 'Un Lucky'">
                    <div class="alert-card_icon">
                        <i class="icon-checkmark-circle icon-success"></i>
                    </div>
                    <p>Congratulations</p>
                    <p>You WON</p>
                    <p class="won-item">{{ wonItem }}</p>
                    <button class="btn btn-success model-button" @click="redirectToHome()">OK</button>
                    <p class="text-inst" style="margin-bottom: 5px;">You will receive the coupon code via SMS/eMail</p>
                    <p class="text-inst">Show that at Happi Tirupati Store to avail the offer.</p>
                </div>
                <div v-else>
                    <div class="alert-card_icon">
                        <i class="icon-cross-circle icon-cross"></i>
                    </div>
                    <p>Better Luck Next Time</p>
                    <button class="btn btn-success model-button" @click="redirectToHome()">Keep Shopping</button>
                </div>
            </div>
        </v-dialog>

        <!-- Already Participated -->
        <v-dialog v-model="spinnedUser" max-width="360" persistent>
            <div class="text-center alert-card">
                <div>
                    <div class="alert-card_icon">
                        <i class="icon-cross-circle icon-cross"></i>
                    </div>
                    <p>You have already Participated..!!</p>
                    <button class="btn btn-success model-button" @click="redirectToHome()">Keep Shopping</button>
                </div>
            </div>
        </v-dialog>

        <!-- Error Text -->
        <v-dialog v-model="errortext" max-width="360">
            <div class="text-center alert-card">
                <div>
                    <div class="alert-card_icon">
                        <i class="icon-cross-circle icon-cross"></i>
                    </div>
                    <p>Please enter valid details</p>
                    <button class="btn model-button btn-close" @click="closeModel()">Close</button>
                </div>
            </div>
        </v-dialog>
    </section>
</template>
<script>
export default {
    name: "spin-and-win",
    data() {
        return {
            phoneNo: '',
            nameReq: '',
            email: '',
            uniqueUser: false,
            spinnedWheel: false,
            spinnedUser: false,
            errortext: false,
            wonItem: '',
            prizes: [],
            prizes_2017: [],
            prizes_2018: [],
            prize_name: "",
            prize_icon: "",
            prize_rotate: [],
            prize_transition: "",
            each_deg: 0,
            rotate_deg: 0,
            start_deg: 0,
            current_deg: 0,
            index: 0,
            current_year: 2017,
            duration: 3000,
            time_remaining: 20,
            num: 0,
            numbers: [],
            isToggle: false,
            isClicked: false,
            isShow: true
        }
    },
    created() {
        this.$nextTick(() => {
            document.getElementById('utm_campaign').value = this.$route.query.utm_campaign;
            document.getElementById('utm_medium').value = this.$route.query.utm_medium;
            document.getElementById('utm_source').value = this.$route.query.utm_source;
        });
    },
    mounted() {
        let vm = this;
        vm.initPrize();
    },
    watch: {
        current_year: {
            handler: "restart"
        }
    },
    computed: {
        containerClass() {
            let vm = this;
            return vm.current_year === 2017
                ? "container"
                : "container container-large";
        },
        itemClass() {
            let vm = this;
            return vm.current_year === 2017
                ? "item item-skew"
                : "item item-skew-large";
        },
        contentClass() {
            let vm = this;
            return vm.current_year === 2017
                ? "item-content"
                : "item-content item-content-large";
        },
        countClass() {
            let vm = this;
            return vm.current_year === 2017 ? "count" : "count count-large";
        }
    },
    methods: {
        closeModel() {
            this.errortext = false;
        },
        async submitLead(value) {
            // console.log(value, 'VVVV', this.wonItem);

            await fetch('https://dev-services.happimobiles.com/tptoffers/tptleads', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "name": this.nameReq,
                    "phone": this.phoneNo,
                    "email": this.email,
                    "prize": this.wonItem,
                    "utm_campaign": document.getElementById('utm_campaign').value || '',
                    "utm_medium": document.getElementById('utm_medium').value || '',
                    "utm_source": document.getElementById('utm_source').value || '',
                    "type": document.getElementById('type').value
                })
            }).then(response => response.json())
                .then((data) => {
                    // console.log(data, 'LLLLLLLLLLLLLL');
                    // if(data.status){
                    //   this.uniqueUser = true;
                    // } else {
                    //   this.spinnedUser = true;
                    // }
                })


        },



        async formValidations() {
            // console.log(this.phoneNo, 'PPPPP');
            // e.preventDefault();
            // document.getElementById('leads').submit();
            await fetch('https://dev-services.happimobiles.com/tptoffers/leads', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    // "name": u_name,
                    "phone": this.phoneNo,
                })
            }).then(response => response.json())
                .then((data) => {
                    // console.log(data, 'DDD');
                    if (data.status) {
                        this.uniqueUser = true;
                    } else {
                        this.spinnedUser = true;
                    }
                })
        },
        redirectToHome() {
            window.location = "https://www.happimobiles.com"
        },
        randomNum() {
            var numZ = Math.random();
            if (numZ < 0.3) return 4;  //probability 0.3
            else if (numZ < 0.6) return 4; // probability 0.3
            else if (numZ < 0.9) return 4; //probability 0.3
            else return 1;  //probability 0.1
        },
        validate() {
            if (this.nameReq != '' && this.phoneNo.length == 10 && this.email != '') {
                this.formValidations();
            } else {
                this.errortext = true;
            }
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
        prizeActive() {
            // 抽到獎品後變更 item 的 css
            let vm = this;
            setTimeout(() => {
                vm.$refs.item[vm.index].classList.value = `${vm.itemClass} active`;
            }, vm.duration);
            console.log("item active");
        },
        setCurrentYear(year) {
            let vm = this;
            if (vm.isClicked) return;
            vm.current_year = year;
        },
        restart() {
            let vm = this;
            vm.$refs.item[vm.index].classList.value = vm.itemClass;
            if (vm.current_year === 2017) {
                vm.time_remaining = 20;
                vm.reset();
                vm.initPrize();
            } else if (vm.current_year === 2018) {
                vm.time_remaining = 120;
                vm.reset();
                vm.initPrize_2018();
            }
        },
        reset() {
            let vm = this;
            vm.isShow = true;
            vm.index = 0;
            vm.prize_name = "";
            vm.prize_icon = "";
            vm.prize_rotate = [];
            vm.numbers = [];
            vm.start_deg = 0;
            vm.rotate_deg = `rotate(0deg)`;
            vm.current_deg = 0;
            vm.isClicked = false;
            vm.prize_transition = `none`;
            // console.log("RESET");
        },
        initPrize() {
            let vm = this;
            vm.prizes_2017 = [
                {
                    // name: "Free smart watch",
                    name: "Un Lucky",
                    // icon: "cake",
                    count: 0
                },
                {
                    name: "Free Neck Band",
                    // name: "Un Lucky",
                    // icon: "stars",
                    count: 1
                },
                {
                    name: "Free smart watch",
                    // name: "Un Lucky",
                    // icon: "child_care",
                    count: 2
                },
                {
                    name: "Rs 1000 coupon",
                    // name: "Un Lucky",
                    // icon: " flight",
                    count: 3
                },
                {
                    name: "Rs 500 coupon",
                    // icon: "wifi",
                    count: 4
                },
                {
                    name: "Free ear phones",
                    // icon: "movie_filter",
                    count: 5
                }
            ];
            vm.num = vm.prizes_2017.length;
            vm.degree(vm.num);
            vm.prizes = vm.prizes_2017;
            vm.numberArray();
        },
        initPrize_2018() {
            let vm = this;
            vm.prizes_2018 = [];
            for (let i = 1; i <= 120; i++) {
                let item = {};
                if (i === 1) {
                    item.name = 1;
                    item.count = 1;
                    vm.prizes_2018.push(item);
                } else if (i > 1 && i <= 16) {
                    item.name = i;
                    item.count = 1;
                    vm.prizes_2018.push(item);
                } else if (i === 17) {
                    item.name = i;
                    item.count = 5;
                    vm.prizes_2018.push(item);
                } else if (i === 18) {
                    item.name = i;
                    item.count = 10;
                    vm.prizes_2018.push(item);
                } else if (i === 19) {
                    item.name = i;
                    item.count = 20;
                    vm.prizes_2018.push(item);
                } else if (i === 20) {
                    item.name = i;
                    item.count = 69;
                    vm.prizes_2018.push(item);
                }
            }
            vm.num = vm.prizes_2018.length;
            vm.prizes = vm.prizes_2018;
            vm.degree(vm.num);
            vm.numberArray();
        },
        degree(num) {
            let vm = this;
            for (let i = 1; i <= num; i++) {
                let deg = 360 / num;
                vm.each_deg = deg;
                let eachDeg;
                eachDeg = i * deg;
                vm.prize_rotate.push(eachDeg);
            }
        },
        numberArray() {
            // => [0,1,2,3,4,5]
            let vm = this;
            vm.numbers = vm.prizes.map((prize, index) => {
                return index;
            });
        },
        rotateHandler(num) {
            let vm = this;
            // index
            vm.prizes.filter((prize, index) => {
                let filterArray;
                if (prize.count <= 0) {
                    let filterArray = vm.numbers.filter((num) => {
                        return num !== index;
                    });
                    vm.numbers = filterArray;
                }
            });

            if (vm.time_remaining > 0) {
                vm.$refs.item[vm.index].classList.value = vm.itemClass;
                vm.prize_draw(num);
            } else if (vm.time_remaining <= 0) {
                vm.$refs.item[vm.index].classList.value = vm.itemClass;
                vm.restart();
            }
        },
        prize_draw(num) {
            let vm = this;
            if (vm.isClicked) return;
            vm.isShow = vm.isClicked;

            vm.$refs.item[vm.index].classList.value = vm.itemClass;
            vm.index = vm.numbers[this.randomNum()];
            // vm.index = vm.numbers[Math.floor(Math.random() * vm.numbers.length)];
            // console.log(vm.index, 'IIIIII');
            // console.log('ABCD', vm.numbers);

            let circle = 4;
            let degree;
            degree =
                vm.start_deg +
                circle * 360 +
                vm.prize_rotate[vm.index] -
                (vm.start_deg % 360);

            vm.start_deg = degree;

            vm.current_year === 2017
                ? (vm.rotate_deg = `rotate(${degree}deg)`)
                : (vm.rotate_deg = `rotate(${degree - vm.each_deg / 2}deg)`);

            vm.prize_transition = `all ${vm.duration / 1000
                }s cubic-bezier(0.42, 0, 0.2, 0.91)`;
            vm.time_remaining--;
            vm.isClicked = true;

            let remainder = vm.start_deg % 360;
            if (remainder <= 0) {

                vm.current_year === 2017
                    ? (vm.current_deg = remainder + 360)
                    : (vm.current_deg = remainder + 360 - vm.each_deg / 2);
            } else if (remainder > 0) {
                vm.current_year === 2017
                    ? (vm.current_deg = remainder)
                    : (vm.current_deg = remainder - vm.each_deg / 2);
            }
            // console.log("2.執行旋轉", degree, "index", vm.index, 'ROLLED');


            let prize = vm.prizes[vm.index];
            vm.prize_name = prize.name;
            vm.prize_icon = prize.icon;
            if (vm.current_year === 2018) {
                vm.prize_icon = "card_giftcard";
            }
            vm.prizeActive();
            setTimeout(() => {
                prize.count--;
                this.spinnedWheel = true;
                this.wonItem = prize.name;
                // console.log(
                //     "3.id:",
                //     vm.current_deg,
                //     "name:",
                //     prize.name,
                //     "count:",
                //     prize.count,
                //     "index",
                //     vm.index
                // );
                this.submitLead(vm.index);
            }, vm.duration);

            setTimeout(() => {
                if (vm.isClicked === true) {
                    vm.isClicked = false;
                }
            }, vm.duration);
        }
    }
};
</script>
<style lang="scss">
.won-item{
    font-weight: bold;
    font-size: 20px;
    color: #29a71a;
}
.text-inst{
    color: #000000;
    font-size:11px;
}
.btn-close{
    background: #fb9013;
    color: #ffff;
}
.top-text {
    h3 {
        color: #ffffff;
    }
}

.form-container {
    width: 100%;
    background-color: #fb9013;
    padding: 3rem;
    margin-bottom: 3rem;

    .form-control {
        padding: 1rem;
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

    .btn_fwidth {
        width: 100%;
    }
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




$primary-color: #fb9013;
$primary-color-dark: #fff;
$secondary-color: #ffffff;
$access-color: #29a71a;
$duration: 3s;

* *::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

[v-cloak] {
    display: none !important;
}

#app {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // height: 100vh;
    overflow: hidden;
    font-family: "Roboto Condensed", sans-serif;
    position: relative;
    background-color: #ffffff;
    user-select: none;
}

.status-container {
    position: relative;
    left: 100px;
}

.toggle {
    // display: flex;
    display: none;
    background-image: url("https://raw.githubusercontent.com/HuiyuLiz/vue-lucky-wheel/306abe15b78c71c3cd25ed8eaf97554101fd405e/svg/toggle.svg");
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 100px;
    height: 120px;
    position: absolute;
    left: calc;
    top: -3%;
    transition: all 0.3s ease-in;
    filter: drop-shadow(-3px 5px 0px $primary-color);
    cursor: pointer;

    &:hover {
        transform: rotate(360deg) scale(0.8);
    }
}

.game-status {
    position: absolute;
    left: 2%;
    top: 4%;
    font-size: 2rem;
    color: $secondary-color;
    display: flex;
    justify-content: flex-end;
    align-items: stretch;
    margin: 0 auto;
    flex-direction: column-reverse;
    font-weight: 700;
    text-transform: uppercase;
    width: 250px;
    height: 600px;
}

button:focus {
    outline: 0;
}

.times {
    font-size: 2.5rem;
    line-height: 0.9;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 5px 0px;
    position: relative;
    color: $primary-color-dark;

    &::after {
        position: absolute;
        content: "x";
        font-size: 2.3rem;
        font-weight: normal;
        left: 150px;
        top: 3px;
        color: $secondary-color;
    }

    >span {
        text-align: right;
        color: $primary-color-dark;
        margin-left: 40px;
    }
}

.buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.btn {
    cursor: pointer;
    font-family: "Roboto Condensed", sans-serif;
    width: 100px;
    padding: 5px 10px;
    margin: 10px 5px;
    font-size: 1rem;
    font-weight: bold;
    transition: all 0.3s;

    &.btn-primary {
        border: 3px solid #1f1172;
        color: $secondary-color;
        background-color: $primary-color;
    }

    &.active {
        border: 3px solid $access-color;
        color: $access-color;
        background-color: $primary-color-dark;
    }

    &.btn-secondary {
        border: 3px solid #1f1172;
        color: $primary-color;
        background-color: $secondary-color;

        &:hover {
            border: 3px solid $secondary-color;
            color: $secondary-color;
            background-color: $primary-color-dark;
        }
    }
}


.lucky-wheel {
    display: flex;
    width: 550px;
    height: 550px;
    border-radius: 550px;
    justify-content: center;
    align-items: center;
    z-index: 3;

    &::after {
        content: "";
        width: 540px;
        height: 549px;
        background-image: url("../static/img/wheel-outside.svg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
    }

    .container {
        display: block;
        width: 520px;
        height: 520px;
        border-radius: 520px;
        overflow: hidden;
        position: relative;
        transform: rotate(-30deg);

        &.container-large {
            transform: rotate(-18deg);
        }
    }
}

.pointer-container {
    display: flex;
    width: 128px;
    height: 208px;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    position: absolute;
    color: $access-color;
    font-size: 2rem;

    &::after {
        display: block;
        content: "PRESS";
        width: 120px;
        height: 120px;
        border-radius: 120px;
        background-color: #303030;
        line-height: 120px;
        text-align: center;
        font-weight: bold;
    }

    .pointer {
        width: 128px;
        height: 208px;
        display: block;
        background-image: url("../static/img/hand.svg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        bottom: 39.7px;
        transform-origin: 64px 144px;
        cursor: pointer;
    }
}

@media (max-width: 767px) {
    .lucky-wheel {
        display: flex;
        width: 360px;
        height: 360px;
        border-radius: 100%;
        justify-content: center;
        align-items: center;
        z-index: 3;

        &::after {
            content: "";
            width: 350px;
            height: 355px;
            // background-image: url("https://raw.githubusercontent.com/HuiyuLiz/vue-lucky-wheel/306abe15b78c71c3cd25ed8eaf97554101fd405e/svg/wheel-outside.svg");
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            position: absolute;
        }

        .container {
            display: block;
            width: 340px;
            height: 340px;
            border-radius: 100%;
            overflow: hidden;
            position: relative;
            transform: rotate(-30deg);

            &.container-large {
                transform: rotate(-18deg);
            }
        }

        .item-content {
            // font-size: 1.5rem;
            // font-weight: 600;
            // text-align: center;
            width: 1rem;
        }

        .item-content span {
            font-size: 1.25rem;
            font-weight: 600;
            text-align: center;
            line-height: normal;
            text-transform: capitalize;
        }
    }

    .pointer-container {
        display: flex;
        width: 64px;
        height: 68px;
        flex-shrink: 0;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        position: absolute;
        color: #fff;
        font-size: 1.25rem;

        &::after {
            display: block;
            content: "SPIN";
            width: 60px;
            height: 60px;
            border-radius: 100%;
            background-color: #303030;
            line-height: 60px;
            text-align: center;
            font-weight: bold;
        }

        .pointer {
            width: 64px;
            height: 104px;
            display: block;
            // background-image: url("https://raw.githubusercontent.com/HuiyuLiz/vue-lucky-wheel/306abe15b78c71c3cd25ed8eaf97554101fd405e/svg/hand.svg");
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            position: absolute;
            bottom: 1px;
            transform-origin: 32px 72px;
            cursor: pointer;
        }
    }

    .item {
        position: absolute;
        display: flex;
        width: 50%;
        height: 50%;
        border: 1px solid #1f1172;
        top: 0;
        right: 0;
        transform-origin: 0% 100%;
        justify-content: center;
        align-items: center;
    }


}

.item {
    position: absolute;
    display: flex;
    width: 50%;
    height: 50%;
    border: 1px solid #1f1172;
    top: 0;
    right: 0;
    transform-origin: 0% 100%;
    justify-content: center;
    align-items: center;
}

$n: 6;

@for $i from 1 through $n {
    $deg: 360deg / $n;

    .item-skew:nth-child(#{$i}) {
        transform: rotate($deg * $i) skewY($deg - 90);
    }
}

$num: 20;

@for $i from 1 through $num {
    $deg: 360deg / $num;

    .item-skew-large:nth-child(#{$i}) {
        transform: rotate($deg * $i) skewY($deg - 90);
    }
}

.item-content {
    display: flex;
    width: 100px;
    align-items: center;
    flex-direction: column;
    font-size: 2rem;
    font-weight: bold;
    transform-origin: center center;
    // 16輪盤
    transform: skewY(30deg) rotate(30deg) translate(-95px, 62px);
    position: absolute;
    right: 0;
    bottom: 0;

    &.item-content-large {
        // 20輪盤
        transform: skewY(72deg) rotate(9deg) translate(-22px, -10px);
        position: absolute;
        left: 0;
        top: 200px;
    }

    .count {
        position: absolute;
        left: 28px;
        top: 112px;
        font-size: 1.2rem;
        text-align: center;
        width: 45px;
        line-height: 25px;
        border-radius: 30px;
        display: block;

        &.count-large {
            left: 39px;
            top: 40px;
            font-size: 1rem;
            width: 25px;
            line-height: 25px;
            border-radius: 25px;
        }
    }

    >i {
        font-size: 4rem;
    }
}

.item:nth-child(odd) {
    background-color: $primary-color;

    .item-content {
        color: $secondary-color;
    }

    .count {
        color: $primary-color;
        background-color: $secondary-color;
    }
}

.item:nth-child(even) {
    background-color: $secondary-color;

    .item-content {
        color: $primary-color;
    }

    .count {
        color: $secondary-color;
        background-color: $primary-color;
    }
}

.item {
    &.active {
        background-color: $access-color;
        transition: 0.2s ease-in;

        .item-content {
            color: white;
            transition: 0.2s ease-in;
        }
    }
}

.prize {
    display: flex;
    position: absolute;
    width: 100%;
    height: 237px;
    background-color: $primary-color;
    overflow: hidden;
    z-index: -5;

    .prize-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 1280px;
        margin: 0 auto;
        position: relative;
    }

    .prize-title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 25%;
        height: 157px;
        font-size: 72px;
        color: white;
        font-weight: bold;
        padding-left: 11%;
        z-index: 999;
    }

    .prize-title:nth-child(2) {
        width: 26%;
        padding-left: 0px;
        font-size: 32px;
    }

    .prize-item {
        font-size: 72px;
        color: $access-color;
        text-decoration: underline;
    }
}

.prize-background {
    width: 1280px;
    height: 237px;
    position: absolute;

    i {
        font-size: 4rem;
        color: #000000;
        position: absolute;
    }

    i:nth-child(1) {
        bottom: 30px;
        left: -40px;
        transform: rotate(0deg);
    }

    i:nth-child(2) {
        top: 40px;
        left: 30px;
        transform: rotate(20deg);
    }

    i:nth-child(3) {
        bottom: -40px;
        left: 130px;
        transform: rotate(-20deg);
    }

    i:nth-child(4) {
        top: -25px;
        left: 270px;
        transform: rotate(-30deg);
    }

    i:nth-child(5) {
        bottom: 20px;
        left: 340px;
        transform: rotate(0deg);
    }

    i:nth-child(6) {
        top: -20px;
        right: 300px;
        transform: rotate(0deg);
    }

    i:nth-child(7) {
        bottom: -35px;
        right: 260px;
        transform: rotate(40deg);
    }

    i:nth-child(8) {
        bottom: 35px;
        right: 50px;
        transform: rotate(-20deg);
    }

    i:nth-child(9) {
        top: 10px;
        right: -25px;
        transform: rotate(20deg);
    }
}

@for $i from 1 through 9 {
    $size: random(100) + 100;

    .prize-background i:nth-child(odd) {
        animation: move 3s alternate infinite ease-in-out;
        animation-delay: $i * 0.2s;
    }

    .prize-background i:nth-child(even) {
        animation: move 2s alternate-reverse infinite ease-in-out;
    }
}

@keyframes move {
    @for $i from 1 through 9 {
        #{($i*10)}% {
            transform: rotate((random(10) * 1deg)) scale(random(1) * 0.8);
        }
    }
}

.slide-fade-enter-active {
    transition: all 1s ease;
    transition-delay: ($duration - 1) s;
}

.slide-fade-leave-active {
    transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
}
</style>
  