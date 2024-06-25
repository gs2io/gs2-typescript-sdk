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
import AppleAppStoreVerifyReceiptEvent from './AppleAppStoreVerifyReceiptEvent';
import GooglePlayVerifyReceiptEvent from './GooglePlayVerifyReceiptEvent';

export default class VerifyReceiptEvent implements IModel {
    private contentName: string|null = null;
    private platform: string|null = null;
    private appleAppStoreVerifyReceiptEvent: AppleAppStoreVerifyReceiptEvent|null = null;
    private googlePlayVerifyReceiptEvent: GooglePlayVerifyReceiptEvent|null = null;
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
    public getAppleAppStoreVerifyReceiptEvent(): AppleAppStoreVerifyReceiptEvent|null {
        return this.appleAppStoreVerifyReceiptEvent;
    }
    public setAppleAppStoreVerifyReceiptEvent(appleAppStoreVerifyReceiptEvent: AppleAppStoreVerifyReceiptEvent|null) {
        this.appleAppStoreVerifyReceiptEvent = appleAppStoreVerifyReceiptEvent;
        return this;
    }
    public withAppleAppStoreVerifyReceiptEvent(appleAppStoreVerifyReceiptEvent: AppleAppStoreVerifyReceiptEvent|null): this {
        this.appleAppStoreVerifyReceiptEvent = appleAppStoreVerifyReceiptEvent;
        return this;
    }
    public getGooglePlayVerifyReceiptEvent(): GooglePlayVerifyReceiptEvent|null {
        return this.googlePlayVerifyReceiptEvent;
    }
    public setGooglePlayVerifyReceiptEvent(googlePlayVerifyReceiptEvent: GooglePlayVerifyReceiptEvent|null) {
        this.googlePlayVerifyReceiptEvent = googlePlayVerifyReceiptEvent;
        return this;
    }
    public withGooglePlayVerifyReceiptEvent(googlePlayVerifyReceiptEvent: GooglePlayVerifyReceiptEvent|null): this {
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
            .withAppleAppStoreVerifyReceiptEvent(AppleAppStoreVerifyReceiptEvent.fromDict(data["appleAppStoreVerifyReceiptEvent"]))
            .withGooglePlayVerifyReceiptEvent(GooglePlayVerifyReceiptEvent.fromDict(data["googlePlayVerifyReceiptEvent"]));
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
