# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3Bucket <a name="S3Bucket" id="@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages.S3Bucket"></a>

#### Initializers <a name="Initializers" id="@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages.S3Bucket.Initializer"></a>

```typescript
import { S3Bucket } from '@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages'

new S3Bucket(scope: Construct, id: string, config: S3BucketOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages.S3Bucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages.S3Bucket.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages.S3Bucket.Initializer.parameter.config">config</a></code> | <code><a href="#@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages.S3BucketOptions">S3BucketOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages.S3Bucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages.S3Bucket.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages.S3Bucket.Initializer.parameter.config"></a>

- *Type:* <a href="#@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages.S3BucketOptions">S3BucketOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages.S3Bucket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages.S3Bucket.notifyLambda">notifyLambda</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages.S3Bucket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `notifyLambda` <a name="notifyLambda" id="@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages.S3Bucket.notifyLambda"></a>

```typescript
public notifyLambda(lambda: LambdaFunction | DataAwsLambdaFunction, eventType: string, options?: NotificationOptions): void
```

###### `lambda`<sup>Required</sup> <a name="lambda" id="@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages.S3Bucket.notifyLambda.parameter.lambda"></a>

- *Type:* @cdktf/provider-aws.lambdafunction.LambdaFunction | @cdktf/provider-aws.lambdafunction.DataAwsLambdaFunction

---

###### `eventType`<sup>Required</sup> <a name="eventType" id="@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages.S3Bucket.notifyLambda.parameter.eventType"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages.S3Bucket.notifyLambda.parameter.options"></a>

- *Type:* <a href="#@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages.NotificationOptions">NotificationOptions</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages.S3Bucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages.S3Bucket.isConstruct"></a>

```typescript
import { S3Bucket } from '@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages'

S3Bucket.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages.S3Bucket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages.S3Bucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages.S3Bucket.property.config">config</a></code> | <code><a href="#@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages.S3BucketOptions">S3BucketOptions</a></code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages.S3Bucket.property.s3Module">s3Module</a></code> | <code><a href="#@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages.S3Bucket">S3Bucket</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages.S3Bucket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `config`<sup>Required</sup> <a name="config" id="@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages.S3Bucket.property.config"></a>

```typescript
public readonly config: S3BucketOptions;
```

- *Type:* <a href="#@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages.S3BucketOptions">S3BucketOptions</a>

---

##### `s3Module`<sup>Required</sup> <a name="s3Module" id="@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages.S3Bucket.property.s3Module"></a>

```typescript
public readonly s3Module: S3Bucket;
```

- *Type:* <a href="#@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages.S3Bucket">S3Bucket</a>

---


## Structs <a name="Structs" id="Structs"></a>

### NotificationOptions <a name="NotificationOptions" id="@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages.NotificationOptions"></a>

#### Initializer <a name="Initializer" id="@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages.NotificationOptions.Initializer"></a>

```typescript
import { NotificationOptions } from '@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages'

const notificationOptions: NotificationOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages.NotificationOptions.property.filterPrefix">filterPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages.NotificationOptions.property.filterSuffix">filterSuffix</a></code> | <code>string</code> | *No description.* |

---

##### `filterPrefix`<sup>Optional</sup> <a name="filterPrefix" id="@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages.NotificationOptions.property.filterPrefix"></a>

```typescript
public readonly filterPrefix: string;
```

- *Type:* string

---

##### `filterSuffix`<sup>Optional</sup> <a name="filterSuffix" id="@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages.NotificationOptions.property.filterSuffix"></a>

```typescript
public readonly filterSuffix: string;
```

- *Type:* string

---

### S3BucketOptions <a name="S3BucketOptions" id="@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages.S3BucketOptions"></a>

#### Initializer <a name="Initializer" id="@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages.S3BucketOptions.Initializer"></a>

```typescript
import { S3BucketOptions } from '@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages'

const s3BucketOptions: S3BucketOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages.S3BucketOptions.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@danielmschmidt/terraform-cdk-hybrid-module-publishing-on-gh-packages.S3BucketOptions.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---



