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
var CreateProgressByUserIdRequest = /** @class */ (function () {
    function CreateProgressByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.rateName = null;
        this.targetItemSetId = null;
        this.materials = null;
        this.force = null;
    }
    CreateProgressByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateProgressByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateProgressByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateProgressByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateProgressByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateProgressByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateProgressByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateProgressByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateProgressByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateProgressByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    CreateProgressByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CreateProgressByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CreateProgressByUserIdRequest.prototype.getRateName = function () {
        return this.rateName;
    };
    CreateProgressByUserIdRequest.prototype.setRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    CreateProgressByUserIdRequest.prototype.withRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    CreateProgressByUserIdRequest.prototype.getTargetItemSetId = function () {
        return this.targetItemSetId;
    };
    CreateProgressByUserIdRequest.prototype.setTargetItemSetId = function (targetItemSetId) {
        this.targetItemSetId = targetItemSetId;
        return this;
    };
    CreateProgressByUserIdRequest.prototype.withTargetItemSetId = function (targetItemSetId) {
        this.targetItemSetId = targetItemSetId;
        return this;
    };
    CreateProgressByUserIdRequest.prototype.getMaterials = function () {
        return this.materials;
    };
    CreateProgressByUserIdRequest.prototype.setMaterials = function (materials) {
        this.materials = materials;
        return this;
    };
    CreateProgressByUserIdRequest.prototype.withMaterials = function (materials) {
        this.materials = materials;
        return this;
    };
    CreateProgressByUserIdRequest.prototype.getForce = function () {
        return this.force;
    };
    CreateProgressByUserIdRequest.prototype.setForce = function (force) {
        this.force = force;
        return this;
    };
    CreateProgressByUserIdRequest.prototype.withForce = function (force) {
        this.force = force;
        return this;
    };
    CreateProgressByUserIdRequest.fromDict = function (data) {
        return new CreateProgressByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withRateName(data["rateName"])
            .withTargetItemSetId(data["targetItemSetId"])
            .withMaterials(data.materials ?
            data.materials.map(function (item) {
                return Gs2Enhance.Material.fromDict(item);
            }) : [])
            .withForce(data["force"]);
    };
    CreateProgressByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "rateName": this.getRateName(),
            "targetItemSetId": this.getTargetItemSetId(),
            "materials": this.getMaterials() ?
                this.getMaterials().map(function (item) {
                    return item.toDict();
                }) : [],
            "force": this.getForce(),
        };
    };
    return CreateProgressByUserIdRequest;
}());
export default CreateProgressByUserIdRequest;
//# sourceMappingURL=CreateProgressByUserIdRequest.js.map