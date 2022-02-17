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
var DeleteFormRequest = /** @class */ (function () {
    function DeleteFormRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.moldName = null;
        this.index = null;
    }
    DeleteFormRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteFormRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteFormRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteFormRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteFormRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteFormRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteFormRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteFormRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteFormRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteFormRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DeleteFormRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DeleteFormRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DeleteFormRequest.prototype.getMoldName = function () {
        return this.moldName;
    };
    DeleteFormRequest.prototype.setMoldName = function (moldName) {
        this.moldName = moldName;
        return this;
    };
    DeleteFormRequest.prototype.withMoldName = function (moldName) {
        this.moldName = moldName;
        return this;
    };
    DeleteFormRequest.prototype.getIndex = function () {
        return this.index;
    };
    DeleteFormRequest.prototype.setIndex = function (index) {
        this.index = index;
        return this;
    };
    DeleteFormRequest.prototype.withIndex = function (index) {
        this.index = index;
        return this;
    };
    DeleteFormRequest.fromDict = function (data) {
        return new DeleteFormRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withMoldName(data["moldName"])
            .withIndex(data["index"]);
    };
    DeleteFormRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "moldName": this.getMoldName(),
            "index": this.getIndex(),
        };
    };
    return DeleteFormRequest;
}());
export default DeleteFormRequest;
//# sourceMappingURL=DeleteFormRequest.js.map