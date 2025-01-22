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
var grnFormat = "";
var SendMemberRequest = /** @class */ (function () {
    function SendMemberRequest() {
        this.userId = null;
        this.targetGuildName = null;
        this.metadata = null;
    }
    SendMemberRequest.isValid = function (grn) {
        return true;
    };
    SendMemberRequest.createGrn = function () {
        return grnFormat;
    };
    SendMemberRequest.prototype.getUserId = function () {
        return this.userId;
    };
    SendMemberRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SendMemberRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SendMemberRequest.prototype.getTargetGuildName = function () {
        return this.targetGuildName;
    };
    SendMemberRequest.prototype.setTargetGuildName = function (targetGuildName) {
        this.targetGuildName = targetGuildName;
        return this;
    };
    SendMemberRequest.prototype.withTargetGuildName = function (targetGuildName) {
        this.targetGuildName = targetGuildName;
        return this;
    };
    SendMemberRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    SendMemberRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    SendMemberRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    SendMemberRequest.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new SendMemberRequest()
            .withUserId(data["userId"])
            .withTargetGuildName(data["targetGuildName"])
            .withMetadata(data["metadata"]);
    };
    SendMemberRequest.prototype.toDict = function () {
        return {
            "userId": this.getUserId(),
            "targetGuildName": this.getTargetGuildName(),
            "metadata": this.getMetadata(),
        };
    };
    return SendMemberRequest;
}());
exports.default = SendMemberRequest;
//# sourceMappingURL=SendMemberRequest.js.map