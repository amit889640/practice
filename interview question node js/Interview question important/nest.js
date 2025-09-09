1. Customer Schema (customer.schema.ts)
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CustomerDocument = Customer & Document;

@Schema({ timestamps: true })
export class Customer {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  phone: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);




🏗 2. Product Schema (product.schema.ts)
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema({ timestamps: true })
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop()
  description: string;

  @Prop()
  stock: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);



3. Order Schema (order.schema.ts)

Each order belongs to a customer.

Each order has an items[] array, where each item points to a product + quantity.

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Customer } from './customer.schema';
import { Product } from './product.schema';

export type OrderDocument = Order & Document;

@Schema()
export class OrderItem {
  @Prop({ type: Types.ObjectId, ref: Product.name, required: true })
  productId: Product | Types.ObjectId;

  @Prop({ required: true })
  quantity: number;
}

@Schema({ timestamps: true })
export class Order {
  @Prop({ type: Types.ObjectId, ref: Customer.name, required: true })
  customerId: Customer | Types.ObjectId;

  @Prop({ type: [OrderItem], _id: false })
  items: OrderItem[];

  @Prop()
  status: string; // e.g., 'pending', 'shipped'

  @Prop()
  totalAmount: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);




4. Populate (Join) in Service

Now in your order.service.ts, you can join orders with both customer and products.

async findAllOrders() {
  return this.orderModel
    .find()
    .populate('customerId', 'name email') // join with Customer
    .populate('items.productId', 'name price') // join each product in items
    .exec();
}






🏗 2. Order Service – Create Order
📌 order.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from './schemas/order.schema';
import { CreateOrderDto } from './dto/create-order.dto';
import { Product, ProductDocument } from '../product/schemas/product.schema';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
    const { customerId, items } = createOrderDto;

    // 🧮 Calculate total amount
    let totalAmount = 0;

    for (const item of items) {
      const product = await this.productModel.findById(item.productId).exec();
      if (!product) {
        throw new Error(`Product with id ${item.productId} not found`);
      }
      totalAmount += product.price * item.quantity;
    }

    // 📝 Create order
    const newOrder = new this.orderModel({
      customerId,
      items,
      totalAmount,
      status: 'pending',
    });

    return newOrder.save();
  }

  async findAllOrders() {
    return this.orderModel
      .find()
      .populate('customerId', 'name email') // join with Customer
      .populate('items.productId', 'name price') // join with Product
      .exec();
  }
}




create-order.dto.ts
import { IsArray, IsMongoId, IsNotEmpty, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class OrderItemDto {
  @IsMongoId()
  readonly productId: string;

  @IsNumber()
  @IsNotEmpty()
  readonly quantity: number;
}

export class CreateOrderDto {
  @IsMongoId()
  readonly customerId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  readonly items: OrderItemDto[];
}