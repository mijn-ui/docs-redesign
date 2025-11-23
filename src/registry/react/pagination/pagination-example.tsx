"use client";

import {
  Pagination,
  PaginationContent,
  PaginationList,
  PaginationNextButton,
  PaginationNextEllipsis,
  PaginationPreviousButton,
  PaginationPreviousEllipsis,
} from "@mijn-ui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";

const PaginationExample = () => {
  const [currentPage, setCurrentPage] = React.useState(7);

  const ItemsPerPage = 10;
  const TotalPage = 160;

  return (
    <Pagination
      currentPage={currentPage}
      itemsPerPage={ItemsPerPage}
      onChangePage={setCurrentPage}
      totalPages={TotalPage}
    >
      <PaginationContent className="max-w-md justify-between">
        <PaginationPreviousButton>
          <ChevronLeft className="size-4 text-secondary-foreground" />
          <span className="px-1">Previous</span>
        </PaginationPreviousButton>
        <div className="flex items-center">
          <PaginationPreviousEllipsis />
          <PaginationList />
          <PaginationNextEllipsis className="[&>svg]:size-3.5 sm:[&>svg]:size-4" />
        </div>
        <PaginationNextButton>
          <span className="px-1">Next</span>
          <ChevronRight className="size-4 text-secondary-foreground" />
        </PaginationNextButton>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationExample;
