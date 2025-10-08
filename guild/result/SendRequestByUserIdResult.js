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
var tslib_1 = require("tslib");
var Gs2Guild = tslib_1.__importStar(require("../model"));
var SendRequestByUserIdResult = /** @class */ (function () {
    function SendRequestByUserIdResult() {
        this.item = null;
        this.sendMemberRequest = null;
    }
    SendRequestByUserIdResult.prototype.getItem = function () {
        return this.item;
    };
    SendRequestByUserIdResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    SendRequestByUserIdResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    SendRequestByUserIdResult.prototype.getSendMemberRequest = function () {
        return this.sendMemberRequest;
    };
    SendRequestByUserIdResult.prototype.setSendMemberRequest = function (sendMemberRequest) {
        this.sendMemberRequest = sendMemberRequest;
        return this;
    };
    SendRequestByUserIdResult.prototype.withSendMemberRequest = function (sendMemberRequest) {
        this.sendMemberRequest = sendMemberRequest;
        return this;
    };
    SendRequestByUserIdResult.fromDict = function (data) {
        return new SendRequestByUserIdResult()
            .withItem(Gs2Guild.Guild.fromDict(data["item"]))
            .withSendMemberRequest(Gs2Guild.SendMemberRequest.fromDict(data["sendMemberRequest"]));
    };
    SendRequestByUserIdResult.prototype.toDict = function () {
        var _a, _b;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "sendMemberRequest": (_b = this.getSendMemberRequest()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return SendRequestByUserIdResult;
}());
exports.default = SendRequestByUserIdResult;
//# sourceMappingURL=SendRequestByUserIdResult.js.map