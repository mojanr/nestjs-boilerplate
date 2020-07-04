import { registerDecorator, ValidationOptions, ValidationArguments } from "class-validator";
import { isValidCron } from 'cron-validator'

export function IsCronPattern(property?: string, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "IsCronPattern",
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          // const [relatedPropertyName] = args.constraints;
          // const relatedValue = (args.object as any)[relatedPropertyName];
          // console.log('value', isValidCron(value, { seconds: true, alias: true, allowBlankDay: true }))
          // console.log('related value', relatedValue)
          return typeof value === "string" &&
            //  value.length > relatedValue.length; // you can return a Promise<boolean> here as well, if you want to make async validation
            isValidCron(value, { seconds: true, alias: true, allowBlankDay: true })
        },
        defaultMessage(args: ValidationArguments) { // here you can provide default error message if validation failed
          return `${args.property} is not a valid cron pattern`;
        }
      }
    });
  };
}