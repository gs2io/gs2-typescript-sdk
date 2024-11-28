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

import * as Gs2Inbox from '../../inbox/model'

export default class ScriptSetting implements IModel {
    private triggerScriptId: string|null = null;
    private doneTriggerTargetType: string|null = null;
    private doneTriggerScriptId: string|null = null;
    private doneTriggerQueueNamespaceId: string|null = null;
    public getTriggerScriptId(): string|null {
        return this.triggerScriptId;
    }
    public setTriggerScriptId(triggerScriptId: string|null) {
        this.triggerScriptId = triggerScriptId;
        return this;
    }
    public withTriggerScriptId(triggerScriptId: string|null): this {
        this.triggerScriptId = triggerScriptId;
        return this;
    }
    public getDoneTriggerTargetType(): string|null {
        return this.doneTriggerTargetType;
    }
    public setDoneTriggerTargetType(doneTriggerTargetType: string|null) {
        this.doneTriggerTargetType = doneTriggerTargetType;
        return this;
    }
    public withDoneTriggerTargetType(doneTriggerTargetType: string|null): this {
        this.doneTriggerTargetType = doneTriggerTargetType;
        return this;
    }
    public getDoneTriggerScriptId(): string|null {
        return this.doneTriggerScriptId;
    }
    public setDoneTriggerScriptId(doneTriggerScriptId: string|null) {
        this.doneTriggerScriptId = doneTriggerScriptId;
        return this;
    }
    public withDoneTriggerScriptId(doneTriggerScriptId: string|null): this {
        this.doneTriggerScriptId = doneTriggerScriptId;
        return this;
    }
    public getDoneTriggerQueueNamespaceId(): string|null {
        return this.doneTriggerQueueNamespaceId;
    }
    public setDoneTriggerQueueNamespaceId(doneTriggerQueueNamespaceId: string|null) {
        this.doneTriggerQueueNamespaceId = doneTriggerQueueNamespaceId;
        return this;
    }
    public withDoneTriggerQueueNamespaceId(doneTriggerQueueNamespaceId: string|null): this {
        this.doneTriggerQueueNamespaceId = doneTriggerQueueNamespaceId;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ScriptSetting|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ScriptSetting()
            .withTriggerScriptId(data["triggerScriptId"])
            .withDoneTriggerTargetType(data["doneTriggerTargetType"])
            .withDoneTriggerScriptId(data["doneTriggerScriptId"])
            .withDoneTriggerQueueNamespaceId(data["doneTriggerQueueNamespaceId"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "triggerScriptId": this.getTriggerScriptId(),
            "doneTriggerTargetType": this.getDoneTriggerTargetType(),
            "doneTriggerScriptId": this.getDoneTriggerScriptId(),
            "doneTriggerQueueNamespaceId": this.getDoneTriggerQueueNamespaceId(),
        };
    }
}
