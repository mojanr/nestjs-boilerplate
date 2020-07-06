import { SetMetadata } from '@nestjs/common';

export const AccessControl = (...args: string[]) => SetMetadata('access-control', args);
