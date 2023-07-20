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
var ReDrawBalanceParameterStatusByStampSheetRequest = /** @class */ (function () {
    function ReDrawBalanceParameterStatusByStampSheetRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.stampSheet = null;
        this.keyId = null;
    }
    ReDrawBalanceParameterStatusByStampSheetRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ReDrawBalanceParameterStatusByStampSheetRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ReDrawBalanceParameterStatusByStampSheetRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ReDrawBalanceParameterStatusByStampSheetRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ReDrawBalanceParameterStatusByStampSheetRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ReDrawBalanceParameterStatusByStampSheetRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ReDrawBalanceParameterStatusByStampSheetRequest.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    ReDrawBalanceParameterStatusByStampSheetRequest.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    ReDrawBalanceParameterStatusByStampSheetRequest.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    ReDrawBalanceParameterStatusByStampSheetRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    ReDrawBalanceParameterStatusByStampSheetRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    ReDrawBalanceParameterStatusByStampSheetRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    ReDrawBalanceParameterStatusByStampSheetRequest.fromDict = function (data) {
        return new ReDrawBalanceParameterStatusByStampSheetRequest()
            .withStampSheet(data["stampSheet"])
            .withKeyId(data["keyId"]);
    };
    ReDrawBalanceParameterStatusByStampSheetRequest.prototype.toDict = function () {
        return {
            "stampSheet": this.getStampSheet(),
            "keyId": this.getKeyId(),
        };
    };
    return ReDrawBalanceParameterStatusByStampSheetRequest;
}());
exports.default = ReDrawBalanceParameterStatusByStampSheetRequest;
//# sourceMappingURL=ReDrawBalanceParameterStatusByStampSheetRequest.js.map