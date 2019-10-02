Vue.component('channel-uploads',{
    data: () => ({
        selected:false
    }),
    methods:{
        upload(){
            // console.log(this.$refs)

            this.selected = true
            const videos = this.$refs.videos.files
            console.log(videos)
        }
    }
})