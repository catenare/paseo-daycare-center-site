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
    protected isSubmitDisabled: boolean = true;
    protected rcaptSigKey: string =  "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
    // demo secret key: 6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe
    protected rcaptId: number = 0; // will be used later

    protected mounted() {
        new Fingerprint2().get( (result, components) => {
            this.fingerprint = result;
            this.fingerprintComponents = components;
          });

        if (typeof window !== "undefined") {
            window.captchaInit = () => {
                console.log(window.grecaptcha)
            }
          } else {
            console.log('window not defined')
          }
/*
if (typeof window !== 'undefined') {
  window.vueRecaptchaApiLoaded = function () {
    recaptcha.setRecaptcha(window.grecaptcha);
  };
}
*/
    }

    protected submitForm() {
        console.log('form submitted');
    }
}
