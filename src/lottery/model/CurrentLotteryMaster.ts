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

export default class CurrentLotteryMaster implements IModel {
    private namespaceId: string|null = null;
    private settings: string|null = null;

    public getNamespaceId(): string|null {
        return this.namespaceId;
    }

    public setNamespaceId(namespaceId: string|null) {
        this.namespaceId = namespaceId;
        return this;
    }

    public withNamespaceId(namespaceId: string|null): this {
        this.namespaceId = namespaceId;
        return this;
    }

    public getSettings(): string|null {
        return this.settings;
    }

    public setSettings(settings: string|null) {
        this.settings = settings;
        return this;
    }

    public withSettings(settings: string|null): this {
        this.settings = settings;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): CurrentLotteryMaster|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new CurrentLotteryMaster()
            .withNamespaceId(data["namespaceId"])
            .withSettings(data["settings"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceId": this.getNamespaceId(),
            "settings": this.getSettings(),
        };
    }
}
