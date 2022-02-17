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
var Mutex = /** @class */ (function () {
    function Mutex() {
        this.mutexId = null;
        this.userId = null;
        this.propertyId = null;
        this.transactionId = null;
        this.createdAt = null;
    }
    Mutex.prototype.getMutexId = function () {
        return this.mutexId;
    };
    Mutex.prototype.setMutexId = function (mutexId) {
        this.mutexId = mutexId;
        return this;
    };
    Mutex.prototype.withMutexId = function (mutexId) {
        this.mutexId = mutexId;
        return this;
    };
    Mutex.prototype.getUserId = function () {
        return this.userId;
    };
    Mutex.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Mutex.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Mutex.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    Mutex.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    Mutex.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    Mutex.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    Mutex.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    Mutex.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    Mutex.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Mutex.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Mutex.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Mutex.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Mutex()
            .withMutexId(data["mutexId"])
            .withUserId(data["userId"])
            .withPropertyId(data["propertyId"])
            .withTransactionId(data["transactionId"])
            .withCreatedAt(data["createdAt"]);
    };
    Mutex.prototype.toDict = function () {
        return {
            "mutexId": this.getMutexId(),
            "userId": this.getUserId(),
            "propertyId": this.getPropertyId(),
            "transactionId": this.getTransactionId(),
            "createdAt": this.getCreatedAt(),
        };
    };
    return Mutex;
}());
exports.default = Mutex;
//# sourceMappingURL=Mutex.js.map