import {Fragment, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";

import Content from "../components/content/Content";
import useRequest from "../hooks/use-request";

import styles from './PaginationCards.module.css'
import {NextPaginationBtn, PrevPaginationBtn} from "../components/svgComponents/SvgIcons";

function PaginationCards({title, url, features, category}) {
    const [page, setPage] = useState(1)
    const {data, sendRequest, totalPages} = useRequest(url, `&without_genres=${features}`)
    const usersPerPage = 20
    const pageCount = Math.ceil(totalPages / usersPerPage)

    const onPageChange = ({selected}) => {
        setPage(selected + 1)
    }

    useEffect(() => {
        sendRequest(page)
    }, [page])

    return (
        <Fragment>
            <div className={styles.topPanel}>
                <h2 className={styles.title}>{title}</h2>
                <div>
                    <ReactPaginate
                        pageCount={pageCount}
                        previousLabel={<PrevPaginationBtn/>}
                        nextLabel={<NextPaginationBtn/>}
                        onPageChange={onPageChange}
                        containerClassName={styles.pagination}
                        activeLinkClassName={styles.active}
                        disabledClassName={styles.paginationDisabled}
                        pageRangeDisplayed={3}
                    />
                </div>
            </div>
            <ul className={styles.cardsWrapper}>
                {
                    data.map(el => <li key={el.id}><Link to={`/${category}/${el.id}`}><Content el={el}/></Link></li>)
                }
            </ul>
        </Fragment>
    )
}

export default PaginationCards