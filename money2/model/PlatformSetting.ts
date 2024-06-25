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
import AppleAppStoreSetting from './AppleAppStoreSetting';
import GooglePlaySetting from './GooglePlaySetting';
import FakeSetting from './FakeSetting';

export default class PlatformSetting implements IModel {
    private appleAppStore: AppleAppStoreSetting|null = null;
    private googlePlay: GooglePlaySetting|null = null;
    private fake: FakeSetting|null = null;
    public getAppleAppStore(): AppleAppStoreSetting|null {
        return this.appleAppStore;
    }
    public setAppleAppStore(appleAppStore: AppleAppStoreSetting|null) {
        this.appleAppStore = appleAppStore;
        return this;
    }
    public withAppleAppStore(appleAppStore: AppleAppStoreSetting|null): this {
        this.appleAppStore = appleAppStore;
        return this;
    }
    public getGooglePlay(): GooglePlaySetting|null {
        return this.googlePlay;
    }
    public setGooglePlay(googlePlay: GooglePlaySetting|null) {
        this.googlePlay = googlePlay;
        return this;
    }
    public withGooglePlay(googlePlay: GooglePlaySetting|null): this {
        this.googlePlay = googlePlay;
        return this;
    }
    public getFake(): FakeSetting|null {
        return this.fake;
    }
    public setFake(fake: FakeSetting|null) {
        this.fake = fake;
        return this;
    }
    public withFake(fake: FakeSetting|null): this {
        this.fake = fake;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): PlatformSetting|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new PlatformSetting()
            .withAppleAppStore(AppleAppStoreSetting.fromDict(data["appleAppStore"]))
            .withGooglePlay(GooglePlaySetting.fromDict(data["googlePlay"]))
            .withFake(FakeSetting.fromDict(data["fake"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "appleAppStore": this.getAppleAppStore()?.toDict(),
            "googlePlay": this.getGooglePlay()?.toDict(),
            "fake": this.getFake()?.toDict(),
        };
    }
}
