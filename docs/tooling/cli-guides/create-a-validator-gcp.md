---
tags: [Tooling, Avalanche-CLI]
description: This page demonstrates how to deploy Avalanche validators using just one Avalanche-CLI command.
pagination_label: Run Avalanche Validators with One Avalanche-CLI Command
sidebar_label: Run Validators on GCP
sidebar_position: 3
---

# Run an Avalanche Validator on GCP with One Avalanche-CLI Command 

This page demonstrates how to deploy Avalanche validators on GCP using just one Avalanche-CLI 
command.

:::info
Currently, only Fuji network is supported.
:::

:::warning

ALPHA WARNING: This command is currently in experimental mode. Proceed at your own risk.

:::

## Prerequisites

Before we begin, you will need to:

- Create a GCP account [here](https://console.cloud.google.com/freetrial) and create a new project
- Enable Compute Engine API [here](https://console.cloud.google.com/apis/api/compute.googleapis.com)
- Download the key json for the automatically created service account as shown [here](https://cloud.google.com/iam/docs/keys-create-delete#creating)
- Install [Terraform](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli)
- Install [Ansible](https://adamtheautomator.com/install-ansible/)

## Start the Validator

To start Avalanche validators, run:

```shell
avalanche node create <clusterName>
```

The created nodes will be part of cluster `clusterName` and all avalanche node commands applied to
cluster `clusterName` will apply to all nodes in the cluster.

:::note

Please note that running a validator on GCP will incur costs.

Ava Labs is not responsible for the cost incurred from running an Avalanche validator on cloud 
services via Avalanche-CLI.

:::

Currently, we have set the following specs of the GCP cloud server to a fixed value, but we plan to 
enable customization in the near future:

- OS Image: `Ubuntu 20.04 LTS`
- Machine Type: `e2-standard-8`
- Storage: `1 TB`

The command will ask which region you want to set up your cloud server in: 

```text
Which GCP zone do you want to set up your node in?: 
  ▸ us-east1-b
    us-central1-c
    us-west1-b
    Choose custom zone (list of zones available at https://cloud.google.com/compute/docs/regions-zones)
```

The command will then ask which Avalanche Go version you would like to install in the cloud server. 
You can choose `default` (which will install the latest version) or you can enter the name of a 
Subnet created with CLI that you plan to be validated by this node (we will get the latest version 
that is compatible with the deployed Subnet's RPC version).

Once the command has successfully completed, Avalanche-CLI outputs all the created cloud server 
node IDs as well as the public IP that each node can be reached at.

Avalanche-CLI also outputs the command that you can use to ssh into each cloud server node.

By the end of successful run of `create` command, Avalanche-CLI would have:

- Installed Avalanche Go in cloud server
- Installed Avalanche CLI in cloud server
- Downloaded the `.pem` private key file to access the cloud server into your local `.ssh` directory.
  Back up this private key file as you will not be able to ssh into the cloud server node without it
- Downloaded `staker.crt` and `staker.key` files to your local `.avalanche-cli` directory so that
  you can back up your node. More info about node backup can be found [here](/nodes/maintain/node-backup-and-restore.md)
- Started the process of bootstrapping your new Avalanche node to the Primary Network

## Check Bootstrap Status

Please note that you will have to wait until the nodes have finished bootstrapping before the 
nodes can be Primary Network or Subnet Validators. To check whether all the nodes in a cluster
have finished bootstrapping, run `avalanche node status <clusterName>`.
