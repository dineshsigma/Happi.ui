<template lang="html">
    <!-- <ul class="ps-countdown">
        <li>
            <span class="days">{{ days }}</span>
            <p>Days</p>
        </li>
        <li>
            <span class="hours">{{ hours }}</span>
            <p>Hours</p>
        </li>
        <li>
            <span class="minutes">{{ minutes }}</span>
            <p>Minutes</p>
        </li>
        <li>
            <span class="seconds">{{ seconds }}</span>
            <p>Seconds</p>
        </li>
    </ul> -->
    <p class="timer-text"> Ends in {{ days }} days {{ hours }} hrs {{ minutes }} mins {{ seconds }} secs </p>
</template>

<script>
// import moment from 'moment';

export default {
    name: 'CountDown',
    data() {
        return {
            seconds: null,
            minutes: null,
            hours: null,
            days: null
        };
    },
    props: {
        time: {
            type: String,
            default: () => ''
        },
        format: {
            type: String,
            default: () => ''
        }
    },

    mounted() {
        // setInterval(() => {
        //     const then = moment(this.time, this.format);
        //     const now = moment();
        //     const countdown = moment(then - now);
        //     this.days = countdown.format('D');
        //     this.hours = countdown.format('HH');
        //     this.minutes = countdown.format('mm');
        //     this.seconds = countdown.format('ss');
        // }, 1000);
    }
};
</script>

<style lang="scss" scoped>
.ps-countdown {
    list-style: none !important;
}
.timer-text{
    margin: 5px 0;
}

.ps-product--hot-deal {
    .ps-product__expires {
        padding-top: 0;
        p {
            font-size: 1.6rem !important;
            color: #eb0400;
        }
        .ps-countdown {
            li {
                span {
                    margin-bottom: 0px;
                    width: 20px;
                    height: 20px;
                    font-size: 14px;
                    border: 0;
                }
            }
            :after {
                top: -3px !important;
                font-size: 17px;
            }
            p {
                font-size: 1.2rem !important;
                color: #eb0400;
                font-weight: bold;
            }
        }
    }
}
@media (max-width: 767px) {
    .ps-product--hot-deal {
    .ps-product__expires {
        padding-top: 0;
        .ps-countdown {
            li {
                span {
                   
                    font-size: 17px;
                }
            }
            :after {
                top: -3px !important;
                font-size: 17px;
            }
            p {
                font-size: 1rem !important;
            }
        }
    }
}
}
</style>
