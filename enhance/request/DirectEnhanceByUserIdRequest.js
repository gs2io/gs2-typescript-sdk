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
import * as Gs2Enhance from '../model';
var DirectEnhanceByUserIdRequest = /** @class */ (function () {
    function DirectEnhanceByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rateName = null;
        this.userId = null;
        this.targetItemSetId = null;
        this.materials = null;
        this.config = null;
    }
    DirectEnhanceByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DirectEnhanceByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DirectEnhanceByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DirectEnhanceByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DirectEnhanceByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DirectEnhanceByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DirectEnhanceByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DirectEnhanceByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DirectEnhanceByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DirectEnhanceByUserIdRequest.prototype.getRateName = function () {
        return this.rateName;
    };
    DirectEnhanceByUserIdRequest.prototype.setRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    DirectEnhanceByUserIdRequest.prototype.withRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    DirectEnhanceByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DirectEnhanceByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DirectEnhanceByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DirectEnhanceByUserIdRequest.prototype.getTargetItemSetId = function () {
        return this.targetItemSetId;
    };
    DirectEnhanceByUserIdRequest.prototype.setTargetItemSetId = function (targetItemSetId) {
        this.targetItemSetId = targetItemSetId;
        return this;
    };
    DirectEnhanceByUserIdRequest.prototype.withTargetItemSetId = function (targetItemSetId) {
        this.targetItemSetId = targetItemSetId;
        return this;
    };
    DirectEnhanceByUserIdRequest.prototype.getMaterials = function () {
        return this.materials;
    };
    DirectEnhanceByUserIdRequest.prototype.setMaterials = function (materials) {
        this.materials = materials;
        return this;
    };
    DirectEnhanceByUserIdRequest.prototype.withMaterials = function (materials) {
        this.materials = materials;
        return this;
    };
    DirectEnhanceByUserIdRequest.prototype.getConfig = function () {
        return this.config;
    };
    DirectEnhanceByUserIdRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    DirectEnhanceByUserIdRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    DirectEnhanceByUserIdRequest.fromDict = function (data) {
        return new DirectEnhanceByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withRateName(data["rateName"])
            .withUserId(data["userId"])
            .withTargetItemSetId(data["targetItemSetId"])
            .withMaterials(data.materials ?
            data.materials.map(function (item) {
                return Gs2Enhance.Material.fromDict(item);
            }) : [])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Enhance.Config.fromDict(item);
            }) : []);
    };
    DirectEnhanceByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rateName": this.getRateName(),
            "userId": this.getUserId(),
            "targetItemSetId": this.getTargetItemSetId(),
            "materials": this.getMaterials() ?
                this.getMaterials().map(function (item) {
                    return item.toDict();
                }) : [],
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return DirectEnhanceByUserIdRequest;
}());
export default DirectEnhanceByUserIdRequest;
//# sourceMappingURL=DirectEnhanceByUserIdRequest.js.map