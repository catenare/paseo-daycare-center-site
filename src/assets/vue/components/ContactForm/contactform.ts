import axios from "axios";
import Fingerprint2 from "fingerprintjs2";
import Validator from 'vee-validate';
import Vue from "vue";
import Component from "vue-class-component";

@Component({ props: {
            captcha: {
                type: Promise,
            },
        },
    })
export default class ContactForm extends Vue {
    protected captcha: any;
    protected captchaResponse: string;
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

        this.captcha.then( (captcha) => captcha.render("recaptcha", {
            callback: this.validate_captcha,
            sitekey: this.rcaptSigKey,

        }));
    }

    protected validate_captcha(response) {
        this.captchaResponse = response;
        this.isSubmitDisabled = false;
    }

    protected validateBeforeSubmit() {
        this.$validator.validateAll().then((result) => {
            if (result) {
                console.log("form validated");
                // hide the form
                // show the spinning bottles
                // submit form data to wordpress
                // validate data and return result
                // return the result.
                return;
            }
            console.log("errors in form");
        });
    }
}
