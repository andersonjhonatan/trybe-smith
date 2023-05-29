export type ServiceResponseErrorType =
  | 'INVALID_DATA'
  | 'UNAUTHORIZED'
  | 'NOT_FOUND'
  | 'UNPROCESSABLE_ENTITY';
export type ServiceSucessType = 'SUCCESS';

type ServiceError = {
  status: ServiceResponseErrorType;
  data: {
    message: string;
  };
};

type ServiceSuccess<T> = {
  status: ServiceSucessType;
  data: T | { token: T };
};

export type ServiceResponse<T> = ServiceError | ServiceSuccess<T>;
