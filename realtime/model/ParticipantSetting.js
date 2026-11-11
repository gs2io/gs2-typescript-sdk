"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var ParticipantSetting = /** @class */ (function () {
    function ParticipantSetting() {
        this.userId = null;
        this.scriptId = null;
    }
    ParticipantSetting.prototype.getUserId = function () {
        return this.userId;
    };
    ParticipantSetting.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ParticipantSetting.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ParticipantSetting.prototype.getScriptId = function () {
        return this.scriptId;
    };
    ParticipantSetting.prototype.setScriptId = function (scriptId) {
        this.scriptId = scriptId;
        return this;
    };
    ParticipantSetting.prototype.withScriptId = function (scriptId) {
        this.scriptId = scriptId;
        return this;
    };
    ParticipantSetting.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ParticipantSetting()
            .withUserId(data["userId"])
            .withScriptId(data["scriptId"]);
    };
    ParticipantSetting.prototype.toDict = function () {
        return {
            "userId": this.getUserId(),
            "scriptId": this.getScriptId(),
        };
    };
    return ParticipantSetting;
}());
exports.default = ParticipantSetting;
//# sourceMappingURL=ParticipantSetting.js.map