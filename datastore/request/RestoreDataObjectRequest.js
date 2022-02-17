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
var RestoreDataObjectRequest = /** @class */ (function () {
    function RestoreDataObjectRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.dataObjectId = null;
    }
    RestoreDataObjectRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    RestoreDataObjectRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RestoreDataObjectRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RestoreDataObjectRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    RestoreDataObjectRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RestoreDataObjectRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RestoreDataObjectRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    RestoreDataObjectRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RestoreDataObjectRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RestoreDataObjectRequest.prototype.getDataObjectId = function () {
        return this.dataObjectId;
    };
    RestoreDataObjectRequest.prototype.setDataObjectId = function (dataObjectId) {
        this.dataObjectId = dataObjectId;
        return this;
    };
    RestoreDataObjectRequest.prototype.withDataObjectId = function (dataObjectId) {
        this.dataObjectId = dataObjectId;
        return this;
    };
    RestoreDataObjectRequest.fromDict = function (data) {
        return new RestoreDataObjectRequest()
            .withNamespaceName(data["namespaceName"])
            .withDataObjectId(data["dataObjectId"]);
    };
    RestoreDataObjectRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "dataObjectId": this.getDataObjectId(),
        };
    };
    return RestoreDataObjectRequest;
}());
export default RestoreDataObjectRequest;
//# sourceMappingURL=RestoreDataObjectRequest.js.map