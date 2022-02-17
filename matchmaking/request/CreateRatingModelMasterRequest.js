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
var CreateRatingModelMasterRequest = /** @class */ (function () {
    function CreateRatingModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.volatility = null;
    }
    CreateRatingModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateRatingModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateRatingModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateRatingModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateRatingModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateRatingModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateRatingModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateRatingModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateRatingModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateRatingModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateRatingModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateRatingModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateRatingModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateRatingModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateRatingModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateRatingModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateRatingModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateRatingModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateRatingModelMasterRequest.prototype.getVolatility = function () {
        return this.volatility;
    };
    CreateRatingModelMasterRequest.prototype.setVolatility = function (volatility) {
        this.volatility = volatility;
        return this;
    };
    CreateRatingModelMasterRequest.prototype.withVolatility = function (volatility) {
        this.volatility = volatility;
        return this;
    };
    CreateRatingModelMasterRequest.fromDict = function (data) {
        return new CreateRatingModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withVolatility(data["volatility"]);
    };
    CreateRatingModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "volatility": this.getVolatility(),
        };
    };
    return CreateRatingModelMasterRequest;
}());
export default CreateRatingModelMasterRequest;
//# sourceMappingURL=CreateRatingModelMasterRequest.js.map