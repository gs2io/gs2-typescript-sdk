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
var DeleteRandomShowcaseMasterRequest = /** @class */ (function () {
    function DeleteRandomShowcaseMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.showcaseName = null;
    }
    DeleteRandomShowcaseMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteRandomShowcaseMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteRandomShowcaseMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteRandomShowcaseMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteRandomShowcaseMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteRandomShowcaseMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteRandomShowcaseMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteRandomShowcaseMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteRandomShowcaseMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteRandomShowcaseMasterRequest.prototype.getShowcaseName = function () {
        return this.showcaseName;
    };
    DeleteRandomShowcaseMasterRequest.prototype.setShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    DeleteRandomShowcaseMasterRequest.prototype.withShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    DeleteRandomShowcaseMasterRequest.fromDict = function (data) {
        return new DeleteRandomShowcaseMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withShowcaseName(data["showcaseName"]);
    };
    DeleteRandomShowcaseMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "showcaseName": this.getShowcaseName(),
        };
    };
    return DeleteRandomShowcaseMasterRequest;
}());
exports.default = DeleteRandomShowcaseMasterRequest;
//# sourceMappingURL=DeleteRandomShowcaseMasterRequest.js.map