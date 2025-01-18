import {useEffect} from "react";

const useOutsideClick = (elementRef, handler, attached = true) => {
  useEffect(() => {
    if (!attached) return;

    const onClick = (e) => {
      if (!elementRef.current) return;
      if (!elementRef.current.contains(e.target)) {
        handler();
      }
    }

    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
    }
  }, [elementRef, handler, attached]);
}

export default useOutsideClick;