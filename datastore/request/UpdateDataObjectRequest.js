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
var UpdateDataObjectRequest = /** @class */ (function () {
    function UpdateDataObjectRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.dataObjectName = null;
        this.accessToken = null;
        this.scope = null;
        this.allowUserIds = null;
    }
    UpdateDataObjectRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateDataObjectRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateDataObjectRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateDataObjectRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateDataObjectRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateDataObjectRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateDataObjectRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateDataObjectRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateDataObjectRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateDataObjectRequest.prototype.getDataObjectName = function () {
        return this.dataObjectName;
    };
    UpdateDataObjectRequest.prototype.setDataObjectName = function (dataObjectName) {
        this.dataObjectName = dataObjectName;
        return this;
    };
    UpdateDataObjectRequest.prototype.withDataObjectName = function (dataObjectName) {
        this.dataObjectName = dataObjectName;
        return this;
    };
    UpdateDataObjectRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    UpdateDataObjectRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    UpdateDataObjectRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    UpdateDataObjectRequest.prototype.getScope = function () {
        return this.scope;
    };
    UpdateDataObjectRequest.prototype.setScope = function (scope) {
        this.scope = scope;
        return this;
    };
    UpdateDataObjectRequest.prototype.withScope = function (scope) {
        this.scope = scope;
        return this;
    };
    UpdateDataObjectRequest.prototype.getAllowUserIds = function () {
        return this.allowUserIds;
    };
    UpdateDataObjectRequest.prototype.setAllowUserIds = function (allowUserIds) {
        this.allowUserIds = allowUserIds;
        return this;
    };
    UpdateDataObjectRequest.prototype.withAllowUserIds = function (allowUserIds) {
        this.allowUserIds = allowUserIds;
        return this;
    };
    UpdateDataObjectRequest.fromDict = function (data) {
        return new UpdateDataObjectRequest()
            .withNamespaceName(data["namespaceName"])
            .withDataObjectName(data["dataObjectName"])
            .withAccessToken(data["accessToken"])
            .withScope(data["scope"])
            .withAllowUserIds(data.allowUserIds ?
            data.allowUserIds.map(function (item) {
                return item;
            }) : []);
    };
    UpdateDataObjectRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "dataObjectName": this.getDataObjectName(),
            "accessToken": this.getAccessToken(),
            "scope": this.getScope(),
            "allowUserIds": this.getAllowUserIds() ?
                this.getAllowUserIds().map(function (item) {
                    return item;
                }) : [],
        };
    };
    return UpdateDataObjectRequest;
}());
export default UpdateDataObjectRequest;
//# sourceMappingURL=UpdateDataObjectRequest.js.map