import { useState, useContext, useEffect } from "react";
import { DataContext } from "./Data";

const Pagination = () => {
  const { page, setPage, totalPages } = useContext(DataContext);
  const [selected, setSelected] = useState(1);

  const startPage = Math.min(page, totalPages - 4); 
  const endPage = Math.min(startPage + 3, totalPages); 

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );
  useEffect(() => {
    setPage(selected);
  }, [selected, setPage, setSelected]);
  const Next = () => {
    if (page < totalPages) {
      setPage(page + 1);
      setSelected(selected + 1);
    }
  };
  const Prev = () => {
    if (page > 1) {
      setPage(page - 1);
      setSelected(selected - 1);
    }
  };
  return (
    <section className=" w-full h-24    flex justify-center items-center gap-4 mt-4 pb-4">
      <button
        onClick={Prev}
        className=" text-white text-[20px] font-light  px-4 py-1 bg-[#0034D1] drop-shadow-lg rounded-sm  "
      >
        Prev
      </button>
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => setSelected(p)}
          className={` text-[#1A1A1A] text-[20px] font-light py-1  px-3 bg-white hover:scale-125  transition-all  border border-[#87878766] drop-shadow-lg rounded-sm ${
            selected === p ? "bg-[#0034D1]" : ""
          }`}
        >
          {p}
        </button>
      ))}
      {totalPages > 6 && totalPages - 1 > pages[pages.length - 1] && (
        <h1 className=" text-[#1A1A1A] text-[40px] -mx-5 font-light  px-2">
          ...
        </h1>
      )}
      {totalPages > 6 && totalPages > pages[pages.length - 1] && (
        <button
          onClick={() => setSelected(totalPages)}
          className={` text-[#1A1A1A] text-[20px] font-light  py-1  px-3 bg-white hover:scale-125  transition-all  border border-[#87878766] drop-shadow-lg rounded-sm ${
            selected === totalPages ? "bg-[#0034D1]" : ""
          }`}
        >
          {totalPages}
        </button>
      )}
      
      <button
        onClick={Next}
        className=" text-white text-[20px] px-4 py-1 font-light   bg-[#0034D1]  drop-shadow-lg rounded-sm  "
      >
        Next
      </button>
    </section>
  );
};

export default Pagination;