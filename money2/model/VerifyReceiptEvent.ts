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

export default class VerifyReceiptEvent implements IModel {
    private contentName: string|null = null;
    private platform: string|null = null;
    private appleAppStoreVerifyReceiptEvent: Gs2Money2.AppleAppStoreVerifyReceiptEvent|null = null;
    private googlePlayVerifyReceiptEvent: Gs2Money2.GooglePlayVerifyReceiptEvent|null = null;
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
    public getAppleAppStoreVerifyReceiptEvent(): Gs2Money2.AppleAppStoreVerifyReceiptEvent|null {
        return this.appleAppStoreVerifyReceiptEvent;
    }
    public setAppleAppStoreVerifyReceiptEvent(appleAppStoreVerifyReceiptEvent: Gs2Money2.AppleAppStoreVerifyReceiptEvent|null) {
        this.appleAppStoreVerifyReceiptEvent = appleAppStoreVerifyReceiptEvent;
        return this;
    }
    public withAppleAppStoreVerifyReceiptEvent(appleAppStoreVerifyReceiptEvent: Gs2Money2.AppleAppStoreVerifyReceiptEvent|null): this {
        this.appleAppStoreVerifyReceiptEvent = appleAppStoreVerifyReceiptEvent;
        return this;
    }
    public getGooglePlayVerifyReceiptEvent(): Gs2Money2.GooglePlayVerifyReceiptEvent|null {
        return this.googlePlayVerifyReceiptEvent;
    }
    public setGooglePlayVerifyReceiptEvent(googlePlayVerifyReceiptEvent: Gs2Money2.GooglePlayVerifyReceiptEvent|null) {
        this.googlePlayVerifyReceiptEvent = googlePlayVerifyReceiptEvent;
        return this;
    }
    public withGooglePlayVerifyReceiptEvent(googlePlayVerifyReceiptEvent: Gs2Money2.GooglePlayVerifyReceiptEvent|null): this {
        this.googlePlayVerifyReceiptEvent = googlePlayVerifyReceiptEvent;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): VerifyReceiptEvent|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new VerifyReceiptEvent()
            .withContentName(data["contentName"])
            .withPlatform(data["platform"])
            .withAppleAppStoreVerifyReceiptEvent(Gs2Money2.AppleAppStoreVerifyReceiptEvent.fromDict(data["appleAppStoreVerifyReceiptEvent"]))
            .withGooglePlayVerifyReceiptEvent(Gs2Money2.GooglePlayVerifyReceiptEvent.fromDict(data["googlePlayVerifyReceiptEvent"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "contentName": this.getContentName(),
            "platform": this.getPlatform(),
            "appleAppStoreVerifyReceiptEvent": this.getAppleAppStoreVerifyReceiptEvent()?.toDict(),
            "googlePlayVerifyReceiptEvent": this.getGooglePlayVerifyReceiptEvent()?.toDict(),
        };
    }
}
