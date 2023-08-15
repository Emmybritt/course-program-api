import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Program extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ enum: ['undergraduate', 'masters', 'phd'] })
  level: 'undergraduate' | 'masters' | 'phd';

  @Prop()
  institute: string;

  @Prop({ required: true })
  country: string;

  @Prop()
  description: string;
}

export const ProgramSchema = SchemaFactory.createForClass(Program);
