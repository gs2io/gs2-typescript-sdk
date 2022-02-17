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
var DeleteCounterModelMasterRequest = /** @class */ (function () {
    function DeleteCounterModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.counterName = null;
    }
    DeleteCounterModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteCounterModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteCounterModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteCounterModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteCounterModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteCounterModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteCounterModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteCounterModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteCounterModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteCounterModelMasterRequest.prototype.getCounterName = function () {
        return this.counterName;
    };
    DeleteCounterModelMasterRequest.prototype.setCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    DeleteCounterModelMasterRequest.prototype.withCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    DeleteCounterModelMasterRequest.fromDict = function (data) {
        return new DeleteCounterModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withCounterName(data["counterName"]);
    };
    DeleteCounterModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "counterName": this.getCounterName(),
        };
    };
    return DeleteCounterModelMasterRequest;
}());
export default DeleteCounterModelMasterRequest;
//# sourceMappingURL=DeleteCounterModelMasterRequest.js.map