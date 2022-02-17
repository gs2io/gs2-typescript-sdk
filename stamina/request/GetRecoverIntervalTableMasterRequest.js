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
var GetRecoverIntervalTableMasterRequest = /** @class */ (function () {
    function GetRecoverIntervalTableMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.recoverIntervalTableName = null;
    }
    GetRecoverIntervalTableMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetRecoverIntervalTableMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetRecoverIntervalTableMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetRecoverIntervalTableMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetRecoverIntervalTableMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetRecoverIntervalTableMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetRecoverIntervalTableMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetRecoverIntervalTableMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetRecoverIntervalTableMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetRecoverIntervalTableMasterRequest.prototype.getRecoverIntervalTableName = function () {
        return this.recoverIntervalTableName;
    };
    GetRecoverIntervalTableMasterRequest.prototype.setRecoverIntervalTableName = function (recoverIntervalTableName) {
        this.recoverIntervalTableName = recoverIntervalTableName;
        return this;
    };
    GetRecoverIntervalTableMasterRequest.prototype.withRecoverIntervalTableName = function (recoverIntervalTableName) {
        this.recoverIntervalTableName = recoverIntervalTableName;
        return this;
    };
    GetRecoverIntervalTableMasterRequest.fromDict = function (data) {
        return new GetRecoverIntervalTableMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withRecoverIntervalTableName(data["recoverIntervalTableName"]);
    };
    GetRecoverIntervalTableMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "recoverIntervalTableName": this.getRecoverIntervalTableName(),
        };
    };
    return GetRecoverIntervalTableMasterRequest;
}());
export default GetRecoverIntervalTableMasterRequest;
//# sourceMappingURL=GetRecoverIntervalTableMasterRequest.js.map