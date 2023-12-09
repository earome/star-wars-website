import { fetchCharacter } from "@/utils/http";
import { useState, useEffect } from "react";

const usePagination = (itemsPerPage: number) => {
  const [paginationNumber, setPaginationNumber] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalCount, setTotalCount] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
        const { count } = await fetchCharacter(`1`);
        setTotalCount(count);
      };
  
      fetchData();
  }, []);

  useEffect(() => {
    const totalPages = Math.ceil(totalCount / itemsPerPage);
    const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);
    setPaginationNumber(pagesArray);
  }, [totalCount]);

  return { paginationNumber, currentPage, setCurrentPage };
};

export default usePagination;
