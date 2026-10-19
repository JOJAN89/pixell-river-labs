
import { useState } from "react";

export function useFormInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);
  const [message, setMessage] = useState("");

  function validate(
    callback: (value: string) => string
  ) {
    const result = callback(value);
    setMessage(result);
    return result === "";
  }

  function reset() {
    setValue(initialValue);
    setMessage("");
  }

  return {
    value,
    setValue,
    message,
    setMessage,
    validate,
    reset,
  };
}
