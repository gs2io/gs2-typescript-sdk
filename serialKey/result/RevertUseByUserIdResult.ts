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

import IResult from '../../core/interface/IResult';

import * as Gs2SerialKey from '../model'

export default class RevertUseByUserIdResult implements IResult {
    private item: Gs2SerialKey.SerialKey|null = null;
    private campaignModel: Gs2SerialKey.CampaignModel|null = null;

    public getItem(): Gs2SerialKey.SerialKey|null {
        return this.item;
    }

    public setItem(item: Gs2SerialKey.SerialKey|null) {
        this.item = item;
        return this;
    }

    public withItem(item: Gs2SerialKey.SerialKey|null): this {
        this.item = item;
        return this;
    }

    public getCampaignModel(): Gs2SerialKey.CampaignModel|null {
        return this.campaignModel;
    }

    public setCampaignModel(campaignModel: Gs2SerialKey.CampaignModel|null) {
        this.campaignModel = campaignModel;
        return this;
    }

    public withCampaignModel(campaignModel: Gs2SerialKey.CampaignModel|null): this {
        this.campaignModel = campaignModel;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): RevertUseByUserIdResult {
        return new RevertUseByUserIdResult()
            .withItem(Gs2SerialKey.SerialKey.fromDict(data["item"]))
            .withCampaignModel(Gs2SerialKey.CampaignModel.fromDict(data["campaignModel"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "item": this.getItem()?.toDict(),
            "campaignModel": this.getCampaignModel()?.toDict(),
        };
    }
}
