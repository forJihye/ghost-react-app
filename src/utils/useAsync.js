import { useEffect, useState } from "react";

export default function useAsync(f, deps){
  const [value, setValue] = useState(null);
  useEffect(() => {
    const asyncFunc = async() => {
      try{
        const result = await f(deps);
        setValue(result);
      }catch(error){
        console.error(error)
      }
    }
    asyncFunc();
  }, deps);
  return [value, setValue]
}