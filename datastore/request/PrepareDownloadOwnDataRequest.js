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
var PrepareDownloadOwnDataRequest = /** @class */ (function () {
    function PrepareDownloadOwnDataRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.dataObjectName = null;
    }
    PrepareDownloadOwnDataRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PrepareDownloadOwnDataRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PrepareDownloadOwnDataRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PrepareDownloadOwnDataRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PrepareDownloadOwnDataRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PrepareDownloadOwnDataRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PrepareDownloadOwnDataRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    PrepareDownloadOwnDataRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PrepareDownloadOwnDataRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PrepareDownloadOwnDataRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    PrepareDownloadOwnDataRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    PrepareDownloadOwnDataRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    PrepareDownloadOwnDataRequest.prototype.getDataObjectName = function () {
        return this.dataObjectName;
    };
    PrepareDownloadOwnDataRequest.prototype.setDataObjectName = function (dataObjectName) {
        this.dataObjectName = dataObjectName;
        return this;
    };
    PrepareDownloadOwnDataRequest.prototype.withDataObjectName = function (dataObjectName) {
        this.dataObjectName = dataObjectName;
        return this;
    };
    PrepareDownloadOwnDataRequest.fromDict = function (data) {
        return new PrepareDownloadOwnDataRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withDataObjectName(data["dataObjectName"]);
    };
    PrepareDownloadOwnDataRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "dataObjectName": this.getDataObjectName(),
        };
    };
    return PrepareDownloadOwnDataRequest;
}());
export default PrepareDownloadOwnDataRequest;
//# sourceMappingURL=PrepareDownloadOwnDataRequest.js.map