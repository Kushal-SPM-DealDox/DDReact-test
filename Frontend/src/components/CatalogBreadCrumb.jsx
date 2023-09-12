import React from 'react';

function CatalogBreadCrumb({page}) {
    return (
        <div className="bread">
            <ul className="breadcrumbs">
                <li className="breadcrumbs--item">
                    <a href='/' className="breadcrumbs--link breadcrumbs" style={{
                        display: 'inline',
                        textDecoration: 'none'
                    }}>HOME</a>
                </li>
                <li className="breadcrumbs--item">
                    <a href='/catalog' className="breadcrumbs--link breadcrumbs" style={{
                        display: 'inline',
                        textDecoration: 'none'
                    }}>CATALOG</a>
                </li>
                <li className="breadcrumbs--item">
                    <a href="" className="breadcrumbs--link breadcrumbs--link--active">{page}</a>
                </li>
            </ul>
            <hr className="hr" />
        </div>
    );
}

export default CatalogBreadCrumb;