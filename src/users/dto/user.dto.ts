import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class UserObj {
  @Field(() => ID)
  readonly id?: number;
  @Field()
  readonly name: string;
  @Field(() => Date)
  readonly created_at: Date;
  @Field(() => Date)
  readonly updated_at: Date;
}