import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class BookInput {
  @Field({ nullable: true }) // Make _id nullable
  _id?: string;

  @Field()
  title: string;

  @Field()
  author: string;

  @Field()
  published: boolean;
}
