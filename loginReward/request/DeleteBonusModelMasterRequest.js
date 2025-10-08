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
var DeleteBonusModelMasterRequest = /** @class */ (function () {
    function DeleteBonusModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.bonusModelName = null;
    }
    DeleteBonusModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteBonusModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteBonusModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteBonusModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteBonusModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteBonusModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteBonusModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteBonusModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteBonusModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteBonusModelMasterRequest.prototype.getBonusModelName = function () {
        return this.bonusModelName;
    };
    DeleteBonusModelMasterRequest.prototype.setBonusModelName = function (bonusModelName) {
        this.bonusModelName = bonusModelName;
        return this;
    };
    DeleteBonusModelMasterRequest.prototype.withBonusModelName = function (bonusModelName) {
        this.bonusModelName = bonusModelName;
        return this;
    };
    DeleteBonusModelMasterRequest.fromDict = function (data) {
        return new DeleteBonusModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withBonusModelName(data["bonusModelName"]);
    };
    DeleteBonusModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "bonusModelName": this.getBonusModelName(),
        };
    };
    return DeleteBonusModelMasterRequest;
}());
exports.default = DeleteBonusModelMasterRequest;
//# sourceMappingURL=DeleteBonusModelMasterRequest.js.map