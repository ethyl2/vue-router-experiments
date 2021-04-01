<template>
    <div>
        <h2 class="is-size-3 mb-4">Let's convert HTML to an image you can download!</h2>
        <form @submit.prevent="print" class="mb-4">
            <div class="field has-addons">
                <label for="hero-text" class="mr-2 label">Your text:</label>
                <div class="control is-expanded">
                    <input name="hero-text" type="text" v-model="heroText" class="input" />
                </div>
                <div class="control">
                    <button type="submit" class="button is-primary">Add text to image</button>
                </div>
            </div>
        </form>
        <h3 class="mb-4 is-size-5">Here's the HTML that is converted to an image that appears below:</h3>
        <div 
            ref="printMe" 
            style="padding: 10px; 
                background: url('https://images.unsplash.com/photo-1462332420958-a05d1e002413?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1640&q=80') center center no-repeat #f5da55;
                height: 50vh;
                display: flex;
                flex-flow: row wrap;
                justify-content: center;
                align-items: center;
                "
            crossorigin="anonymous"
            >
            <h1 style="color: white; font-size: 3rem; font-weight: bold; text-align: center;">{{ heroText }}</h1>
        </div>
        <!-- OUTPUT -->
        <div class="mt-6">
        <h3 class="mb-4 is-size-5">Right click on the image below ⬇️ and select 'Save image as...' to download your awesome image.</h3>
        <img :src="output">
        </div>
    </div> 
</template>

<script>
export default {
    name: 'Html2Canvas',
    data() {
        return {
            output: null,
            heroText: '',
        }
    },
    methods: {
        async print() {
            const el = this.$refs.printMe;
            // add option type to get the image version
            // if not provided the promise will return 
            // the canvas.
            const options = {
                type: 'dataURL',
                useCORS: true
            }
            this.output = await this.$html2canvas(el, options);
        }
    },
    mounted() {
        this.print()
    }
}
</script>