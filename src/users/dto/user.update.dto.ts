import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class UserUpdate {
  @Field(() => ID)
  readonly id?: number;
  @Field()
  readonly name: string;
}