import axios from "axios";
import Fingerprint2 from "fingerprintjs2";
import Validator from "vee-validate";
import Vue from "vue";
import Component from "vue-class-component";
import {mask} from "vue-the-mask";
import {TheMask} from "vue-the-mask";
@Component(
    {
        components: {TheMask},
        directives: {mask},
        props:
        {
            captcha: {
                type: Promise,
            },
            url: {
                type: String,
            },
        },
    })
export default class ContactForm extends Vue {
    protected url: string;
    protected captcha: Promise<any>;
    protected captchaResponse: string = null;
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
    protected hideLoader: boolean = true;
    protected hideForm: boolean = false;
    protected hideMessage: boolean = true;
    protected resultMessage: object = null;

    protected mounted() {
        new Fingerprint2().get( (result, components) => {
            this.fingerprint = result;
            this.fingerprintComponents = components;
          });

        axios.get(this.url)
             .then( (response) => {
                 console.log(response);
             })
             .catch( (error) => {
                 console.log(error);
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
                this.hideLoader = false;
                this.hideForm = !this.hideLoader;
                axios.post(this.url, {
                    captcha: this.captchaResponse,
                    email: this.email,
                    fingerprint: this.fingerprint,
                    fullname: this.fullname,
                    message: this.message,
                    telephone: this.telephone,
                           })
                     .then( (response) => {
                         this.hideLoader = true;
                         this.hideMessage = !this.hideLoader;
                         this.resultMessage = response.data;
                         console.log(response);
                })
                    .catch( (response) => {
                        this.hideLoader = true;
                        this.hideMessage = !this.hideLoader;
                        console.log(response);
                    });

                // setTimeout(() => {
                //     console.log("hello timer");
                //     this.hideLoader = true;
                //     this.hideMessage = !this.hideLoader;
                // }, 1000);
                // submit form data to wordpress
                // validate data and return result
                // return the result.

                return;
            }
            console.log("errors in form");
        });
    }
}
