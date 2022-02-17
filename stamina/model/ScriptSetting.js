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
var ScriptSetting = /** @class */ (function () {
    function ScriptSetting() {
        this.triggerScriptId = null;
        this.doneTriggerTargetType = null;
        this.doneTriggerScriptId = null;
        this.doneTriggerQueueNamespaceId = null;
    }
    ScriptSetting.prototype.getTriggerScriptId = function () {
        return this.triggerScriptId;
    };
    ScriptSetting.prototype.setTriggerScriptId = function (triggerScriptId) {
        this.triggerScriptId = triggerScriptId;
        return this;
    };
    ScriptSetting.prototype.withTriggerScriptId = function (triggerScriptId) {
        this.triggerScriptId = triggerScriptId;
        return this;
    };
    ScriptSetting.prototype.getDoneTriggerTargetType = function () {
        return this.doneTriggerTargetType;
    };
    ScriptSetting.prototype.setDoneTriggerTargetType = function (doneTriggerTargetType) {
        this.doneTriggerTargetType = doneTriggerTargetType;
        return this;
    };
    ScriptSetting.prototype.withDoneTriggerTargetType = function (doneTriggerTargetType) {
        this.doneTriggerTargetType = doneTriggerTargetType;
        return this;
    };
    ScriptSetting.prototype.getDoneTriggerScriptId = function () {
        return this.doneTriggerScriptId;
    };
    ScriptSetting.prototype.setDoneTriggerScriptId = function (doneTriggerScriptId) {
        this.doneTriggerScriptId = doneTriggerScriptId;
        return this;
    };
    ScriptSetting.prototype.withDoneTriggerScriptId = function (doneTriggerScriptId) {
        this.doneTriggerScriptId = doneTriggerScriptId;
        return this;
    };
    ScriptSetting.prototype.getDoneTriggerQueueNamespaceId = function () {
        return this.doneTriggerQueueNamespaceId;
    };
    ScriptSetting.prototype.setDoneTriggerQueueNamespaceId = function (doneTriggerQueueNamespaceId) {
        this.doneTriggerQueueNamespaceId = doneTriggerQueueNamespaceId;
        return this;
    };
    ScriptSetting.prototype.withDoneTriggerQueueNamespaceId = function (doneTriggerQueueNamespaceId) {
        this.doneTriggerQueueNamespaceId = doneTriggerQueueNamespaceId;
        return this;
    };
    ScriptSetting.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ScriptSetting()
            .withTriggerScriptId(data["triggerScriptId"])
            .withDoneTriggerTargetType(data["doneTriggerTargetType"])
            .withDoneTriggerScriptId(data["doneTriggerScriptId"])
            .withDoneTriggerQueueNamespaceId(data["doneTriggerQueueNamespaceId"]);
    };
    ScriptSetting.prototype.toDict = function () {
        return {
            "triggerScriptId": this.getTriggerScriptId(),
            "doneTriggerTargetType": this.getDoneTriggerTargetType(),
            "doneTriggerScriptId": this.getDoneTriggerScriptId(),
            "doneTriggerQueueNamespaceId": this.getDoneTriggerQueueNamespaceId(),
        };
    };
    return ScriptSetting;
}());
export default ScriptSetting;
//# sourceMappingURL=ScriptSetting.js.map