<template lang="html">
    <div  >
<!--        <div class="table-responsive" v-for="spec in product.specifications">-->

<!--            <table class="table table-bordered ps-table ps-table&#45;&#45;specification"  >-->
<!--                <tbody>-->
<!--                    <tr  v-for="(cont,index) in spec.context" v-if='cont.value != null && cont.value.trim() !== ""'>-->
<!--                      <td v-if="index == 0" :rowspan="showSpan(spec.context.length)" class="bg-head-spec" >{{ spec.title }}</td>-->
<!--                        <td class="bg-key-spec">{{cont.key}}</td>-->
<!--                        <td class="bg-value-spec">{{cont.value}}</td>-->
<!--                    </tr>-->
<!--                </tbody>-->
<!--            </table>-->
<!--        </div>-->
      <ul class="mb-0" v-for="spec in product.specifications">
          <li class="ps-item d-flex"   >
            <div class="specific-head">
              {{ spec.title }}
            </div>
            <div class="specific-body">
                <ul>
                  <li class="d-flex " v-for="(cont,index) in spec.context" v-if='cont.value != null && cont.value.trim() !== ""'>
                    <span>{{cont.key}}</span>
                    <span>{{cont.value}}</span>
                  </li>
                </ul>
            </div>
          </li>

      </ul>
    </div>
</template>

<script>

export default {
    name: 'PartialSpecification',
    props: {
        product: {
            type: Object,
            require: true,
            default: () => {}
        }
    },
  methods : {
    showSpan(a) {
      console.log("KKKKKKKKKKK ",a)
      return a;
    }
  }
};
</script>

<style lang="scss" scoped>
.ps-item {
  border-bottom: 1px solid #b9b7b7;
  p {
    margin-bottom: 0 !important;
  }
  .specific-head {
    font-weight: 600 !important;
    font-size: 14px !important;
    width: 20% !important;
    min-width: 20% !important;
    max-width: 20% !important;
    background-color: #f4f4f4 ;
    display: flex;
    align-items: center;
    padding-left: 15px;

  }

  .specific-body {
    width: 80%;

    li {
      span {
        padding: 10px;
      }
      span:first-child {
        border-right: 1px solid #b9b7b7;

        width: 20% !important;
        min-width: 20% !important;
        max-width: 20% !important;
        font-size: 13px;
        font-weight: 600 !important;
      }
      span:last-child {
        font-size: 12px;
      }
    }
    li:nth-child(2n+1) {
      background-color: transparent !important;
    }
    li:nth-child(2n) {
      background-color: #f4f4f4;
    }
  }
}

.bg-value-spec {
  font-size:12px;
}
.heading-specification{
    font-weight: bold;
}
@media (max-width: 767px) {
  .ps-item {
    padding-bottom: 10px;
    display: grid !important;
    border-bottom: 0 !important;
    .specific-head {
      font-weight: 600 !important;
      font-size: 14px !important;
      width: 100% !important;
      min-width: 100% !important;
      max-width: 100% !important;
      background-color: #f4f4f4 ;
      display: flex;
      align-items: center;
      padding: 15px;

    }

    .specific-body {
      width: 100%;
      width: 100%;

      li {
        border-bottom: 1px solid #b9b7b7;
        span {
          padding: 10px;

          width: 60%;
        }
        span:first-child {
          border-right: 0px solid #b9b7b7;

          width: 40% !important;
          min-width: 40% !important;
          max-width: 40% !important;
          font-size: 13px;
          font-weight: 600 !important;
        }
        span:last-child {
          font-size: 12px;

        }
      }
      li:nth-child(2n+1) {

      }
      li:nth-child(2n) {
        background-color: transparent;
      }
      li:last-child {
        border-bottom: 0px solid #b9b7b7;
      }
    }
  }
}
</style>
