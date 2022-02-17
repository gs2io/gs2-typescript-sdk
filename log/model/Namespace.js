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
var Namespace = /** @class */ (function () {
    function Namespace() {
        this.namespaceId = null;
        this.name = null;
        this.description = null;
        this.type = null;
        this.gcpCredentialJson = null;
        this.bigQueryDatasetName = null;
        this.logExpireDays = null;
        this.awsRegion = null;
        this.awsAccessKeyId = null;
        this.awsSecretAccessKey = null;
        this.firehoseStreamName = null;
        this.status = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    Namespace.prototype.getNamespaceId = function () {
        return this.namespaceId;
    };
    Namespace.prototype.setNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    Namespace.prototype.withNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    Namespace.prototype.getName = function () {
        return this.name;
    };
    Namespace.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Namespace.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    Namespace.prototype.getDescription = function () {
        return this.description;
    };
    Namespace.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    Namespace.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    Namespace.prototype.getType = function () {
        return this.type;
    };
    Namespace.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    Namespace.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    Namespace.prototype.getGcpCredentialJson = function () {
        return this.gcpCredentialJson;
    };
    Namespace.prototype.setGcpCredentialJson = function (gcpCredentialJson) {
        this.gcpCredentialJson = gcpCredentialJson;
        return this;
    };
    Namespace.prototype.withGcpCredentialJson = function (gcpCredentialJson) {
        this.gcpCredentialJson = gcpCredentialJson;
        return this;
    };
    Namespace.prototype.getBigQueryDatasetName = function () {
        return this.bigQueryDatasetName;
    };
    Namespace.prototype.setBigQueryDatasetName = function (bigQueryDatasetName) {
        this.bigQueryDatasetName = bigQueryDatasetName;
        return this;
    };
    Namespace.prototype.withBigQueryDatasetName = function (bigQueryDatasetName) {
        this.bigQueryDatasetName = bigQueryDatasetName;
        return this;
    };
    Namespace.prototype.getLogExpireDays = function () {
        return this.logExpireDays;
    };
    Namespace.prototype.setLogExpireDays = function (logExpireDays) {
        this.logExpireDays = logExpireDays;
        return this;
    };
    Namespace.prototype.withLogExpireDays = function (logExpireDays) {
        this.logExpireDays = logExpireDays;
        return this;
    };
    Namespace.prototype.getAwsRegion = function () {
        return this.awsRegion;
    };
    Namespace.prototype.setAwsRegion = function (awsRegion) {
        this.awsRegion = awsRegion;
        return this;
    };
    Namespace.prototype.withAwsRegion = function (awsRegion) {
        this.awsRegion = awsRegion;
        return this;
    };
    Namespace.prototype.getAwsAccessKeyId = function () {
        return this.awsAccessKeyId;
    };
    Namespace.prototype.setAwsAccessKeyId = function (awsAccessKeyId) {
        this.awsAccessKeyId = awsAccessKeyId;
        return this;
    };
    Namespace.prototype.withAwsAccessKeyId = function (awsAccessKeyId) {
        this.awsAccessKeyId = awsAccessKeyId;
        return this;
    };
    Namespace.prototype.getAwsSecretAccessKey = function () {
        return this.awsSecretAccessKey;
    };
    Namespace.prototype.setAwsSecretAccessKey = function (awsSecretAccessKey) {
        this.awsSecretAccessKey = awsSecretAccessKey;
        return this;
    };
    Namespace.prototype.withAwsSecretAccessKey = function (awsSecretAccessKey) {
        this.awsSecretAccessKey = awsSecretAccessKey;
        return this;
    };
    Namespace.prototype.getFirehoseStreamName = function () {
        return this.firehoseStreamName;
    };
    Namespace.prototype.setFirehoseStreamName = function (firehoseStreamName) {
        this.firehoseStreamName = firehoseStreamName;
        return this;
    };
    Namespace.prototype.withFirehoseStreamName = function (firehoseStreamName) {
        this.firehoseStreamName = firehoseStreamName;
        return this;
    };
    Namespace.prototype.getStatus = function () {
        return this.status;
    };
    Namespace.prototype.setStatus = function (status) {
        this.status = status;
        return this;
    };
    Namespace.prototype.withStatus = function (status) {
        this.status = status;
        return this;
    };
    Namespace.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Namespace.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Namespace.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Namespace.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Namespace.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Namespace.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Namespace.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Namespace()
            .withNamespaceId(data["namespaceId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withType(data["type"])
            .withGcpCredentialJson(data["gcpCredentialJson"])
            .withBigQueryDatasetName(data["bigQueryDatasetName"])
            .withLogExpireDays(data["logExpireDays"])
            .withAwsRegion(data["awsRegion"])
            .withAwsAccessKeyId(data["awsAccessKeyId"])
            .withAwsSecretAccessKey(data["awsSecretAccessKey"])
            .withFirehoseStreamName(data["firehoseStreamName"])
            .withStatus(data["status"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    Namespace.prototype.toDict = function () {
        return {
            "namespaceId": this.getNamespaceId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "type": this.getType(),
            "gcpCredentialJson": this.getGcpCredentialJson(),
            "bigQueryDatasetName": this.getBigQueryDatasetName(),
            "logExpireDays": this.getLogExpireDays(),
            "awsRegion": this.getAwsRegion(),
            "awsAccessKeyId": this.getAwsAccessKeyId(),
            "awsSecretAccessKey": this.getAwsSecretAccessKey(),
            "firehoseStreamName": this.getFirehoseStreamName(),
            "status": this.getStatus(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return Namespace;
}());
exports.default = Namespace;
//# sourceMappingURL=Namespace.js.map