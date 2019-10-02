import numeral from 'numeral'
import Axios from 'axios'

Vue.component('subscribe-button',{
    props:{
        channel:{
            type:Object,
            required:true,
            default:() => ({})
        },
        subscriptions:{
            type:Array,
            required:true,
            default:() => [

            ]
        }
    },
    computed: {
        subscribed(){
            if(! __auth() || this.channel.user_id == __auth().id) return false
            return !!this.subscription
        },
        owner(){
            if(__auth() && this.channel.user_id == __auth().id) return true
            return false
        },
        count(){
            return numeral(this.subscriptions.length).format('0a')
        },

        subscription(){
            if(! __auth()) return null
            return this.subscriptions.find(subscription => subscription.user_id == __auth().id)
        }
    },
    methods: {
        toggleSubscription(){
            if(!__auth()){
                alert('Please login for subscript.')
            };

            if(this.owner){
                return alert('You can\'t subscribe to your cannel. ')
            }

            
            if(this.subscribed){
                Axios.delete(`/channels/${this.channel.id}/subscription/${this.subscription.id}`)
            }else{
                Axios.post(`/channels/${this.channel.id}/subscription/`)
            }
        }
    },
})