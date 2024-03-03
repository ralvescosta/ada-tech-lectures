import { Logger } from 'winston'

export const logger = {
  info: jest.fn as any,
  warn: jest.fn as any,
  error: jest.fn as any 
} as Logger