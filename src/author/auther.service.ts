import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Auther, AutherDocument } from './auther.model';

@Injectable()
export class AutherService {
  constructor(
    @InjectModel(Auther.name) private autherModel: Model<AutherDocument>,
  ) {}

  async create(auther: Auther): Promise<Auther> {
    const existingBook = await this.autherModel.findOne({
      email: auther.email,
    });

    if (existingBook) {
      throw new Error('User already exists');
    }

    const newBook = new this.autherModel(auther);
    return await newBook.save();
  }

  async findByEmail(email: string): Promise<Auther> {
    const author = await this.autherModel.findOne({ email });
    if (!author) {
      throw new Error(`Author with email ${email} not found`);
    }

    return author;
  }
}
