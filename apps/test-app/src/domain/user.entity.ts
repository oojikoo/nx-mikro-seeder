
import { Entity, OptionalProps, PrimaryKey, Property } from '@mikro-orm/core';
import { v4 } from 'uuid';

@Entity()
export class User  {
  @PrimaryKey({ columnType: 'uuid', defaultRaw: `gen_random_uuid()` })
  id: string = v4();

  @Property({ nullable: true })
  name?: string;

  @Property()
  email: string;

  @Property({ columnType: 'uuid', nullable: true })
  identityId?: string = null;

  [OptionalProps]?: 'id';
}
