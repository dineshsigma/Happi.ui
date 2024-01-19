<template lang="html">
    <div class="table-responsive">
        <table class="table ps-table--faqs">
            <tbody>
                <tr v-for="(product,index) in sampleData">
                    <td class="heading" :rowSpan='`${product.Qa.length}`'>
                        <h4>SHIPPING</h4>
                    </td>
                    <template v-for="item in product[index].Qa">
                        <td class="question">
                            What Shipping Methods Are Available?
                        </td>
                        <td>
                            Ex Portland Pitchfork irure mustache. Eutra fap
                            before they sold out literally. Aliquip ugh bicycle
                            rights actually mlkshk, seitan squid craft beer
                            tempor.
                        </td>
                    </template>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'Faqs',
    data() {
        return {
            sampleData: [
                {
                    title: 'Shipping',
                    Qa: [
                        {
                            ques: 'What Shipping Methods Are Available?',
                            answer:
                                'Ex Portland Pitchfork irure mustache. Eutra fap before they sold out literally. Aliquip ugh bicycle rights actually mlkshk, seitan squid craft beer tempor.'
                        },
                        {
                            ques: 'What Shipping Methods Are Available?',
                            answer:
                                'Ex Portland Pitchfork irure mustache. Eutra fap before they sold out literally. Aliquip ugh bicycle rights actually mlkshk, seitan squid craft beer tempor.'
                        },
                        {
                            ques: 'What Shipping Methods Are Available?',
                            answer:
                                'Ex Portland Pitchfork irure mustache. Eutra fap before they sold out literally. Aliquip ugh bicycle rights actually mlkshk, seitan squid craft beer tempor.'
                        }
                    ]
                },
                {
                    title: 'PAYMENT',
                    Qa: [
                        {
                            ques: 'Is Buying On-Line Safe?',
                            answer:
                                'Ex Portland Pitchfork irure mustache. Eutra fap before they sold out literally. Aliquip ugh bicycle rights actually mlkshk, seitan squid craft beer tempor.'
                        },
                        {
                            ques: 'What Shipping Methods Are Available?',
                            answer:
                                'Ex Portland Pitchfork irure mustache. Eutra fap before they sold out literally. Aliquip ugh bicycle rights actually mlkshk, seitan squid craft beer tempor.'
                        },
                        {
                            ques: 'What Shipping Methods Are Available?',
                            answer:
                                'Ex Portland Pitchfork irure mustache. Eutra fap before they sold out literally. Aliquip ugh bicycle rights actually mlkshk, seitan squid craft beer tempor.'
                        }
                    ]
                },
                {
                    title: 'Shipping',
                    Qa: [
                        {
                            ques: 'What Shipping Methods Are Available?',
                            answer:
                                'Ex Portland Pitchfork irure mustache. Eutra fap before they sold out literally. Aliquip ugh bicycle rights actually mlkshk, seitan squid craft beer tempor.'
                        },
                        {
                            ques: 'What Shipping Methods Are Available?',
                            answer:
                                'Ex Portland Pitchfork irure mustache. Eutra fap before they sold out literally. Aliquip ugh bicycle rights actually mlkshk, seitan squid craft beer tempor.'
                        },
                        {
                            ques: 'What Shipping Methods Are Available?',
                            answer:
                                'Ex Portland Pitchfork irure mustache. Eutra fap before they sold out literally. Aliquip ugh bicycle rights actually mlkshk, seitan squid craft beer tempor.'
                        }
                    ]
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>


</style>
