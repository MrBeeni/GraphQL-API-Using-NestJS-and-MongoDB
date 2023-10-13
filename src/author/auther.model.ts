import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

@ObjectType()
@Schema()
export class Auther {
  @Field()
  _id?: string;

  @Field()
  first_name: string;

  @Field()
  last_name: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
export type AutherDocument = Auther & Document;

export const AutherSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
});
