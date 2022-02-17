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
var UpdateReceivedByUserIdRequest = /** @class */ (function () {
    function UpdateReceivedByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.receivedGlobalMessageNames = null;
    }
    UpdateReceivedByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateReceivedByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateReceivedByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateReceivedByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateReceivedByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateReceivedByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateReceivedByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateReceivedByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateReceivedByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateReceivedByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    UpdateReceivedByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    UpdateReceivedByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    UpdateReceivedByUserIdRequest.prototype.getReceivedGlobalMessageNames = function () {
        return this.receivedGlobalMessageNames;
    };
    UpdateReceivedByUserIdRequest.prototype.setReceivedGlobalMessageNames = function (receivedGlobalMessageNames) {
        this.receivedGlobalMessageNames = receivedGlobalMessageNames;
        return this;
    };
    UpdateReceivedByUserIdRequest.prototype.withReceivedGlobalMessageNames = function (receivedGlobalMessageNames) {
        this.receivedGlobalMessageNames = receivedGlobalMessageNames;
        return this;
    };
    UpdateReceivedByUserIdRequest.fromDict = function (data) {
        return new UpdateReceivedByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withReceivedGlobalMessageNames(data.receivedGlobalMessageNames ?
            data.receivedGlobalMessageNames.map(function (item) {
                return item;
            }) : []);
    };
    UpdateReceivedByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "receivedGlobalMessageNames": this.getReceivedGlobalMessageNames() ?
                this.getReceivedGlobalMessageNames().map(function (item) {
                    return item;
                }) : [],
        };
    };
    return UpdateReceivedByUserIdRequest;
}());
export default UpdateReceivedByUserIdRequest;
//# sourceMappingURL=UpdateReceivedByUserIdRequest.js.map