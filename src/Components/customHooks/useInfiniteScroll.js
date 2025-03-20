import React, { useState, useEffect } from "react";

export default function useInfiniteScroll(observerRef, fetchItems) {
  const [items, setItems] = useState([]); //fetched items to save
  const [page, setPage] = useState(1); //we gave page 1
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  //run on ever page change
  useEffect(() => {
    const loadItems = async () => {
      setLoading(true);
      const newItems = await fetchItems(page); //calling API function by giving pageNumber
      setItems((prev) => [...prev, ...newItems]); //spread old items & add new items
      setLoading(false);
      if (newItems.length === 0) setHasMore(false); //when hasMore is false stop scrolling
    };
    loadItems();
  }, [page]);

  useEffect(() => {
    //hasMore-false or observerRef-false return here only
    if (!observerRef?.current || !hasMore) return;

    //by using new InterSection "class" we created a object "observer" to observe element
    const observer = new IntersectionObserver( //observer-keeps observing when it hits last item
      //entries - by default it is an [array] of observed elements
      (entries) => {
        // [we have to pass a callback fun]
        if (entries[0].isIntersecting) {
          //entries[0]-1st element as we have only one
          // div is visible? <- above line
          setPage((prev) => prev + 1);
        }
      },

      { threshold: 1 } //"1" - when my div is complete visible then only
    );
    observer.observe(observerRef.current); //observer.observer(div) when div comes into picture trigger that callback
    return () => observer.disconnect();
  }, [hasMore]); //when ever hasMore changes it has to run

  return { items, loading }; //what items we use in div
}
