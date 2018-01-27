import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
import {DomainProvider} from "../domain/domain";
import {CommonservicesProvider} from "../commonservices/commonservices";

/*
  Generated class for the PaypalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PaypalProvider {
    lang: any



    constructor(public common:CommonservicesProvider,public url: DomainProvider, public http: HttpClient ,private payPal: PayPal) {
      this.lang = DomainProvider.lang;

        console.log('Hello PaypalProvider Provider');
    // this.YOUR_PRODUCTION_CLIENT_ID='access_token$sandbox$hstrvszg9ny74q6p$dee384ac4fbe8f7220e2f958fe2f9824'
    // this.YOUR_PRODUCTION_CLIENT_ID='AZmlJfyMc3be5bK1eTWHC1eABR6ISz4FXRceZapDH_jsS45dStvJK-OAt41W86Rva5-2djxToRJlbhYr'
    //     this.YOUR_SANDBOX_CLIENT_ID='Ad_-KPP59lCak3egBg0a5b84eSKCtS3QY9arfZsuPLORzBafshQl5jJH0A9JSB2YjiXj6eSr6X7ERWHn'
  }
    // YOUR_PRODUCTION_CLIENT_ID
    // YOUR_SANDBOX_CLIENT_ID
  getKeys(){
    return this.http.get(this.url.url+'/api/paypal');
  }
pay(member_id,amount,succes_msg,fail_msg,YOUR_PRODUCTION_CLIENT_ID,YOUR_SANDBOX_CLIENT_ID){

    this.payPal.init({
        PayPalEnvironmentProduction: YOUR_PRODUCTION_CLIENT_ID,
        PayPalEnvironmentSandbox: YOUR_SANDBOX_CLIENT_ID
    }).then(() => {
        // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
        this.payPal.prepareToRender('PayPalEnvironmentProduction', new PayPalConfiguration({
            // Only needed if you get an "Internal Service Error" after PayPal login!
            //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
        })).then(() => {
            let payment = new PayPalPayment(amount, 'USD', 'Description', 'sale');
            this.payPal.renderSinglePaymentUI(payment).then((res) => {
              console.log("Successfully paid",res)
                // Successfully paid
this.backendServerpay(member_id,amount).subscribe(res=>{
    console.log(res)
    this.common.presentToast(succes_msg)
})
                // Example sandbox response
                //
                // {
                //   "client": {
                //     "environment": "sandbox",
                //     "product_name": "PayPal iOS SDK",
                //     "paypal_sdk_version": "2.16.0",
                //     "platform": "iOS"
                //   },
                //   "response_type": "payment",
                //   "response": {
                //     "id": "PAY-1AB23456CD789012EF34GHIJ",
                //     "state": "approved",
                //     "create_time": "2016-10-03T13:33:33Z",
                //     "intent": "sale"
                //   }
                // }
            }, (e) => {
                this.common.presentToast(fail_msg)

                console.log("Error or render dialog closed without being successful",e)

                // Error or render dialog closed without being successful
            });
        }, (Errorinconfiguration) => {
            this.common.presentToast(fail_msg)

            console.log('Error in configuration',Errorinconfiguration)
            // Error in configuration
        });
    }, (Errorininitialization) => {
        this.common.presentToast(fail_msg)

        console.log(' Error in initialization, maybe PayPal isnt supported or something else',Errorininitialization)

        // Error in initialization, maybe PayPal isn't supported or something else
    });
}

backendServerpay(member_id,amount){
    let my={
        'member_id':amount,
        'amount':amount
    }
    //http://sahel-horse.com/api/credit
    return this.http.post(this.url.url+"api/credit",my)

}
}
