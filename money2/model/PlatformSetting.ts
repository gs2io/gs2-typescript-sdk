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
import AppleAppStoreSetting from './AppleAppStoreSetting';
import GooglePlaySetting from './GooglePlaySetting';
import FakeSetting from './FakeSetting';

export default class PlatformSetting implements IModel {
    private appleAppStore: Gs2Money2.AppleAppStoreSetting|null = null;
    private googlePlay: Gs2Money2.GooglePlaySetting|null = null;
    private fake: Gs2Money2.FakeSetting|null = null;
    public getAppleAppStore(): Gs2Money2.AppleAppStoreSetting|null {
        return this.appleAppStore;
    }
    public setAppleAppStore(appleAppStore: Gs2Money2.AppleAppStoreSetting|null) {
        this.appleAppStore = appleAppStore;
        return this;
    }
    public withAppleAppStore(appleAppStore: Gs2Money2.AppleAppStoreSetting|null): this {
        this.appleAppStore = appleAppStore;
        return this;
    }
    public getGooglePlay(): Gs2Money2.GooglePlaySetting|null {
        return this.googlePlay;
    }
    public setGooglePlay(googlePlay: Gs2Money2.GooglePlaySetting|null) {
        this.googlePlay = googlePlay;
        return this;
    }
    public withGooglePlay(googlePlay: Gs2Money2.GooglePlaySetting|null): this {
        this.googlePlay = googlePlay;
        return this;
    }
    public getFake(): Gs2Money2.FakeSetting|null {
        return this.fake;
    }
    public setFake(fake: Gs2Money2.FakeSetting|null) {
        this.fake = fake;
        return this;
    }
    public withFake(fake: Gs2Money2.FakeSetting|null): this {
        this.fake = fake;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): PlatformSetting|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new PlatformSetting()
            .withAppleAppStore(Gs2Money2.AppleAppStoreSetting.fromDict(data["appleAppStore"]))
            .withGooglePlay(Gs2Money2.GooglePlaySetting.fromDict(data["googlePlay"]))
            .withFake(Gs2Money2.FakeSetting.fromDict(data["fake"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "appleAppStore": this.getAppleAppStore()?.toDict(),
            "googlePlay": this.getGooglePlay()?.toDict(),
            "fake": this.getFake()?.toDict(),
        };
    }
}
