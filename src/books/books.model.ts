import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

@ObjectType()
@Schema()
export class Book {
  @Field()
  _id?: string;

  @Field()
  title: string;

  @Field()
  author: string;

  @Field()
  published: boolean;
}
export type BookDocument = Book & Document;

export const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  published: Boolean,
});
