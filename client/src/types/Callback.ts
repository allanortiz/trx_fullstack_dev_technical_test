export type Callback = {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
  onSettled?: () => void;
};
