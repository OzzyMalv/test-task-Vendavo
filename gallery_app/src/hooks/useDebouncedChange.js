import { useCallback, useMemo } from "react";
import { debounce } from "../utils/func";

export const useDebouncedChange = (
  delayedFunction,
  isLoading = false,
  wait = 700,
) => {
  const request = useCallback(
    (searchText) => delayedFunction(searchText),
    [delayedFunction],
  );
  const debouncedHandler = useMemo(() => debounce(request, wait), [request]);

  const handleKeyPress = (e) => {
    const textForSearch = e.target.value;
    if (e.key === "Enter" && !!textForSearch && !isLoading) {
      return debouncedHandler.immediateCall(textForSearch);
    }
    return "";
  };

  const handleOnChange = (e) => {
    const textForSearch = e.target.value;
    return debouncedHandler(textForSearch);
  };

  return {
    handleKeyPress,
    handleOnChange,
  };
};
