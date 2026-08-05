---
layout: post
post_id: '081'
title: What is Clone, Patch and Clone a Patch in Power Platform Solutions?
date: 2026-08-09T23:11
image: assets/images/10989e9141a7/700825e80059f21c770ea4b770721fc5.jpg
description: Learn Power Platform solution management, including managed and unmanaged solutions, upgrades, patches, cloning, and versioning best practices.
meta_keywords: Power Platform Solutions, Managed Solution, Unmanaged Solution, Dataverse Solutions, Solution Upgrade, Solution Patch, Clone Solution, Power Apps ALM, Power Platform Deployment, Solution Versioning
category: Power Platform
read_time: 15 mins
published: true
---

Solutions are containers of components used to move customizations and configurations across environments. Solutions are of two types: **Managed Solutions** and **Unmanaged Solutions**.

**Unmanaged Solutions** can be customized, and components can be added, edited, or removed. **Managed Solutions** cannot be modified directly, and components cannot be added to or removed from them.

Managed Solutions are typically used in **Test** or **Production** environments to prevent users from making direct customizations. If components within a Managed Solution are modified in the target environment, those changes are created as an **Unmanaged Layer**, which can become a blocker for future solution deployments.

Solutions are exported from the source environment and imported into the target environment.

![Update solution Power Platform](/assets/images/e220d9361c16/update-solution.png)

> **Note:** `1.0.1.1` is an example of a solution version. Solution versioning follows the format: `Major.Minor.Build.Revision`

#### Updating a Solution:

When importing a Managed Solution into a target environment, if the import process detects that another version of the same solution already exists, it provides the following options:

**Upgrade (Default)**

The existing solution is upgraded to the latest version of the imported solution, and all previous patches are rolled up into the upgraded solution.

To maintain consistency, components that exist in the current solution but are not present in the imported solution are deleted during the upgrade process.

**Stage for Upgrade** 

This option should be selected when you want to keep both the previous and current versions of the solution in the environment temporarily, as the name suggests.

It upgrades the solution to the newer version but does not proceed with deleting the existing solution or its patches until **Apply Upgrade** is executed.

**Update**

This option updates the solution with the imported version, but unlike **Upgrade**, it does not delete components that are no longer present in the imported solution.

If components were deleted in the source environment, differences may exist between the source and target environments. Compared to **Upgrade**, **Update** generally provides better performance because it does not perform component removal operations.

#### Patch:

A **Patch Solution** can be created from a parent solution to deliver minor updates to the base solution.

When a patch is created, it is initially empty. You can add components that you want to include or modify within the patch. However, a patch cannot be used to delete components from the parent (base) solution.

A patch can be updated or deleted. If the parent solution is deleted, all associated patches are also deleted. This deletion must occur as a single transaction.

A base solution can have multiple patch solutions, but a patch can have only one parent solution. Patches can be created only from **Unmanaged Solutions**, not from **Managed Solutions**.

If the deletion of any patch fails, the entire transaction is rolled back.

When importing a patch into a target environment, it is recommended to use a **Managed Patch** in Production environments. To do this, the parent solution must already exist in the target environment.

When a patch is created from a parent solution, the parent solution becomes locked, preventing you from editing or exporting it. All changes must be made within the patch.

Once all patches are deleted, you can edit the parent solution again.

A patch must have a higher **Build** or **Revision** number than its parent solution, but it cannot have a higher **Major** or **Minor** version number.

Example:

- Parent Solution: `1.0.4.2`
- Valid Patch Version: `1.0.4.3`
- Invalid Patch Version: `1.1.4.2`

If the parent solution is cloned, all related patches are rolled up into a newer version of the solution.

![Clone a patch power platform](/assets/images/b7c26d570056/clone-a-patch.png)

To create a patch:

1. Click the ellipsis (**…**) on the required solution.
2. Select **Clone**.
3. Click **Clone a Patch**.

![clone a patch power platform solution](/assets/images/ceb37881540c/clone-a-patch-2.png)

A side panel will appear where you can modify the **Build** and **Revision** values for the patch version.

After the patch is created, it appears with the same display name as the parent solution, while its unique name includes a patch identifier and additional characters.

![clone a patch power platform solutions](/assets/images/cb3a4d5b21a1/clone-a-patch-3.png)

#### Clone:

![clone solutions power platform](/assets/images/ba5d4239a2e4/clone-patch-featured.png)

When a **Clone Solution** operation is performed on an Unmanaged Solution, the base solution and all associated patches are rolled up into a new version of the solution.

After cloning is completed, all components that were added or updated in the patches become part of the newly cloned solution.

The cloned solution must have a version number greater than or equal to the original solution version.

For example:

- Original Solution Version: `1.6.0.1`
- Valid Clone Versions: `1.6.0.1` or `1.7.0.0`

![clone solution power platform](/assets/images/340fe4e91043/clone-solution-1.png)

Similar to creating a patch, you can create a clone by navigating to the solution’s **Clone** option and selecting **Clone Solution**.

![clone solution power platform](/assets/images/3deb4e405084/clone-solution-2.png)

In the side panel, you can modify the **Major** and **Minor** version numbers before proceeding with the clone operation.

Once completed, the cloned solution contains all components from the parent solution and its patches in a single rolled-up version.

#### References:

- [Create and update custom solutions for ALM in Power Platform — Power Platform_Microsoft Learn](https://learn.microsoft.com/en-us/power-platform/alm/update-solutions-alm)
- [Update a solution — Power Apps_Microsoft Learn](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/update-solutions)
- [How Patching of Solutions Works in the Power Platform — Carl de Souza](https://carldesouza.com/how-patching-of-solutions-works-in-the-power-platform/)
- [Power Platform Solution Upgrade, Update and Patch Summary — hiredgun.tech](https://hiredgun.tech/power-platform-solution/)
