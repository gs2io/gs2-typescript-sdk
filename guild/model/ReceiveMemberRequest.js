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
var ReceiveMemberRequest = /** @class */ (function () {
    function ReceiveMemberRequest() {
        this.userId = null;
        this.targetGuildName = null;
    }
    ReceiveMemberRequest.isValid = function (grn) {
        return true;
    };
    ReceiveMemberRequest.createGrn = function () {
        return grnFormat;
    };
    ReceiveMemberRequest.prototype.getUserId = function () {
        return this.userId;
    };
    ReceiveMemberRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ReceiveMemberRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ReceiveMemberRequest.prototype.getTargetGuildName = function () {
        return this.targetGuildName;
    };
    ReceiveMemberRequest.prototype.setTargetGuildName = function (targetGuildName) {
        this.targetGuildName = targetGuildName;
        return this;
    };
    ReceiveMemberRequest.prototype.withTargetGuildName = function (targetGuildName) {
        this.targetGuildName = targetGuildName;
        return this;
    };
    ReceiveMemberRequest.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ReceiveMemberRequest()
            .withUserId(data["userId"])
            .withTargetGuildName(data["targetGuildName"]);
    };
    ReceiveMemberRequest.prototype.toDict = function () {
        return {
            "userId": this.getUserId(),
            "targetGuildName": this.getTargetGuildName(),
        };
    };
    return ReceiveMemberRequest;
}());
exports.default = ReceiveMemberRequest;
//# sourceMappingURL=ReceiveMemberRequest.js.map