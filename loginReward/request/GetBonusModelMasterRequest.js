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
var GetBonusModelMasterRequest = /** @class */ (function () {
    function GetBonusModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.bonusModelName = null;
    }
    GetBonusModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetBonusModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetBonusModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetBonusModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetBonusModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetBonusModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetBonusModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetBonusModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetBonusModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetBonusModelMasterRequest.prototype.getBonusModelName = function () {
        return this.bonusModelName;
    };
    GetBonusModelMasterRequest.prototype.setBonusModelName = function (bonusModelName) {
        this.bonusModelName = bonusModelName;
        return this;
    };
    GetBonusModelMasterRequest.prototype.withBonusModelName = function (bonusModelName) {
        this.bonusModelName = bonusModelName;
        return this;
    };
    GetBonusModelMasterRequest.fromDict = function (data) {
        return new GetBonusModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withBonusModelName(data["bonusModelName"]);
    };
    GetBonusModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "bonusModelName": this.getBonusModelName(),
        };
    };
    return GetBonusModelMasterRequest;
}());
exports.default = GetBonusModelMasterRequest;
//# sourceMappingURL=GetBonusModelMasterRequest.js.map