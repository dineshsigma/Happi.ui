<template>
    <v-file-input v-model="file" accept="image/*" label="Upload Screenshot" variant="solo" @change="uploadSS()"
        prepend-icon="icon-paperclip" append-outer-icon=""></v-file-input>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            file: {}
        }
    },
    watch: {
        file: function (newValue, oldValue) {
            console.log('file changed', newValue);
        }
    },
    methods: {
        async uploadSS() {
            // var image_file ;
            console.log('uploadSS called', this.file);
            let formData = new FormData();
            formData.append('file', this.file);
            for (var pair of formData.entries()) {
                // image_file = pair[1];
                console.log(pair[0] + ', ' + pair[1], 'AA');
            }
            // console.log(image_file, 'III');

            let image = formData;
            var resp;
            try {
                resp = await axios.post(`https://5400-183-83-216-63.ngrok-free.app/uploadimages`, image)
            } catch (error) {
                console.log('error', error);
            }

            console.log(resp, 'Resp');

            // const reader = new FileReader();
            // reader.readAsDataURL(this.file);
            // reader.onload = () => {
            //     console.log(reader.result, 'Reader Result');
            //     const formData = new FormData();
            //     formData.append('file', reader.result);
            //     console.log(formData, 'FFF');
            //     // send the formData to the server here
            // }
        }

    }
}
</script>