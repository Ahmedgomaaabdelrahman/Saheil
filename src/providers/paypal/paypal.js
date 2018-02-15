var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
import { DomainProvider } from "../domain/domain";
import { CommonservicesProvider } from "../commonservices/commonservices";
/*
  Generated class for the PaypalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PaypalProvider = /** @class */ (function () {
    function PaypalProvider(common, url, http, payPal) {
        this.common = common;
        this.url = url;
        this.http = http;
        this.payPal = payPal;
        this.lang = DomainProvider.lang;
        console.log('Hello PaypalProvider Provider');
        // this.YOUR_PRODUCTION_CLIENT_ID='access_token$sandbox$hstrvszg9ny74q6p$dee384ac4fbe8f7220e2f958fe2f9824'
        // this.YOUR_PRODUCTION_CLIENT_ID='AZmlJfyMc3be5bK1eTWHC1eABR6ISz4FXRceZapDH_jsS45dStvJK-OAt41W86Rva5-2djxToRJlbhYr'
        //     this.YOUR_SANDBOX_CLIENT_ID='Ad_-KPP59lCak3egBg0a5b84eSKCtS3QY9arfZsuPLORzBafshQl5jJH0A9JSB2YjiXj6eSr6X7ERWHn'
    }
    // YOUR_PRODUCTION_CLIENT_ID
    // YOUR_SANDBOX_CLIENT_ID
    PaypalProvider.prototype.getKeys = function () {
        return this.http.get(this.url.url + '/api/paypal');
    };
    PaypalProvider.prototype.pay = function (member_id, amount, succes_msg, fail_msg, YOUR_PRODUCTION_CLIENT_ID, YOUR_SANDBOX_CLIENT_ID) {
        var _this = this;
        this.payPal.init({
            PayPalEnvironmentProduction: YOUR_PRODUCTION_CLIENT_ID,
            PayPalEnvironmentSandbox: YOUR_SANDBOX_CLIENT_ID
        }).then(function () {
            // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
            _this.payPal.prepareToRender('PayPalEnvironmentProduction', new PayPalConfiguration({})).then(function () {
                var payment = new PayPalPayment(amount, 'USD', 'Description', 'sale');
                _this.payPal.renderSinglePaymentUI(payment).then(function (res) {
                    console.log("Successfully paid", res);
                    // Successfully paid
                    _this.backendServerpay(member_id, amount).subscribe(function (res) {
                        console.log(res);
                        _this.common.presentToast(succes_msg);
                    });
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
                }, function (e) {
                    _this.common.presentToast(fail_msg);
                    console.log("Error or render dialog closed without being successful", e);
                    // Error or render dialog closed without being successful
                });
            }, function (Errorinconfiguration) {
                _this.common.presentToast(fail_msg);
                console.log('Error in configuration', Errorinconfiguration);
                // Error in configuration
            });
        }, function (Errorininitialization) {
            _this.common.presentToast(fail_msg);
            console.log(' Error in initialization, maybe PayPal isnt supported or something else', Errorininitialization);
            // Error in initialization, maybe PayPal isn't supported or something else
        });
    };
    PaypalProvider.prototype.backendServerpay = function (member_id, amount) {
        var my = {
            'member_id': amount,
            'amount': amount
        };
        //http://sahel-horse.com/api/credit
        return this.http.post(this.url.url + "api/credit", my);
    };
    PaypalProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [CommonservicesProvider, DomainProvider, HttpClient, PayPal])
    ], PaypalProvider);
    return PaypalProvider;
}());
export { PaypalProvider };
//# sourceMappingURL=paypal.js.map