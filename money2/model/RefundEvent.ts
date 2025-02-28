/*
Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
Reserved.

Licensed under the Apache License, Version 2.0 (the "License").
You may not use this file except in compliance with the License.
A copy of the License is located at

 http://www.apache.org/licenses/LICENSE-2.0

or in the "license" file accompanying this file. This file is distributed
on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied. See the License for the specific language governing
permissions and limitations under the License.
 */

import IModel from '../../core/interface/IModel';

import * as Gs2Money2 from '../../money2/model'
import AppleAppStoreVerifyReceiptEvent from './AppleAppStoreVerifyReceiptEvent';
import GooglePlayVerifyReceiptEvent from './GooglePlayVerifyReceiptEvent';

export default class RefundEvent implements IModel {
    private contentName: string|null = null;
    private platform: string|null = null;
    private appleAppStoreRefundEvent: Gs2Money2.AppleAppStoreVerifyReceiptEvent|null = null;
    private googlePlayRefundEvent: Gs2Money2.GooglePlayVerifyReceiptEvent|null = null;
    public getContentName(): string|null {
        return this.contentName;
    }
    public setContentName(contentName: string|null) {
        this.contentName = contentName;
        return this;
    }
    public withContentName(contentName: string|null): this {
        this.contentName = contentName;
        return this;
    }
    public getPlatform(): string|null {
        return this.platform;
    }
    public setPlatform(platform: string|null) {
        this.platform = platform;
        return this;
    }
    public withPlatform(platform: string|null): this {
        this.platform = platform;
        return this;
    }
    public getAppleAppStoreRefundEvent(): Gs2Money2.AppleAppStoreVerifyReceiptEvent|null {
        return this.appleAppStoreRefundEvent;
    }
    public setAppleAppStoreRefundEvent(appleAppStoreRefundEvent: Gs2Money2.AppleAppStoreVerifyReceiptEvent|null) {
        this.appleAppStoreRefundEvent = appleAppStoreRefundEvent;
        return this;
    }
    public withAppleAppStoreRefundEvent(appleAppStoreRefundEvent: Gs2Money2.AppleAppStoreVerifyReceiptEvent|null): this {
        this.appleAppStoreRefundEvent = appleAppStoreRefundEvent;
        return this;
    }
    public getGooglePlayRefundEvent(): Gs2Money2.GooglePlayVerifyReceiptEvent|null {
        return this.googlePlayRefundEvent;
    }
    public setGooglePlayRefundEvent(googlePlayRefundEvent: Gs2Money2.GooglePlayVerifyReceiptEvent|null) {
        this.googlePlayRefundEvent = googlePlayRefundEvent;
        return this;
    }
    public withGooglePlayRefundEvent(googlePlayRefundEvent: Gs2Money2.GooglePlayVerifyReceiptEvent|null): this {
        this.googlePlayRefundEvent = googlePlayRefundEvent;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): RefundEvent|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new RefundEvent()
            .withContentName(data["contentName"])
            .withPlatform(data["platform"])
            .withAppleAppStoreRefundEvent(Gs2Money2.AppleAppStoreVerifyReceiptEvent.fromDict(data["appleAppStoreRefundEvent"]))
            .withGooglePlayRefundEvent(Gs2Money2.GooglePlayVerifyReceiptEvent.fromDict(data["googlePlayRefundEvent"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "contentName": this.getContentName(),
            "platform": this.getPlatform(),
            "appleAppStoreRefundEvent": this.getAppleAppStoreRefundEvent()?.toDict(),
            "googlePlayRefundEvent": this.getGooglePlayRefundEvent()?.toDict(),
        };
    }
}
