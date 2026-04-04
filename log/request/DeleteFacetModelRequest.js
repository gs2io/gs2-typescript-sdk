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
var DeleteFacetModelRequest = /** @class */ (function () {
    function DeleteFacetModelRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.field = null;
    }
    DeleteFacetModelRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteFacetModelRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteFacetModelRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteFacetModelRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteFacetModelRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteFacetModelRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteFacetModelRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteFacetModelRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteFacetModelRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteFacetModelRequest.prototype.getField = function () {
        return this.field;
    };
    DeleteFacetModelRequest.prototype.setField = function (field) {
        this.field = field;
        return this;
    };
    DeleteFacetModelRequest.prototype.withField = function (field) {
        this.field = field;
        return this;
    };
    DeleteFacetModelRequest.fromDict = function (data) {
        return new DeleteFacetModelRequest()
            .withNamespaceName(data["namespaceName"])
            .withField(data["field"]);
    };
    DeleteFacetModelRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "field": this.getField(),
        };
    };
    return DeleteFacetModelRequest;
}());
exports.default = DeleteFacetModelRequest;
//# sourceMappingURL=DeleteFacetModelRequest.js.map