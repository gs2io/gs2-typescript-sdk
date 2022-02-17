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
var FirebaseToken = /** @class */ (function () {
    function FirebaseToken() {
        this.firebaseTokenId = null;
        this.userId = null;
        this.token = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    FirebaseToken.prototype.getFirebaseTokenId = function () {
        return this.firebaseTokenId;
    };
    FirebaseToken.prototype.setFirebaseTokenId = function (firebaseTokenId) {
        this.firebaseTokenId = firebaseTokenId;
        return this;
    };
    FirebaseToken.prototype.withFirebaseTokenId = function (firebaseTokenId) {
        this.firebaseTokenId = firebaseTokenId;
        return this;
    };
    FirebaseToken.prototype.getUserId = function () {
        return this.userId;
    };
    FirebaseToken.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    FirebaseToken.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    FirebaseToken.prototype.getToken = function () {
        return this.token;
    };
    FirebaseToken.prototype.setToken = function (token) {
        this.token = token;
        return this;
    };
    FirebaseToken.prototype.withToken = function (token) {
        this.token = token;
        return this;
    };
    FirebaseToken.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    FirebaseToken.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    FirebaseToken.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    FirebaseToken.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    FirebaseToken.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    FirebaseToken.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    FirebaseToken.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new FirebaseToken()
            .withFirebaseTokenId(data["firebaseTokenId"])
            .withUserId(data["userId"])
            .withToken(data["token"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    FirebaseToken.prototype.toDict = function () {
        return {
            "firebaseTokenId": this.getFirebaseTokenId(),
            "userId": this.getUserId(),
            "token": this.getToken(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return FirebaseToken;
}());
export default FirebaseToken;
//# sourceMappingURL=FirebaseToken.js.map