import axios from "axios";
import Fingerprint2 from "fingerprintjs2";
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class ContactForm extends Vue {
    protected fingerprint: string = "";
    protected fingerprintComponents: object = {};
    protected fullname: string = "";
    protected email: string = "";
    protected telephone: string = "";
    protected message: string = "";

    protected mounted() {
    new Fingerprint2().get( (result, components) => {
        this.fingerprint = result;
        this.fingerprintComponents = components;
      });
    }
}
