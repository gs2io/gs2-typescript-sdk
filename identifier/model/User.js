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
var User = /** @class */ (function () {
    function User() {
        this.userId = null;
        this.name = null;
        this.description = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    User.prototype.getUserId = function () {
        return this.userId;
    };
    User.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    User.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    User.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    User.prototype.getDescription = function () {
        return this.description;
    };
    User.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    User.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    User.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    User.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    User.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    User.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    User.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    User.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    User.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new User()
            .withUserId(data["userId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    User.prototype.toDict = function () {
        return {
            "userId": this.getUserId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return User;
}());
export default User;
//# sourceMappingURL=User.js.map