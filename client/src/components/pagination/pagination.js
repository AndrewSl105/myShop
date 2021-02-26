import React from 'react';
import './pagination.sass'
import { Button } from 'primereact/button';
const  Pagination = props => {
  console.log(props)

  const onPage = (n) => { 
    props.onGoPage(n);
  }

  const isOnLastPage = () => {
    return (
      props.perPage * props.currentPage >= props.totalItemsCount
    );
  }

  const totalPages = () => {
    return Math.ceil(props.totalItemsCount / props.perPage) || 0;
  }

  const getMin = () => {
    return props.perPage * props.currentPage - props.perPage + 1;
  }

  const getMax = () => {
    let max = props.perPage * props.currentPage;
    if (max > props.totalItemsCount) {
      max = props.totalItemsCount;
    }
    return max;
  }

  const onPrev = () => {
    props.onPrevPage();
  };

  const onNext = () => {
    props.onNextPage();
  };

  const getPages = () => {
    const c = Math.ceil(props.totalItemsCount / props.perPage);
    const p = props.currentPage || 1;
    const pagesToShow = props.pagesToShow || 9;
    const pages = [];
    pages.push(p);
    const times = pagesToShow - 1;
    for (let i = 0; i < times; i++) {
      if (pages.length < pagesToShow) {
        if (Math.min.apply(null, pages) > 1) {
          pages.push(Math.min.apply(null, pages) - 1);
        }
      }
      if (pages.length < pagesToShow) {
        if (Math.max.apply(null, pages) < c) {
          pages.push(Math.max.apply(null, pages) + 1);
        }
      }
    }
    pages.sort((a, b) => a - b);
    return pages;
  };

    const pages = getPages().map((pageNum) => {
      let buttonClass = 'page-item';

      if (pageNum === props.currentPage) {
        buttonClass += ' active';
      }

      return (
        <li
          key={pageNum}
          className='page-item'
          onClick={() => {
            onPage(pageNum);
          }}
        >
          <a>
            {pageNum}
          </a>
        </li>
      );
    });

    let prevButtonClass = 'page-item';

    if (props.currentPage === 1) {
      prevButtonClass += ' disabled';
    }

    const prevButton = (
      <li onClick={onPrev} tabIndex="-1" className={prevButtonClass}>
        Prev
      </li>
    );

    let nextButtonClass = 'page-item';

    if (isOnLastPage()) {
      nextButtonClass += ' disabled';
    }

    const nextButton = (
      <li onClick={onNext} className={nextButtonClass}>
        Next
      </li>
    );

    return (
      <nav className='pagination-cont'>
        <ul className="pagination">
          {prevButton}
          {pages}
          {nextButton}
        </ul>
      </nav>
    );

}

export default Pagination;