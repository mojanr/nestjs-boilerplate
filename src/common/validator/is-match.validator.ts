import { registerDecorator, ValidationOptions, ValidationArguments } from "class-validator";

// is match validation
// check if current input value is match or equals with related property value
// e.g. password and passwordConfirmation must be equal
export function IsMatch(property: string, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "IsMatch",
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;
          const relatedValue = (args.object as any)[relatedPropertyName];
          // return typeof value === "string" &&
            //  value.length > relatedValue.length; // you can return a Promise<boolean> here as well, if you want to make async validation
            // isValidCron(value, { seconds: true, alias: true, allowBlankDay: true })
            return value === relatedValue
        },
        defaultMessage(args: ValidationArguments) { // here you can provide default error message if validation failed
          return `${args.property} is not match`;
        }
      }
    });
  };
}