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
var DeleteGatheringRequest = /** @class */ (function () {
    function DeleteGatheringRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.gatheringName = null;
    }
    DeleteGatheringRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteGatheringRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteGatheringRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteGatheringRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteGatheringRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteGatheringRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteGatheringRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteGatheringRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteGatheringRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteGatheringRequest.prototype.getGatheringName = function () {
        return this.gatheringName;
    };
    DeleteGatheringRequest.prototype.setGatheringName = function (gatheringName) {
        this.gatheringName = gatheringName;
        return this;
    };
    DeleteGatheringRequest.prototype.withGatheringName = function (gatheringName) {
        this.gatheringName = gatheringName;
        return this;
    };
    DeleteGatheringRequest.fromDict = function (data) {
        return new DeleteGatheringRequest()
            .withNamespaceName(data["namespaceName"])
            .withGatheringName(data["gatheringName"]);
    };
    DeleteGatheringRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "gatheringName": this.getGatheringName(),
        };
    };
    return DeleteGatheringRequest;
}());
export default DeleteGatheringRequest;
//# sourceMappingURL=DeleteGatheringRequest.js.map