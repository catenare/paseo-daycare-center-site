import Vue from 'vue'
import axios from 'axios'
import Component from 'vue-class-component'

@Component
export default class App extends Vue {
    private greeting: string = "hello World";
    private users: any = [];

    private userData() {
        axios({
            url: 'https://randomuser.me/api/?results=30',
            method: 'GET'
                   })
            .then(  (response) => {
                this.users = response.data;
            }, (response) => {
                console.log(response)
            })
    }

    private mounted() {
        this.userData()
    }


}
