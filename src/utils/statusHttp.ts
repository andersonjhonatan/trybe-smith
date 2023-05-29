const mapStatusHTTP = (type: string): number => {
  const statusHTTPMap: Record<string, number> = {
    INVALID_DATA: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    UNPROCESSABLE_ENTITY: 422,
    SUCCESS: 200,
  };
  return statusHTTPMap[type] ?? 500;
};

export default mapStatusHTTP;