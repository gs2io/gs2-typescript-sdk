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
var tslib_1 = require("tslib");
var Gs2Distributor = (0, tslib_1.__importStar)(require("../model"));
var DistributeResult = /** @class */ (function () {
    function DistributeResult() {
        this.distributeResource = null;
        this.inboxNamespaceId = null;
        this.result = null;
    }
    DistributeResult.prototype.getDistributeResource = function () {
        return this.distributeResource;
    };
    DistributeResult.prototype.setDistributeResource = function (distributeResource) {
        this.distributeResource = distributeResource;
        return this;
    };
    DistributeResult.prototype.withDistributeResource = function (distributeResource) {
        this.distributeResource = distributeResource;
        return this;
    };
    DistributeResult.prototype.getInboxNamespaceId = function () {
        return this.inboxNamespaceId;
    };
    DistributeResult.prototype.setInboxNamespaceId = function (inboxNamespaceId) {
        this.inboxNamespaceId = inboxNamespaceId;
        return this;
    };
    DistributeResult.prototype.withInboxNamespaceId = function (inboxNamespaceId) {
        this.inboxNamespaceId = inboxNamespaceId;
        return this;
    };
    DistributeResult.prototype.getResult = function () {
        return this.result;
    };
    DistributeResult.prototype.setResult = function (result) {
        this.result = result;
        return this;
    };
    DistributeResult.prototype.withResult = function (result) {
        this.result = result;
        return this;
    };
    DistributeResult.fromDict = function (data) {
        return new DistributeResult()
            .withDistributeResource(Gs2Distributor.DistributeResource.fromDict(data["distributeResource"]))
            .withInboxNamespaceId(data["inboxNamespaceId"])
            .withResult(data["result"]);
    };
    DistributeResult.prototype.toDict = function () {
        var _a;
        return {
            "distributeResource": (_a = this.getDistributeResource()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "inboxNamespaceId": this.getInboxNamespaceId(),
            "result": this.getResult(),
        };
    };
    return DistributeResult;
}());
exports.default = DistributeResult;
//# sourceMappingURL=DistributeResult.js.map