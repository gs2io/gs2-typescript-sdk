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
var GetFacetModelRequest = /** @class */ (function () {
    function GetFacetModelRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.field = null;
    }
    GetFacetModelRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetFacetModelRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetFacetModelRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetFacetModelRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetFacetModelRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetFacetModelRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetFacetModelRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetFacetModelRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetFacetModelRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetFacetModelRequest.prototype.getField = function () {
        return this.field;
    };
    GetFacetModelRequest.prototype.setField = function (field) {
        this.field = field;
        return this;
    };
    GetFacetModelRequest.prototype.withField = function (field) {
        this.field = field;
        return this;
    };
    GetFacetModelRequest.fromDict = function (data) {
        return new GetFacetModelRequest()
            .withNamespaceName(data["namespaceName"])
            .withField(data["field"]);
    };
    GetFacetModelRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "field": this.getField(),
        };
    };
    return GetFacetModelRequest;
}());
exports.default = GetFacetModelRequest;
//# sourceMappingURL=GetFacetModelRequest.js.map