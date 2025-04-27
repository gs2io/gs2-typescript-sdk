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

import IRequest from '../../core/interface/IRequest';

import * as Gs2Log from '../model'

export default class UpdateNamespaceRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private description: string|null = null;
    private type: string|null = null;
    private gcpCredentialJson: string|null = null;
    private bigQueryDatasetName: string|null = null;
    private logExpireDays: number|null = null;
    private awsRegion: string|null = null;
    private awsAccessKeyId: string|null = null;
    private awsSecretAccessKey: string|null = null;
    private firehoseStreamName: string|null = null;
    private firehoseCompressData: string|null = null;

    public getRequestId(): string|null {
        return this.requestId;
    }

    public setRequestId(requestId: string|null) {
        this.requestId = requestId;
        return this;
    }

    public withRequestId(requestId: string|null): this {
        this.requestId = requestId;
        return this;
    }

    public getContextStack(): string|null {
        return this.contextStack;
    }

    public setContextStack(contextStack: string|null) {
        this.contextStack = contextStack;
        return this;
    }

    public withContextStack(contextStack: string|null): this {
        this.contextStack = contextStack;
        return this;
    }
    public getNamespaceName(): string|null {
        return this.namespaceName;
    }
    public setNamespaceName(namespaceName: string|null) {
        this.namespaceName = namespaceName;
        return this;
    }
    public withNamespaceName(namespaceName: string|null): this {
        this.namespaceName = namespaceName;
        return this;
    }
    public getDescription(): string|null {
        return this.description;
    }
    public setDescription(description: string|null) {
        this.description = description;
        return this;
    }
    public withDescription(description: string|null): this {
        this.description = description;
        return this;
    }
    public getType(): string|null {
        return this.type;
    }
    public setType(type: string|null) {
        this.type = type;
        return this;
    }
    public withType(type: string|null): this {
        this.type = type;
        return this;
    }
    public getGcpCredentialJson(): string|null {
        return this.gcpCredentialJson;
    }
    public setGcpCredentialJson(gcpCredentialJson: string|null) {
        this.gcpCredentialJson = gcpCredentialJson;
        return this;
    }
    public withGcpCredentialJson(gcpCredentialJson: string|null): this {
        this.gcpCredentialJson = gcpCredentialJson;
        return this;
    }
    public getBigQueryDatasetName(): string|null {
        return this.bigQueryDatasetName;
    }
    public setBigQueryDatasetName(bigQueryDatasetName: string|null) {
        this.bigQueryDatasetName = bigQueryDatasetName;
        return this;
    }
    public withBigQueryDatasetName(bigQueryDatasetName: string|null): this {
        this.bigQueryDatasetName = bigQueryDatasetName;
        return this;
    }
    public getLogExpireDays(): number|null {
        return this.logExpireDays;
    }
    public setLogExpireDays(logExpireDays: number|null) {
        this.logExpireDays = logExpireDays;
        return this;
    }
    public withLogExpireDays(logExpireDays: number|null): this {
        this.logExpireDays = logExpireDays;
        return this;
    }
    public getAwsRegion(): string|null {
        return this.awsRegion;
    }
    public setAwsRegion(awsRegion: string|null) {
        this.awsRegion = awsRegion;
        return this;
    }
    public withAwsRegion(awsRegion: string|null): this {
        this.awsRegion = awsRegion;
        return this;
    }
    public getAwsAccessKeyId(): string|null {
        return this.awsAccessKeyId;
    }
    public setAwsAccessKeyId(awsAccessKeyId: string|null) {
        this.awsAccessKeyId = awsAccessKeyId;
        return this;
    }
    public withAwsAccessKeyId(awsAccessKeyId: string|null): this {
        this.awsAccessKeyId = awsAccessKeyId;
        return this;
    }
    public getAwsSecretAccessKey(): string|null {
        return this.awsSecretAccessKey;
    }
    public setAwsSecretAccessKey(awsSecretAccessKey: string|null) {
        this.awsSecretAccessKey = awsSecretAccessKey;
        return this;
    }
    public withAwsSecretAccessKey(awsSecretAccessKey: string|null): this {
        this.awsSecretAccessKey = awsSecretAccessKey;
        return this;
    }
    public getFirehoseStreamName(): string|null {
        return this.firehoseStreamName;
    }
    public setFirehoseStreamName(firehoseStreamName: string|null) {
        this.firehoseStreamName = firehoseStreamName;
        return this;
    }
    public withFirehoseStreamName(firehoseStreamName: string|null): this {
        this.firehoseStreamName = firehoseStreamName;
        return this;
    }
    public getFirehoseCompressData(): string|null {
        return this.firehoseCompressData;
    }
    public setFirehoseCompressData(firehoseCompressData: string|null) {
        this.firehoseCompressData = firehoseCompressData;
        return this;
    }
    public withFirehoseCompressData(firehoseCompressData: string|null): this {
        this.firehoseCompressData = firehoseCompressData;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): UpdateNamespaceRequest {
        return new UpdateNamespaceRequest()
            .withNamespaceName(data["namespaceName"])
            .withDescription(data["description"])
            .withType(data["type"])
            .withGcpCredentialJson(data["gcpCredentialJson"])
            .withBigQueryDatasetName(data["bigQueryDatasetName"])
            .withLogExpireDays(data["logExpireDays"])
            .withAwsRegion(data["awsRegion"])
            .withAwsAccessKeyId(data["awsAccessKeyId"])
            .withAwsSecretAccessKey(data["awsSecretAccessKey"])
            .withFirehoseStreamName(data["firehoseStreamName"])
            .withFirehoseCompressData(data["firehoseCompressData"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "description": this.getDescription(),
            "type": this.getType(),
            "gcpCredentialJson": this.getGcpCredentialJson(),
            "bigQueryDatasetName": this.getBigQueryDatasetName(),
            "logExpireDays": this.getLogExpireDays(),
            "awsRegion": this.getAwsRegion(),
            "awsAccessKeyId": this.getAwsAccessKeyId(),
            "awsSecretAccessKey": this.getAwsSecretAccessKey(),
            "firehoseStreamName": this.getFirehoseStreamName(),
            "firehoseCompressData": this.getFirehoseCompressData(),
        };
    }
}