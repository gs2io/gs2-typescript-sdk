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
var RoleModel = /** @class */ (function () {
    function RoleModel() {
        this.name = null;
        this.metadata = null;
        this.policyDocument = null;
    }
    RoleModel.prototype.getName = function () {
        return this.name;
    };
    RoleModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    RoleModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    RoleModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    RoleModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    RoleModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    RoleModel.prototype.getPolicyDocument = function () {
        return this.policyDocument;
    };
    RoleModel.prototype.setPolicyDocument = function (policyDocument) {
        this.policyDocument = policyDocument;
        return this;
    };
    RoleModel.prototype.withPolicyDocument = function (policyDocument) {
        this.policyDocument = policyDocument;
        return this;
    };
    RoleModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new RoleModel()
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withPolicyDocument(data["policyDocument"]);
    };
    RoleModel.prototype.toDict = function () {
        return {
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "policyDocument": this.getPolicyDocument(),
        };
    };
    return RoleModel;
}());
exports.default = RoleModel;
//# sourceMappingURL=RoleModel.js.map