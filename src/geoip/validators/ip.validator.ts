import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import * as net from 'net';

export function IsValidIP(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isValidIP',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          return typeof value === 'string' && (net.isIPv4(value) || net.isIPv6(value));
        },
        defaultMessage(args: ValidationArguments) {
          return 'Invalid IP address format. Must be a valid IPv4 or IPv6 address';
        },
      },
    });
  };
}
